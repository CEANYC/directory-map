export const usePopupStore = defineStore('popup', {
  state: () => ({
    selectedFeatures: [],
  }),

  actions: {
    loadQueryParams(params) {
      if (!params.selectedFeature) return;
      const dataStore = useDataStore();
      const selectedFeatures = dataStore.locationsGeoJson.features
        .filter(({ id }) => id === +params.selectedFeature)
        .map((f) => ({ ...f, layer: { id: 'locations' } }));

      if (!selectedFeatures) return;
      this.selectedFeatures = selectedFeatures;
    },
  },

  getters: {
    queryParams(state) {
      return { selectedFeature: state.selectedFeatures?.[0]?.id };
    },
  },
});
