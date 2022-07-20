export const state = () => {
  return {
    selectedFeatures: [],
  };
};

export const mutations = {
  setSelectedFeatures(state, { selectedFeatures }) {
    state.selectedFeatures = selectedFeatures;
  },
};

export const actions = {
  setSelectedFeatures({ commit, state }, { selectedFeatures }) {
    commit("setSelectedFeatures", {
      selectedFeatures,
      pushToURL: { selectedFeatures },
    });
  },
};

export const getters = {
  queryParams: state => {
    return { selectedFeatures: state.selectedFeatures };
  }
}
