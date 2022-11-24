/* this is the currently active scammer to process */
export default {
  namespaced: true,
  state: () => ({
    target: {},
  }),
  getters: {
    scamlistTarget: (state) => state.target,
    all: (state) => state,
  },
  mutations: {
    setTarget(state, payload) {
      state.target = payload.target;
    },
  },
};
