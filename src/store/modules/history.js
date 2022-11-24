import { getField, updateField } from "vuex-map-fields";
/* records updated or inserted by new records in local or remote lists */
/* TODO: init from chrome.storage.sync.get("scamlist-hitlist") */
export default {
  namespaced: true,
  state: () => ({
    history: {
      list: [],
      numReported: 0,
    },
  }),
  getters: {
    getField,
    list: (state) => state.history.list,
    all: (state) => state.history,
    numReported: (state) => state.numReported,
  },
  mutations: {
    updateField,
    setList(state, { list }) {
      state.history.list = list;
    },
    setHitlist(state, { numReported }) {
      state.history.numReported = numReported;
    },
    init(state, { list, numReported }) {
      state.history = { list, numReported };
    },
  },
};
