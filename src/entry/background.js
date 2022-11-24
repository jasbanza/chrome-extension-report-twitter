chrome.runtime.onInstalled.addListener(function () {
  // initial setup:
  chrome.action.setBadgeText({
    text: "",
  });
  chrome.action.setBadgeBackgroundColor({
    color: "#01286e",
  });
});

const updateBadge = function (text) {
  // refresh badge text
  chrome.action.setBadgeText({
    text: text.toString(),
  });
};
updateBadge("");

/* SETTINGS STUFF */
// eslint-disable-next-line

const notifications = {};
// eslint-disable-next-line
const notifyNewScammers = function () {
  chrome.notifications.create(
    "",
    {
      type: "basic",
      iconUrl: "assets/icon_48.png",
      title: "Twitter Reporter",
      message:
        "Additional Twitter users have been added to the scam list! Click here for more info...",
    },
    function (notificationId) {
      notifications[notificationId] = "OPEN_POPUP";
    }
  );
};

chrome.notifications.onClicked.addListener(function (notificationId) {
  console.log("Notification " + notificationId + " was clicked by the user");
  chrome.windows.create({
    focused: true,
    type: "popup",
    height: 540,
    width: 424,
    url: "popup.html?undocked=true",
  });
});

// eslint-disable-next-line
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action) {
    switch (msg.action) {
      case "openPopup":
        openPopup({ options: msg?.options });
        sendResponse({
          status: "ok",
        });
        break;
      case "notifyNewScammers":
        notifyNewScammers();
        sendResponse({
          status: "ok",
        });
        break;
      case "setTheme":
        chrome.storage.sync.set({
          theme: msg.value,
        });
        chrome.runtime.sendMessage({
          action: "setTheme",
          value: msg.value,
        });
        sendResponse({
          status: "ok",
        });
        break;
      case "setNotifications":
        chrome.storage.local.set({
          notifications: msg.value,
        });
        chrome.runtime.sendMessage({
          action: "setNotifications",
          value: msg.value,
        });
        sendResponse({
          status: "ok",
        });
        break;
      case "setSettings":
      case "setTarget":
      case "setScamlistRemote":
      case "setScamlistLocal":
      case "setIndividual":
      case "setHitlist":
      case "setEvents":
        {
          // get object name from action... e.g. setSettings -> settings
          let Str = msg.action.slice(2);
          let str = Str[0].toLowerCase() + Str.substring(1);
          chrome.storage.local.set({
            [str]: msg.value,
          });
        }
        break;
      case "startReporting":
        break;
      default:
        break;
    }
  }
});

function openPopup({ options }) {
  let url = "popup.html?undocked=true";
  if (options?.tab) {
    url += `&tab=${options.tab}`;
  }
  chrome.windows.create({
    focused: true,
    type: "popup",
    height: 540,
    width: 424,
    url: url,
  });
}
