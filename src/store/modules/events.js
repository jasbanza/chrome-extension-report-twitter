import { getField, updateField } from "vuex-map-fields";
/* records updated or inserted by new records in local or remote lists */
/* TODO: init from chrome.storage.sync.get("scamlist-hitlist") */
export default {
  namespaced: true,
  state: () => ({
    reporting: false,
    starting: false,
    stopping: false,
    success: false,
    failure: false,
    done: false,
    notificationsOn: false,
    notificationsOff: false,
  }),
  getters: {
    getField,
    all: (state) => state,
  },
  mutations: {
    updateField,
  },
};
