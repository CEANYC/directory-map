(window.webpackJsonp=window.webpackJsonp||[]).push([[20,5,6,7,8,9,10,11,17,19],{325:function(e,t,o){var content=o(343);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(125).default)("631f8a7c",content,!0,{sourceMap:!1})},326:function(e,t,o){var content=o(346);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(125).default)("a22efdc6",content,!0,{sourceMap:!1})},331:function(e,t,o){var content=o(354);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(125).default)("72c3c41f",content,!0,{sourceMap:!1})},338:function(e,t,o){var content=o(364);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(125).default)("09c109bc",content,!0,{sourceMap:!1})},339:function(e,t,o){var content=o(367);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(125).default)("c2283976",content,!0,{sourceMap:!1})},340:function(e,t,o){var content=o(370);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(125).default)("59e69e22",content,!0,{sourceMap:!1})},341:function(e,t,o){var content=o(372);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(125).default)("2f7f57a9",content,!0,{sourceMap:!1})},342:function(e,t,o){"use strict";o(325)},343:function(e,t,o){var n=o(124)(!1);n.push([e.i,".text-block[data-v-33b05167]{padding:1em;font-size:.8em}",""]),e.exports=n},344:function(e,t,o){var n=o(0),r=o(17),c=o(67);n({target:"Object",stat:!0},{fromEntries:function(e){var t={};return r(e,(function(e,o){c(t,e,o)}),{AS_ENTRIES:!0}),t}})},345:function(e,t,o){"use strict";o(326)},346:function(e,t,o){var n=o(124)(!1);n.push([e.i,'h3[data-v-9233e998],h4[data-v-9233e998]{font-family:"Work Sans",sans-serif;font-size:.9em;text-transform:uppercase}section.sector[data-v-9233e998]{font-size:.8em}.name[data-v-9233e998]{border:1px solid #000;border-radius:20px;cursor:pointer;background:#eee;padding:1.25em 4.5em;position:relative}.name[data-v-9233e998]:after{content:"›";font-size:2em;line-height:0;position:absolute;right:1rem;top:50%;transform:rotate(90deg)}.name.expanded[data-v-9233e998]:after{right:1.5rem;transform:rotate(270deg)}img[data-v-9233e998]{cursor:pointer;max-width:100%;max-height:40vh}.content[data-v-9233e998]{padding:0 1.5em}section.voices[data-v-9233e998]{margin:2rem 0}.voices-image[data-v-9233e998]{margin-bottom:1rem}.voices-question[data-v-9233e998]{font-style:italic;margin-top:1rem}',""]),e.exports=n},347:function(e,t,o){var content=o(374);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(125).default)("778eb321",content,!0,{sourceMap:!1})},348:function(e,t,o){var content=o(376);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(125).default)("c98bfce0",content,!0,{sourceMap:!1})},350:function(e,t,o){"use strict";o.r(t);var n=o(330),r=o.n(n),c={props:{type:String},computed:{markdownConverter:function(){return new r.a.Converter({simpleLineBreaks:!0})},textBlocks:function(){return this.$store.getters["textBlocks/byType"](this.type)}}},l=(o(342),o(65)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"text-block"},e._l(e.textBlocks,(function(t){return o("div",{key:t,domProps:{innerHTML:e._s(e.markdownConverter.makeHtml(t))}})})),0)}),[],!1,null,"33b05167",null);t.default=component.exports},351:function(e,t,o){"use strict";o.r(t);var n=o(34),r=(o(344),o(28),o(24),o(11),o(210),o(156),o(211),o(27),o(56),o(330)),c=o.n(r),l={data:function(){return{expanded:!1}},props:{sector:[Object,!0]},methods:{handleSelectImage:function(){this.$store.dispatch("imageModal/open",{imageUrl:this.imageUrl})},toggle:function(){this.expanded=!this.expanded}},computed:{markdownConverter:function(){return new c.a.Converter},name:function(){return this.sector.Name},details:function(){return this.sector.Notes},detailsHtml:function(){return this.markdownConverter.makeHtml(this.details)},imageUrl:function(){var e,t,o;return null!==(e=null===(t=this.sector.Attachments)||void 0===t||null===(o=t[0])||void 0===o?void 0:o.url)&&void 0!==e?e:null},voices:function(){return Object.fromEntries(Object.entries(this.sector).filter((function(e){return Object(n.a)(e,1)[0].startsWith("Voices_")})).map((function(e){var t=Object(n.a)(e,2),o=t[0],r=t[1];return"string"==typeof r&&(r=r.trim()),[o.replace("Voices_",""),r]})))}}},d=(o(345),o(65)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"sector"},[o("h3",{class:{name:!0,expanded:e.expanded},on:{click:e.toggle}},[e._v(e._s(e.name))]),e._v(" "),e.expanded?o("div",{staticClass:"content"},[o("div",{domProps:{innerHTML:e._s(e.detailsHtml)}}),e._v(" "),o("section",{staticClass:"voices"},[o("h4",[e._v("Voices of "+e._s(e.name))]),e._v(" "),e.imageUrl?o("img",{staticClass:"voices-image",attrs:{src:e.imageUrl},on:{click:e.handleSelectImage}}):e._e(),e._v(" "),e.voices.name?o("div",[e._v(e._s(e.voices.name))]):e._e(),e._v(" "),e.voices.org||e.voices.role?o("div",[e.voices.role?o("span",[e._v("\n          "+e._s(e.voices.role)),e.voices.org?o("span",[e._v(",")]):e._e()]):e._e(),e._v(" "),e.voices.org?o("span",[e._v(e._s(e.voices.org))]):e._e()]):e._e(),e._v(" "),e.voices.question?o("div",{staticClass:"voices-question"},[e._v("\n        "+e._s(e.voices.question)+"\n      ")]):e._e(),e._v(" "),e.voices.quote?o("div",[e._v(e._s(e.voices.quote))]):e._e()])]):e._e()])}),[],!1,null,"9233e998",null);t.default=component.exports},352:function(e,t){function o({personalAccessToken:e,fetchFunc:t}){this._personalAccessToken=e,this._fetchFunc=t}o.prototype.get=async function(e,t){const o=t?"?"+new URLSearchParams(t).toString():"",n=await this._fetchFunc(`https://api.figma.com/v1/${e}${o}`,{headers:{"X-Figma-Token":this._personalAccessToken}});if(n.status>=400){let e="";try{e+=(await n.json()).err}finally{throw new Error(`HTTP error ${n.status} accessing Figma. ${e}`)}}return n.json()};const n=function({file:e,nodeIds:t}){function o(e,t){return e===t.id?t:t.children?t.children.map((t=>o(e,t))).find(Boolean):null}return t.map((t=>o(t,e.document)))},r=function({file:e,names:t}){function o(e,t){return e===t.name&&"FRAME"===t.type?t.id:t.children?t.children.map((t=>o(e,t))).find(Boolean):null}return t.map((t=>o(t,e.document)))};async function c({api:e,fileKey:t,assetList:o,scales:n=[1],format:r="png"}){const c={},l=await Promise.all(n.map((n=>async function(n){return e.get(`images/${t}`,{ids:Object.values(o),format:r,scale:n})}(n))));return n.forEach(((e,t)=>{for(const n of Object.keys(o)){const r=o[n];c[n]=c[n]||{id:r},c[n][`@${e}x`]=l[t].images[r]}})),c}async function l({frameIds:e=[],frameNames:t=[],fileKey:l,personalAccessToken:d,scales:f=[1],format:m="png",fetchFunc:h=((...e)=>window.fetch(...e))}){const v=new o({personalAccessToken:d,fetchFunc:h}),y=await v.get(`files/${l}`);t.length&&(e=[...e,...r({file:y,names:t})]);const x=n({file:y,nodeIds:e}).filter(Boolean);if(!x.length)throw new Error(`No matching frames for ${e}, ${t}`);const _=function(e){const t={};for(const o of e.filter(Boolean))for(const e of o.children)t[e.name]=e.id;return t}(x);return await c({api:v,fileKey:l,assetList:_,scales:f,format:m})}function d(map,e){for(const t of Object.keys(e)){const o=Math.max(...Object.keys(e[t]).filter((e=>"@"===e[0])).map((e=>+e.replace(/[^0-9.]/g,""))));map.loadImage(e[t][`@${o}x`],((e,image)=>{map.addImage(t,image,{pixelRatio:o})}))}}e.exports={getFigmaIconsByFrames:l,getFigmassets:l,addAssetsToMap:d,loadFigmassets:async function({map:map,...e}){map&&!e.scales&&(e.scales=[2]);const t=await l(e);return map&&d(map,t),t},loadStoredFigmassets:async function({map:map,path:path=""}){path&&(path=path.replace(/([^/])$/,"$1/"));const e=await fetch(`${path}assets.json`).then((e=>e.json()));for(const t of e)map.loadImage(`${path}${t.fileName}`,((e,image)=>{map.addImage(t.id,image,{pixelRatio:t.scale})}))}}},353:function(e,t,o){"use strict";o(331)},354:function(e,t,o){var n=o(124)(!1);n.push([e.i,".map,.mapboxgl-map{height:100%;width:100%}.map.hovered{cursor:pointer}",""]),e.exports=n},363:function(e,t,o){"use strict";o(338)},364:function(e,t,o){var n=o(124)(!1);n.push([e.i,".info-button[data-v-15f8fc88]{align-items:center;background:#fff;cursor:pointer;display:flex;font-size:1.5em;justify-content:center;padding:.5rem;text-align:center;position:absolute;z-index:1000;top:1rem;right:1rem;border-radius:10px}.info-button[data-v-15f8fc88]:hover{background:#eee}@media(max-width:500px){.info-button[data-v-15f8fc88]{top:unset;bottom:1rem}}.button-text[data-v-15f8fc88]{font-size:.75em;font-weight:700}",""]),e.exports=n},365:function(e,t,o){e.exports=o.p+"img/ceanyc-logo-small.190173d.png"},366:function(e,t,o){"use strict";o(339)},367:function(e,t,o){var n=o(124)(!1);n.push([e.i,".logo-button[data-v-9026f450]{background:none;cursor:pointer;font-size:3em;width:1.1em;height:1.1em;display:flex;flex-direction:row;justify-content:center;align-content:center;padding:.25rem;position:absolute;z-index:1000;bottom:1rem;right:1rem;border-radius:10px}@media(max-width:500px){.logo-button[data-v-9026f450]{top:unset;bottom:4rem}}.logo-button a[data-v-9026f450]{display:inline-block}.logo-button img[data-v-9026f450]{height:100%;width:100%}",""]),e.exports=n},368:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iNDMiIHZpZXdCb3g9IjAgMCAzNiA0MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMzLjIzNjEgMjguMzMwMkwxNy4xOTcxIDM5LjUxNzVMMS43NzQzNCAyOC4xMjQ0TDE3LjQxODEgMTcuNTExNEwzMy4yMzYxIDI4LjMzMDJaIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxwYXRoIGQ9Ik0zMy4yOCAyMS41ODZMMTcuMjQwOSAzMi43NzM0TDEuODE4MTYgMjEuMzgwM0wxNy40NjE5IDEwLjc2NzJMMzMuMjggMjEuNTg2WiIgZmlsbD0id2hpdGUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPgo8cGF0aCBkPSJNMzMuMzIzOCAxNC44NDE5TDE3LjI4NDggMjYuMDI5MkwxLjg2MTk3IDE0LjYzNjFMMTcuNTA1NyA0LjAyMzA4TDMzLjMyMzggMTQuODQxOVoiIGZpbGw9IndoaXRlIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+Cg=="},369:function(e,t,o){"use strict";o(340)},370:function(e,t,o){var n=o(124)(!1);n.push([e.i,".layer-picker-button[data-v-7689e006]{background:#fff;cursor:pointer;font-size:3em;width:1.1em;height:1.1em;display:flex;flex-direction:row;justify-content:center;align-content:center;padding:.25rem;position:absolute;z-index:1000;bottom:1rem;left:1rem;border-radius:10px}@media(max-width:500px){.layer-picker-button[data-v-7689e006]{top:unset;bottom:1rem}}",""]),e.exports=n},371:function(e,t,o){"use strict";o(341)},372:function(e,t,o){var n=o(124)(!1);n.push([e.i,"h2[data-v-5c2eeede]{padding-left:.5em;margin-bottom:0}.info-window[data-v-5c2eeede]{background:#fff;width:50%;position:absolute;z-index:1001;top:1rem;right:1rem;bottom:1rem;border-radius:10px}@media(max-width:500px){.info-window[data-v-5c2eeede]{top:.5rem;right:.5rem;bottom:.5rem;left:.5rem;width:unset}}.content[data-v-5c2eeede]{height:100%;padding:2em}@media(max-width:500px){.content[data-v-5c2eeede]{padding:.5em}}.content-scroll[data-v-5c2eeede]{height:100%;overflow-y:auto}.ceanyc-logo[data-v-5c2eeede]{max-width:250px}.close[data-v-5c2eeede]{cursor:pointer;float:right;font-size:1.5rem;margin-right:.25em}@media(max-width:500px){.close[data-v-5c2eeede]{font-size:3rem;background:#fff;right:1rem;position:absolute;z-index:1001}}",""]),e.exports=n},373:function(e,t,o){"use strict";o(347)},374:function(e,t,o){var n=o(124)(!1);n.push([e.i,".image-modal[data-v-2316648f]{top:0;left:0;right:0;bottom:0;position:absolute;z-index:1001;background:hsla(0,0%,100%,.5);align-items:center;display:flex;justify-content:center}.image-modal img[data-v-2316648f]{max-height:90vh;max-width:90vw}",""]),e.exports=n},375:function(e,t,o){"use strict";o(348)},376:function(e,t,o){var n=o(124)(!1);n.push([e.i,".layer-picker[data-v-ee87ec02]{background:#fff;width:25%;position:absolute;z-index:1000;left:1rem;bottom:1rem;border-radius:10px}@media(max-width:500px){.layer-picker[data-v-ee87ec02]{top:.5rem;right:.5rem;bottom:.5rem;left:.5rem;width:unset}}.head[data-v-ee87ec02]{display:flex;flex-direction:row;justify-content:space-between}.head h2[data-v-ee87ec02]{margin:0}.layer[data-v-ee87ec02]{border-bottom:1px solid #ededed}.layer[data-v-ee87ec02]:last-of-type{border:none}.layer label[data-v-ee87ec02]{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding:1rem 0}.layer input[type=radio][data-v-ee87ec02]{height:1.25rem;width:1.25rem}.content[data-v-ee87ec02]{height:100%;overflow-y:auto;padding:2em}.close[data-v-ee87ec02]{float:right;font-size:1.5rem;margin-right:.25em}.clear[data-v-ee87ec02],.close[data-v-ee87ec02]{cursor:pointer}.clear[data-v-ee87ec02]{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;background:#7a7a7a;border-radius:10px;color:#fff;padding:0 .75rem}",""]),e.exports=n},377:function(e,t,o){var content=o(394);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(125).default)("17aca845",content,!0,{sourceMap:!1})},382:function(e,t,o){"use strict";o.r(t);var n=o(43),r=(o(80),o(28),o(11),o(31),o(352)),c=o(23),l={data:function(){return{accessToken:c.i,flyToInProgress:!1,maximumExtent:c.k,style:c.j,hovered:!1,center:c.g,zoom:c.h}},computed:{locationsLayer:function(){return{id:"locations",type:"symbol",layout:{"icon-allow-overlap":!0,"icon-image":["concat","marker_",["get","sectorSlug"]],"icon-size":["interpolate",["linear"],["zoom"],12,.5,16,1.5]},filter:this.sectorFilter}},locationsSource:function(){return{data:this.locationsGeoJson}},locationsGeoJson:function(){return this.$store.getters["data/locationsGeoJson"]},highlightedFeatures:function(){return this.$store.getters["map/highlightedFeatures"]},selectedSectors:function(){return this.$store.state.filters.sectors},sectorFilter:function(){return["any"].concat(Object(n.a)(this.selectedSectors.map((function(e){return["in",e,["get","Sector"]]}))))},storeCenter:function(){return this.$store.state.map.center},storeZoom:function(){return this.$store.state.map.zoom},unselectedLayers:function(){return this.$store.getters["layerPicker/unselectedLayers"]},selectedLayers:function(){return this.$store.getters["layerPicker/selectedLayers"]}},methods:{mapLoaded:function(e){var map=e.map;this.map=map,this.map.jumpTo({center:this.storeCenter,zoom:this.storeZoom}),Object(r.loadStoredFigmassets)({map:map,path:"map-assets/assets@2x"})},handleClick:function(e){var t=this.map.queryRenderedFeatures(e.mapboxEvent.point,{layers:[this.locationsLayer.id]});this.$store.dispatch("popup/setSelectedFeatures",{selectedFeatures:t})},handleMouseMove:function(e){var t=e.mapboxEvent.features[0];if(t){var o=t.layer.id,n=t.id;this.$store.dispatch("map/setHoveredFeature",{layer:o,id:n})}else this.$store.dispatch("map/setHoveredFeature",{});this.hovered=!0},handleMouseLeave:function(){this.$store.dispatch("map/setHoveredFeature",{}),this.hovered=!1},handleMove:function(){if(!this.flyToInProgress){var e=this.map.getCenter(),t=this.map.getZoom();this.$store.dispatch("map/setPosition",{center:e,zoom:t})}},handleMoveEnd:function(){this.flyToInProgress=!1},moveToStorePosition:function(){this.map&&!this.flyToInProgress&&(this.map.getCenter().lat===this.storeCenter.lat&&this.map.getCenter().lng===this.storeCenter.lng&&this.map.getZoom()===this.storeZoom||(this.flyToInProgress=!0,this.map.flyTo({center:this.storeCenter,zoom:this.storeZoom})))},changeLayersVisibility:function(e,t){var o=this;e.forEach((function(e){o.map.setLayoutProperty(e,"visibility",t)}))},hideUnselectedLayers:function(){var e=this;this.unselectedLayers.forEach((function(t){e.changeLayersVisibility(t.layerIds,"none")}))},showSelectedLayers:function(){var e=this;this.selectedLayers.forEach((function(t){e.changeLayersVisibility(t.layerIds,"visible")}))}},watch:{unselectedLayers:function(){this.hideUnselectedLayers()},selectedLayers:function(){this.showSelectedLayers()},sectorFilter:function(){this.map&&this.map.setFilter(this.locationsLayer.id,this.sectorFilter)},highlightedFeatures:function(e,t){var o,n,r,c,l=null==e||null===(o=e[0])||void 0===o?void 0:o.layer,d=e.map((function(e){return e.id}));l&&d?(n=["case",["in",["get","ID"],["literal",d]],["concat","marker_",["get","sectorSlug"],"_highlight"],["concat","marker_",["get","sectorSlug"]]],r=["case",["in",["get","ID"],["literal",d]],1,0]):(l=(null!==(c=null==t?void 0:t[0])&&void 0!==c?c:{}).layer,n=["concat","marker_",["get","sectorSlug"]],r=0);l&&(this.map.setLayoutProperty(l,"icon-image",n),this.map.setLayoutProperty(l,"symbol-sort-key",r))},storeCenter:function(){this.moveToStorePosition()},storeZoom:function(){this.moveToStorePosition()}}},d=(o(353),o(65)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("client-only",[o("MglMap",{class:{map:!0,hovered:e.hovered},attrs:{mapStyle:e.style,accessToken:e.accessToken,center:e.center,maxBounds:e.maximumExtent,zoom:e.zoom},on:{click:e.handleClick,load:e.mapLoaded,move:e.handleMove,moveend:e.handleMoveEnd}},[o("MglGeojsonLayer",{attrs:{sourceId:"locations",source:e.locationsSource,layer:e.locationsLayer,layerId:e.locationsLayer.id},on:{mousemove:e.handleMouseMove,mouseleave:e.handleMouseLeave}})],1)],1)}),[],!1,null,null,null);t.default=component.exports},387:function(e,t,o){"use strict";o.r(t);var n={methods:{toggle:function(){this.infoVisible=!this.infoVisible}},computed:{infoVisible:{get:function(){return this.$store.state.info.visible},set:function(e){this.$store.dispatch(e?"info/setVisible":"info/setHidden")}}}},r=(o(363),o(65)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"info-button",on:{click:e.toggle}},[o("span",{staticClass:"button-text"},[e._v("Information")])])}),[],!1,null,"15f8fc88",null);t.default=component.exports},388:function(e,t,o){"use strict";o.r(t);var n=o(365),r=o.n(n),c=o(23),l={data:function(){return{logo:null,url:null}},mounted:function(){this.logo=r.a,this.url=c.f}},d=(o(366),o(65)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"logo-button"},[o("a",{attrs:{target:"_blank",href:e.url}},[o("img",{attrs:{src:e.logo}})])])}),[],!1,null,"9026f450",null);t.default=component.exports},389:function(e,t,o){"use strict";o.r(t);var n=o(368),r=o.n(n),c={data:function(){return{layersIcon:null}},mounted:function(){this.layersIcon=r.a},methods:{toggle:function(){this.layerPickerVisible=!this.layerPickerVisible}},computed:{layerPickerVisible:{get:function(){return this.$store.state.layerPicker.visible},set:function(e){this.$store.dispatch(e?"layerPicker/setVisible":"layerPicker/setHidden")}}}},l=(o(369),o(65)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"layer-picker-button",on:{click:e.toggle}},[o("img",{attrs:{src:e.layersIcon}})])}),[],!1,null,"7689e006",null);t.default=component.exports},390:function(e,t,o){"use strict";o.r(t);var n={methods:{close:function(){this.$store.dispatch("info/setHidden")}},computed:{sectors:function(){return this.$store.state.content.sectors}}},r=(o(371),o(65)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"info-window"},[o("div",{staticClass:"close",on:{click:e.close}},[e._v("⨉")]),e._v(" "),o("div",{staticClass:"content"},[o("div",{staticClass:"content-scroll"},[o("h2",[e._v("Information")]),e._v(" "),o("TextBlock",{attrs:{type:"About"}}),e._v(" "),e._l(e.sectors,(function(e){return o("SectorSection",{key:e.Name,attrs:{sector:e}})})),e._v(" "),o("TextBlock",{attrs:{type:"Contributors"}}),e._v(" "),e._m(0)],2)])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("a",{attrs:{href:"https://gocoopnyc.org/",target:"_blank"}},[t("img",{staticClass:"ceanyc-logo",attrs:{src:"/ceanyc-logo.png"}})])}],!1,null,"5c2eeede",null);t.default=component.exports;installComponents(component,{TextBlock:o(350).default,SectorSection:o(351).default})},391:function(e,t,o){"use strict";o.r(t);var n={computed:{imageUrl:function(){return this.$store.state.imageModal.imageUrl},keymap:function(){return{esc:this.close}}},methods:{close:function(){this.$store.dispatch("imageModal/close")},toggle:function(){this.expanded=!this.expanded}}},r=(o(373),o(65)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{directives:[{name:"hotkey",rawName:"v-hotkey",value:e.keymap,expression:"keymap"}],staticClass:"image-modal",on:{click:function(t){return t.target!==t.currentTarget?null:e.close.apply(null,arguments)}}},[o("img",{attrs:{src:e.imageUrl}})])}),[],!1,null,"2316648f",null);t.default=component.exports},392:function(e,t,o){"use strict";o.r(t);var n={methods:{clear:function(){this.$store.dispatch("layerPicker/setSelectedLayers",{selectedLayers:[]})},close:function(){this.$store.dispatch("layerPicker/setHidden")},selectLayer:function(e){this.$store.dispatch("layerPicker/setSelectedLayers",{selectedLayers:[e.target.value]})}},computed:{availableLayers:function(){return this.$store.state.layerPicker.availableLayers},canClear:function(){return this.selectedLayers.length>0},selectedLayers:function(){return this.$store.state.layerPicker.selectedLayers}}},r=(o(375),o(65)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"layer-picker"},[o("div",{staticClass:"close",on:{click:e.close}},[e._v("⨉")]),e._v(" "),o("div",{staticClass:"content"},[o("div",{staticClass:"head"},[o("h2",[e._v("Display Districts")]),e._v(" "),e.canClear?o("button",{staticClass:"clear",on:{click:e.clear}},[e._v("clear")]):e._e()]),e._v(" "),o("div",{staticClass:"layers"},e._l(e.availableLayers,(function(t){return o("div",{key:t.name,staticClass:"layer"},[o("label",[o("span",[e._v(e._s(t.name))]),e._v(" "),o("input",{attrs:{type:"radio",name:"layer",id:t.name},domProps:{checked:e.selectedLayers.includes(t.name),value:t.name},on:{change:e.selectLayer}})])])})),0)])])}),[],!1,null,"ee87ec02",null);t.default=component.exports},393:function(e,t,o){"use strict";o(377)},394:function(e,t,o){var n=o(124)(!1);n.push([e.i,'html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}body{font-family:"Open Sans",sans-serif;margin:0}main{display:flex;height:100vh;width:100vw}',""]),e.exports=n},401:function(e,t,o){"use strict";o.r(t);var n=o(9),r=(o(41),{name:"IndexPage",mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=e.$route.query,e.$store.dispatch("map/loadQueryParams",{params:o}),e.$store.dispatch("data/loadLocations",{params:o}),e.$store.dispatch("textBlocks/loadTextBlocks"),e.$store.dispatch("content/loadSectors");case 5:case"end":return t.stop()}}),t)})))()},computed:{imageModalOpen:function(){return this.$store.state.imageModal.open},infoVisible:function(){return this.$store.state.info.visible},layerPickerVisible:function(){return this.$store.state.layerPicker.visible},title:function(){return this.$store.getters["textBlocks/byType"]("Title")[0]}},head:function(){return{title:this.title}}}),c=(o(393),o(65)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("main",[o("Map"),e._v(" "),o("Sidebar"),e._v(" "),o("InfoButton"),e._v(" "),o("LogoButton"),e._v(" "),o("LayerPickerButton"),e._v(" "),e.infoVisible?o("InfoWindow"):e._e(),e._v(" "),e.imageModalOpen?o("ImageModal"):e._e(),e._v(" "),e.layerPickerVisible?o("LayerPicker"):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Map:o(382).default,Sidebar:o(400).default,InfoButton:o(387).default,LogoButton:o(388).default,LayerPickerButton:o(389).default,InfoWindow:o(390).default,ImageModal:o(391).default,LayerPicker:o(392).default})}}]);