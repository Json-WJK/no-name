(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7568"],{nrij:function(t,e,a){"use strict";a.r(e);var r=a("QbLZ"),s=a.n(r),o=a("L2JU"),i=a("pzRZ"),l=a("olPN"),n={data:function(){return{searchList:{pageSize:5,pageNum:1},list:[],listTotal:0,shopAsset:""}},created:function(){this.searchList.shopId=this.shop.shopId,this.getData(),this.getMoney()},methods:{getMoney:function(){var t=this;Object(l.b)(this.shop.shopId).then(function(e){console.log("默认数据",e),200==e.code&&(t.shopAsset=e.data.shopAsset)})},getData:function(){var t=this,e=void 0,a=void 0;"day"==this.$route.query.dateType&&(e=this.$route.query.balanceDay+" 00:00:00",a=this.$route.query.balanceDay+" 23:59:59"),"month"==this.$route.query.dateType&&(e=this.$route.query.startDate,a=this.$route.query.endDate),this.searchList.startDate=e,this.searchList.endDate=a,console.log("全部请求的数据",this.searchList),Object(i.c)(this.searchList).then(function(e){console.log("全部交易记录列表",e),200==e.code&&(t.list=e.data.list,t.listTotal=e.data.total)})},reset:function(){this.searchList.amountType="",this.searchList.businessNumber="",this.searchList.wxNumber="",this.searchList.tradeType="",this.getData()},goToInfo:function(t){return 3==t.tradeType?(console.log("充值"),void this.$emit("changeActive","1")):25==t.tradeType?(console.log("提现"),void this.$router.push({path:"/assetsManage/account/cashoutDetail",query:{id:t.id}})):6==t.tradeType?(console.log("会员卡开通记录"),void this.$router.push({path:"/memberManage/memberCenter",query:{type:1}})):void this.$router.push({path:"/order/orderList/orderinfo",query:{orderId:t.orderId}})},goToMybill:function(t){this.$router.push({path:"/assetsManage/myBill",query:{orderId:t.orderId,afterSaleId:t.afterSaleId}})},handleSizeChange:function(t){console.log("每页 "+t+" 条"),this.searchList.pageSize=t,this.getData()},handleCurrentChange:function(t){console.log("当前页: "+t),this.searchList.pageNum=t,this.getData()},change:function(){this.$forceUpdate()}},computed:s()({},Object(o.c)(["user","shop"]))},d=a("KHd+"),u=Object(d.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pageContent"},[a("el-card",{staticClass:"filter-container",attrs:{shadow:"never"}},[a("div",{staticClass:"flex-row-between"},[a("div",[t._v("对账日期："+t._s(t.$route.query.balanceDay))]),t._v(" "),a("div",[t._v("本期收入金额："+t._s(t.$route.query.in))]),t._v(" "),a("div",[t._v("本期支出金额："+t._s(t.$route.query.out))]),t._v(" "),a("div",[t._v("余额："+t._s(t.shopAsset))])])]),t._v(" "),a("el-card",{staticClass:"filter-container mt10",attrs:{shadow:"never"}},[a("div",[a("i",{staticClass:"el-icon-search"}),t._v(" "),a("span",[t._v("筛选搜索")]),t._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"small"},on:{click:t.getData}},[t._v("查询")]),t._v(" "),a("el-button",{staticStyle:{float:"right","margin-right":"15px"},attrs:{size:"small"},on:{click:t.reset}},[t._v("重置")])],1),t._v(" "),a("div",{staticStyle:{"margin-top":"15px"}},[a("el-form",{attrs:{inline:!0,model:t.searchList,size:"small","label-width":"140px"}},[a("el-form-item",{attrs:{label:"支付方向："}},[a("el-select",{attrs:{clearable:""},model:{value:t.searchList.amountType,callback:function(e){t.$set(t.searchList,"amountType",e)},expression:"searchList.amountType"}},[a("el-option",{attrs:{label:"收入",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"支出",value:"2"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"业务单号："}},[a("el-input",{staticStyle:{width:"203px"},attrs:{clearable:""},on:{input:function(e){t.change(e)}},model:{value:t.searchList.businessNumber,callback:function(e){t.$set(t.searchList,"businessNumber",e)},expression:"searchList.businessNumber"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"支付单号/流水号："}},[a("el-input",{staticStyle:{width:"203px"},attrs:{clearable:""},on:{input:function(e){t.change(e)}},model:{value:t.searchList.wxNumber,callback:function(e){t.$set(t.searchList,"wxNumber",e)},expression:"searchList.wxNumber"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"单据类型："}},[a("el-select",{attrs:{clearable:""},model:{value:t.searchList.tradeType,callback:function(e){t.$set(t.searchList,"tradeType",e)},expression:"searchList.tradeType"}},[a("el-option",{attrs:{label:"订单入账",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"退款",value:"24"}}),t._v(" "),a("el-option",{attrs:{label:"交易手续费",value:"21"}}),t._v(" "),a("el-option",{attrs:{label:"交易手续费退回",value:"2"}}),t._v(" "),a("el-option",{attrs:{label:"佣金",value:"22"}}),t._v(" "),a("el-option",{attrs:{label:"佣金退回",value:"4"}}),t._v(" "),a("el-option",{attrs:{label:"邀请奖励",value:"26"}}),t._v(" "),a("el-option",{attrs:{label:"邀请奖励退回",value:"5"}}),t._v(" "),a("el-option",{attrs:{label:"提现",value:"25"}}),t._v(" "),a("el-option",{attrs:{label:"提现手续费",value:"23"}}),t._v(" "),a("el-option",{attrs:{label:"充值",value:"3"}}),t._v(" "),a("el-option",{attrs:{label:"会员卡收入",value:"6"}})],1)],1)],1)],1)]),t._v(" "),a("el-card",{staticClass:"operate-container mt10",attrs:{shadow:"never"}},[a("div",{staticClass:"flex-row-start",staticStyle:{width:"100%"}},[a("div",[a("i",{staticClass:"el-icon-tickets"}),t._v(" "),a("span",[t._v("数据列表")])]),t._v(" "),a("div",{staticClass:"succeseFont",staticStyle:{"margin-left":"20px"}},[t._v("对账单统计日期以账单明细中入账时间为准，如需下单时间维度的汇总，可在账单明细下载相应报表")])])]),t._v(" "),a("el-card",{staticClass:"filter-container",staticStyle:{"margin-top":"20px"},attrs:{shadow:"never"}},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.list,"tooltip-effect":"dark"}},[a("el-table-column",{attrs:{prop:"businessNumber",width:"200"},scopedSlots:t._u([{key:"header",fn:function(e){return[t._v("\n          业务单编号\n          "),a("el-tooltip",{staticClass:"item",attrs:{"data-type":e.row,effect:"dark",content:"业务单号，指的是不同的业务的单号，例如：订单是订单号，提现是提现单号，分润是分润单号。关联单号，是指相关的订单号",placement:"top"}},[a("i",{staticClass:"el-icon-question"})])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"wxNumber",label:"支付单号/流水号",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v(t._s(e.row.wxNumber?e.row.wxNumber:"-"))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"单据类型/交易类型",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.tradeType?a("div",[t._v("订单入账")]):t._e(),t._v(" "),2==e.row.tradeType?a("div",[t._v("交易手续费退回")]):t._e(),t._v(" "),3==e.row.tradeType?a("div",[t._v("充值")]):t._e(),t._v(" "),4==e.row.tradeType?a("div",[t._v("佣金退回")]):t._e(),t._v(" "),5==e.row.tradeType?a("div",[t._v("邀请奖励退回")]):t._e(),t._v(" "),21==e.row.tradeType?a("div",[t._v("交易手续费")]):t._e(),t._v(" "),22==e.row.tradeType?a("div",[t._v("佣金")]):t._e(),t._v(" "),23==e.row.tradeType?a("div",[t._v("提现手续费")]):t._e(),t._v(" "),24==e.row.tradeType?a("div",[t._v("交易退款")]):t._e(),t._v(" "),25==e.row.tradeType?a("div",[t._v("提现")]):t._e(),t._v(" "),26==e.row.tradeType?a("div",[t._v("邀请奖励")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"description",label:"名称",width:"400"}}),t._v(" "),a("el-table-column",{attrs:{prop:"amount",label:"账单金额",width:"200"}}),t._v(" "),a("el-table-column",{attrs:{prop:"amount",label:"收支类型",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.tradeType?a("div",[t._v("收入")]):t._e(),t._v(" "),2==e.row.tradeType?a("div",[t._v("收入")]):t._e(),t._v(" "),3==e.row.tradeType?a("div",[t._v("收入")]):t._e(),t._v(" "),4==e.row.tradeType?a("div",[t._v("收入")]):t._e(),t._v(" "),5==e.row.tradeType?a("div",[t._v("收入")]):t._e(),t._v(" "),21==e.row.tradeType?a("div",[t._v("支出")]):t._e(),t._v(" "),22==e.row.tradeType?a("div",[t._v("支出")]):t._e(),t._v(" "),23==e.row.tradeType?a("div",[t._v("支出")]):t._e(),t._v(" "),24==e.row.tradeType?a("div",[t._v("支出")]):t._e(),t._v(" "),25==e.row.tradeType?a("div",[t._v("支出")]):t._e(),t._v(" "),26==e.row.tradeType?a("div",[t._v("支出")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"支付方式",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.payType?a("div",[t._v("微信代销")]):t._e(),t._v(" "),1==e.row.payType?a("div",[t._v("微信自有")]):t._e(),t._v(" "),2==e.row.payType?a("div",[t._v("小程序支付")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"结算状态",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.settleState?a("div",[t._v("进行中")]):t._e(),t._v(" "),1==e.row.settleState?a("div",[t._v("待结算")]):t._e(),t._v(" "),2==e.row.settleState?a("div",[t._v("交易成功")]):t._e(),t._v(" "),3==e.row.settleState?a("div",[t._v("交易关闭（交易失败）")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"下单时间",width:"200"}}),t._v(" "),a("el-table-column",{attrs:{label:"入账时间",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v(t._s(e.row.updateTime?e.row.updateTime:"-"))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"账户",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{attrs:{"data-id":e.row.id}},[t._v("店铺余额")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.goToInfo(e.row)}}},[t._v("查看详情")])]}}])})],1),t._v(" "),a("div",{staticClass:"flex-row-end",staticStyle:{"padding-top":"20px"}},[a("el-pagination",{attrs:{"page-sizes":[5,10,15,20],"page-size":t.searchList.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.listTotal},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)],1)},[],!1,null,null,null);u.options.__file="detailList.vue";e.default=u.exports},olPN:function(t,e,a){"use strict";a.d(e,"a",function(){return s}),a.d(e,"c",function(){return o}),a.d(e,"d",function(){return i}),a.d(e,"b",function(){return l});var r=a("t3Un");function s(t){return Object(r.a)({url:"/order/recharge/getPrePayConfig?shopId="+t.shopId+"&money="+t.money+"&operateId="+t.operateId,method:"get"})}function o(t){return Object(r.a)({url:"/order/mall/withdraw/getShopWithdrawAmount?shopId="+t,method:"get"})}function i(t){return Object(r.a)({url:"/order/mall/withdraw/shopApplyWithdraw",method:"post",data:t})}function l(t){return Object(r.a)({url:"/sys/shopAsset/getShopAsset?shopId="+t,method:"get"})}},pzRZ:function(t,e,a){"use strict";a.d(e,"a",function(){return s}),a.d(e,"e",function(){return o}),a.d(e,"d",function(){return i}),a.d(e,"b",function(){return l}),a.d(e,"c",function(){return n});var r=a("t3Un");function s(t){return Object(r.a)({url:"/order/recharge/getRechargePage",method:"post",data:t})}function o(t){return Object(r.a)({url:"/order/mall/withdraw/getShopWithdrawList",method:"post",data:t})}function i(t){return Object(r.a)({url:"/order/mall/withdraw/getShopWithdrawInfo?id="+t,method:"get"})}function l(t){return Object(r.a)({url:"/sys/shopAsset/getShopAssetFreezeRecordList",method:"post",data:t})}function n(t){return Object(r.a)({url:"/sys/shopAsset/getShopAssetRecord",method:"post",data:t})}}}]);
//# sourceMappingURL=chunk-7568.4179ce11.js.map