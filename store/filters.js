export const state = () => {
  return {
    sectors: [],
  };
};

export const mutations = {
  setSectors(state, { sectors }) {
    state.sectors = sectors;
  },
};

export const actions = {
  setSectors({ commit, state }, { sectors }) {
    commit("setSectors", {
      sectors,
      pushToURL: { sectors },
    });
  },
};

export const getters = {
  queryParams: state => {
    return { sectors: state.sectors };
  }
}
