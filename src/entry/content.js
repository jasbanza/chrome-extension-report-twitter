const sequences = require("./sequences.js");

const reporter = {
  target: {
    url: "https://twitter.com/Bilge__Mete",
    type: "SCAM_LINKS",
    additional_context: null,
  },
  sequencer: {
    started: false,
    type: null,
    currentStep: null,
    currentIntervalID: null,
    intervalTimeoutMS: 750,
    attempts: 0,
    maxAttempts: 30,
  },
  confirmedTarget: false,
  observer: null,
};
/**
 * When dom is loaded:
 * 1) await report order from extension
 * 2) iterate targets
 * 3) navigate to target URL if needed, or:
 * 4) allow reporting to continue
 */
window.onload = function () {
  console.clear();

  // TODO: if whitelisted, then return
  addButton();
  // console.log("chrome runtime message: notifyNewScammers...");
  // chrome.runtime.sendMessage(
  //   {
  //     action: "notifyNewScammers",
  //   },
  //   function (res) {
  //     console.log("notifyNewScammers:");
  //     console.log(res);
  //   }
  // );
  // TODO: change this behaviour to respond to orders instead
  /*
  // reporter.start();

  // Select the node that will be observed for mutations
  const targetNode = document.querySelector("body");

  // Options for the observer (which mutations to observe)
  const config = {
    childList: true,
    subtree: true,
  };
  // Monitor DOM element changes

  reporter.observer = new MutationObserver(function (mutationsList) {
    // each mutation = new dom element change
    for (const mutation of mutationsList) {
      // TODO: check other types???
      if (mutation.type === "childList") {
        reporter.tick(false);
      }
    }
  });
  // Start observing the target node for configured mutations
  reporter.observer.observe(targetNode, config);

  //   reporter.observer.disconnect();
  */
};

/**
 *
 * @param {boolean} incrementAttempts optional, defaults to true
 */
reporter.tick = function (incrementAttempts = true) {
  console.log("sequencer tick");
  // only continue if we have a confirmed target on the current webpage.
  if (reporter.target && reporter.confirmedTarget) {
    // Do we have a step to take?
    if (reporter.sequencer.currentStep) {
      // if we have tried this step too many times, stop.
      if (reporter.sequencer.attempts >= reporter.sequencer.maxAttempts) {
        getNextTarget("FAILED");
        return;
      }

      // 1) try take the step...
      let result = false;
      //
      if (reporter.sequencer.currentStep.selectors) {
        // ARRAY of possible selectors
        for (const selector of reporter.sequencer.currentStep.selectors) {
          if (incrementAttempts) {
            reporter.sequencer.attempts++;
          }
          result = reporter.sequencer.currentStep.action(selector);
          if (result) {
            break;
          }
        }
      } else if (reporter.sequencer.currentStep.selector) {
        // Single selector
        if (incrementAttempts) {
          reporter.sequencer.attempts++;
        }
        result = reporter.sequencer.currentStep.action(
          reporter.sequencer.currentStep.selector
        );
      }
      if (result) {
        // step is successful!
        reporter.sequencer.attempts = 0;
        console.log(
          `# ${reporter.sequencer.type} ??? ${reporter.sequencer.currentStep.name}`
        );
        // 2) check if there is another step to take
        const sequence = sequences[reporter.sequencer.type];
        const nextStepIndex = reporter.sequencer.currentStep.nextStepIndex;
        if (nextStepIndex && sequence.length >= nextStepIndex) {
          // 3) set next step to take:
          reporter.sequencer.currentStep = sequence[nextStepIndex];
        } else {
          getNextTarget("REPORTED");
        }
      }
    } else {
      // no step in memory, init sequencer...
      // 1) get correct sequence type from target
      reporter.sequencer.type = reporter.target.type;
      // 2) get first step
      reporter.sequencer.currentStep = sequences[reporter.sequencer.type][0];
    }
  } else {
    getNextTarget("INIT");
  }
};

reporter.start = function () {
  reporter.sequencer.currentIntervalID = window.setInterval(
    reporter.tick,
    reporter.sequencer.intervalTimeoutMS
  );
};
reporter.stop = function () {
  window.clearInterval(reporter.sequencer.currentIntervalID);
  reporter.sequencer.currentIntervalID = undefined;
  reporter.sequencer.attempts = 0;
  reporter.confirmedTarget = null;
};

/**
 * request next target from extension.
 * INIT = we don't have a target.
 * REPORTED = we reported this target & need a new one.
 * SUSPENDED = target is already suspended.
 * FAILED = too many retries
 * @param {string} reason "INIT" (default) | "REPORTED" | "SUSPENDED" | "FAILED"
 */
async function getNextTarget(reason = "INIT") {
  // stop the sequencer
  reporter.stop();
  console.log("Getting next target from extension...");
  console.log(`Reason: ${reason}`);
  // get next target
  chrome.runtime.sendMessage(
    {
      action: "getNextTarget",
      reason: reason,
    },
    function (res) {
      // TODO: put everything in the right checking
      if (res?.data) {
        reporter.target = res.data;
      }

      if (window.location.href == reporter.target.url) {
        reporter.confirmedTarget = true;
        reporter.start();
      } else {
        window.location.href = reporter.target.url;
      }
    }
  );
}

/**
 * adds button to page, once clicked, sets chrome.storage "individual.url" to current tab's url, and opens popup to the individual tab
 */
const addButton = function () {
  console.log("Twitter Report Extension: Content script: adding report button");
  const reportDiv = document.createElement("div");
  reportDiv.innerHTML = `
  <div>  
    Report Account 
  </div>
  <style>
    #reportDiv {
      display: flex;
      position: fixed;
      justify-content: center;
      top: 0;
      right: 0;
      left: 0;
    }
    
    #reportDiv div {
      color: white;
      font-family: sans-serif;
      background-color: #ff0000e0;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      cursor: pointer;
      text-align: center;
      padding: 5px;
    }
    #reportDiv div:hover {
      font-size: 1.2em;
      background-color: #ff0000f0;
    }
  </style>
  `;
  reportDiv.id = "reportDiv";
  document.body.appendChild(reportDiv);
  document
    .querySelector(`#${reportDiv.id} div`)
    .addEventListener("click", () => {
      // 1. set chrome local storage for individual
      console.log("here");
      const objIndividual = {
        url: window.location.href,
      };
      chrome.storage.local.set(
        {
          individual: objIndividual,
        },
        openWindow
      );
    });
};

// eslint-disable-next-line
function openWindow() {
  chrome.runtime.sendMessage(
    {
      action: "openPopup",
      options: { tab: "individual" },
    },
    function (res) {
      console.log(
        "Twitter Report Extension: Content script: chrome.runtime.sendMessage openPopup"
      );
      console.log(res);
    }
  );
}
