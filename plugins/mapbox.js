/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import {
  MglGeojsonLayer,
  MglMap,
  MglNavigationControl,
} from 'v-mapbox';
import Mapbox from 'mapbox-gl';

// Add Mapbox components for client-side use only
Vue.component('MglGeojsonLayer', MglGeojsonLayer);
Vue.component('MglMap', MglMap);
Vue.component('MglNavigationControl', MglNavigationControl);

Vue.prototype.$mapbox = Mapbox;
