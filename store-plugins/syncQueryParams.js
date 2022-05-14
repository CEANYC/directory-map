import VueRouter from 'vue-router';

import throttle from 'lodash.throttle';

const { isNavigationFailure, NavigationFailureType } = VueRouter;

const getQueryParams = (currentQuery, getterParams, updates) => {
  let queryParams = {
    ...currentQuery,
    ...getterParams
  };

  Object.keys(updates).forEach(k => {
    queryParams[k] = updates[k];
    if (queryParams[k] == null) {
      delete queryParams[k];
    }
  });

  return queryParams;
};

const updateQuery = (router, currentParams, mutation, retry = false) => {
  const query = getQueryParams(
    router.currentRoute.query,
    currentParams,
    mutation.payload.pushToURL
  );
  router.replace({ query })
    .catch(e => {
      if (!retry || !isNavigationFailure(e, NavigationFailureType.cancelled)) return;
      updateQuery(router, currentParams, mutation);
    });
}

const throttledUpdateQuery = throttle(
  (...params) => updateQuery(...params),
  500,
  { leading: true, trailing: true }
);

const syncQueryParams = store => {
  store.subscribe((mutation, state) => {
    if (!(mutation.payload && mutation.payload.pushToURL)) return;
    throttledUpdateQuery($nuxt.$router, store.getters['queryParams'], mutation);
  });
};

export default syncQueryParams;
