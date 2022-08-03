export const state = () => {
  return {
    open: false,
    imageUrl: null,
  };
};

export const mutations = {
  setImageUrl(state, { imageUrl }) {
    state.imageUrl = imageUrl;
  },

  setOpen(state, { open }) {
    state.open = open;
  },
};

export const actions = {
  open({ commit }, { imageUrl }) {
    commit("setImageUrl", { imageUrl });
    commit("setOpen", { open: true });
  },

  close({ commit }) {
    commit("setImageUrl", { imageUrl: null });
    commit("setOpen", { open: false });
  },
};
