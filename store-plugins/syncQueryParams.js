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

    // We use the root getter queryParams to get the current state of the store
    // that needs to be added to the query string. We do this because previously
    // there were race conditions where a subsequent change to the query string
    // would override a previous one and the string would be outdated.
    throttledUpdateQuery($nuxt.$router, store.getters['queryParams'], mutation);
  });
};

export default syncQueryParams;
