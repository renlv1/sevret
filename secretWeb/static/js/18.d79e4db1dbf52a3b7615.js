webpackJsonp([18],{GFOB:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("Dd8w"),n=o.n(s),i=o("NYxO"),c={data:function(){return{}},computed:n()({},Object(i.b)(["tipPopupShow","errMsg"])),methods:{eventClosePopup:function(t){this.$refs.myPopupBox.contains(t.target)||this.closePopup()},closePopup:function(){this.$store.dispatch("errAction",{bool:!1,msg:""})}}},p={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"show",rawName:"v-show",value:t.tipPopupShow,expression:"tipPopupShow"}],staticClass:"myPopup",on:{click:function(e){return t.eventClosePopup(e)}}},[o("div",{ref:"myPopupBox",staticClass:"myPopup-tip"},[o("h3",{staticClass:"title"},[t._v(t._s(t.errMsg))]),t._v(" "),o("button",{staticClass:"secret-btn",on:{click:function(e){return t.closePopup()}}},[t._v(t._s(t.$t("bindPhone.text12")))])])])},staticRenderFns:[]};var r=o("VU/8")(c,p,!1,function(t){o("R8mK")},"data-v-870ccf4e",null);e.default=r.exports},R8mK:function(t,e){}});