webpackJsonp([27],{"t+lK":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={data:function(){return{sieBuyDetailData:Object}},components:{vBreadcrumb:function(t){return a.e(51).then(function(){var e=[a("1JPr")];t.apply(null,e)}.bind(this)).catch(a.oe)}},mounted:function(){var t=this;this.$nextTick(function(){t.$route.query.sieBuyObj&&(t.sieBuyDetailData=JSON.parse(t.$route.query.sieBuyObj))})},methods:{orderStatus:function(t){return 16===t?this.$t("log.sieBuyLog.text7"):""}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sieBuyLogDetail secret-content72"},[a("v-breadcrumb",{attrs:{breadcrumbList:t.$t("log.sieBuyLogDetail.breadcrumbList")}}),t._v(" "),a("table",{staticClass:"detail-table"},[a("tr",[a("td",[t._v(t._s(t.$t("log.sieBuyLog.text2")))]),t._v(" "),a("td",[t._v(t._s(t.sieBuyDetailData.id))])]),t._v(" "),a("tr",[a("td",[t._v(t._s(t.$t("log.sieBuyLog.text3")))]),t._v(" "),a("td",[t._v(t._s(t.sieBuyDetailData.unitPrice)+" USD")])]),t._v(" "),a("tr",[a("td",[t._v(t._s(t.$t("log.sieBuyLogDetail.text1")))]),t._v(" "),a("td",[t._v(t._s(t._f("fourNumber")(t.sieBuyDetailData.amount)))])]),t._v(" "),a("tr",[a("td",[t._v(t._s(t.$t("log.sieBuyLogDetail.text2")))]),t._v(" "),a("td",[t._v(t._s(t._f("fourNumber")(t.sieBuyDetailData.enterPrice))+" USD")])]),t._v(" "),a("tr",{staticClass:"hashTr"},[a("td",[t._v(t._s(t.$t("log.sieBuyLogDetail.text3")))]),t._v(" "),a("td",[t._v(t._s(t.$changeDate(t.sieBuyDetailData.transactionTime,"/",1)))])]),t._v(" "),a("tr",[a("td",[t._v(t._s(t.$t("log.sieBuyLogDetail.text4")))]),t._v(" "),a("td",[t._v(t._s(t.orderStatus(t.sieBuyDetailData.orderStatus)))])])])],1)},staticRenderFns:[]};var r=a("VU/8")(i,s,!1,function(t){a("vnDk")},"data-v-70dafa1c",null);e.default=r.exports},vnDk:function(t,e){}});