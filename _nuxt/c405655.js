(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{343:function(e,t,r){var content=r(368);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(125).default)("c98bfce0",content,!0,{sourceMap:!1})},367:function(e,t,r){"use strict";r(343)},368:function(e,t,r){var c=r(124)(!1);c.push([e.i,".layer-picker[data-v-ee87ec02]{background:#fff;width:25%;position:absolute;z-index:1000;left:1rem;bottom:1rem;border-radius:10px}@media(max-width:500px){.layer-picker[data-v-ee87ec02]{top:.5rem;right:.5rem;bottom:.5rem;left:.5rem;width:unset}}.head[data-v-ee87ec02]{display:flex;flex-direction:row;justify-content:space-between}.head h2[data-v-ee87ec02]{margin:0}.layer[data-v-ee87ec02]{border-bottom:1px solid #ededed}.layer[data-v-ee87ec02]:last-of-type{border:none}.layer label[data-v-ee87ec02]{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding:1rem 0}.layer input[type=radio][data-v-ee87ec02]{height:1.25rem;width:1.25rem}.content[data-v-ee87ec02]{height:100%;overflow-y:auto;padding:2em}.close[data-v-ee87ec02]{float:right;font-size:1.5rem;margin-right:.25em}.clear[data-v-ee87ec02],.close[data-v-ee87ec02]{cursor:pointer}.clear[data-v-ee87ec02]{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;background:#7a7a7a;border-radius:10px;color:#fff;padding:0 .75rem}",""]),e.exports=c},384:function(e,t,r){"use strict";r.r(t);var c={methods:{clear:function(){this.$store.dispatch("layerPicker/setSelectedLayers",{selectedLayers:[]})},close:function(){this.$store.dispatch("layerPicker/setHidden")},selectLayer:function(e){this.$store.dispatch("layerPicker/setSelectedLayers",{selectedLayers:[e.target.value]})}},computed:{availableLayers:function(){return this.$store.state.layerPicker.availableLayers},canClear:function(){return this.selectedLayers.length>0},selectedLayers:function(){return this.$store.state.layerPicker.selectedLayers}}},n=(r(367),r(64)),component=Object(n.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"layer-picker"},[r("div",{staticClass:"close",on:{click:e.close}},[e._v("⨉")]),e._v(" "),r("div",{staticClass:"content"},[r("div",{staticClass:"head"},[r("h2",[e._v("Display Districts")]),e._v(" "),e.canClear?r("button",{staticClass:"clear",on:{click:e.clear}},[e._v("clear")]):e._e()]),e._v(" "),r("div",{staticClass:"layers"},e._l(e.availableLayers,(function(t){return r("div",{key:t.name,staticClass:"layer"},[r("label",[r("span",[e._v(e._s(t.name))]),e._v(" "),r("input",{attrs:{type:"radio",name:"layer",id:t.name},domProps:{checked:e.selectedLayers.includes(t.name),value:t.name},on:{change:e.selectLayer}})])])})),0)])])}),[],!1,null,"ee87ec02",null);t.default=component.exports}}]);