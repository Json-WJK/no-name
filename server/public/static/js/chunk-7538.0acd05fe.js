(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7538"],{"/T+u":function(t,e,s){"use strict";s.d(e,"b",function(){return i}),s.d(e,"a",function(){return r}),s.d(e,"e",function(){return o}),s.d(e,"d",function(){return l}),s.d(e,"c",function(){return m});var a=s("t3Un");function i(t){return Object(a.a)({url:"/user/business/userMember/getUserManagementList",method:"post",data:t})}function r(t){return Object(a.a)({url:"/user/business/userMember/getUserDetails",method:"post",data:t})}function o(t){return Object(a.a)({url:"/user/business/userMember/updateUserDetails",method:"post",data:t})}function l(t){return Object(a.a)({url:"/user/business/userMember/saveUserVipRecord",method:"post",data:t})}function m(t){return Object(a.a)({url:"/user/business/userMember/prohibitUserVip?id="+t,method:"post"})}},"7weS":function(t,e,s){"use strict";s.r(e);var a=s("QbLZ"),i=s.n(a),r=s("L2JU"),o=s("/T+u"),l={data:function(){return{form:{},remarkEditShow:!1,remarkEditLoading:!1,remarkEditForm:{},customerEditForm:{},editCustomerShow:!1,editCustomerLoading:!1}},created:function(){this.remarkEditForm.id=this.$route.query.id,this.getData()},methods:{getData:function(){var t=this;Object(o.a)({id:this.$route.query.id}).then(function(e){console.log("获取详情",e),200==e.code&&(t.form=e.data,t.form.allAddress=e.data.provinceName+e.data.cityName+e.data.districtName+e.data.address)})},newPage:function(){var t=this.$router.resolve({path:"/order/orderList",query:{receiverPhone:this.form.cellPhone}});window.open(t.href,"_blank")},showEdit:function(){console.log("编辑客户资料");var t={userName:this.form.userName,sex:""+this.form.sex,birthday:this.form.birthday,address:this.form.allAddress,wechatNumber:this.form.wechatNumber};this.customerEditForm=t,this.editCustomerShow=!0},subEditChange:function(){var t=this;this.customerEditForm.id=this.$route.query.id,console.log("更新客户资料请求的数据",this.customerEditForm),this.editCustomerLoading=!0,Object(o.e)(this.customerEditForm).then(function(e){console.log("更新客户资料",e),200==e.code?(console.log("成功",e.data),t.$message({message:e.message,type:"success"}),t.getData(),t.editCustomerShow=!1,setTimeout(function(){t.editCustomerLoading=!1},1e3)):(t.editCustomerLoading=!1,t.$message.error(e.message))})},remarkEdit:function(){this.remarkEditForm.remark=this.form.remark,this.remarkEditShow=!0},editSub:function(){var t=this;console.log("编辑备注"),this.remarkEditForm.remark?this.remarkEditForm.remark.length>50?this.$message.error("备注内容过长，在50字之内"):(this.remarkEditLoading=!0,Object(o.e)(this.remarkEditForm).then(function(e){console.log("编辑备注",e),200==e.code?(console.log("成功",e.data),t.$message({message:e.message,type:"success"}),t.getData(),t.remarkEditShow=!1,setTimeout(function(){t.remarkEditLoading=!1},1e3)):(t.remarkEditLoading=!1,t.$message.error(e.message))})):this.$message.error("请输入备注内容")},change:function(){this.$forceUpdate()}},computed:i()({},Object(r.c)(["user","shop"]))},m=(s("aq9R"),s("KHd+")),c=Object(m.a)(l,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pageContent"},[s("el-form",{staticClass:"demo-ruleForm",attrs:{"label-width":"140px",model:t.form}},[s("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"20px"}},[s("div",{staticClass:"pageHead"},[t._v("基本信息")]),t._v(" "),s("div",{staticClass:"flex-row-start"},[s("el-avatar",{staticStyle:{"margin-right":"40px"},attrs:{shape:"square",size:100,fit:"fill",src:t.form.headImageUrl?t.form.headImageUrl:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"}}),t._v(" "),s("div",{staticStyle:{flex:"1"}},[s("div",{staticClass:"flex-row-start"},[s("div",{staticClass:"flex-row-start",staticStyle:{"margin-right":"30px"}},[s("div",{staticClass:"item itemLabel"},[t._v("最近浏览时间:")]),t._v(" "),s("div",{staticClass:"item itemValue"},[t._v(t._s(t.form.lastAccess?t.form.lastAccess:"-"))])]),t._v(" "),s("div",{staticClass:"flex-row-start",staticStyle:{"margin-right":"30px"}},[s("div",{staticClass:"item itemLabel"},[t._v("手机号:")]),t._v(" "),s("div",{staticClass:"item itemValue"},[t._v(t._s(t.form.cellPhone?t.form.cellPhone:"-"))])]),t._v(" "),s("div",{staticClass:"flex-row-start",staticStyle:{"margin-right":"30px"}},[s("div",{staticClass:"item itemLabel"},[t._v("微信昵称:")]),t._v(" "),s("div",{staticClass:"item itemValue"},[t._v(t._s(t.form.nickName?t.form.nickName:"-"))])])]),t._v(" "),s("div",{staticClass:"flex-row-start"},[s("div",{staticClass:"flex-row-start",staticStyle:{"margin-right":"30px"}},[s("div",{staticClass:"item itemLabel"},[t._v("成为客户时间:")]),t._v(" "),s("div",{staticClass:"item itemValue"},[t._v("\n                "+t._s(t.form.firstTime)+"\n                "),s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"成为客户时间为用户首次下单时间",placement:"top"}},[s("i",{staticClass:"el-icon-question"})])],1)]),t._v(" "),s("div",{staticClass:"flex-row-start",staticStyle:{"margin-right":"30px"}},[s("div",{staticClass:"item itemLabel"},[t._v("收货地址:")]),t._v(" "),s("div",{staticClass:"item itemValue"},[t._v(t._s(t.form.address?t.form.address:"-"))])])]),t._v(" "),2==t.form.isVip?s("div",{staticClass:"flex-row-start"},[s("div",{staticClass:"flex-row-start",staticStyle:{"margin-right":"30px"}},[s("div",{staticClass:"item itemLabel"},[t._v("会员到期时间:")]),t._v(" "),s("div",{staticClass:"item itemValue"},[t._v("\n                "+t._s(t.form.endTime)+"\n              ")])])]):t._e(),t._v(" "),s("div",{staticClass:"flex-row-start"},[s("div",{staticClass:"flex-row-start",staticStyle:{"margin-right":"30px"}},[s("div",{staticClass:"item itemLabel"},[t._v("备注:")]),t._v(" "),s("div",{staticClass:"item itemValue"},[t._v("\n                "+t._s(t.form.remark)+"\n                "),s("el-button",{staticStyle:{"margin-left":"30px"},attrs:{type:"text"},on:{click:t.remarkEdit}},[t._v("编辑")])],1)])])])],1)]),t._v(" "),s("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"20px"}},[s("div",{staticClass:"pageHead"},[t._v("\n        客户资料\n        "),s("el-button",{staticStyle:{"margin-left":"50px"},on:{click:t.showEdit}},[t._v("编辑")])],1),t._v(" "),s("div",{staticClass:"flex-row-start flex-wrap"},[s("div",{staticClass:"flex-row-start",staticStyle:{"margin-right":"30px"}},[s("div",{staticClass:"item itemLabel"},[t._v("姓名:")]),t._v(" "),s("div",{staticClass:"item itemValue"},[t._v(t._s(t.form.userName?t.form.userName:"-"))])]),t._v(" "),s("div",{staticClass:"flex-row-start",staticStyle:{"margin-right":"30px"}},[s("div",{staticClass:"item itemLabel"},[t._v("性别:")]),t._v(" "),1==t.form.sex?s("div",{staticClass:"item itemValue"},[t._v("男")]):t._e(),t._v(" "),2==t.form.sex?s("div",{staticClass:"item itemValue"},[t._v("女")]):t._e(),t._v(" "),0==t.form.sex?s("div",{staticClass:"item itemValue"},[t._v("未知")]):t._e()]),t._v(" "),s("div",{staticClass:"flex-row-start",staticStyle:{"margin-right":"30px"}},[s("div",{staticClass:"item itemLabel"},[t._v("生日:")]),t._v(" "),s("div",{staticClass:"item itemValue"},[t._v(t._s(t.form.birthday?t.form.birthday:"-"))])]),t._v(" "),s("div",{staticClass:"flex-row-start",staticStyle:{"margin-right":"30px"}},[s("div",{staticClass:"item itemLabel"},[t._v("所在地区:")]),t._v(" "),s("div",{staticClass:"item itemValue"},[t._v(t._s(t.form.allAddress))])]),t._v(" "),s("div",{staticClass:"flex-row-start",staticStyle:{"margin-right":"30px"}},[s("div",{staticClass:"item itemLabel"},[t._v("微信号:")]),t._v(" "),s("div",{staticClass:"item itemValue"},[t._v(t._s(t.form.wechatNumber?t.form.wechatNumber:"-"))])])])]),t._v(" "),s("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"20px"}},[s("div",{staticClass:"pageHead"},[t._v("\n        交易统计\n        "),s("el-button",{staticStyle:{"margin-left":"50px"},on:{click:t.newPage}},[t._v("订单查询")])],1),t._v(" "),s("el-table",{attrs:{data:[t.form]}},[s("el-table-column",{attrs:{prop:"lastTime",label:"最近下单时间"}}),t._v(" "),s("el-table-column",{attrs:{prop:"userPrice",label:"客单价"}}),t._v(" "),s("el-table-column",{attrs:{prop:"orderAmount",label:"累计消费金额"}}),t._v(" "),s("el-table-column",{attrs:{prop:"orderTotal",label:"累计消费订单数"}}),t._v(" "),s("el-table-column",{attrs:{prop:"refundAmount",label:"累计退款金额"}}),t._v(" "),s("el-table-column",{attrs:{prop:"refundTotal",label:"累计退款商品数"}})],1)],1),t._v(" "),s("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"20px"}},[s("div",{staticClass:"pageHead"},[t._v("资产信息")])]),t._v(" "),s("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"20px"}},[s("div",{staticClass:"pageHead"},[t._v("会员权益")])])],1),t._v(" "),s("el-dialog",{attrs:{title:"编辑备注",visible:t.remarkEditShow,center:"",width:"50%","close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(e){t.remarkEditShow=e}}},[s("el-input",{attrs:{type:"textarea",placeholder:"请输入内容",maxlength:"50","show-word-limit":""},on:{input:function(e){t.change(e)}},model:{value:t.remarkEditForm.remark,callback:function(e){t.$set(t.remarkEditForm,"remark",e)},expression:"remarkEditForm.remark"}}),t._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(e){t.remarkEditShow=!1}}},[t._v("取 消")]),t._v(" "),s("el-button",{attrs:{loading:t.remarkEditLoading,type:"primary"},on:{click:t.editSub}},[t._v("确 定")])],1)],1),t._v(" "),s("el-dialog",{attrs:{title:"编辑客户资料",visible:t.editCustomerShow,width:"70%","close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(e){t.editCustomerShow=e}}},[s("el-form",{staticClass:"demo-ruleForm",attrs:{model:t.customerEditForm,"label-width":"140px"}},[s("el-form-item",{attrs:{label:"客户姓名：",required:""}},[s("el-input",{staticStyle:{width:"400px"},attrs:{type:"text",placeholder:"请输入姓名",maxlength:"10","show-word-limit":""},on:{input:t.change},model:{value:t.customerEditForm.userName,callback:function(e){t.$set(t.customerEditForm,"userName",e)},expression:"customerEditForm.userName"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"性别：",required:""}},[s("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.customerEditForm.sex,callback:function(e){t.$set(t.customerEditForm,"sex",e)},expression:"customerEditForm.sex"}},[s("el-option",{attrs:{label:"未知",value:"0"}}),t._v(" "),s("el-option",{attrs:{label:"男",value:"1"}}),t._v(" "),s("el-option",{attrs:{label:"女",value:"2"}})],1)],1),t._v(" "),s("el-form-item",{attrs:{label:"生日：",required:""}},[s("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:t.customerEditForm.birthday,callback:function(e){t.$set(t.customerEditForm,"birthday",e)},expression:"customerEditForm.birthday"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"所在地区：",required:""}},[s("el-input",{staticStyle:{width:"400px"},attrs:{type:"text",placeholder:"请输入地址",maxlength:"30","show-word-limit":""},on:{input:t.change},model:{value:t.customerEditForm.address,callback:function(e){t.$set(t.customerEditForm,"address",e)},expression:"customerEditForm.address"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"微信号：",required:""}},[s("el-input",{staticStyle:{"max-width":"400px"},attrs:{maxlength:"20","show-word-limit":""},on:{input:t.change},model:{value:t.customerEditForm.wechatNumber,callback:function(e){t.$set(t.customerEditForm,"wechatNumber","string"==typeof e?e.trim():e)},expression:"customerEditForm.wechatNumber"}})],1),t._v(" "),s("el-form-item",[s("el-button",{on:{click:function(e){t.editCustomerShow=!1}}},[t._v("取消")]),t._v(" "),s("el-button",{attrs:{loading:t.editCustomerLoading,type:"primary"},on:{click:t.subEditChange}},[t._v("确定")])],1)],1)],1)],1)},[],!1,null,"3262f9ff",null);c.options.__file="customerDetails.vue";e.default=c.exports},aq9R:function(t,e,s){"use strict";var a=s("lfgY");s.n(a).a},lfgY:function(t,e,s){}}]);
//# sourceMappingURL=chunk-7538.0acd05fe.js.map