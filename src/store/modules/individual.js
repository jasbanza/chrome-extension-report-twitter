import { getField, updateField } from "vuex-map-fields";
/* records updated or inserted by new records in local or remote lists */
/* TODO: init from chrome.storage.sync.get("scamlist-hitlist") */
export default {
  namespaced: true,
  state: () => ({
    reason: null,
    url: "",
    additionalContext: "",
  }),
  getters: {
    getField,
    all: (state) => state,
  },
  mutations: {
    updateField,
  },
};
