(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-08f3"],{HmJA:function(t,e,s){"use strict";s.r(e);var i=s("QbLZ"),a=s.n(i),o=s("L2JU"),n=s("t3Un");var r=s("iTGr"),c={data:function(){return{form:{},list:[],configShow:!1,configForm:{},fileList:[],configType:"new",subLoading:!1}},created:function(){this.payType=this.$route.query.payType,this.configForm.payType=this.payType,this.getData(),this.getTopData()},methods:{getData:function(){var t=this;(function(t,e){return Object(n.a)({url:"/sys/wechatPay/findWechatPay?shopId="+t+"&payType="+e,method:"get"})})(this.shop.shopId,this.payType).then(function(e){if(console.log("获取配置",e),200==e.code)if(0==e.data.length){t.configType="new";var s={invalid:0};s.payType=t.payType,t.list.push(s)}else t.configType="edit",t.list=e.data})},getTopData:function(){var t=this;Object(r.a)(this.shop.shopId,this.payType).then(function(e){console.log("获取公众号数据",e),t.form=e.data})},openConfig:function(t){var e=this;t.id?function(t,e,s){return Object(n.a)({url:"/sys/wechatPay/setPayInvalid?shopId="+t+"&payType="+e+"&payId="+s,method:"get"})}(this.shop.shopId,this.payType,t.id).then(function(t){console.log("开启",t),200==t.code?(e.$message({message:"开启成功",type:"success"}),e.getData()):e.$message.error(t.message)}):this.$message.error("微信支付自有模式还未配置完整。请配置完整后再进行开启。")},configShowFun:function(t){if(console.log("e",t),"edit"==this.configType){this.configForm=this.list[0];var e={name:this.list[0].certificateName,url:this.list[0].certificatePath};this.fileList.push(e)}console.log("打开弹框configType",this.configType),this.configForm.appId=this.form.authorizerAppid,this.configShow=!0},beforeAvatarUpload:function(t){console.log("上传之前",t);var e="application/x-pkcs12"===t.type;return e||this.$message.error("上传文件只能是 p12 格式!"),e},submitForm:function(){var t=this;console.log("configForm",this.configForm),this.configForm.mchName?this.configForm.mchId?this.configForm.mchKey?this.configForm.certificatePath?(this.configForm.shopId=this.shop.shopId,this.configForm.mchType=1,this.subLoading=!0,console.log("成功了",this.configForm,"this.configType",this.configType),"new"==this.configType&&function(t){return Object(n.a)({url:"/sys/wechatPay/addWechatPayInfo",method:"post",data:t})}(this.configForm).then(function(e){console.log("配置",e),200==e.code?(t.getData(),t.configShow=!1,t.$message({message:"配置成功",type:"success"}),setTimeout(function(){t.subLoading=!1},1e3)):(t.$message.error(e.message),t.subLoading=!1)}),"edit"==this.configType&&function(t){return Object(n.a)({url:"/sys/wechatPay/editWechatPayInfo",method:"post",data:t})}(this.configForm).then(function(e){console.log("配置",e),200==e.code?(t.getData(),t.configShow=!1,t.$message({message:"配置成功",type:"success"}),setTimeout(function(){t.subLoading=!1},1e3)):(t.$message.error(e.message),t.subLoading=!1)})):this.$message.error("请上传证书"):this.$message.error("请填写秘钥"):this.$message.error("请填写微信商户号"):this.$message.error("请填写微信商户名称")},p12Success:function(t,e){console.log("file",t,"fileList",e),this.configForm.certificatePath=t.data.name,this.configForm.certificateName=e.name},handleRemove:function(t,e){this.configForm.certificatePath="",this.configForm.certificateName=""}},computed:a()({},Object(o.c)(["user","shop"]))},l=(s("Re9B"),s("KHd+")),f=Object(l.a)(c,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pageContent"},[s("el-card",{attrs:{shadow:"always"}},[s("div",{staticClass:"item flex-row-start"},[s("div",{staticClass:"name"},[t._v("当前配置支付能力的渠道：")]),t._v(" "),s("div",{staticClass:"info"},[t._v(t._s(t.form.nickName))])])]),t._v(" "),s("el-card",{staticClass:"box",staticStyle:{"margin-top":"20px"},attrs:{shadow:"always"}},[s("div",{staticClass:"flex-row-start flex-wrap"},[s("div",{staticClass:"item flex-row-start"},[s("div",{staticClass:"name"},[t._v("渠道类型：")]),t._v(" "),s("div",{staticClass:"info"},[t._v(t._s(1==t.payType?"微信公众号":"微信小程序"))])]),t._v(" "),s("div",{staticClass:"item flex-row-start"},[s("div",{staticClass:"name"},[t._v("渠道授权主体：")]),t._v(" "),s("div",{staticClass:"info"},[t._v(t._s(t.form.principalName))])]),t._v(" "),s("div",{staticClass:"item flex-row-start"},[s("div",{staticClass:"name"},[t._v("APPID：")]),t._v(" "),s("div",{staticClass:"info"},[t._v(t._s(t.form.authorizerAppid))])]),t._v(" "),s("div",{staticClass:"item flex-row-start"},[s("div",{staticClass:"name"},[t._v("渠道昵称：")]),t._v(" "),s("div",{staticClass:"info"},[t._v(t._s(t.form.nickName))])]),t._v(" "),s("div",{staticClass:"item flex-row-start"},[s("div",{staticClass:"name"},[t._v("微信认证状态：")]),t._v(" "),-1==t.form.verifyTypeInfo?s("el-tag",{attrs:{type:"danger"}},[t._v("未认证")]):t._e(),t._v(" "),1==t.payType&&0==t.form.verifyTypeInfo?s("el-tag",{attrs:{type:"success"}},[t._v("微信认证")]):t._e(),t._v(" "),2==t.payType&&0==t.form.verifyTypeInfo?s("el-tag",{attrs:{type:"danger"}},[t._v("未认证")]):t._e(),t._v(" "),1==t.payType&&1==t.form.verifyTypeInfo?s("el-tag",{attrs:{type:"success"}},[t._v("新浪微博认证")]):t._e(),t._v(" "),2==t.payType&&1==t.form.verifyTypeInfo?s("el-tag",{attrs:{type:"success"}},[t._v("已认证")]):t._e(),t._v(" "),2==t.form.verifyTypeInfo?s("el-tag",{attrs:{type:"success"}},[t._v("腾讯微博认证")]):t._e(),t._v(" "),3==t.form.verifyTypeInfo?s("el-tag",{attrs:{type:"warning"}},[t._v("已资质认证通过但还未通过名称认证")]):t._e(),t._v(" "),4==t.form.verifyTypeInfo?s("el-tag",{attrs:{type:"warning"}},[t._v("已资质认证通过、还未通过名称认证，但通过了新浪微博认证")]):t._e(),t._v(" "),5==t.form.verifyTypeInfo?s("el-tag",{attrs:{type:"success"}},[t._v("已资质认证通过、还未通过名称认证，但通过了腾讯微博认证")]):t._e()],1)])]),t._v(" "),s("el-card",{staticClass:"box",staticStyle:{"margin-top":"20px"},attrs:{shadow:"always"}},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list}},[s("el-table-column",{attrs:{label:"支付方式"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("微信支付")]}}])}),t._v(" "),s("el-table-column",{attrs:{label:"模式"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{staticClass:"flex-row-center iBox",attrs:{data:e}},[s("span",[t._v("自有模式")]),t._v(" "),s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"商户使用自己在微信支付官网自主申请的微信公众号支付,资金由微信支付结算,手续费率由微信支付官方决定。",placement:"top"}},[s("i",{staticClass:"el-icon-question item"})])],1)]}}])}),t._v(" "),s("el-table-column",{attrs:{label:"启停状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.invalid?s("div",{staticStyle:{color:"#F56C6C"}},[t._v("未启用")]):t._e(),t._v(" "),1==e.row.invalid?s("div",{staticStyle:{color:"#67C23A"}},[t._v("启用")]):t._e()]}}])}),t._v(" "),s("el-table-column",{attrs:{label:"配置指引"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-button",{attrs:{type:"text",size:"small",data:e}},[t._v("查看指引")])]}}])}),t._v(" "),s("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.invalid?s("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){t.openConfig(e.row)}}},[t._v("开启")]):t._e(),t._v(" "),s("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){t.configShowFun(e.row)}}},[t._v("配置")])]}}])})],1)],1),t._v(" "),s("el-dialog",{attrs:{title:"支付配置",visible:t.configShow,width:"50%"},on:{"update:visible":function(e){t.configShow=e}}},[s("el-form",{ref:"configForm",staticClass:"demo-ruleForm",attrs:{model:t.configForm,"label-width":"120px"}},[s("el-form-item",{attrs:{label:"配置渠道："}},[s("div",[t._v(t._s(1==t.payType?"微信公众号":"微信小程序"))])]),t._v(" "),s("el-form-item",{attrs:{label:"支付产品："}},[s("div",[t._v("微信支付")])]),t._v(" "),s("el-form-item",{attrs:{label:"支付模式："}},[s("div",[t._v("自有模式")])]),t._v(" "),s("el-form-item",{attrs:{label:"微信商户名称：",required:""}},[s("el-input",{staticStyle:{width:"400px"},attrs:{maxlength:"30","show-word-limit":""},model:{value:t.configForm.mchName,callback:function(e){t.$set(t.configForm,"mchName","string"==typeof e?e.trim():e)},expression:"configForm.mchName"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"微信商户号：",required:""}},[s("el-input",{staticStyle:{width:"400px"},attrs:{maxlength:"15","show-word-limit":""},model:{value:t.configForm.mchId,callback:function(e){t.$set(t.configForm,"mchId","string"==typeof e?e.trim():e)},expression:"configForm.mchId"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"APPID："}},[s("div",[t._v(t._s(t.configForm.appId))])]),t._v(" "),s("el-form-item",{attrs:{label:"秘钥：",required:""}},[s("el-input",{staticStyle:{width:"400px"},attrs:{maxlength:"32","show-word-limit":""},model:{value:t.configForm.mchKey,callback:function(e){t.$set(t.configForm,"mchKey","string"==typeof e?e.trim():e)},expression:"configForm.mchKey"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"证书：",required:""}},[s("el-upload",{staticClass:"upload-demo",attrs:{action:"/sys/wechatPay/uploadCertificatePath",name:"file","on-success":t.p12Success,"on-remove":t.handleRemove,"before-upload":t.beforeAvatarUpload,limit:1,"file-list":t.fileList}},[s("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")]),t._v(" "),s("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传p12文件")])],1)],1),t._v(" "),s("el-form-item",[s("el-button",{attrs:{loading:t.subLoading,type:"primary"},on:{click:function(e){t.submitForm("ruleForm")}}},[t._v("编 辑")]),t._v(" "),s("el-button",{on:{click:function(e){t.configShow=!1}}},[t._v("关 闭")])],1)],1)],1)],1)},[],!1,null,"72e59555",null);f.options.__file="configList.vue";e.default=f.exports},Re9B:function(t,e,s){"use strict";var i=s("nMKf");s.n(i).a},iTGr:function(t,e,s){"use strict";s.d(e,"b",function(){return a}),s.d(e,"c",function(){return o}),s.d(e,"a",function(){return n});var i=s("t3Un");function a(t){return Object(i.a)({url:"/sys/wechatPay/getShopPayType?shopId="+t,method:"get"})}function o(t,e){return Object(i.a)({url:"/sys/wechatPay/setShopPayType?shopId="+t+"&payType="+e,method:"get"})}function n(t,e){return Object(i.a)({url:"/sys/businessWechat/findShopMpWechat?shopId="+t+"&wechatType="+e,method:"get"})}},nMKf:function(t,e,s){}}]);
//# sourceMappingURL=chunk-08f3.1fed687a.js.map