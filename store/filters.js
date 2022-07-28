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
      pushToURL: { sectors: sectors.join('|') },
    });
  },


  loadQueryParams({ dispatch }, { params }) {
    if (params.sectors) {
      dispatch('setSectors', { sectors: params.sectors.split('|') });
    }
  },
};

export const getters = {
  queryParams: state => {
    return { sectors: state.sectors.join('|') };
  }
}
