(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login"],{"0f0f":function(t,e,o){"use strict";o.r(e);var a=o("9f5f"),i=o.n(a);for(var n in a)"default"!==n&&function(t){o.d(e,t,(function(){return a[t]}))}(n);e["default"]=i.a},4427:function(t,e,o){var a=o("e1c4");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=o("4f06").default;i("989a38de",a,!0,{sourceMap:!1,shadowMode:!1})},"4f9b":function(t,e,o){"use strict";var a=o("4427"),i=o.n(a);i.a},"6ffe":function(t,e,o){"use strict";o("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o("b4a7"),i={post:function(t,e){return new Promise((function(o){return uni.request({url:a.HTTP+t,data:e,header:{"content-type":"application/json"},method:"POST",timeout:1e4,success:function(t){console.log("走了"),o(t.data)}})}))},get:function(t,e){return new Promise((function(o){return uni.request({url:a.HTTP+t,data:e,header:{"content-type":"application/json"},method:"get",timeout:1e4,success:function(t){console.log("走了"),o(t.data)}})}))}},n=i;e.default=n},"82fd":function(t,e,o){"use strict";var a,i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"login"},[o("div",{staticClass:"logo"},[t._v("登录")]),o("v-uni-input",{staticClass:"account",attrs:{maxlength:"11",placeholder:"输入手机号",type:"text"},model:{value:t.formData.logoPhone,callback:function(e){t.$set(t.formData,"logoPhone",e)},expression:"formData.logoPhone"}}),o("v-uni-input",{staticClass:"password",attrs:{placeholder:"输入密码",type:"text"},model:{value:t.formData.logoPassword,callback:function(e){t.$set(t.formData,"logoPassword",e)},expression:"formData.logoPassword"}}),o("div",{staticClass:"submit",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.login.apply(void 0,arguments)}}},[o("div",{staticClass:"cuIcon-right"})]),o("div",{staticClass:"registerPopUp",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.registerPopUp.apply(void 0,arguments)}}},[t._v("用户注册")]),o("v-uni-view",{class:t.registerPopUpShow?"cu-modal bottom-modal show":"cu-modal bottom-modal",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.registerPopUp.apply(void 0,arguments)}}},[o("v-uni-view",{staticClass:"cu-dialog",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.stop.apply(void 0,arguments)}}},[o("v-uni-view",{staticClass:"cu-bar bg-white"},[o("v-uni-view",{staticClass:"action text-blue",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.registerPopUp.apply(void 0,arguments)}}},[t._v("取消")]),t.hint?o("div",{staticClass:"hint"},[t._v(t._s(t.hintText))]):t._e(),o("v-uni-view",{staticClass:"action text-green",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.register.apply(void 0,arguments)}}},[t._v("注册")])],1),o("v-uni-view",{staticClass:"padding-xl"},[o("v-uni-input",{staticClass:"account",attrs:{maxlength:"11",placeholder:"输入手机号",type:"text"},model:{value:t.formData.registerPhone,callback:function(e){t.$set(t.formData,"registerPhone",e)},expression:"formData.registerPhone"}}),o("v-uni-input",{staticClass:"password",attrs:{placeholder:"输入密码",type:"text"},model:{value:t.formData.registerPassword,callback:function(e){t.$set(t.formData,"registerPassword",e)},expression:"formData.registerPassword"}}),o("v-uni-input",{staticClass:"password",attrs:{placeholder:"确认密码",type:"text"},model:{value:t.formData.PasswordAffirm,callback:function(e){t.$set(t.formData,"PasswordAffirm",e)},expression:"formData.PasswordAffirm"}})],1)],1)],1)],1)},n=[];o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return n})),o.d(e,"a",(function(){return a}))},9588:function(t,e,o){"use strict";o.r(e);var a=o("82fd"),i=o("0f0f");for(var n in i)"default"!==n&&function(t){o.d(e,t,(function(){return i[t]}))}(n);o("4f9b");var s,r=o("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"1cc9c9b1",null,!1,a["a"],s);e["default"]=c.exports},"9f5f":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o("f323"),i=o("e5d0"),n={data:function(){return{registerPopUpShow:!1,formData:{logoPhone:"",logoPassword:"",registerPhone:"",registerPassword:"",PasswordAffirm:""},hint:!1,hintText:""}},methods:{login:function(){if((0,a.isPoneAvailable)(this.formData.logoPhone))if(""!=this.formData.logoPassword){var t={phone:this.formData.logoPhone,upwd:this.formData.logoPassword};(0,i.login)(t).then((function(t){t.ok?(uni.showToast({title:"登录成功",icon:"none",duration:1500,mask:!0}),(0,i.getUserInfo)({uid:t.data.uid}).then((function(e){console.log(e),setTimeout((function(){e.ok&&e.data.uname&&e.data.avatar?(uni.setStorageSync("UID",t.data.uid),uni.setStorageSync("USERINFO",e.data),uni.redirectTo({url:"/pages/plaza"})):uni.redirectTo({url:"/pages/basicSetup?uid="+t.data.uid})}),1200)}))):uni.showToast({title:t.msg,icon:"none",duration:1500,mask:!0}),console.log(t,"登录情况")}))}else uni.showToast({title:"请将信息填写完整",icon:"none",duration:1500,mask:!1});else uni.showToast({title:"请输入正确的手机号",icon:"none",duration:1500,mask:!1})},register:function(){var t=this;if(!(0,a.isPoneAvailable)(this.formData.registerPhone))return this.hint=!0,void(this.hintText="请输入正确的手机号");if(this.formData.registerPassword!=this.formData.PasswordAffirm)return this.hint=!0,void(this.hintText="两次密码输入不一致");if(""==this.formData.registerPassword)return this.hint=!0,void(this.hintText="请将信息填写完整");this.hint=!1;var e={phone:this.formData.registerPhone,upwd:this.formData.registerPassword};(0,i.register)(e).then((function(e){e.ok?(uni.showToast({title:"注册成功",icon:"none",duration:1500,mask:!0}),setTimeout((function(){t.registerPopUp()}),1e3)):uni.showToast({title:e.msg,icon:"none",duration:1500,mask:!0}),console.log(e,"登录情况")})),console.log(this.formData,(0,a.isPoneAvailable)(this.formData.registerPhone))},registerPopUp:function(){this.registerPopUpShow=!this.registerPopUpShow,this.formData.registerPhone="",this.formData.registerPassword="",this.formData.PasswordAffirm=""},stop:function(){}}};e.default=n},e1c4:function(t,e,o){var a=o("24fb");e=a(!1),e.push([t.i,".login[data-v-1cc9c9b1]{height:100%;width:100%;position:absolute;top:0;left:0;background:#fff}.login uni-input[data-v-1cc9c9b1]{background:#eee;width:80%;margin:0 auto;border-radius:%?40?%;height:%?80?%;margin-top:%?20?%;color:#333;caret-color:#39b54a;text-align:center}.login .logo[data-v-1cc9c9b1]{margin-top:%?250?%;width:100%;text-align:center;font-size:%?45?%;color:#39b54a;margin-bottom:%?50?%}.login .submit[data-v-1cc9c9b1]{width:%?110?%;height:%?110?%;background:#eee;border-radius:50%;margin:%?70?% auto 0}.login .submit .cuIcon-right[data-v-1cc9c9b1]{width:100%;height:100%;text-align:center;line-height:%?110?%;font-size:%?55?%;color:#39b54a}.login .registerPopUp[data-v-1cc9c9b1]{position:absolute;bottom:%?50?%;left:0;color:#999;width:100%;text-align:center}.login .cu-dialog .action[data-v-1cc9c9b1]{font-size:%?32?%;margin-left:0}.login .hint[data-v-1cc9c9b1]{color:red}",""]),t.exports=e},e5d0:function(t,e,o){"use strict";var a=o("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.getUserMoment=e.setUserInfo=e.getUserInfo=e.basicSetup=e.login=e.register=void 0;var i=a(o("6ffe")),n=function(t){return i.default.post("/user/register",t)};e.register=n;var s=function(t){return i.default.post("/user/login",t)};e.login=s;var r=function(t){return i.default.post("/user/basicSetup",t)};e.basicSetup=r;var c=function(t){return i.default.post("/user/getUserInfo",t)};e.getUserInfo=c;var u=function(t){return i.default.post("/user/setUserInfo",t)};e.setUserInfo=u;var l=function(t){return i.default.get("/user/getUserMoment?userId=".concat(t))};e.getUserMoment=l},f323:function(t,e,o){"use strict";o("ac1f"),o("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.isPoneAvailable=e.isUserName=void 0;var a=function(t){var e=t.replace(/[\u4e00-\u9fa5]/g,"");return!(2*(t.length-e.length)+e.length<=12)};e.isUserName=a;var i=function(t){return/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(t)};e.isPoneAvailable=i}}]);