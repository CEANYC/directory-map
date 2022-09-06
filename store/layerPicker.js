export const state = () => {
  return {
    availableLayers: [
      {
        name: "City Council Districts",
      },
      {
        name: "Community Districts",
      },
      {
        name: "ZIP Codes",
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
