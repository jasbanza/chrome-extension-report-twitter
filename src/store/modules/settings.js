import { getField, updateField } from "vuex-map-fields";

export default {
  namespaced: true,
  state: {
    /* loaded from chrome.storage.sync.get("settings") */
    remoteUrl: "https://testy.com/scamlist",
    remoteUpdateFrequencyMinutes: "15",
    defaultContextImpersonator: "This is a phishing account",
    defaultContextScamLinks: "This account shares & tags users in scams.",
    reportMode: "REPORT_AND_BLOCK",
    listSourceMode: "LOCAL" /* LOCAL | REMOTE */,
    notifications: true,
  },
  getters: {
    getField,
  },
  mutations: {
    updateField,
  },
};
