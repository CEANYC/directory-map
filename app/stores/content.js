import { getSectors } from '@/connectors/airtable';

export const useContentStore = defineStore('content', {
  state: () => ({
    sectors: [],
  }),

  actions: {
    async loadSectors(apiKey) {
      this.sectors = (await getSectors(apiKey))
        .filter(({ Status }) => Status === 'Done')
        .sort((a, b) => a.Order - b.Order);
    },
  },
});
