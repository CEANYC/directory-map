(window.webpackJsonp=window.webpackJsonp||[]).push([[12,13,16],{323:function(e,t,o){var content=o(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(125).default)("0d9924de",content,!0,{sourceMap:!1})},324:function(e,t,o){var content=o(337);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(125).default)("89668a36",content,!0,{sourceMap:!1})},327:function(e,t,o){"use strict";o(323)},328:function(e,t,o){var r=o(124)(!1);r.push([e.i,".sector-pill{background:#bcbcbc;border-radius:1rem;color:#fff;cursor:default;display:inline;font-weight:700;font-size:.75em;padding:.25rem 1.5rem;text-transform:uppercase}.sector-pill.selected.credit-unions{background:#5ba8f7}.sector-pill.selected.clts{background:#33b983}.sector-pill.selected.csas{background:#cc34cd}.sector-pill.selected.energy{background:#1077f3}.sector-pill.selected.food{background:#7018d3}.sector-pill.selected.gardens{background:#72b622}.sector-pill.selected.housing{background:#f98517}.sector-pill.selected.worker{background:#fdcc0d}.sector-pill.interactive:hover{filter:brightness(90%)}",""]),e.exports=r},329:function(e,t,o){"use strict";o.r(t);o(27),o(56),o(209);var r={props:{interactive:{type:Boolean,default:!1},sector:String,selected:{type:Boolean,default:!0}},methods:{slug:function(e){return e.toLowerCase().replaceAll(" ","-")}}},l=(o(327),o(65)),component=Object(l.a)(r,(function(){var e,t=this,o=t.$createElement;return(t._self._c||o)("div",{class:(e={"sector-pill":!0},e[t.slug(t.sector)]=!0,e.selected=t.selected,e.interactive=t.interactive,e)},[t._v("\n  "+t._s(t.sector)+"\n")])}),[],!1,null,null,null);t.default=component.exports},335:function(e,t,o){var content=o(362);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(125).default)("23dde114",content,!0,{sourceMap:!1})},336:function(e,t,o){"use strict";o(324)},337:function(e,t,o){var r=o(124)(!1);r.push([e.i,".popup-section[data-v-64fd22ee]{line-height:1.25rem;margin:.5rem 0;word-break:break-word}",""]),e.exports=r},349:function(e,t,o){"use strict";o.r(t);var r={},l=(o(336),o(65)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"popup-section"},[e._t("default")],2)}),[],!1,null,"64fd22ee",null);t.default=component.exports},361:function(e,t,o){"use strict";o(335)},362:function(e,t,o){var r=o(124)(!1);r.push([e.i,".popup[data-v-1b323d13]{align-items:flex-start;display:flex;flex-direction:column;position:relative;max-height:50vh;overflow-y:auto}.popup h2[data-v-1b323d13]{margin-top:.5em}.popup .close[data-v-1b323d13]{position:absolute;right:0;cursor:pointer;font-size:2rem;top:-.5rem}.popup-sections[data-v-1b323d13]{margin-top:1rem}",""]),e.exports=r},386:function(e,t,o){"use strict";o.r(t);var r={props:{feature:[Object,!0]},computed:{properties:function(){var e,t;return null!==(e=null===(t=this.feature)||void 0===t?void 0:t.properties)&&void 0!==e?e:{}},website:function(){return this.properties.Website}},methods:{handleClose:function(){this.$store.dispatch("popup/setSelectedFeatures",{selectedFeatures:[]})}}},l=(o(361),o(65)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"popup"},[o("div",{staticClass:"close",on:{click:e.handleClose}},[e._v("⨉")]),e._v(" "),o("h2",[e._v(e._s(e.properties["Display Name"]))]),e._v(" "),o("SectorPill",{attrs:{sector:e.properties.Sector}}),e._v(" "),o("div",{staticClass:"popup-sections"},[o("PopupSection",[e._v(e._s(e.properties["Brief Description"]))]),e._v(" "),e.properties.Address?o("PopupSection",[e._v("\n      Address: "+e._s(e.properties.Address)+"\n    ")]):e._e(),e._v(" "),e.properties.Phone?o("PopupSection",[e._v("\n      Phone: "+e._s(e.properties.Phone)+"\n    ")]):e._e(),e._v(" "),e.website?o("PopupSection",[e._v("\n      Website: "),o("a",{attrs:{href:e.website,target:"_blank"}},[e._v(e._s(e.website))])]):e._e()],1)],1)}),[],!1,null,"1b323d13",null);t.default=component.exports;installComponents(component,{SectorPill:o(329).default,PopupSection:o(349).default})}}]);