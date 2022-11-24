/* overwritten by remote list */
/* TODO: init from chrome.storage.sync.get("scamlist-remote") */
export default {
  namespaced: true,
  state: () => ({
    remote: [],
  }),
  getters: {
    scamlistRemote: (state) => state.remote,
    all: (state) => state,
  },
  mutations: {
    setScamlistRemote(state, payload) {
      state.remote = payload.scamlistRemote;
    },
  },
};
