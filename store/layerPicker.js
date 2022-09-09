export const state = () => {
  return {
    availableLayers: [
      {
        name: "City Council Districts",
        layerIds: [
          'districts-cc-label',
          'districts-cc-line',
          'districts-cc-fill',
        ],
      },
      {
        name: "Community Districts",
        layerIds: [
          'districts-cd-label',
          'districts-cd-line',
          'districts-cd-fill',
        ],
      },
      {
        name: "ZIP Codes",
        layerIds: [
          'districts-zip-label',
          'districts-zip-line',
          'districts-zip-fill',
        ],
      },
    ],
    selectedLayers: [],
    visible: false,
  };
};

export const mutations = {
  setSelectedLayers(state, { selectedLayers }) {
    state.selectedLayers = [...selectedLayers];
  },

  setVisible(state, { visible }) {
    state.visible = visible;
  },
};

export const actions = {
  setSelectedLayers({ commit }, { selectedLayers }) {
    commit("setSelectedLayers", { selectedLayers });
  },

  setHidden({ commit }) {
    commit("setVisible", { visible: false });
  },

  setVisible({ commit }) {
    commit("setVisible", { visible: true });
  },
};

export const getters = {
  layerByName: state => name => {
    return state.availableLayers.find(l => l.name === name);
  },

  selectedLayers: (state, getters) => {
    return state.selectedLayers.map(getters.layerByName);
  },

  unselectedLayers: (state, getters) => {
    return getters.unselectedLayerNames.map(getters.layerByName);
  },

  unselectedLayerNames: state => {
    return state.availableLayers
      .map(({ name }) => name)
      .filter(name => !state.selectedLayers.includes(name));
  },
};
