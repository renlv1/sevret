webpackJsonp([33],{"4lQM":function(t,e){},CA4I:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={data:function(){return{currentPage:1,pagesTotal:1,sieBuyLogData:Object}},computed:{propPage:function(){return this.pagesTotal}},components:{vTurnPage:function(t){return a.e(52).then(function(){var e=[a("Non3")];t.apply(null,e)}.bind(this)).catch(a.oe)}},mounted:function(){var t=this;this.$nextTick(function(){t.getSieBuyLog(1)})},methods:{orderStatus:function(t){return 16===t?this.$t("log.sieBuyLog.text7"):""},getSieBuyLog:function(t){var e=this,a=new FormData;a.append("pageIndex",t),a.append("pageSize",20),a.append("queryType",5),this.$http.post(this.$api+"/tradesie/queryOrderList",a).then(function(t){t.data.success&&(e.sieBuyLogData=t.data.data,e.pagesTotal=t.data.mapData.totalPage,0===e.sieBuyLogData.length&&(e.pagesTotal=0))}).catch(function(t){console.log(t)})},parentTurnPage:function(t){this.currentPage=t,this.getSieBuyLog(t)}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"secret-log secret-content72"},[a("h3",{staticClass:"secret-title"},[t._v(t._s(t.$t("log.sieBuyLog.text1")))]),t._v(" "),a("table",{staticClass:"secret-table"},[a("tr",[a("td",[t._v(t._s(t.$t("log.sieBuyLog.text2")))]),t._v(" "),a("td",[t._v(t._s(t.$t("log.sieBuyLog.text3")))]),t._v(" "),a("td",[t._v(t._s(t.$t("log.sieBuyLog.text4")))]),t._v(" "),a("td",[t._v(t._s(t.$t("log.sieBuyLog.text5")))]),t._v(" "),a("td",[t._v(t._s(t.$t("log.sieBuyLog.text6")))])]),t._v(" "),t._l(t.sieBuyLogData,function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.id))]),t._v(" "),a("td",[t._v(t._s(e.unitPrice)+" USD")]),t._v(" "),a("td",[t._v(t._s(t._f("fourNumber")(e.amount)))]),t._v(" "),a("td",[t._v(t._s(t.orderStatus(e.orderStatus)))]),t._v(" "),a("td",[a("router-link",{staticClass:"secret-a",attrs:{to:{path:"/home/sieBuyLog/sieBuyLogDetail",query:{sieBuyObj:JSON.stringify(e)}}}},[t._v(t._s(t.$t("log.text20")))])],1)])})],2),t._v(" "),a("v-turnPage",{ref:"turnPage",attrs:{propsPage:t.propPage},on:{orderLogTrunPage:t.parentTurnPage}})],1)},staticRenderFns:[]};var o=a("VU/8")(s,n,!1,function(t){a("4lQM")},"data-v-54952d3f",null);e.default=o.exports}});