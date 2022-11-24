import { getField, updateField } from "vuex-map-fields";
/* overwritten by user's settings */
/* TODO: init from chrome.storage.sync.get("scamlist-local") */
export default {
  namespaced: true,
  state: () => ({
    scamlist: `test
r
r
r
r`,
  }),
  getters: {
    getField,
    scamlist: (state) => state.scamlist,
    all: (state) => state,
  },
  mutations: {
    updateField,
    scamlist(state, payload) {
      state.scamlist = payload;
    },
  },
};
