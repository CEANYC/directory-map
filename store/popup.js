export const state = () => {
  return {
    selectedFeatures: [],
  };
};

export const mutations = {
  setSelectedFeatures(state, { selectedFeatures }) {
    state.selectedFeatures = [ ...selectedFeatures ];
  },
};

export const actions = {
  setSelectedFeatures({ commit, state }, { selectedFeatures }) {
    commit("setSelectedFeatures", {
      selectedFeatures: JSON.parse(JSON.stringify(selectedFeatures)),
      pushToURL: { selectedFeature: selectedFeatures[0]?.id ?? null },
    });
  },

  loadQueryParams({ commit, dispatch, rootGetters }, { params }) {
    if (!params.selectedFeature) return;
    const selectedFeatures = rootGetters['data/locationsGeoJson'].features
      .filter(({ id }) => id === +params.selectedFeature)
      .map(f => ({ ...f, layer: { id: 'locations' } }));

    if (!selectedFeatures) return;
    commit('setSelectedFeatures', { selectedFeatures });
  },
};

export const getters = {
  queryParams: state => {
    return { selectedFeature: state.selectedFeatures[0].id };
  }
}
