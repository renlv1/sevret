webpackJsonp([2],{XM1j:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={data:function(){return{processingResults:"",imgData:[],ordeOrderStatus:"",orderId:this.$route.query.orderId,depositAmountInfo:"",contentType:"",content:"",tipShow:"",problemId:this.$route.query.problemId}},created:function(){this.getDepositDetail(),this.getComplainDetial()},methods:{getDepositDetail:function(){var t=this,e=this.$api+"/deposit/depositDetail?depositId="+this.orderId;this.$http.post(e).then(function(e){var a=e.data;!0===a.success&&"success"===a.status&&(t.depositAmountInfo=a.data.depositAmount,5===a.data.status?t.ordeOrderStatus=t.$t("appealDetail.text13"):4===a.data.payStatus&&(t.ordeOrderStatus=t.$t("appealDetail.text14")))})},getComplainDetial:function(){var t=this,e=this;this.$http.get(this.$api+"/problem/get?problemId="+this.problemId).then(function(a){if(a.data.success){var s=a.data.data;switch(t.imgData=a.data.data.userProblem.images,a.data.data.userProblem.contentType){case 1:e.contentType=t.$t("appealDetail.text15");break;case 2:e.contentType=t.$t("appealDetail.text16");break;case 3:e.contentType=t.$t("appealDetail.text17");break;default:e.contentType=t.$t("appealDetail.text16")}t.tipShow=a.data.data.userProblem.problemStatus,0!==t.tipShow&&(t.processingResults=s.managerReply),t.content=a.data.data.userProblem.content}}).catch(function(t){console.log(t)})}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"appealDetail secret-content66"},[1===parseInt(t.$route.query.way)?a("div",{staticClass:"breadcrumb"},[a("router-link",{attrs:{to:{path:"/home/recharge"}}},[t._v(t._s(t.$t("appealDetail.text1"))),a("i")]),t._v(" "),a("router-link",{attrs:{to:{path:"/home/recharge/rechargeDetail",query:{orderId:t.$route.query.orderId,way:1}}}},[t._v(t._s(t.$t("appealDetail.text2"))),a("i")]),t._v(" "),a("a",[t._v(t._s(t.$t("appealDetail.text3")))])],1):t._e(),t._v(" "),2===parseInt(t.$route.query.way)?a("div",{staticClass:"breadcrumb"},[a("router-link",{attrs:{to:{path:"/home/fiat"}}},[t._v(t._s(t.$t("appealDetail.text4"))),a("i")]),t._v(" "),a("router-link",{attrs:{to:{path:"/home/fiat/rechargeDetail",query:{orderId:t.$route.query.orderId,way:2}}}},[t._v(t._s(t.$t("appealDetail.text5"))),a("i")]),t._v(" "),a("a",[t._v(t._s(t.$t("appealDetail.text3")))])],1):t._e(),t._v(" "),a("div",{staticClass:"orderInfo"},[a("p",[t._v(t._s(t.$t("appealDetail.text6"))+"："+t._s(t.orderId))]),t._v(" "),a("p",[t._v(t._s(t.$t("appealDetail.text7"))+"："+t._s(t.ordeOrderStatus))]),t._v(" "),a("p",{staticClass:"rechargeMoney"},[t._v(t._s(t.$t("appealDetail.text8"))+"："),a("span",[t._v(t._s(t._f("fourNumber")(t.depositAmountInfo))+"USD")])])]),t._v(" "),a("div",{staticClass:"complain-type"},[a("p",[t._v(t._s(t.$t("appealDetail.text9"))+"："+t._s(t.contentType))]),t._v(" "),a("p",[t._v(t._s(t.$t("appealDetail.text10"))+"：")]),t._v(" "),a("p",{staticClass:"complain-type-ct"},[t._v(t._s(t.content))]),t._v(" "),a("div",{staticClass:"image-box"},t._l(t.imgData,function(t,e){return a("div",{key:e,staticClass:"bg-img",style:{"background-image":"url("+t.imageUrl+")"}})}),0)]),t._v(" "),1===t.tipShow||0===t.tipShow?a("button",{staticClass:"secret-btn nopointer",attrs:{disabled:""}},[t._v(t._s(t.$t("appealDetail.text11")))]):t._e(),t._v(" "),2===t.tipShow?a("div",{staticClass:"processingResults"},[a("h3",[t._v(t._s(t.$t("appealDetail.text12")))]),t._v(" "),t._l(t.processingResults,function(e,s){return a("p",{key:s},[t._v(t._s(e.content))])})],2):t._e()])},staticRenderFns:[]};var i=a("VU/8")(s,r,!1,function(t){a("az8v")},"data-v-88d1baf8",null);e.default=i.exports},az8v:function(t,e){}});