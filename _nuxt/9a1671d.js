(window.webpackJsonp=window.webpackJsonp||[]).push([[8,5,17],{321:function(e,t,o){var content=o(339);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(125).default)("a22efdc6",content,!0,{sourceMap:!1})},322:function(e,t,o){var content=o(341);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(125).default)("648bd497",content,!0,{sourceMap:!1})},336:function(e,t,o){var content=o(364);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(125).default)("d1085b22",content,!0,{sourceMap:!1})},337:function(e,t,o){var n=o(0),r=o(17),c=o(66);n({target:"Object",stat:!0},{fromEntries:function(e){var t={};return r(e,(function(e,o){c(t,e,o)}),{AS_ENTRIES:!0}),t}})},338:function(e,t,o){"use strict";o(321)},339:function(e,t,o){var n=o(124)(!1);n.push([e.i,'h3[data-v-9233e998],h4[data-v-9233e998]{font-family:"Work Sans",sans-serif;font-size:.9em;text-transform:uppercase}section.sector[data-v-9233e998]{font-size:.8em}.name[data-v-9233e998]{border:1px solid #000;border-radius:20px;cursor:pointer;background:#eee;padding:1.25em 4.5em;position:relative}.name[data-v-9233e998]:after{content:"›";font-size:2em;line-height:0;position:absolute;right:1rem;top:50%;transform:rotate(90deg)}.name.expanded[data-v-9233e998]:after{right:1.5rem;transform:rotate(270deg)}img[data-v-9233e998]{cursor:pointer;max-width:100%;max-height:40vh}.content[data-v-9233e998]{padding:0 1.5em}section.voices[data-v-9233e998]{margin:2rem 0}.voices-image[data-v-9233e998]{margin-bottom:1rem}.voices-question[data-v-9233e998]{font-style:italic;margin-top:1rem}',""]),e.exports=n},340:function(e,t,o){"use strict";o(322)},341:function(e,t,o){var n=o(124)(!1);n.push([e.i,".contributors[data-v-d242b0b0]{padding:1em;font-size:.8em}",""]),e.exports=n},345:function(e,t,o){"use strict";o.r(t);var n=o(33),r=(o(337),o(28),o(24),o(11),o(208),o(155),o(209),o(27),o(54),o(326)),c=o.n(r),l={data:function(){return{expanded:!1}},props:{sector:[Object,!0]},methods:{handleSelectImage:function(){this.$store.dispatch("imageModal/open",{imageUrl:this.imageUrl})},toggle:function(){this.expanded=!this.expanded}},computed:{markdownConverter:function(){return new c.a.Converter},name:function(){return this.sector.Name},details:function(){return this.sector.Notes},detailsHtml:function(){return this.markdownConverter.makeHtml(this.details)},imageUrl:function(){var e,t,o;return null!==(e=null===(t=this.sector.Attachments)||void 0===t||null===(o=t[0])||void 0===o?void 0:o.url)&&void 0!==e?e:null},voices:function(){return Object.fromEntries(Object.entries(this.sector).filter((function(e){return Object(n.a)(e,1)[0].startsWith("Voices_")})).map((function(e){var t=Object(n.a)(e,2),o=t[0],r=t[1];return"string"==typeof r&&(r=r.trim()),[o.replace("Voices_",""),r]})))}}},d=(o(338),o(64)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"sector"},[o("h3",{class:{name:!0,expanded:e.expanded},on:{click:e.toggle}},[e._v(e._s(e.name))]),e._v(" "),e.expanded?o("div",{staticClass:"content"},[o("div",{domProps:{innerHTML:e._s(e.detailsHtml)}}),e._v(" "),o("section",{staticClass:"voices"},[o("h4",[e._v("Voices of "+e._s(e.name))]),e._v(" "),e.imageUrl?o("img",{staticClass:"voices-image",attrs:{src:e.imageUrl},on:{click:e.handleSelectImage}}):e._e(),e._v(" "),e.voices.name?o("div",[e._v(e._s(e.voices.name))]):e._e(),e._v(" "),e.voices.org||e.voices.role?o("div",[e.voices.role?o("span",[e._v("\n          "+e._s(e.voices.role)),e.voices.org?o("span",[e._v(",")]):e._e()]):e._e(),e._v(" "),e.voices.org?o("span",[e._v(e._s(e.voices.org))]):e._e()]):e._e(),e._v(" "),e.voices.question?o("div",{staticClass:"voices-question"},[e._v("\n        "+e._s(e.voices.question)+"\n      ")]):e._e(),e._v(" "),e.voices.quote?o("div",[e._v(e._s(e.voices.quote))]):e._e()])]):e._e()])}),[],!1,null,"9233e998",null);t.default=component.exports},346:function(e,t,o){"use strict";o.r(t);var n=o(326),r=o.n(n),c={computed:{markdownConverter:function(){return new r.a.Converter({simpleLineBreaks:!0})},contributorsTextBlocks:function(){return this.$store.getters["textBlocks/byType"]("Contributors")}}},l=(o(340),o(64)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"contributors"},e._l(e.contributorsTextBlocks,(function(t){return o("div",{key:t,domProps:{innerHTML:e._s(e.markdownConverter.makeHtml(t))}})})),0)}),[],!1,null,"d242b0b0",null);t.default=component.exports},363:function(e,t,o){"use strict";o(336)},364:function(e,t,o){var n=o(124)(!1);n.push([e.i,".info-window[data-v-a1cea5b8]{background:#fff;width:50%;position:absolute;z-index:1001;top:1rem;right:1rem;bottom:1rem;border-radius:10px}@media(max-width:500px){.info-window[data-v-a1cea5b8]{top:.5rem;right:.5rem;bottom:.5rem;left:.5rem;width:unset}}.content[data-v-a1cea5b8]{height:100%;padding:2em}.content-scroll[data-v-a1cea5b8]{height:100%;overflow-y:auto}.close[data-v-a1cea5b8]{cursor:pointer;float:right;font-size:1.5rem;margin-right:.25em}",""]),e.exports=n},382:function(e,t,o){"use strict";o.r(t);var n={methods:{close:function(){this.$store.dispatch("info/setHidden")}},computed:{sectors:function(){return this.$store.state.content.sectors}}},r=(o(363),o(64)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"info-window"},[o("div",{staticClass:"close",on:{click:e.close}},[e._v("⨉")]),e._v(" "),o("div",{staticClass:"content"},[o("div",{staticClass:"content-scroll"},[o("h2",[e._v("Information")]),e._v(" "),e._l(e.sectors,(function(e){return o("SectorSection",{key:e.Name,attrs:{sector:e}})})),e._v(" "),o("Contributors")],2)])])}),[],!1,null,"a1cea5b8",null);t.default=component.exports;installComponents(component,{SectorSection:o(345).default,Contributors:o(346).default})}}]);