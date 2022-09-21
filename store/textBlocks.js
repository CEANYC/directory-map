import { getTextBlocks } from "@/connectors/airtable";

export const state = () => {
  return {
    textBlocks: [],
  };
};

export const mutations = {
  setTextBlocks(state, { textBlocks }) {
    state.textBlocks = textBlocks;
  },
};

export const actions = {
  async loadTextBlocks({ commit }) {
    const textBlocks = await getTextBlocks();
    commit("setTextBlocks", { textBlocks });
  },
};

export const getters = {
  byType: state => type => state.textBlocks
    .filter(({ Type }) => Type === type)
    .map(({ Content }) => Content.trim()),
};
