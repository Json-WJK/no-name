(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-22f6"],{"8GjM":function(t,e,a){"use strict";a.r(e);var s=a("QbLZ"),l=a.n(s),i=a("L2JU"),n=a("t3Un");var o={data:function(){return{auditSet:"",productSet:"",settleSet:"",settleDay:void 0}},created:function(){this.getRule()},mounted:function(){},methods:{getRule:function(){var t=this;(function(t){return Object(n.a)({url:"/sys/business/shopChannel/findChannelConfigInfoByShopId",method:"post",data:t})})({shopId:this.shop.shopId}).then(function(e){console.log(e),200==e.code?(t.auditSet=e.data.channelUserConfig.state,t.productSet=e.data.channelProductConfig.state,t.settleSet=e.data.channelCalculateConfig.state,1==e.data.channelCalculateConfig.state&&(t.settleDay=e.data.channelCalculateConfig.value)):t.$notify.error({title:"失败",message:e.message})})},saveRule:function(){var t=this;""!==this.auditSet?""!==this.productSet?""!==this.settleSet?1==this.settleSet&&void 0==this.settleDay||""==this.settleDay?this.$notify.error({title:"错误",message:"请填写交易完成天数"}):function(t){return Object(n.a)({url:"/sys/business/shopChannel/editChannelConfig",method:"post",data:t})}({shopId:this.shop.shopId,configList:[{configType:1,state:this.auditSet},{configType:2,state:this.productSet},{configType:3,state:this.settleSet,value:this.settleDay}]}).then(function(e){200==e.code?(t.$notify({title:"成功",message:"设置保存成功",type:"success"}),t.getRule()):t.$notify.error({title:"失败",message:e.message})}):this.$notify.error({title:"错误",message:"请选择分销结算设置"}):this.$notify.error({title:"错误",message:"请选择分销员商品设置"}):this.$notify.error({title:"错误",message:"请选择分销员审核设置"})}},computed:l()({},Object(i.c)(["user","shop"]))},r=(a("NZJM"),a("KHd+")),c=Object(r.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-card",{attrs:{shadow:"never"}},[a("h3",[t._v("分销设置"),a("span",{staticStyle:{"margin-left":"20px",color:"#67C23A"}},[t._v("温馨提示：请先完成该设置后，再进行分销商品和佣金的设置")])])]),t._v(" "),a("el-card",{staticClass:"operate-container",staticStyle:{"margin-top":"20px"},attrs:{shadow:"never"}},[a("el-form",{attrs:{"label-width":"50px"}},[a("h3",[t._v("分销员审核设置")]),t._v(" "),a("el-form-item",{attrs:{label:""}},[a("el-radio-group",{staticStyle:{"margin-top":"20px"},model:{value:t.auditSet,callback:function(e){t.auditSet=e},expression:"auditSet"}},[a("el-radio",{attrs:{label:1}},[t._v("分销员申请后自动通过")]),t._v(" "),a("el-radio",{attrs:{label:2}},[t._v("分销员申请后需要系统审核")])],1)],1),t._v(" "),a("h3",[t._v("分销员商品设置")]),t._v(" "),a("el-form-item",{attrs:{label:""}},[a("el-radio-group",{staticStyle:{"margin-top":"20px"},model:{value:t.productSet,callback:function(e){t.productSet=e},expression:"productSet"}},[a("el-radio",{attrs:{label:1}},[t._v("创建商品后默认不参与推广")]),t._v(" "),a("el-radio",{attrs:{label:2}},[t._v("创建商品后默认参与推广")])],1)],1),t._v(" "),a("h3",[t._v("分销结算设置")]),t._v(" "),a("el-form-item",{staticStyle:{"margin-top":"20px"},attrs:{label:""}},[a("el-radio",{attrs:{label:1},model:{value:t.settleSet,callback:function(e){t.settleSet=e},expression:"settleSet"}},[t._v("交易完成后\n          "),a("el-input-number",{staticStyle:{width:"50px"},attrs:{disabled:2==t.settleSet,controls:!1,size:"mini"},model:{value:t.settleDay,callback:function(e){t.settleDay=e},expression:"settleDay"}}),t._v("天结算，最多30天\n        ")],1),t._v(" "),a("el-radio",{attrs:{label:2},model:{value:t.settleSet,callback:function(e){t.settleSet=e},expression:"settleSet"}},[t._v("买家无法申请售后时结算(如果超过订单配置设置的无法申请售后时间，申请售后按钮变灰)")])],1),t._v(" "),a("el-alert",{attrs:{title:"风险提示：选择交易完成后，可能会造成较多佣金亏损；未结算时生成的退款会自动扣除；",type:"warning",closable:!1}}),t._v(" "),a("el-alert",{attrs:{title:"结算后发生退款，继续产生负账单，与后面产生的正向账单一起结算抵扣；",type:"warning",closable:!1}}),t._v(" "),a("div",{staticStyle:{"margin-top":"40px"}},[a("el-button",{attrs:{type:"primary"},on:{click:t.saveRule}},[t._v("保存")])],1)],1)],1)],1)},[],!1,null,"11664704",null);c.options.__file="index.vue";e.default=c.exports},"92Qx":function(t,e,a){},NZJM:function(t,e,a){"use strict";var s=a("92Qx");a.n(s).a}}]);
//# sourceMappingURL=chunk-22f6.665d6f14.js.map