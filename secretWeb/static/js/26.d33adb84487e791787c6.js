webpackJsonp([26],{CNRm:function(t,e){},Q66Y:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7t+N"),n=s.n(a),r={data:function(){return{timer:null,userImg:"",userName:""}},mounted:function(){var t=this;this.$nextTick(function(){t.getLoginQrUrl(),t.timer=setInterval(function(){t.confirmLogin()},5e3)})},destroyed:function(){clearInterval(this.timer)},methods:{getLoginQrUrl:function(){var t=this;this.$http.post(this.$api+"/danRobot/getQrCode").then(function(e){e.data.success?(t.address=e.data.data.qrUrlContent,t.getQrCode()):"NOT_LOGGEDIN"===e.data.resultCode&&t.$router.push("/login")}).catch(function(t){console.log(t)})},confirmLogin:function(){var t=this;this.$http.post(this.$api+"/danRobot/confirmLogin").then(function(e){e.data.success?(t.userImg=e.data.data.webChatInfo.wxImgUrl,t.userName=e.data.data.webChatInfo.userName,clearInterval(t.timer),t.$router.push({path:"/home/xiaodan/xiaodanFriend",query:{userImg:t.userImg,userName:t.userName}})):"NOT_LOGGEDIN"===e.data.resultCode&&t.$router.push("/login")}).catch(function(t){console.log(t)})},getQrCode:function(){var t=this.$utf16to8(this.address);n()("#ccQrCode").qrcode({render:"canvas",width:230,height:230,text:t})}}},i={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"xiaodan"},[s("div",{staticClass:"transferIn"},[s("h3",{staticClass:"secret-title"},[t._v("小单机器人")]),t._v(" "),s("p",{staticClass:"subtitle"},[t._v("小单机器人现提供实验性功能，托管微信聊天。通过用户扫码绑定微信后，小单可以利用微信接口与您的好友进行聊天。")]),t._v(" "),s("p",{staticClass:"tip"},[s("span",[t._v("温馨提醒：")]),t._v("由于微信接口限制，部分用户可能无法使用此功能。")]),t._v(" "),s("div",{staticClass:"qrCodeBox"},[s("div",{staticClass:"qrCode",attrs:{id:"ccQrCode"}}),t._v(" "),s("p",{staticClass:"qrCodeBox-tip"},[t._v("请使用微信扫描二维码登录微信网页版完成账号绑定")]),t._v(" "),s("p",{staticClass:"qrCodeBox-address"},[s("span",[t._v("温馨提示：")]),t._v("绑定时间会比较长，请耐心等待")])])])])}]};var o=s("VU/8")(r,i,!1,function(t){s("CNRm")},"data-v-71f452b2",null);e.default=o.exports}});