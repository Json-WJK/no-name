(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-53eb"],{"9CXk":function(e,t,r){"use strict";r.r(t);var s=r("QbLZ"),o=r.n(s),i=r("YEIV"),a=r.n(i),l=r("L2JU"),n=r("q9s1"),u=r("LhgM"),d={data:function(){var e;return{ruleForm:{},checked:!1,fileList:[],addressList1:[],addressList2:[],addressList3:[],rules:(e={authorizedPersonName:[{required:!0,message:"请输入授权人姓名",trigger:"blur"}],authorizedPersonAddress:[{required:!0,message:"请输入授权人联系地址",trigger:"blur"}],authorizedPersonMobilephone:[{required:!0,message:"请输入授权人姓名",trigger:"blur"}]},a()(e,"authorizedPersonMobilephone",[{required:!0,validator:function(e,t,r){if(!t)return r(new Error("手机号不能为空"));var s=/^1[3|4|5|7|8][0-9]\d{8}$/;if(console.log(s.test(t)),!s.test(t))return r(new Error("请输入正确的手机号"));r()},trigger:"blur"}]),a()(e,"authorizedPersonNumber",[{required:!0,message:"请填写身份证号码",trigger:"blur"},{pattern:/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,message:"证件号码格式有误！",trigger:"blur"}]),a()(e,"openBankCity",[{required:!0,message:"请输入开户城市，如：北京",trigger:"blur"}]),a()(e,"openBranch",[{required:!0,message:"请输入开户行名称",trigger:"blur"}]),a()(e,"openName",[{required:!0,message:"请输入开户名称",trigger:"blur"}]),a()(e,"bankAccount",[{required:!0,message:"请输入银行账户",trigger:"blur"}]),a()(e,"openBank",[{required:!0,message:"请选择开户银行",trigger:"change"}]),a()(e,"businessLicenseCoding",[{required:!0,message:"请输入营业执照编码",trigger:"blur"}]),a()(e,"companyName",[{required:!0,message:"请输入公司名称",trigger:"blur"}]),a()(e,"displayName",[{required:!0,message:"请输入显示名称",trigger:"blur"}]),a()(e,"addressDetails",[{required:!0,message:"请输入显示名称",trigger:"blur"}]),a()(e,"businessNumber",[{required:!0,message:"请输入统一社会信用代码",trigger:"blur"}]),a()(e,"legalPersonName",[{required:!0,message:"请输入法人姓名",trigger:"blur"}]),a()(e,"legalPersonNumber",[{required:!0,message:"请填写身份证号码",trigger:"blur"},{pattern:/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,message:"证件号码格式有误！",trigger:"blur"}]),a()(e,"type",[{type:"array",required:!0,message:"请勾选资质声明",trigger:"change"}]),e),bankMenu:[{value:"1002",key:"工商银行"},{value:"1005",key:"农业银行"},{value:"1026",key:"中国银行"},{value:"1003",key:"建设银行"},{value:"1001",key:"招商银行"},{value:"1066",key:"邮政储蓄"},{value:"1020",key:"交通银行"},{value:"1004",key:"浦发银行"},{value:"1006",key:"民生银行"},{value:"1009",key:"兴业银行"},{value:"1010",key:"平安银行"},{value:"1021",key:"中信银行"},{value:"1025",key:"华夏银行"},{value:"1027",key:"广发银行"},{value:"1022",key:"光大银行"},{value:"1032",key:"北京银行"},{value:"1056",key:"宁波银行"}],action:"",pageEdit:!1,subLoading:!1}},created:function(){this.action="/sys/business/shopInfo/uploadAuthFile?shopId="+this.shop.shopId,this.pageEdit=!!this.$route.query.edit,this.getAddressInput(1,""),this.pageEdit&&this.getData()},methods:{getData:function(){var e=this;Object(n.a)(this.shop.shopId).then(function(t){console.log("店铺资质数据",t),e.authType=t.data.authType,e.fileList.push(t.data.urlObject),e.getAddressInput(2,t.data.addressProvinceCode),e.getAddressInput(3,t.data.addressCityCode),e.ruleForm=t.data})},submitForm:function(e){this.ruleForm.authorizedPersonName?this.ruleForm.authorizedPersonAddress?this.ruleForm.authorizedPersonMobilephone?this.ruleForm.authorizedPersonNumber?/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/.test(this.ruleForm.authorizedPersonNumber)?this.ruleForm.openBankCity?this.ruleForm.openBank?this.ruleForm.openBranch?this.ruleForm.openName?this.ruleForm.bankAccount?this.ruleForm.authFileUrl?this.checked?(this.subLoading=!0,this.ruleForm.auth_type=3,this.ruleForm.shopId=this.shop.shopId,this.ruleForm.bankAccount=this.ruleForm.bankAccount.replace(/\s+/g,""),console.log("提交的请求数据",this.ruleForm),this.pageEdit||this.newSub(),this.pageEdit&&this.editSub()):this.$message.error("请阅读并同意资质声明"):this.$message.error("请上传资质证明的压缩包"):this.$message.error("请输入正确的银行账户"):this.$message.error("请输入开户名称"):this.$message.error("请输入开户支行"):this.$message.error("请选择开户银行"):this.$message.error("请输入开户城市"):this.$message.error("输入的身份证号有误"):this.$message.error("请输入授权人身份证号"):this.$message.error("请输入授权人手机号"):this.$message.error("请输入授权人联系地址"):this.$message.error("请输入授权人信息")},newSub:function(){var e=this;console.log(this.ruleForm),Object(n.b)(this.ruleForm).then(function(t){console.log("店铺认证",t),200==t.code?(e.$message({message:"提交成功",type:"success"}),setTimeout(function(){e.$router.push({path:"/shop/shopAttestation"}),e.subLoading=!1},1e3)):(e.subLoading=!1,e.$message.error(t.message))})},editSub:function(){var e=this;Object(n.c)(this.ruleForm).then(function(t){console.log("店铺认证",t),200==t.code?(e.$message({message:"提交成功",type:"success"}),setTimeout(function(){e.$router.push({path:"/shop/shopAttestation"}),e.subLoading=!1},1e3)):(e.subLoading=!1,e.$message.error(t.message))})},address1:function(e){console.log("执行了"),this.addressList2=[],this.ruleForm.addressCityCode&&(this.ruleForm.addressCityCode=""),this.addressList3=[],this.ruleForm.addressCountyCode&&(this.ruleForm.addressCountyCode=""),this.getAddressInput(2,e)},address2:function(e){this.addressList3=[],this.ruleForm.addressCountyCode&&(this.ruleForm.addressCountyCode=""),this.getAddressInput(3,e)},getAddressInput:function(e,t){var r=this;Object(u.b)(e,t).then(function(t){console.log("获取下拉框地址",t),1!=e?2!=e?3!=e||(r.addressList3=t.data):r.addressList2=t.data:r.addressList1=t.data})},handleAvatarSuccess:function(e,t){console.log(e),console.log(t),this.ruleForm.authFileUrl=e.data.name,this.ruleForm.authFileName=e.data.orginName},handleExceed:function(e,t){this.$message.warning("当前限制上传 1 个文件")},handleRemove:function(e,t){console.log("删除",e,t),this.ruleForm.authFileUrl=""},beforeRemove:function(e,t){return this.$confirm("确定移除 "+e.name+"？")}},computed:o()({},Object(l.c)(["user","shop"]))},m=(r("E2so"),r("KHd+")),c=Object(m.a)(d,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"pageContent"},[s("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,"label-width":"150px"}},[s("h3",{staticClass:"header"},[e._v("个人店铺认证")]),e._v(" "),s("h3",{staticStyle:{"text-align":"center",color:"#F59A23"}},[e._v("温馨提示：个人注册的店铺由于没有营业执照，仅支持H5微商城，不支持小程序商城；一旦认证后，此店铺不能再切换其他类型的认证。")]),e._v(" "),s("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"20px"}},[s("div",{staticClass:"pageHead"},[e._v("授权人信息")]),e._v(" "),s("el-form-item",{attrs:{label:"授权人姓名：",required:""}},[s("el-input",{staticStyle:{width:"400px"},attrs:{maxlength:"10","show-word-limit":""},model:{value:e.ruleForm.authorizedPersonName,callback:function(t){e.$set(e.ruleForm,"authorizedPersonName","string"==typeof t?t.trim():t)},expression:"ruleForm.authorizedPersonName"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"联系地址：",required:""}},[s("el-input",{staticStyle:{width:"400px"},attrs:{maxlength:"100","show-word-limit":""},model:{value:e.ruleForm.authorizedPersonAddress,callback:function(t){e.$set(e.ruleForm,"authorizedPersonAddress","string"==typeof t?t.trim():t)},expression:"ruleForm.authorizedPersonAddress"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"手机号：",required:""}},[s("el-input",{staticStyle:{width:"400px"},attrs:{maxlength:"11","show-word-limit":""},model:{value:e.ruleForm.authorizedPersonMobilephone,callback:function(t){e.$set(e.ruleForm,"authorizedPersonMobilephone","string"==typeof t?t.trim():t)},expression:"ruleForm.authorizedPersonMobilephone"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"身份证号：",required:""}},[s("el-input",{staticStyle:{width:"400px"},attrs:{maxlength:"18","show-word-limit":""},model:{value:e.ruleForm.authorizedPersonNumber,callback:function(t){e.$set(e.ruleForm,"authorizedPersonNumber","string"==typeof t?t.trim():t)},expression:"ruleForm.authorizedPersonNumber"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"固定电话："}},[s("el-input",{staticStyle:{width:"400px"},attrs:{maxlength:"15","show-word-limit":""},model:{value:e.ruleForm.telephone,callback:function(t){e.$set(e.ruleForm,"telephone","string"==typeof t?t.trim():t)},expression:"ruleForm.telephone"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"官方网站："}},[s("el-input",{staticStyle:{width:"400px"},attrs:{maxlength:"50","show-word-limit":""},model:{value:e.ruleForm.website,callback:function(t){e.$set(e.ruleForm,"website","string"==typeof t?t.trim():t)},expression:"ruleForm.website"}})],1)],1),e._v(" "),s("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"20px"}},[s("div",{staticClass:"pageHead"},[e._v("结算信息")]),e._v(" "),s("el-form-item",{attrs:{label:"开户城市：",required:""}},[s("el-input",{staticStyle:{width:"400px"},attrs:{maxlength:"20","show-word-limit":""},model:{value:e.ruleForm.openBankCity,callback:function(t){e.$set(e.ruleForm,"openBankCity","string"==typeof t?t.trim():t)},expression:"ruleForm.openBankCity"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"开户银行：",required:""}},[s("el-select",{staticStyle:{width:"400px"},model:{value:e.ruleForm.openBank,callback:function(t){e.$set(e.ruleForm,"openBank",t)},expression:"ruleForm.openBank"}},e._l(e.bankMenu,function(e,t){return s("el-option",{key:t,attrs:{label:e.key,value:e.value}})}))],1),e._v(" "),s("el-form-item",{attrs:{label:"开户支行：",required:""}},[s("el-input",{staticStyle:{width:"400px"},attrs:{maxlength:"40","show-word-limit":""},model:{value:e.ruleForm.openBranch,callback:function(t){e.$set(e.ruleForm,"openBranch","string"==typeof t?t.trim():t)},expression:"ruleForm.openBranch"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"开户名称：",required:""}},[s("el-input",{staticStyle:{width:"400px"},attrs:{maxlength:"10","show-word-limit":""},model:{value:e.ruleForm.openName,callback:function(t){e.$set(e.ruleForm,"openName","string"==typeof t?t.trim():t)},expression:"ruleForm.openName"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"银行账户：",required:""}},[s("el-input",{staticStyle:{width:"400px"},attrs:{maxlength:"20","show-word-limit":""},model:{value:e.ruleForm.bankAccount,callback:function(t){e.$set(e.ruleForm,"bankAccount","string"==typeof t?t.trim():t)},expression:"ruleForm.bankAccount"}})],1)],1),e._v(" "),s("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"20px"}},[s("div",{staticClass:"pageHead"},[e._v("资质上传")]),e._v(" "),s("el-form-item",{attrs:{label:"上传资质：",required:""}},[s("el-upload",{staticClass:"upload-demo",staticStyle:{width:"440px"},attrs:{"file-list":e.fileList,action:e.action,"on-success":e.handleAvatarSuccess,"on-remove":e.handleRemove,"before-remove":e.beforeRemove,limit:1,"on-exceed":e.handleExceed}},[s("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),e._v(" "),s("div",{staticClass:"el-upload__tip",staticStyle:{color:"#EA2821"},attrs:{slot:"tip"},slot:"tip"},[e._v("请上传所有图片的“压缩包”")]),e._v(" "),s("div",{staticClass:"el-upload__tip",staticStyle:{color:"#EA2821"},attrs:{slot:"tip"},slot:"tip"},[e._v("此处需上传资质照片包括：商家手持身份证正面照、商家手持身份证背面照")])],1)],1),e._v(" "),s("el-form-item",{attrs:{label:"示例照片："}},[s("div",[s("span"),e._v(" "),s("el-image",{staticStyle:{"margin-right":"20px"},attrs:{src:r("PT21")}}),e._v(" "),s("el-image",{attrs:{src:r("v6Jf")}})],1)]),e._v(" "),s("el-form-item",{attrs:{prop:"type",label:"资质声明："}},[s("el-checkbox-group",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[s("el-checkbox",{attrs:{label:"我已阅读并同意: 保证本店铺内所售产品具备销售及相关资质，特此声明。",name:"type"}})],1)],1)],1),e._v(" "),s("el-form-item",{staticStyle:{"margin-top":"20px","text-align":"center"}},[s("el-button",{attrs:{loading:e.subLoading,type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("提 交")]),e._v(" "),s("el-button",{on:{click:function(t){e.$router.go(-1)}}},[e._v("返 回")])],1)],1)],1)},[],!1,null,"63f9491e",null);c.options.__file="individualAttestation.vue";t.default=c.exports},E2so:function(e,t,r){"use strict";var s=r("ep5a");r.n(s).a},LhgM:function(e,t,r){"use strict";r.d(t,"b",function(){return o}),r.d(t,"c",function(){return i}),r.d(t,"a",function(){return a});var s=r("t3Un");function o(e,t){return Object(s.a)({url:"/order/mall/district/getSysDistrict",method:"post",data:{level:e,code:t}})}function i(){return Object(s.a)({url:"/sys/business/shopInfo/getShopCategoryList",method:"get"})}function a(e){return Object(s.a)({url:"/sys/business/shopInfo/addShop",method:"post",data:e})}},PT21:function(e,t,r){e.exports=r.p+"static/img/idCardPositive.6f1b75e.jpg"},ep5a:function(e,t,r){},q9s1:function(e,t,r){"use strict";r.d(t,"a",function(){return o}),r.d(t,"b",function(){return i}),r.d(t,"c",function(){return a});var s=r("t3Un");function o(e){return Object(s.a)({url:"/sys/business/shopInfo/getShopAuthInfoByShopId?shopId="+e,method:"get"})}function i(e){return Object(s.a)({url:"/sys/business/shopInfo/insertShopAuthInfo",method:"post",data:e})}function a(e){return Object(s.a)({url:"/sys/business/shopInfo/updateShopAuthInfo",method:"post",data:e})}},v6Jf:function(e,t,r){e.exports=r.p+"static/img/idCardBack.16387d5.jpg"}}]);
//# sourceMappingURL=chunk-53eb.019c86ec.js.map