import syncQueryParams from "../store-plugins/syncQueryParams";

export const plugins = [syncQueryParams];

export const getters = {
  queryParams: (state, getters) => {
    return {
      ...getters['map/queryParams'],
      ...getters['map/filters'],
    };
  }
};
