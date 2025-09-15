export const useQueryStore = defineStore('query', {
  actions: {
    loadQueryParams(params) {
      const filtersStore = useFiltersStore();
      const mapStore = useMapStore();
      const popupStore = usePopupStore();

      filtersStore.loadQueryParams(params);
      mapStore.loadQueryParams(params);
      popupStore.loadQueryParams(params);
    },
  },

  getters: {
    params() {
      const filtersStore = useFiltersStore();
      const mapStore = useMapStore();
      const popupStore = usePopupStore();

      let queryParams = {
        ...mapStore.queryParams,
        ...filtersStore.queryParams,
        ...popupStore.queryParams,
      };

      return Object.fromEntries(
        Object.entries(queryParams).filter(([k, v]) => v !== null)
      );
    },
  },
});
