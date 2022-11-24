import { getField, updateField } from "vuex-map-fields";
/* records updated or inserted by new records in local or remote lists */
/* TODO: init from chrome.storage.sync.get("scamlist-hitlist") */
export default {
  namespaced: true,
  state: () => ({
    items: [],
  }),
  getters: {
    getField,
    items: (state) => state.items,
  },
  mutations: {
    updateField,
    addLogItem(state, payload) {
      state.items.push(payload);
    },
  },
};
