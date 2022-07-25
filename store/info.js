export const state = () => {
  return {
    visible: false,
  };
};

export const mutations = {
  setVisible(state, { visible }) {
    state.visible = visible;
  },
};

export const actions = {
  setHidden({ commit }) {
    commit("setVisible", { visible: false });
  },

  setVisible({ commit }) {
    commit("setVisible", { visible: true });
  },
};
