import { getField, updateField } from "vuex-map-fields";
/* records updated or inserted by new records in local or remote lists */
/* TODO: init from chrome.storage.sync.get("scamlist-hitlist") */
export default {
  namespaced: true,
  state: () => ({
    hitlist: [],
    numUnreported: 0,
    allScammersSelected: false,
  }),
  getters: {
    getField,
    hitlist: (state) => state.hitlist,
    all: (state) => state,
  },
  mutations: {
    updateField,
    setHitlist(state, payload) {
      state.hitlist = payload.hitlist;
    },
  },
};
