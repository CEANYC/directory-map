(window.webpackJsonp=window.webpackJsonp||[]).push([[8,5,17],{321:function(t,e,o){var content=o(339);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(125).default)("a22efdc6",content,!0,{sourceMap:!1})},322:function(t,e,o){var content=o(341);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(125).default)("648bd497",content,!0,{sourceMap:!1})},336:function(t,e,o){var content=o(364);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(125).default)("089a8fe0",content,!0,{sourceMap:!1})},337:function(t,e,o){var n=o(0),r=o(17),c=o(66);n({target:"Object",stat:!0},{fromEntries:function(t){var e={};return r(t,(function(t,o){c(e,t,o)}),{AS_ENTRIES:!0}),e}})},338:function(t,e,o){"use strict";o(321)},339:function(t,e,o){var n=o(124)(!1);n.push([t.i,'h3[data-v-9233e998],h4[data-v-9233e998]{font-family:"Work Sans",sans-serif;font-size:.9em;text-transform:uppercase}section.sector[data-v-9233e998]{font-size:.8em}.name[data-v-9233e998]{border:1px solid #000;border-radius:20px;cursor:pointer;background:#eee;padding:1.25em 4.5em;position:relative}.name[data-v-9233e998]:after{content:"›";font-size:2em;line-height:0;position:absolute;right:1rem;top:50%;transform:rotate(90deg)}.name.expanded[data-v-9233e998]:after{right:1.5rem;transform:rotate(270deg)}img[data-v-9233e998]{cursor:pointer;max-width:100%;max-height:40vh}.content[data-v-9233e998]{padding:0 1.5em}section.voices[data-v-9233e998]{margin:2rem 0}.voices-image[data-v-9233e998]{margin-bottom:1rem}.voices-question[data-v-9233e998]{font-style:italic;margin-top:1rem}',""]),t.exports=n},340:function(t,e,o){"use strict";o(322)},341:function(t,e,o){var n=o(124)(!1);n.push([t.i,".contributors[data-v-d242b0b0]{padding:1em;font-size:.8em}",""]),t.exports=n},345:function(t,e,o){"use strict";o.r(e);var n=o(33),r=(o(337),o(28),o(24),o(11),o(208),o(155),o(209),o(27),o(54),o(326)),c=o.n(r),l={data:function(){return{expanded:!1}},props:{sector:[Object,!0]},methods:{handleSelectImage:function(){this.$store.dispatch("imageModal/open",{imageUrl:this.imageUrl})},toggle:function(){this.expanded=!this.expanded}},computed:{markdownConverter:function(){return new c.a.Converter},name:function(){return this.sector.Name},details:function(){return this.sector.Notes},detailsHtml:function(){return this.markdownConverter.makeHtml(this.details)},imageUrl:function(){var t,e,o;return null!==(t=null===(e=this.sector.Attachments)||void 0===e||null===(o=e[0])||void 0===o?void 0:o.url)&&void 0!==t?t:null},voices:function(){return Object.fromEntries(Object.entries(this.sector).filter((function(t){return Object(n.a)(t,1)[0].startsWith("Voices_")})).map((function(t){var e=Object(n.a)(t,2),o=e[0],r=e[1];return"string"==typeof r&&(r=r.trim()),[o.replace("Voices_",""),r]})))}}},d=(o(338),o(64)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"sector"},[o("h3",{class:{name:!0,expanded:t.expanded},on:{click:t.toggle}},[t._v(t._s(t.name))]),t._v(" "),t.expanded?o("div",{staticClass:"content"},[o("div",{domProps:{innerHTML:t._s(t.detailsHtml)}}),t._v(" "),o("section",{staticClass:"voices"},[o("h4",[t._v("Voices of "+t._s(t.name))]),t._v(" "),t.imageUrl?o("img",{staticClass:"voices-image",attrs:{src:t.imageUrl},on:{click:t.handleSelectImage}}):t._e(),t._v(" "),t.voices.name?o("div",[t._v(t._s(t.voices.name))]):t._e(),t._v(" "),t.voices.org||t.voices.role?o("div",[t.voices.role?o("span",[t._v("\n          "+t._s(t.voices.role)),t.voices.org?o("span",[t._v(",")]):t._e()]):t._e(),t._v(" "),t.voices.org?o("span",[t._v(t._s(t.voices.org))]):t._e()]):t._e(),t._v(" "),t.voices.question?o("div",{staticClass:"voices-question"},[t._v("\n        "+t._s(t.voices.question)+"\n      ")]):t._e(),t._v(" "),t.voices.quote?o("div",[t._v(t._s(t.voices.quote))]):t._e()])]):t._e()])}),[],!1,null,"9233e998",null);e.default=component.exports},346:function(t,e,o){"use strict";o.r(e);var n=o(326),r=o.n(n),c={computed:{markdownConverter:function(){return new r.a.Converter({simpleLineBreaks:!0})},contributorsTextBlocks:function(){return this.$store.getters["textBlocks/byType"]("Contributors")}}},l=(o(340),o(64)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"contributors"},t._l(t.contributorsTextBlocks,(function(e){return o("div",{key:e,domProps:{innerHTML:t._s(t.markdownConverter.makeHtml(e))}})})),0)}),[],!1,null,"d242b0b0",null);e.default=component.exports},363:function(t,e,o){"use strict";o(336)},364:function(t,e,o){var n=o(124)(!1);n.push([t.i,".info-window[data-v-518477cf]{background:#fff;width:50%;position:absolute;z-index:1001;top:1rem;right:1rem;bottom:1rem;border-radius:10px}@media(max-width:500px){.info-window[data-v-518477cf]{top:.5rem;right:.5rem;bottom:.5rem;left:.5rem;width:unset}}.content[data-v-518477cf]{height:100%;padding:2em}.content-scroll[data-v-518477cf]{height:100%;overflow-y:auto}.ceanyc-logo[data-v-518477cf]{max-width:250px}.close[data-v-518477cf]{cursor:pointer;float:right;font-size:1.5rem;margin-right:.25em}",""]),t.exports=n},382:function(t,e,o){"use strict";o.r(e);var n={methods:{close:function(){this.$store.dispatch("info/setHidden")}},computed:{sectors:function(){return this.$store.state.content.sectors}}},r=(o(363),o(64)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"info-window"},[o("div",{staticClass:"close",on:{click:t.close}},[t._v("⨉")]),t._v(" "),o("div",{staticClass:"content"},[o("div",{staticClass:"content-scroll"},[o("h2",[t._v("Information")]),t._v(" "),t._l(t.sectors,(function(t){return o("SectorSection",{key:t.Name,attrs:{sector:t}})})),t._v(" "),o("Contributors"),t._v(" "),t._m(0)],2)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"https://gocoopnyc.org/",target:"_blank"}},[e("img",{staticClass:"ceanyc-logo",attrs:{src:"/ceanyc-logo.png"}})])}],!1,null,"518477cf",null);e.default=component.exports;installComponents(component,{SectorSection:o(345).default,Contributors:o(346).default})}}]);