export const useFiltersStore = defineStore('filters', {
  state: () => ({
    sectors: [],
  }),

  actions: {
    loadQueryParams(params) {
      if (params.sectors) {
        this.sectors = params.sectors.split('|');
      }
    },
  },

  getters: {
    queryParams(state) {
      return {
        sectors: state.sectors.length === 0 ? null : state.sectors.join('|'),
      };
    },
  },
});
