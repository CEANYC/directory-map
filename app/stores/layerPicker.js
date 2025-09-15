export const useLayerPickerStore = defineStore('layerPicker', {
  state: () => ({
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
  }),

  getters: {
    layerByName: state => name => {
      return state.availableLayers.find(l => l.name === name);
    },

    selectedLayerObjects(state) {
      return state.selectedLayers.map(this.layerByName);
    },

    unselectedLayers(state) {
      return this.unselectedLayerNames.map(this.layerByName);
    },

    unselectedLayerNames(state) {
      return state.availableLayers
        .map(({ name }) => name)
        .filter(name => !state.selectedLayers.includes(name));
    },
  },
});
