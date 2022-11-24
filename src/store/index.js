import { createStore, createLogger } from "vuex";
import { getField, updateField } from "vuex-map-fields";

import target from "./modules/target";
import hitlist from "./modules/hitlist";
import individual from "./modules/individual";
import scamlistRemote from "./modules/scamlist-remote";
import scamlistLocal from "./modules/scamlist-local";
import settings from "./modules/settings";
import events from "./modules/events";
import logs from "./modules/logs";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  state: () => ({
    isReporting: false,
  }),
  getters: {
    getField,
  },
  mutations: {
    updateField,
  },
  modules: {
    target /* this is the currently active scammer to process */ /* TODO: init from chrome.storage.sync.get("target") */,
    hitlist /* records updated or inserted by new records in local or remote lists */,
    individual,
    scamlistRemote /* all lists use the twitter url as the primary key */,
    scamlistLocal /* all lists use the twitter url as the primary key */,
    settings /* loaded from chrome.storage.sync.get("settings") */,
    events,
    logs,
  },
  plugins: debug ? [createLogger()] : [],
});
