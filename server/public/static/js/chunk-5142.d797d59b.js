(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5142"],{"1oeS":function(t,e,o){},BJ7B:function(t,e,o){"use strict";o.d(e,"g",function(){return s}),o.d(e,"j",function(){return n}),o.d(e,"k",function(){return i}),o.d(e,"a",function(){return l}),o.d(e,"d",function(){return c}),o.d(e,"b",function(){return r}),o.d(e,"e",function(){return u}),o.d(e,"c",function(){return p}),o.d(e,"l",function(){return d}),o.d(e,"i",function(){return h}),o.d(e,"h",function(){return v}),o.d(e,"f",function(){return m});var a=o("t3Un");function s(t){return Object(a.a)({url:"/sys/couponInfo/getCouponInfoPage",method:"post",data:t})}function n(t){return Object(a.a)({url:"/sys/couponProduct/getCouponProductPage",method:"post",data:t})}function i(t){return Object(a.a)({url:"/sys/couponProduct/getCouponUserPage",method:"post",data:t})}function l(t){return Object(a.a)({url:"/sys/couponInfo/addCouponInfo",method:"post",data:t})}function c(t){return Object(a.a)({url:"/sys/couponInfo/editCouponInfo",method:"post",data:t})}function r(t){return Object(a.a)({url:"/sys/couponInfo/couponData?couponId="+t,method:"get"})}function u(t){return Object(a.a)({url:"/sys/couponInfo/findCouponInfo?couponId="+t,method:"get"})}function p(t){return Object(a.a)({url:"/sys/couponInfo/deleteCouponInfo?couponId="+t,method:"DELETE"})}function d(t){return Object(a.a)({url:"/sys/couponProduct/userCouponProductPage",method:"post",data:t})}function h(t){return Object(a.a)({url:"/sys/couponInfo/getCouponInfoSubGroupPage",method:"post",data:t})}function v(t){return Object(a.a)({url:"/sys/couponInfo/getCouponInfoSubGroupInfo?couponIdStr="+t,method:"get"})}function m(t){return Object(a.a)({url:"/sys/couponInfo/getCouponCodeUrl?shopId="+t.shopId+"&couponId="+t.couponId,method:"get"})}},qlx3:function(t,e,o){"use strict";var a=o("1oeS");o.n(a).a},sHi9:function(t,e,o){"use strict";o.r(e);var a=o("QbLZ"),s=o.n(a),n=o("YEIV"),i=o.n(n),l=o("L2JU"),c=o("BJ7B"),r={data:function(){var t;return t={searchList:{tabType:"-1",pageNum:1,pageSize:5},category:[],list:[],listTotal:0,activeName:"h5",newShow:!1,couponType:"0",dataShow:!1,dataShowSearch:{pageNum:1,pageSize:5},dataShowList:[],dataShowListTotal:0,dataShowForm:{},extendShow:!1,extendForm:{}},i()(t,"activeName","h5"),i()(t,"extendFormLoading",!1),t},created:function(){this.searchList.shopId=this.shop.shopId,this.searchList.activityType=2,this.getData()},methods:{downImg:function(){"h5"==this.activeName&&window.open(this.extendForm.couponCodeImg),"mini"==this.activeName&&window.open(this.extendForm.couponMiniCodeImg)},extendItem:function(t){var e=this,o={shopId:this.shop.shopId,couponId:t.id};this.extendFormLoading=!0,this.extendShow=!0,Object(c.f)(o).then(function(t){console.log("推广图",t),200==t.code&&(e.extendForm=t.data,e.extendFormLoading=!1)})},showData:function(t){var e=this;this.dataShowSearch.couponName=t.couponName,this.dataShowSearch.cuoponId=t.id,Object(c.b)(t.id).then(function(t){console.log("数据",t),200==t.code&&(e.dataShowForm=t.data)}),this.getList(),this.dataShow=!0},getList:function(){var t=this;Object(c.l)(this.dataShowSearch).then(function(e){console.log("数据商品",e),200==e.code&&(t.dataShowList=e.data.list,t.dataShowListTotal=e.data.total)})},goToNew:function(){console.log("couponType",this.couponType),0==this.couponType&&this.$router.push({path:"/marketManage/coupon/newCoupon"}),1==this.couponType&&this.$router.push({path:"/marketManage/coupon/newMemberCoupon"})},copyItem:function(t){console.log("couponType",this.couponType),0==t.couponType&&this.$router.push({path:"/marketManage/coupon/newCoupon",query:{couponId:t.id}}),1==t.couponType&&this.$router.push({path:"/marketManage/coupon/newMemberCoupon",query:{couponId:t.id}})},lookItem:function(t){0==t.couponType&&this.$router.push({path:"/marketManage/coupon/couponDetail",query:{couponId:t.id}}),1==t.couponType&&this.$router.push({path:"/marketManage/coupon/couponMemberDetail",query:{couponId:t.id}})},getData:function(){var t=this;this.searchList.couponStatus="-1"==this.searchList.tabType?"":this.searchList.tabType,console.log("请求的数据",this.searchList),Object(c.g)(this.searchList).then(function(e){console.log("优惠券列表",e),200==e.code&&(t.list=e.data.list,t.listTotal=e.data.total)})},reset:function(){this.searchList.couponName="",this.searchList.couponType="",this.getData()},failItem:function(t){var e=this;this.$confirm("点击失效后，该优惠券变为已结束，买家之前领取的优惠券，在可用时间内还能继续使用，但失效后，其他用户不可领取","是否优惠券失效？",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(c.c)(t.id).then(function(t){console.log("失效操作",t),200==t.code?(e.$message({type:"success",message:t.message}),e.getData()):e.$message.error(t.message)})}).catch(function(){})},handleSizeChange:function(t){console.log("每页 "+t+" 条"),this.searchList.pageSize=t,this.getData()},handleCurrentChange:function(t){console.log("当前页: "+t),this.searchList.pageNum=t,this.getData()},datahandleSizeChange:function(t){console.log("每页 "+t+" 条"),this.dataShowSearch.pageSize=t,this.getList()},datahandleCurrentChange:function(t){console.log("当前页: "+t),this.dataShowSearch.pageNum=t,this.getList()}},computed:s()({},Object(l.c)(["user","shop"]))},u=(o("qlx3"),o("KHd+")),p=Object(u.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pageContent"},[o("el-card",{staticClass:"filter-container",attrs:{shadow:"never"}},[o("el-tabs",{on:{"tab-click":t.getData},model:{value:t.searchList.tabType,callback:function(e){t.$set(t.searchList,"tabType",e)},expression:"searchList.tabType"}},[o("el-tab-pane",{attrs:{label:"全部",name:"-1"}}),t._v(" "),o("el-tab-pane",{attrs:{label:"进行中",name:"1"}}),t._v(" "),o("el-tab-pane",{attrs:{label:"未开始",name:"0"}}),t._v(" "),o("el-tab-pane",{attrs:{label:"已结束",name:"2"}}),t._v(" "),o("el-tab-pane",{attrs:{label:"已失效",name:"3"}})],1),t._v(" "),o("div",[o("i",{staticClass:"el-icon-search"}),t._v(" "),o("span",[t._v("筛选搜索")]),t._v(" "),o("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"small"},on:{click:t.getData}},[t._v("查询")]),t._v(" "),o("el-button",{staticStyle:{float:"right","margin-right":"15px"},attrs:{size:"small"},on:{click:t.reset}},[t._v("重置")])],1),t._v(" "),o("div",{staticStyle:{"margin-top":"15px"}},[o("el-form",{attrs:{inline:!0,model:t.searchList,size:"small","label-width":"140px"}},[o("el-form-item",{attrs:{label:"优惠券名称："}},[o("el-input",{staticStyle:{width:"203px"},attrs:{clearable:"",placeholder:"活动名称"},model:{value:t.searchList.couponName,callback:function(e){t.$set(t.searchList,"couponName",e)},expression:"searchList.couponName"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"类型："}},[o("el-select",{attrs:{placeholder:"请选择类型"},model:{value:t.searchList.couponType,callback:function(e){t.$set(t.searchList,"couponType",e)},expression:"searchList.couponType"}},[o("el-option",{attrs:{label:"满减券",value:"0"}}),t._v(" "),o("el-option",{attrs:{label:"开通会员专属券",value:"1"}})],1)],1)],1)],1)],1),t._v(" "),o("el-card",{staticClass:"operate-container mt10",attrs:{shadow:"never"}},[o("div",{staticClass:"flex-row-between",staticStyle:{width:"100%"}},[o("div",[o("i",{staticClass:"el-icon-tickets"}),t._v(" "),o("span",[t._v("数据列表")])]),t._v(" "),o("div",{staticStyle:{"padding-right":"20px"}},[o("el-button",{attrs:{type:"text",icon:"el-icon-circle-plus-outline"},on:{click:function(e){t.newShow=!0}}},[t._v("新增优惠券")])],1)])]),t._v(" "),o("el-card",{staticClass:"filter-container mt10",attrs:{shadow:"never"}},[o("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,border:""}},[o("el-table-column",{attrs:{prop:"couponName",label:"优惠券名称",width:"300"}}),t._v(" "),o("el-table-column",{attrs:{label:"优惠券面值",width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("div",[t._v(t._s(e.row.discountAmount?"￥"+e.row.discountAmount:"-"))])]}}])}),t._v(" "),o("el-table-column",{attrs:{prop:"description",label:"优惠内容",width:"300"}}),t._v(" "),o("el-table-column",{attrs:{label:"类型",width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.couponType?o("div",[t._v("满减券")]):t._e(),t._v(" "),1==e.row.couponType?o("div",[t._v("会员专享券")]):t._e()]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"状态",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.couponStatus?o("div",{staticClass:"warningFont"},[t._v("未开始")]):t._e(),t._v(" "),1==e.row.couponStatus?o("div",{staticClass:"succeseFont"},[t._v("进行中")]):t._e(),t._v(" "),2==e.row.couponStatus?o("div",{staticClass:"dangerFont"},[t._v("已结束")]):t._e(),t._v(" "),3==e.row.couponStatus?o("div",{staticClass:"dangerFont"},[t._v("已失效")]):t._e()]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"已领取/发放总数",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("div",[t._v(t._s(e.row.couponHistoryNum+" / ")+t._s(e.row.couponCount?e.row.couponCount:"--"))])]}}])}),t._v(" "),o("el-table-column",{attrs:{prop:"couponUserNum",label:"已使用",width:"140"}}),t._v(" "),o("el-table-column",{attrs:{label:"使用期限",width:"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("div",[t._v(t._s(e.row.dateUsed?e.row.dateUsed:"-"))])]}}])}),t._v(" "),o("el-table-column",{attrs:{fixed:"right",label:"操作",width:"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(o){t.showData(e.row)}}},[t._v("数据")]),t._v(" "),0==e.row.couponType&&0==e.row.couponStatus||0==e.row.couponType&&1==e.row.couponStatus?o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(o){t.$router.push({path:"/marketManage/coupon/editCoupon",query:{couponId:e.row.id}})}}},[t._v("编辑")]):t._e(),t._v(" "),o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(o){t.lookItem(e.row)}}},[t._v("查看")]),t._v(" "),0==e.row.couponStatus||1==e.row.couponStatus?o("el-button",{staticClass:"dangerFont",attrs:{type:"text",size:"small"},on:{click:function(o){t.failItem(e.row)}}},[t._v("失效")]):t._e(),t._v(" "),o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(o){t.copyItem(e.row)}}},[t._v("复制")]),t._v(" "),0==e.row.couponType&&0==e.row.couponStatus||0==e.row.couponType&&1==e.row.couponStatus?o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(o){t.extendItem(e.row)}}},[t._v("推广")]):t._e()]}}])})],1),t._v(" "),o("div",{staticClass:"flex-row-end",staticStyle:{"padding-top":"20px"}},[o("div",[o("el-pagination",{attrs:{"page-sizes":[5,10,15,20],"page-size":t.searchList.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.listTotal},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])],1),t._v(" "),o("el-dialog",{attrs:{title:"新增优惠券类型",visible:t.newShow,width:"30%"},on:{"update:visible":function(e){t.newShow=e}}},[o("div",[o("el-radio",{attrs:{label:"0"},model:{value:t.couponType,callback:function(e){t.couponType=e},expression:"couponType"}},[t._v("满减券")])],1),t._v(" "),o("div",{staticClass:"mt10"},[o("el-radio",{attrs:{label:"1"},model:{value:t.couponType,callback:function(e){t.couponType=e},expression:"couponType"}},[t._v("开通会员专属券")])],1),t._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.newShow=!1}}},[t._v("取 消")]),t._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:t.goToNew}},[t._v("确 定")])],1)]),t._v(" "),o("el-dialog",{attrs:{title:"优惠券数据统计",visible:t.dataShow,width:"70%"},on:{"update:visible":function(e){t.dataShow=e}}},[o("el-card",{staticClass:"filter-container",attrs:{shadow:"never"}},[o("div",{staticClass:"pageHead flex-row-between"},[o("div",[t._v("优惠券名称："+t._s(t.dataShowSearch.couponName))]),t._v(" "),o("div",{staticClass:"infoFont"},[t._v("数据统计至前一天")])]),t._v(" "),o("el-row",{staticClass:"mt10",attrs:{gutter:12}},[o("el-col",{attrs:{span:8}},[o("el-card",{attrs:{shadow:"hover"}},[o("div",{staticClass:"flex-row-start"},[o("span",[t._v("用券总成交额")]),t._v(" "),o("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"使用该优惠券的订单付款总金额，剔除退款金额",placement:"top"}},[o("i",{staticClass:"el-icon-question curP",staticStyle:{"margin-left":"4px"}})])],1),t._v(" "),o("div",{staticClass:"mt10 f20 fb"},[t._v(t._s(t.dataShowForm.orderAmount))])])],1),t._v(" "),o("el-col",{attrs:{span:8}},[o("el-card",{attrs:{shadow:"hover"}},[o("div",{staticClass:"flex-row-start"},[o("span",[t._v("优惠总金额")]),t._v(" "),o("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"使用该优惠券优惠的总金额，剔除退款金额",placement:"top"}},[o("i",{staticClass:"el-icon-question curP",staticStyle:{"margin-left":"4px"}})])],1),t._v(" "),o("div",{staticClass:"mt10 f20 fb"},[t._v(t._s(t.dataShowForm.discountAmountTotal))])])],1),t._v(" "),o("el-col",{attrs:{span:8}},[o("el-card",{attrs:{shadow:"hover"}},[o("div",{staticClass:"flex-row-start"},[o("span",[t._v("费效比")]),t._v(" "),o("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"优惠总金额 / 用券总成交额，剔除发生退款行为",placement:"top"}},[o("i",{staticClass:"el-icon-question curP",staticStyle:{"margin-left":"4px"}})])],1),t._v(" "),o("div",{staticClass:"mt10 f20 fb"},[t._v(t._s(t.dataShowForm.discountRate))])])],1)],1),t._v(" "),o("el-row",{staticClass:"mt10",attrs:{gutter:12}},[o("el-col",{attrs:{span:8}},[o("el-card",{attrs:{shadow:"hover"}},[o("div",{staticClass:"flex-row-start"},[o("span",[t._v("用券比单价")]),t._v(" "),o("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"用券总成交额 / 使用该优惠券的付款订单数，剔除发生退款行为",placement:"top"}},[o("i",{staticClass:"el-icon-question curP",staticStyle:{"margin-left":"4px"}})])],1),t._v(" "),o("div",{staticClass:"mt10 f20 fb"},[t._v(t._s(t.dataShowForm.couponRatio))])])],1),t._v(" "),o("el-col",{attrs:{span:8}},[o("el-card",{attrs:{shadow:"hover"}},[o("div",{staticClass:"flex-row-start"},[o("span",[t._v("用券老客户")]),t._v(" "),o("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"使用该优惠券的老成交客户数，不剔除整单退款行为",placement:"top"}},[o("i",{staticClass:"el-icon-question curP",staticStyle:{"margin-left":"4px"}})])],1),t._v(" "),o("div",{staticClass:"mt10 f20 fb"},[t._v(t._s(t.dataShowForm.oldUuserCount))])])],1),t._v(" "),o("el-col",{attrs:{span:8}},[o("el-card",{attrs:{shadow:"hover"}},[o("div",{staticClass:"flex-row-start"},[o("span",[t._v("用券新客户")]),t._v(" "),o("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"使用该优惠券的新成交客户数（首次下单的客户），不剔除整单发生退款行为",placement:"top"}},[o("i",{staticClass:"el-icon-question curP",staticStyle:{"margin-left":"4px"}})])],1),t._v(" "),o("div",{staticClass:"mt10 f20 fb"},[t._v(t._s(t.dataShowForm.newUserCount))])])],1)],1),t._v(" "),o("el-row",{staticClass:"mt10",attrs:{gutter:12}},[o("el-col",{attrs:{span:8}},[o("el-card",{attrs:{shadow:"hover"}},[o("div",{staticClass:"flex-row-start"},[o("span",[t._v("购买商品件数")]),t._v(" "),o("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"使用该优惠券购买的商品数量，剔除发生退款行为",placement:"top"}},[o("i",{staticClass:"el-icon-question curP",staticStyle:{"margin-left":"4px"}})])],1),t._v(" "),o("div",{staticClass:"mt10 f20 fb"},[t._v(t._s(t.dataShowForm.productCount))])])],1)],1)],1),t._v(" "),o("el-card",{staticClass:"operate-container mt10",attrs:{shadow:"never"}},[o("div",{staticStyle:{width:"100%"}},[o("i",{staticClass:"el-icon-tickets"}),t._v(" "),o("span",[t._v("使用优惠券购买的商品")])])]),t._v(" "),o("el-card",{staticClass:"filter-container",staticStyle:{"margin-top":"10px"},attrs:{shadow:"never"}},[o("el-table",{staticStyle:{width:"100%"},attrs:{data:t.dataShowList,"tooltip-effect":"dark"}},[o("el-table-column",{attrs:{label:"商品图片",width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-popover",{attrs:{placement:"right",title:"",trigger:"hover"}},[o("el-image",{staticStyle:{"max-height":"40px","max-width":"40px"},attrs:{slot:"reference",src:e.row.imageUrl,alt:e.row.imageUrl},slot:"reference"}),t._v(" "),o("el-image",{staticStyle:{"max-height":"350px","max-width":"350px"},attrs:{src:e.row.imageUrl}})],1)]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"商品名称",prop:"productName"}}),t._v(" "),o("el-table-column",{attrs:{label:"商品价格",prop:"minPrice"}}),t._v(" "),o("el-table-column",{attrs:{label:"付款件数",prop:"saleCount"}}),t._v(" "),o("el-table-column",{attrs:{label:"付款人数",prop:"userCount"}})],1),t._v(" "),o("div",{staticStyle:{padding:"10px 0 20px 0"}},[o("el-pagination",{attrs:{"page-sizes":[5,10,15,20],"page-size":t.dataShowSearch.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.dataShowListTotal},on:{"size-change":t.datahandleSizeChange,"current-change":t.datahandleCurrentChange}})],1)],1),t._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.dataShow=!1}}},[t._v("关 闭")])],1)],1),t._v(" "),o("el-dialog",{attrs:{title:"优惠券推广",visible:t.extendShow,width:"40%",center:""},on:{"update:visible":function(e){t.extendShow=e}}},[o("el-form",{directives:[{name:"loading",rawName:"v-loading",value:t.extendFormLoading,expression:"extendFormLoading"}],ref:"form",attrs:{model:t.extendForm}},[o("div",{staticClass:"extend"},[o("el-tabs",{attrs:{"tab-position":"left"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[o("el-tab-pane",{attrs:{label:"H5推广",name:"h5"}},[o("img",{staticStyle:{width:"375px",margin:"auto"},attrs:{src:t.extendForm.couponCodeImg,alt:""}})]),t._v(" "),o("el-tab-pane",{attrs:{disabled:null==t.extendForm.couponMiniCodeImg,label:"小程序推广",name:"mini"}},[o("img",{staticStyle:{width:"375px",margin:"auto"},attrs:{src:t.extendForm.couponMiniCodeImg,alt:""}})])],1)],1)]),t._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:t.downImg}},[t._v("下载推广图")])],1)],1)],1)},[],!1,null,"31a291ff",null);p.options.__file="couponList.vue";e.default=p.exports}}]);
//# sourceMappingURL=chunk-5142.d797d59b.js.map