import { getTextBlocks } from '@/connectors/airtable';

export const useTextBlocksStore = defineStore('textBlocks', {
  state: () => ({
    textBlocks: [],
  }),

  actions: {
    async loadTextBlocks(apiKey) {
      this.textBlocks = await getTextBlocks(apiKey);
    },
  },

  getters: {
    byType(state) {
      return (type) =>
        state.textBlocks
          .filter(({ Type }) => Type === type)
          .map(({ Content }) => Content.trim());
    },
  },
});
