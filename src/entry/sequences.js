/**
 * Click an element by it's css query selector
 * @param { string } selector css query for a clickable element.
 * @returns { boolean } true = found element and clicked successfully. false = caught error.
 */
function clickElement(selector, altSelector) {
  try {
    let el;
    if (document.querySelector(selector)) {
      el = document.querySelector(selector);
    } else {
      el = document.querySelector(altSelector);
    }

    if (el) {
      el.click();
      return true;
    }
    return false;
  } catch {
    return false;
  }
}

/**
 * This will enter text and trigger the react element's native input event.
 * @param { string } selector css query selector
 * @param { string } text text you want to input
 * @returns { boolean } true = input success. false = caught error
 */
function enterText(selector, text) {
  try {
    const textarea = document.querySelector(selector);
    if (textarea) {
      var nativeTextAreaValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLTextAreaElement.prototype,
        "value"
      ).set;
      nativeTextAreaValueSetter.call(textarea, text);

      const event = new Event("input", { bubbles: true });
      textarea.dispatchEvent(event);
    }
    return true;
  } catch {
    return false;
  }
}

/**
 * sequences for reporting
 */
module.exports = {
  IMPERSONATOR: [
    {
      nextStepIndex: 1,
      name: "OPEN_MENU",
      selector:
        "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > div:nth-child(3) > div > div > div > div.css-1dbjc4n.r-1ifxtd0.r-ymttw5.r-ttdzmv > div.css-1dbjc4n.r-1habvwh.r-18u37iz.r-1w6e6rj.r-1wtj0ep > div.css-1dbjc4n.r-obd0qt.r-18u37iz.r-1w6e6rj.r-1h0z5md.r-dnmrzs > div.css-18t94o4.css-1dbjc4n.r-1niwhzg.r-sdzlij.r-1phboty.r-rs99b7.r-6gpygo.r-1kb76zh.r-2yi16.r-1qi8awa.r-1ny4l3l.r-o7ynqc.r-6416eg.r-lrvibr",
      action: (selector) => {
        return clickElement(selector);
      },
    },
    {
      nextStepIndex: 2,
      name: "MENU_SELECT_REPORT",
      selector:
        "#layers > div.css-1dbjc4n.r-1p0dtai.r-1d2f490.r-105ug2t.r-u8s1d.r-zchlnj.r-ipm5af > div > div > div > div:nth-child(2) > div > div.css-1dbjc4n.r-kemksi.r-z2wwpe.r-qo02w8.r-j2cz3j.r-1udh08x.r-u8s1d > div > div > div > div:nth-child(9)",
      action: (selector) => {
        return clickElement(selector);
      },
    },
    {
      nextStepIndex: 3,
      name: "BUTTON_START_REPORT",
      selector:
        "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-16y2uox.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div > div > div > div.css-1dbjc4n.r-98ikmy.r-hvns9x > div.css-1dbjc4n.r-13qz1uu > div",
      action: (selector) => {
        return clickElement(selector);
      },
    },
    {
      nextStepIndex: 4,
      name: "RADIO_BUTTON_REPORT_FOR_EVERYONE",
      selectors: [
        "#react-root label:nth-child(3)",
        "#layers label:nth-child(3)",
      ],
      action: (selector) => {
        return clickElement(selector);
      },
    },
    {
      nextStepIndex: 5,
      name: "BUTTON_NEXT_REPORT_FOR_EVERYONE",
      selector:
        "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-16y2uox.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div.css-1dbjc4n.r-kemksi.r-1p0dtai.r-1d2f490.r-1xcajam.r-zchlnj > div > div > div > div > div:not([aria-disabled='true'])",
      action: (selector) => {
        return clickElement(selector);
      },
    },
    {
      nextStepIndex: 6,
      name: "RADIO_BUTTON_IMPERSONATED",
      selectors: [
        "#react-root label:nth-child(4)",
        "#layers label:nth-child(4)",
      ],
      action: (selector) => {
        return clickElement(selector);
      },
    },
    {
      nextStepIndex: 7,
      name: "BUTTON_NEXT_IMPERSONATED",
      selectors: [
        "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-16y2uox.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div.css-1dbjc4n.r-kemksi.r-1p0dtai.r-1d2f490.r-1xcajam.r-zchlnj > div > div > div > div > div:not([aria-disabled='true'])",
      ],
      action: (selector) => {
        return clickElement(selector);
      },
    },
    {
      nextStepIndex: 8,
      name: "RADIO_FAKE_IDENTITY",
      selectors: [
        "#react-root label:nth-child(2)",
        "#layers label:nth-child(2)",
      ],
      action: (selector) => {
        return clickElement(selector);
      },
    },
    {
      nextStepIndex: 7,
      name: "BUTTON_NEXT_FAKE_IDENTITY",
      selector:
        "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-16y2uox.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div.css-1dbjc4n.r-kemksi.r-1p0dtai.r-1d2f490.r-1xcajam.r-zchlnj > div > div > div > div > div:not([aria-disabled='true'])",
      action: (selector) => {
        return clickElement(selector);
      },
    },
    {
      nextStepIndex: 8,
      name: "BUTTON_YES_CONTINUE",
      selector:
        "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-16y2uox.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div.css-1dbjc4n.r-kemksi.r-1p0dtai.r-1d2f490.r-1xcajam.r-zchlnj > div > div > div > div > div.css-18t94o4.css-1dbjc4n.r-sdzlij.r-1phboty.r-rs99b7.r-1ifxtd0.r-19yznuf.r-64el8z.r-1ny4l3l.r-1dye5f7.r-o7ynqc.r-6416eg.r-lrvibr",
      action: (selector) => {
        return clickElement(selector);
      },
    },
    {
      nextStepIndex: 9,
      name: "BUTTON_ADDITIONAL_CONTEXT",
      selector:
        "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-16y2uox.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div.css-1dbjc4n.r-1fq43b1.r-16y2uox.r-1wbh5a2.r-1dqxon3 > div > div > div > div:nth-child(4)",
      action: (selector) => {
        return clickElement(selector);
      },
    },
    {
      nextStepIndex: 10,
      name: "TEXTAREA_CONTEXT",
      selector: "textarea",
      action: function (text = null) {
        try {
          if (text) {
            if (!enterText("textarea", text)) {
              return false;
            }
          }
          return clickElement(
            "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-16y2uox.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div.css-1dbjc4n.r-kemksi.r-1p0dtai.r-1d2f490.r-1xcajam.r-zchlnj > div > div > div > div > div",
            "#layers > div:nth-child(2) > div > div > div > div > div > div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv > div.css-1dbjc4n.r-1867qdf.r-1wbh5a2.r-kwpbio.r-rsyp9y.r-1pjcn9w.r-1279nm1.r-htvplk.r-1udh08x > div > div > div.css-1dbjc4n.r-kemksi.r-6koalj.r-16y2uox.r-1wbh5a2 > div.css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div.css-1dbjc4n.r-1isdzm1 > div > div > div > div"
          );
        } catch {
          return false;
        }
      },
    },
    {
      nextStepIndex: 11,
      name: "BUTTON_SUBMIT_REPORT",
      selectors: [
        "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-16y2uox.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div.css-1dbjc4n.r-kemksi.r-1p0dtai.r-1d2f490.r-1xcajam.r-zchlnj > div > div > div > div > div",
        "#layers > div:nth-child(2) > div > div > div > div > div > div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv > div.css-1dbjc4n.r-1867qdf.r-1wbh5a2.r-kwpbio.r-rsyp9y.r-1pjcn9w.r-1279nm1.r-htvplk.r-1udh08x > div > div > div.css-1dbjc4n.r-kemksi.r-6koalj.r-16y2uox.r-1wbh5a2 > div.css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div.css-1dbjc4n.r-1isdzm1 > div > div > div > div",
      ],
      action: (selector) => {
        return clickElement(selector);
      },
    },
    {
      nextStepIndex: null,
      name: "BLOCK_OR_DONE",
      selectors: [
        "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-16y2uox.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div.css-1dbjc4n.r-kemksi.r-1p0dtai.r-1d2f490.r-1xcajam.r-zchlnj > div > div > div > div > div",
        "#layers > div:nth-child(2) > div > div > div > div > div > div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv > div.css-1dbjc4n.r-1867qdf.r-1wbh5a2.r-kwpbio.r-rsyp9y.r-1pjcn9w.r-1279nm1.r-htvplk.r-1udh08x > div > div > div.css-1dbjc4n.r-kemksi.r-6koalj.r-16y2uox.r-1wbh5a2 > div.css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div.css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1dqxon3 > div > div > div:nth-child(10)",
      ],
      action: function (doBlock = false) {
        try {
          // block
          if (doBlock) {
            if (
              clickElement(
                "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-16y2uox.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div.css-1dbjc4n.r-1fq43b1.r-16y2uox.r-1wbh5a2.r-1dqxon3 > div > div > div > div:nth-child(10)",
                "#layers > div:nth-child(2) > div > div > div > div > div > div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv > div.css-1dbjc4n.r-1867qdf.r-1wbh5a2.r-kwpbio.r-rsyp9y.r-1pjcn9w.r-1279nm1.r-htvplk.r-1udh08x > div > div > div.css-1dbjc4n.r-kemksi.r-6koalj.r-16y2uox.r-1wbh5a2 > div.css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div.css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1dqxon3 > div > div > div:nth-child(10)"
              )
            ) {
              return true;
            }
          }
          // done
          if (
            !clickElement(
              "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-16y2uox.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div.css-1dbjc4n.r-kemksi.r-1p0dtai.r-1d2f490.r-1xcajam.r-zchlnj > div > div > div > div > div",
              "#layers > div:nth-child(2) > div > div > div > div > div > div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv > div.css-1dbjc4n.r-1867qdf.r-1wbh5a2.r-kwpbio.r-rsyp9y.r-1pjcn9w.r-1279nm1.r-htvplk.r-1udh08x > div > div > div.css-1dbjc4n.r-kemksi.r-6koalj.r-16y2uox.r-1wbh5a2 > div.css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div.css-1dbjc4n.r-1isdzm1 > div > div > div > div"
            )
          ) {
            return false;
          }
        } catch {
          return false;
        }
        return true;
      },
    },
  ],
  SCAM_LINKS: [
    {
      nextStepIndex: 1,
      name: "OPEN_MENU",
      selector:
        "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > div:nth-child(3) > div > div > div > div.css-1dbjc4n.r-1ifxtd0.r-ymttw5.r-ttdzmv > div.css-1dbjc4n.r-1habvwh.r-18u37iz.r-1w6e6rj.r-1wtj0ep > div.css-1dbjc4n.r-obd0qt.r-18u37iz.r-1w6e6rj.r-1h0z5md.r-dnmrzs > div.css-18t94o4.css-1dbjc4n.r-1niwhzg.r-sdzlij.r-1phboty.r-rs99b7.r-6gpygo.r-1kb76zh.r-2yi16.r-1qi8awa.r-1ny4l3l.r-o7ynqc.r-6416eg.r-lrvibr",
      action: (selector) => {
        return clickElement(selector);
      },
    },
    {
      nextStepIndex: 2,
      name: "MENU_SELECT_REPORT",
      selector:
        "#layers > div.css-1dbjc4n.r-1p0dtai.r-1d2f490.r-105ug2t.r-u8s1d.r-zchlnj.r-ipm5af > div > div > div > div:nth-child(2) > div > div.css-1dbjc4n.r-kemksi.r-z2wwpe.r-qo02w8.r-j2cz3j.r-1udh08x.r-u8s1d > div > div > div > div:nth-child(9)",
      action: (selector) => {
        return clickElement(selector);
      },
    },
    {
      nextStepIndex: 3,
      name: "BUTTON_START_REPORT",
      selectors: [
        "#layers > div:nth-child(2) > div > div > div > div > div > div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv > div.css-1dbjc4n.r-1867qdf.r-1wbh5a2.r-kwpbio.r-rsyp9y.r-1pjcn9w.r-1279nm1.r-htvplk.r-1udh08x > div > div > div.css-1dbjc4n.r-kemksi.r-6koalj.r-16y2uox.r-1wbh5a2 > div.css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div > div > div > div > div > div.css-1dbjc4n.r-98ikmy.r-hvns9x > div.css-1dbjc4n.r-13qz1uu > div",
        "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-16y2uox.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div > div > div > div.css-1dbjc4n.r-98ikmy.r-hvns9x > div.css-1dbjc4n.r-13qz1uu > div",
      ],
      action: (selector) => {
        return clickElement(selector);
      },
    },
    {
      nextStepIndex: 4,
      name: "RADIO_BUTTON_REPORT_FOR_EVERYONE",
      selectors: [
        "#react-root label:nth-child(3)",
        "#layers label:nth-child(3)",
      ],
      action: (selector) => {
        return clickElement(selector);
      },
    },
    {
      nextStepIndex: 5,
      name: "BUTTON_NEXT_REPORT_FOR_EVERYONE",
      selectors: [
        "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-16y2uox.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div.css-1dbjc4n.r-kemksi.r-1p0dtai.r-1d2f490.r-1xcajam.r-zchlnj > div > div > div > div > div:not([aria-disabled='true'])",
        "#layers > div:nth-child(2) > div > div > div > div > div > div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv > div.css-1dbjc4n.r-1867qdf.r-1wbh5a2.r-kwpbio.r-rsyp9y.r-1pjcn9w.r-1279nm1.r-htvplk.r-1udh08x > div > div > div.css-1dbjc4n.r-kemksi.r-6koalj.r-16y2uox.r-1wbh5a2 > div.css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div.css-1dbjc4n.r-1isdzm1 > div > div > div > div:not([aria-disabled='true'])",
      ],
      action: (selector) => {
        return clickElement(selector);
      },
    },
    {
      nextStepIndex: 6,
      name: "RADIO_SEND_CRYPTO",
      selectors: [
        "#react-root label:nth-child(7)",
        "#layers label:nth-child(7)",
      ],
      action: (selector) => {
        return clickElement(selector);
      },
    },
    {
      nextStepIndex: 7,
      name: "BUTTON_NEXT_SEND_CRYPTO",
      selectors: [
        "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-16y2uox.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div.css-1dbjc4n.r-kemksi.r-1p0dtai.r-1d2f490.r-1xcajam.r-zchlnj > div > div > div > div > div:not([aria-disabled='true'])",
        "#layers > div:nth-child(2) > div > div > div > div > div > div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv > div.css-1dbjc4n.r-1867qdf.r-1wbh5a2.r-kwpbio.r-rsyp9y.r-1pjcn9w.r-1279nm1.r-htvplk.r-1udh08x > div > div > div.css-1dbjc4n.r-kemksi.r-6koalj.r-16y2uox.r-1wbh5a2 > div.css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div.css-1dbjc4n.r-1isdzm1 > div > div > div > div:not([aria-disabled='true'])",
      ],
      action: (selector) => {
        return clickElement(selector);
      },
    },
    {
      nextStepIndex: 8,
      name: "RADIO_TRICKING_OTHER_PEOPLE",
      selectors: [
        "#react-root label:nth-child(2)",
        "#layers label:nth-child(2)",
      ],
      action: (selector) => {
        return clickElement(selector);
      },
    },
    {
      nextStepIndex: 9,
      name: "BUTTON_NEXT_TRICKING_OTHER_PEOPLE",
      selectors: [
        "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-16y2uox.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div.css-1dbjc4n.r-kemksi.r-1p0dtai.r-1d2f490.r-1xcajam.r-zchlnj > div > div > div > div > div:not([aria-disabled='true'])",
        "#layers > div:nth-child(2) > div > div > div > div > div > div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv > div.css-1dbjc4n.r-1867qdf.r-1wbh5a2.r-kwpbio.r-rsyp9y.r-1pjcn9w.r-1279nm1.r-htvplk.r-1udh08x > div > div > div.css-1dbjc4n.r-kemksi.r-6koalj.r-16y2uox.r-1wbh5a2 > div.css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div.css-1dbjc4n.r-1isdzm1 > div > div > div > div:not([aria-disabled='true'])",
      ],
      action: (selector) => {
        return clickElement(selector);
      },
    },
    {
      nextStepIndex: 10,
      name: "BUTTON_YES_CONTINUE",
      selectors: [
        "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-16y2uox.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div.css-1dbjc4n.r-kemksi.r-1p0dtai.r-1d2f490.r-1xcajam.r-zchlnj > div > div > div > div > div.css-18t94o4.css-1dbjc4n.r-sdzlij.r-1phboty.r-rs99b7.r-1ifxtd0.r-19yznuf.r-64el8z.r-1ny4l3l.r-1dye5f7.r-o7ynqc.r-6416eg.r-lrvibr",
        "#layers > div:nth-child(2) > div > div > div > div > div > div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv > div.css-1dbjc4n.r-1867qdf.r-1wbh5a2.r-kwpbio.r-rsyp9y.r-1pjcn9w.r-1279nm1.r-htvplk.r-1udh08x > div > div > div.css-1dbjc4n.r-kemksi.r-6koalj.r-16y2uox.r-1wbh5a2 > div.css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div.css-1dbjc4n.r-15ce4ve.r-1isdzm1 > div > div > div > div.css-18t94o4.css-1dbjc4n.r-42olwf.r-sdzlij.r-1phboty.r-rs99b7.r-1ifxtd0.r-19yznuf.r-64el8z.r-1ny4l3l.r-1dye5f7.r-o7ynqc.r-6416eg.r-lrvibr",
      ],
      action: (selector) => {
        return clickElement(selector);
      },
    },
    {
      nextStepIndex: 11,
      name: "BUTTON_ADDITIONAL_CONTEXT",
      selectors: [
        "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-16y2uox.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div.css-1dbjc4n.r-1fq43b1.r-16y2uox.r-1wbh5a2.r-1dqxon3 > div > div > div > div:nth-child(4)",
        "#layers > div:nth-child(2) > div > div > div > div > div > div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv > div.css-1dbjc4n.r-1867qdf.r-1wbh5a2.r-kwpbio.r-rsyp9y.r-1pjcn9w.r-1279nm1.r-htvplk.r-1udh08x > div > div > div.css-1dbjc4n.r-kemksi.r-6koalj.r-16y2uox.r-1wbh5a2 > div.css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div.css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1dqxon3 > div > div > div:nth-child(4)",
      ],
      action: (selector) => {
        return clickElement(selector);
      },
    },
    {
      nextStepIndex: 12,
      name: "TEXTAREA_CONTEXT",
      selector: "textarea",
      action: function (text = null) {
        try {
          if (text) {
            if (!enterText("textarea", text)) {
              return false;
            }
          }
          return clickElement(
            "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-16y2uox.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div.css-1dbjc4n.r-kemksi.r-1p0dtai.r-1d2f490.r-1xcajam.r-zchlnj > div > div > div > div > div",
            "#layers > div:nth-child(2) > div > div > div > div > div > div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv > div.css-1dbjc4n.r-1867qdf.r-1wbh5a2.r-kwpbio.r-rsyp9y.r-1pjcn9w.r-1279nm1.r-htvplk.r-1udh08x > div > div > div.css-1dbjc4n.r-kemksi.r-6koalj.r-16y2uox.r-1wbh5a2 > div.css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div.css-1dbjc4n.r-1isdzm1 > div > div > div > div"
          );
        } catch {
          return false;
        }
      },
    },
    {
      nextStepIndex: 13,
      name: "BUTTON_SUBMIT_REPORT",
      selectors: [
        "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-16y2uox.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div.css-1dbjc4n.r-kemksi.r-1p0dtai.r-1d2f490.r-1xcajam.r-zchlnj > div > div > div > div > div",
        "#layers > div:nth-child(2) > div > div > div > div > div > div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv > div.css-1dbjc4n.r-1867qdf.r-1wbh5a2.r-kwpbio.r-rsyp9y.r-1pjcn9w.r-1279nm1.r-htvplk.r-1udh08x > div > div > div.css-1dbjc4n.r-kemksi.r-6koalj.r-16y2uox.r-1wbh5a2 > div.css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div.css-1dbjc4n.r-1isdzm1 > div > div > div > div",
      ],
      action: (selector) => {
        return clickElement(selector);
      },
    },
    {
      nextStepIndex: null,
      name: "BLOCK_OR_DONE",
      selectors: [
        "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-16y2uox.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div.css-1dbjc4n.r-kemksi.r-1p0dtai.r-1d2f490.r-1xcajam.r-zchlnj > div > div > div > div > div",
        "#layers > div:nth-child(2) > div > div > div > div > div > div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv > div.css-1dbjc4n.r-1867qdf.r-1wbh5a2.r-kwpbio.r-rsyp9y.r-1pjcn9w.r-1279nm1.r-htvplk.r-1udh08x > div > div > div.css-1dbjc4n.r-kemksi.r-6koalj.r-16y2uox.r-1wbh5a2 > div.css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div.css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1dqxon3 > div > div > div:nth-child(10)",
      ],
      action: function (doBlock = false) {
        try {
          // block
          if (doBlock) {
            if (
              clickElement(
                "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-16y2uox.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div.css-1dbjc4n.r-1fq43b1.r-16y2uox.r-1wbh5a2.r-1dqxon3 > div > div > div > div:nth-child(10)",
                "#layers > div:nth-child(2) > div > div > div > div > div > div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv > div.css-1dbjc4n.r-1867qdf.r-1wbh5a2.r-kwpbio.r-rsyp9y.r-1pjcn9w.r-1279nm1.r-htvplk.r-1udh08x > div > div > div.css-1dbjc4n.r-kemksi.r-6koalj.r-16y2uox.r-1wbh5a2 > div.css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div.css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1dqxon3 > div > div > div:nth-child(10)"
              )
            ) {
              return true;
            }
          }
          // done
          if (
            !clickElement(
              "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-16y2uox.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div.css-1dbjc4n.r-kemksi.r-1p0dtai.r-1d2f490.r-1xcajam.r-zchlnj > div > div > div > div > div",
              "#layers > div:nth-child(2) > div > div > div > div > div > div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv > div.css-1dbjc4n.r-1867qdf.r-1wbh5a2.r-kwpbio.r-rsyp9y.r-1pjcn9w.r-1279nm1.r-htvplk.r-1udh08x > div > div > div.css-1dbjc4n.r-kemksi.r-6koalj.r-16y2uox.r-1wbh5a2 > div.css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div.css-1dbjc4n.r-1isdzm1 > div > div > div > div"
            )
          ) {
            return false;
          }
        } catch {
          return false;
        }
        return true;
      },
    },
  ],
};
