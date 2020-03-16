(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4b22"],{KOxQ:function(e,t,o){"use strict";o.d(t,"b",function(){return s}),o.d(t,"c",function(){return a}),o.d(t,"f",function(){return i}),o.d(t,"d",function(){return n}),o.d(t,"a",function(){return l}),o.d(t,"g",function(){return u}),o.d(t,"e",function(){return c});var r=o("t3Un");function s(e,t){return Object(r.a)({url:"/sys/business/shopInfo/getShopInfoList?userId="+e+"&shopType="+t,method:"get"})}function a(e){return Object(r.a)({url:"/user/business/user/getUserInfo?userId="+e,method:"get"})}function i(e){return Object(r.a)({url:"/sys/business/shopInfo/updateShopStatus",method:"post",data:e})}function n(e){return Object(r.a)({url:"/user/business/user/updatePassword",method:"post",data:e})}function l(e){return Object(r.a)({url:"/sys/business/shopInfo/getShopInfoById?shopId="+e,method:"get"})}function u(e){return Object(r.a)({url:"/user/business/user/updateUserInfo",method:"post",data:e})}function c(e){return Object(r.a)({url:"/sys/business/shopInfo/updateShopInfo",method:"post",data:e})}},PMVo:function(e,t,o){"use strict";var r=o("x2T1");o.n(r).a},jb8q:function(e,t,o){"use strict";o.r(t);var r=o("QbLZ"),s=o.n(r),a=o("YEIV"),i=o.n(a),n=o("X4fA"),l=o("L2JU"),u=o("KOxQ"),c={data:function(){return{ruleForm:{},rules:{logoUrl:[{required:!0,message:"请上传店铺图片",trigger:"blur"}],shopName:[{required:!0,message:"请输入店铺名称",trigger:"blur"},{min:1,max:20,message:"长度在 1 到 20 个字符",trigger:"blur"}],contactNumber:[{required:!0,validator:function(e,t,o){if(!t)return o(new Error("手机号不能为空"));var r=/^1[3|4|5|7|8][0-9]\d{8}$/;if(console.log(r.test(t)),!r.test(t))return o(new Error("请输入正确的手机号"));o()},trigger:"blur"}]},actions:"",subLoading:!1}},created:function(){this.getData(),this.actions="/sys/business/shopInfo/uploadShopLogo?shopId="+this.shop.shopId},mounted:function(){new this.clipboard(".copyBtn")},methods:i()({copyLink:function(){this.$message({message:"复制成功",type:"success"})},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;console.log("提交的数据",t.ruleForm),t.subLoading=!0,Object(u.e)(t.ruleForm).then(function(e){console.log("编辑店铺",e),200==e.code?(t.$message({message:"编辑店铺成功",type:"success"}),t.getData(),setTimeout(function(){t.subLoading=!1},1e3)):(t.subLoading=!1,t.$message.error(e.message))})})},getData:function(){var e=this;Object(u.a)(this.shop.shopId).then(function(t){console.log("查看店铺详情",t),e.ruleForm=t.data,e.$store.commit("SET_SHOP_NAME",t.data.shopName),e.$store.commit("SET_SHOP_LOGO",t.data.logoUrl)})},licenseImgSuccess:function(e,t){console.log("res",e),console.log("file",t),console.log(e.data.fileUrl),this.ruleForm.logoUrl=e.data.name},beforeAvatarUpload:function(e){var t=void 0,o=e.type;t="image/jpeg"===o||"image/jpg"===o||"image/bmp"===o||"image/gif"===o||"image/png"===o;var r=e.size/1024/1024<5;return t||this.$message.error("上传图片只能是 .jpg .jpeg .bmp .gif .png 格式!"),r||this.$message.error("上传图片大小不能超过 5MB!"),t&&r},deleteLIC:function(e){console.log("删除了",e),this.ruleForm.logoUrl=""},handleAvatarSuccess:function(e,t){this.imageUrl=URL.createObjectURL(t.raw)}},"beforeAvatarUpload",function(e){console.log("file",e);var t="image/jpeg"===e.type||"image/png",o=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 或 PNG 格式!"),o||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&o}),computed:s()({},Object(l.c)(["shop"]),{headers:function(){return{Authorization:"Bearer "+Object(n.a)()}}})},m=(o("PMVo"),o("KHd+")),p=Object(m.a)(c,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"pageContent"},[o("el-card",{staticClass:"box-card"},[o("div",{staticClass:"pageHead"},[e._v("店铺基本信息")]),e._v(" "),o("div",{staticClass:"form"},[o("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"140px"}},[o("el-form-item",{attrs:{label:"店铺LOGO：",prop:"logoUrl"}},[o("el-upload",{staticClass:"avatar-uploader",attrs:{headers:e.headers,action:e.actions,name:"file","show-file-list":!1,"on-success":e.licenseImgSuccess,"before-upload":e.beforeAvatarUpload}},[o("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("建议尺寸400*400像素，仅支持jpg，png格式")]),e._v(" "),e.ruleForm.logoUrl?o("img",{staticClass:"avatar",attrs:{src:e.ruleForm.logoUrl}}):o("i",{staticClass:"el-icon-plus avatar-uploader-icon"}),e._v(" "),e.ruleForm.logoUrl?o("div",{staticClass:"el-upload__tip",staticStyle:{width:"178px","text-align":"center"},attrs:{slot:"tip"},slot:"tip"},[o("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:""},on:{click:e.deleteLIC}})],1):e._e()])],1),e._v(" "),o("el-form-item",{attrs:{label:"店铺名称：",prop:"shopName"}},[o("el-input",{staticStyle:{width:"400px"},model:{value:e.ruleForm.shopName,callback:function(t){e.$set(e.ruleForm,"shopName",t)},expression:"ruleForm.shopName"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"联系电话：",prop:"contactNumber"}},[o("el-input",{staticStyle:{width:"400px"},model:{value:e.ruleForm.contactNumber,callback:function(t){e.$set(e.ruleForm,"contactNumber",t)},expression:"ruleForm.contactNumber"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"店铺介绍："}},[o("el-input",{staticStyle:{width:"400px"},attrs:{type:"textarea",placeholder:"请输入内容",maxlength:"30","show-word-limit":""},model:{value:e.ruleForm.shopComment,callback:function(t){e.$set(e.ruleForm,"shopComment",t)},expression:"ruleForm.shopComment"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"店铺首页地址："}},[o("div",{staticClass:"flex-row-start"},[o("div",{staticStyle:{"margin-right":"20px"}},[o("img",{staticStyle:{width:"100px",height:"100px"},attrs:{src:e.ruleForm.shopIndexImgUrl,alt:""}}),e._v(" "),o("div",{staticClass:"tac"},[e._v("H5")])]),e._v(" "),2!=e.ruleForm.shopMiniStatus?o("div",[o("img",{staticStyle:{width:"100px",height:"100px"},attrs:{src:e.ruleForm.miniIndexImgUrl,alt:""}}),e._v(" "),o("div",{staticClass:"tac"},[e._v("小程序")])]):e._e()])]),e._v(" "),o("el-form-item",{attrs:{label:"图片云盘空间："}},[o("div",[e._v(e._s(e.ruleForm.pictureSpaceSize)+" / "+e._s(e.ruleForm.pictureSpaceSize))])]),e._v(" "),o("el-form-item",{staticStyle:{"text-align":"center"}},[o("el-button",{attrs:{loading:e.subLoading,type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("保存店铺信息")]),e._v(" "),o("el-button",{staticClass:"copyBtn",attrs:{"data-clipboard-text":e.ruleForm.shopIndexUrl},on:{click:e.copyLink}},[e._v("复制店铺地址")])],1)],1)],1)])],1)},[],!1,null,null,null);p.options.__file="shopInformation.vue";t.default=p.exports},x2T1:function(e,t,o){}}]);
//# sourceMappingURL=chunk-4b22.b2a5e465.js.map