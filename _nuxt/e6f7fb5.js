(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{149:function(t,e,r){"use strict";r.d(e,"a",(function(){return f})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return d}));r(35),r(25),r(24),r(11),r(45),r(31),r(46);var n=r(19);r(27),r(56),r(209),r(28);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=function(t){return c(c({},t),{},{sectorSlug:(e=t.Sector,e.toLowerCase().replaceAll(" ","_"))});var e},l=function(t){return{type:"FeatureCollection",features:t.map(d)}},d=function(t){return{type:"Feature",id:t.ID,properties:c({},t),geometry:{type:"Point",coordinates:[t.lon,t.lat]}}}},154:function(t,e,r){"use strict";var n=r(1),o=r(122),c=r(150),f=r.n(c);n.a.component("MglGeojsonLayer",o.a),n.a.component("MglMap",o.b),n.a.component("MglNavigationControl",o.c),n.a.prototype.$mapbox=f.a},155:function(t,e,r){"use strict";var n=r(1),o=r(206),c=r.n(o);n.a.use(c.a)},213:function(t,e,r){r(214),t.exports=r(215)},23:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return c})),r.d(e,"d",(function(){return f})),r.d(e,"e",(function(){return l})),r.d(e,"i",(function(){return d})),r.d(e,"h",(function(){return m})),r.d(e,"g",(function(){return y})),r.d(e,"f",(function(){return v})),r.d(e,"j",(function(){return O}));var n="key2ohFyZoWJ8Hp9q",o="appVbmRHpF0PZbybE",c="listings",f="sectors",l="text blocks",d="mapbox://styles/ceanyc/cl7p3nxfl000v14qvvqthfb0g",m="pk.eyJ1IjoiY2VhbnljIiwiYSI6ImNsMzV5NnV2ZjM0YnQzam81NG1sazdzaDUifQ.PEE1DtXPV-YASshMbtMqEA",y=12,v={lng:-73.99,lat:40.693},O=[-74.464,40.368,-73.453,41.065]},275:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return c})),r.d(e,"mutations",(function(){return f})),r.d(e,"actions",(function(){return l}));var n=r(9),o=(r(41),r(212),r(24),r(11),r(77)),c=function(){return{sectors:[]}},f={setSectors:function(t,e){var r=e.sectors;t.sectors=r}},l={loadSectors:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,Object(o.b)();case 3:n=e.sent.filter((function(t){return"Done"===t.Status})).sort((function(a,b){return a.Order-b.Order})),r("setSectors",{sectors:n});case 5:case"end":return e.stop()}}),e)})))()}}},279:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return l})),r.d(e,"mutations",(function(){return d})),r.d(e,"actions",(function(){return m})),r.d(e,"getters",(function(){return y}));var n=r(9),o=r(43),c=(r(41),r(80),r(28),r(280),r(282),r(55),r(39),r(11),r(283),r(290),r(292),r(294),r(295),r(296),r(297),r(298),r(299),r(300),r(301),r(302),r(303),r(304),r(305),r(306),r(307),r(40),r(77)),f=r(149),l=function(){return{locations:[]}},d={addLocations:function(t,e){var r=e.locations;t.locations=[].concat(Object(o.a)(t.locations),Object(o.a)(r))},setLocations:function(t,e){var r=e.locations;t.locations=r}},m={loadLocations:function(t,e){return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,l,d,m,y;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,o=t.dispatch,l=t.getters,d=t.rootState,m=e.params,o("filters/loadQueryParams",{params:m},{root:!0}),y=d.filters.sectors.length,r.next=6,Object(c.a)((function(t){n("addLocations",{locations:t.map(f.a)}),y||o("filters/setSectors",{sectors:l.sectors},{root:!0})}));case 6:o("popup/loadQueryParams",{params:m},{root:!0});case 7:case"end":return r.stop()}}),r)})))()}},y={locationsGeoJson:function(t){return Object(f.b)(t.locations)},sectors:function(t){var e=t.locations.map((function(t){return t.Sector})).flat(1/0);return Array.from(new Set(e))}}},309:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return n})),r.d(e,"mutations",(function(){return o})),r.d(e,"actions",(function(){return c})),r.d(e,"getters",(function(){return f}));r(147),r(27),r(148);var n=function(){return{sectors:[]}},o={setSectors:function(t,e){var r=e.sectors;t.sectors=r}},c={setSectors:function(t,e){var r=t.commit,n=(t.state,e.sectors);r("setSectors",{sectors:n,pushToURL:{sectors:n.join("|")}})},loadQueryParams:function(t,e){var r=t.dispatch,n=e.params;n.sectors&&r("setSectors",{sectors:n.sectors.split("|")})}},f={queryParams:function(t){return{sectors:t.sectors.join("|")}}}},310:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return n})),r.d(e,"mutations",(function(){return o})),r.d(e,"actions",(function(){return c}));var n=function(){return{open:!1,imageUrl:null}},o={setImageUrl:function(t,e){var r=e.imageUrl;t.imageUrl=r},setOpen:function(t,e){var r=e.open;t.open=r}},c={open:function(t,e){var r=t.commit;r("setImageUrl",{imageUrl:e.imageUrl}),r("setOpen",{open:!0})},close:function(t){var e=t.commit;e("setImageUrl",{imageUrl:null}),e("setOpen",{open:!1})}}},311:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return n})),r.d(e,"mutations",(function(){return o})),r.d(e,"actions",(function(){return c}));var n=function(){return{visible:!1}},o={setVisible:function(t,e){var r=e.visible;t.visible=r}},c={setHidden:function(t){(0,t.commit)("setVisible",{visible:!1})},setVisible:function(t){(0,t.commit)("setVisible",{visible:!0})}}},312:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return o})),r.d(e,"mutations",(function(){return c})),r.d(e,"actions",(function(){return f})),r.d(e,"getters",(function(){return l}));var n=r(43),o=(r(197),r(11),r(38),r(28),r(24),r(57),r(66),function(){return{availableLayers:[{name:"City Council Districts",layerIds:["districts-cc-label","districts-cc-line","districts-cc-fill"]},{name:"Community Districts",layerIds:["districts-cd-label","districts-cd-line","districts-cd-fill"]},{name:"ZIP Codes",layerIds:["districts-zip-label","districts-zip-line","districts-zip-fill"]}],selectedLayers:[],visible:!1}}),c={setSelectedLayers:function(t,e){var r=e.selectedLayers;t.selectedLayers=Object(n.a)(r)},setVisible:function(t,e){var r=e.visible;t.visible=r}},f={setSelectedLayers:function(t,e){(0,t.commit)("setSelectedLayers",{selectedLayers:e.selectedLayers})},setHidden:function(t){(0,t.commit)("setVisible",{visible:!1})},setVisible:function(t){(0,t.commit)("setVisible",{visible:!0})}},l={layerByName:function(t){return function(e){return t.availableLayers.find((function(t){return t.name===e}))}},selectedLayers:function(t,e){return t.selectedLayers.map(e.layerByName)},unselectedLayers:function(t,e){return e.unselectedLayerNames.map(e.layerByName)},unselectedLayerNames:function(t){return t.availableLayers.map((function(t){return t.name})).filter((function(e){return!t.selectedLayers.includes(e)}))}}},313:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return d})),r.d(e,"mutations",(function(){return m})),r.d(e,"actions",(function(){return y})),r.d(e,"getters",(function(){return v}));r(25),r(45),r(31),r(46);var n=r(19),o=(r(314),r(24),r(11),r(28),r(35),r(23));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function l(t,e){var r={};return t&&(r=f(f({},r),{},{lng:(+t.lng).toFixed(4),lat:(+t.lat).toFixed(4)})),e&&(r=f(f({},r),{},{zoom:(+e).toFixed(2)})),r}var d=function(){return{initialCenter:f({},o.f),initialZoom:o.g,center:f({},o.f),zoom:o.g,hoveredFeature:{}}},m={setCenter:function(t,e){var r=e.center;t.center=r},setInitialCenter:function(t,e){var r=e.center;t.initialCenter=r},setPosition:function(t,e){var r=e.center,n=e.zoom;t.center=r,t.zoom=n},setZoom:function(t,e){var r=e.zoom;t.zoom=r},setHoveredFeature:function(t,e){t.hoveredFeature=f({},e)},setInitialZoom:function(t,e){var r=e.zoom;t.initialZoom=r}},y={setCenter:function(t,e){var r=t.commit,n=t.state,o=e.center;r("setCenter",{center:o,pushToURL:l(o,n.zoom)})},setZoom:function(t,e){var r=t.commit,n=t.state,o=e.zoom;r("setZoom",{zoom:o,pushToURL:l(n.center,o)})},setPosition:function(t,e){var r=t.commit,n=e.center,o=e.zoom;r("setPosition",{center:n,zoom:o,pushToURL:l(n,o)})},setHoveredFeature:function(t,e){(0,t.commit)("setHoveredFeature",JSON.parse(JSON.stringify(e)))},loadQueryParams:function(t,e){var r=t.commit,n=(t.dispatch,e.params),c=o.f,f=o.g;n.lat&&n.lng&&(c={lat:+n.lat,lng:+n.lng}),r("setInitialCenter",{center:c}),n.zoom&&(f=+n.zoom),r("setInitialZoom",{zoom:f}),r("setPosition",{center:c,zoom:f})}},v={queryParams:function(t){return f({},l(t.center,t.zoom))},highlightedFeatures:function(t,e,r){return[t.hoveredFeature,r.popup.selectedFeatures.map((function(t){var e;return{layer:null==t||null===(e=t.layer)||void 0===e?void 0:e.id,id:t.id}}))[0]].filter((function(t){return!!t&&Object.keys(t).length>0}))}}},316:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return l})),r.d(e,"mutations",(function(){return d})),r.d(e,"actions",(function(){return m})),r.d(e,"getters",(function(){return y}));var n=r(19),o=r(43);r(28),r(24),r(11),r(35),r(25),r(45),r(31),r(46);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l=function(){return{selectedFeatures:[]}},d={setSelectedFeatures:function(t,e){var r=e.selectedFeatures;t.selectedFeatures=Object(o.a)(r)}},m={setSelectedFeatures:function(t,e){var r,n,o=t.commit,c=(t.state,e.selectedFeatures);o("setSelectedFeatures",{selectedFeatures:JSON.parse(JSON.stringify(c)),pushToURL:{selectedFeature:null!==(r=null===(n=c[0])||void 0===n?void 0:n.id)&&void 0!==r?r:null}})},loadQueryParams:function(t,e){var r=t.commit,n=(t.dispatch,t.rootGetters),o=e.params;if(o.selectedFeature){var c=n["data/locationsGeoJson"].features.filter((function(t){return t.id===+o.selectedFeature})).map((function(t){return f(f({},t),{},{layer:{id:"locations"}})}));c&&r("setSelectedFeatures",{selectedFeatures:c})}}},y={queryParams:function(t){return{selectedFeature:t.selectedFeatures[0].id}}}},317:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return c})),r.d(e,"mutations",(function(){return f})),r.d(e,"actions",(function(){return l})),r.d(e,"getters",(function(){return d}));var n=r(9),o=(r(28),r(24),r(11),r(211),r(41),r(77)),c=function(){return{textBlocks:[]}},f={setTextBlocks:function(t,e){var r=e.textBlocks;t.textBlocks=r}},l={loadTextBlocks:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,Object(o.c)();case 3:n=e.sent,r("setTextBlocks",{textBlocks:n});case 5:case"end":return e.stop()}}),e)})))()}},d={byType:function(t){return function(e){return t.textBlocks.filter((function(t){return t.Type===e})).map((function(t){return t.Content.trim()}))}}}},321:function(t,e,r){"use strict";r.r(e),r.d(e,"plugins",(function(){return w})),r.d(e,"getters",(function(){return S}));r(35),r(25),r(24),r(11),r(45),r(31),r(46);var n=r(19),o=(r(27),r(56),r(78)),c=r(202),f=r.n(c);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=o.a.isNavigationFailure,y=o.a.NavigationFailureType,v=function(t,e,r){var n=d(d({},t),e);return Object.keys(r).forEach((function(t){n[t]=r[t],null==n[t]&&delete n[t]})),n},O=function t(e,r,n){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],c=v(e.currentRoute.query,r,n.payload.pushToURL);e.replace({query:c}).catch((function(c){o&&m(c,y.cancelled)&&t(e,r,n)}))},j=f()((function(){return O.apply(void 0,arguments)}),500,{leading:!0,trailing:!0});function P(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?P(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):P(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w=[function(t){t.subscribe((function(e,r){e.payload&&e.payload.pushToURL&&j($nuxt.$router,t.getters.queryParams,e)}))}],S={queryParams:function(t,e){return h(h({},e["map/queryParams"]),e["filters/queryParams"])}}},77:function(t,e,r){"use strict";r.d(e,"a",(function(){return m})),r.d(e,"b",(function(){return y})),r.d(e,"c",(function(){return v}));var n=r(43),o=r(9),c=(r(41),r(11),r(28),r(80),r(203)),f=r.n(c),l=r(23),d=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(table,e){var base;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return base=new f.a({apiKey:l.a}).base(l.b),t.abrupt("return",new Promise((function(t,r){var o=[];base(table).select({maxRecords:2500}).eachPage((function(t,r){var c=t.map((function(t){return t.fields}));o=[].concat(Object(n.a)(o),Object(n.a)(c)),e&&e(c),r()}),(function(e){if(e)return r(e);t(o)}))})));case 2:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),m=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(l.c,e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(l.d);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(l.e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}},[[213,20,4,21]]]);