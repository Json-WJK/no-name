(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-9b4b"],{BJ7B:function(t,e,o){"use strict";o.d(e,"g",function(){return s}),o.d(e,"j",function(){return a}),o.d(e,"k",function(){return l}),o.d(e,"a",function(){return i}),o.d(e,"d",function(){return r}),o.d(e,"b",function(){return c}),o.d(e,"e",function(){return u}),o.d(e,"c",function(){return p}),o.d(e,"l",function(){return h}),o.d(e,"i",function(){return d}),o.d(e,"h",function(){return f}),o.d(e,"f",function(){return g});var n=o("t3Un");function s(t){return Object(n.a)({url:"/sys/couponInfo/getCouponInfoPage",method:"post",data:t})}function a(t){return Object(n.a)({url:"/sys/couponProduct/getCouponProductPage",method:"post",data:t})}function l(t){return Object(n.a)({url:"/sys/couponProduct/getCouponUserPage",method:"post",data:t})}function i(t){return Object(n.a)({url:"/sys/couponInfo/addCouponInfo",method:"post",data:t})}function r(t){return Object(n.a)({url:"/sys/couponInfo/editCouponInfo",method:"post",data:t})}function c(t){return Object(n.a)({url:"/sys/couponInfo/couponData?couponId="+t,method:"get"})}function u(t){return Object(n.a)({url:"/sys/couponInfo/findCouponInfo?couponId="+t,method:"get"})}function p(t){return Object(n.a)({url:"/sys/couponInfo/deleteCouponInfo?couponId="+t,method:"DELETE"})}function h(t){return Object(n.a)({url:"/sys/couponProduct/userCouponProductPage",method:"post",data:t})}function d(t){return Object(n.a)({url:"/sys/couponInfo/getCouponInfoSubGroupPage",method:"post",data:t})}function f(t){return Object(n.a)({url:"/sys/couponInfo/getCouponInfoSubGroupInfo?couponIdStr="+t,method:"get"})}function g(t){return Object(n.a)({url:"/sys/couponInfo/getCouponCodeUrl?shopId="+t.shopId+"&couponId="+t.couponId,method:"get"})}},r20l:function(t,e,o){"use strict";o.r(e);var n=o("QbLZ"),s=o.n(n),a=o("L2JU"),l=o("BJ7B"),i={props:["userIds","customerShow"],watch:{customerShow:function(t,e){t&&this.getData()}},data:function(){return{fromLoading:!1,searchList:{shopCategoryIdArr:[],pageNum:1,pageSize:5},category:[],list:[],listTotal:0,multipleSelection:[]}},created:function(){this.searchList.shopId=this.shop.shopId},methods:{sub:function(){console.log("multipleSelection",this.multipleSelection),0!=this.multipleSelection.length?(this.$emit("customerFun",this.multipleSelection),this.$refs.multipleTable.clearSelection()):this.$message.error("请选择客户后再试")},toggleSelection:function(t){var e=this;t?t.forEach(function(t){e.$refs.multipleTable.toggleRowSelection(t)}):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(t){this.multipleSelection=t},handleSizeChange:function(t){console.log("每页 "+t+" 条"),this.searchList.pageSize=t,this.getData()},handleCurrentChange:function(t){console.log("当前页: "+t),this.searchList.pageNum=t,this.getData()},reset:function(){this.searchList.vipType="",this.searchList.cellPhone=[],this.getData()},getData:function(){var t=this;this.fromLoading=!0,this.searchList.userIds=this.userIds||"",console.log("请求的数据",this.searchList),Object(l.k)(this.searchList).then(function(e){console.log("可添加优惠券的商品列表",e),200==e.code&&(t.list=e.data.list,t.listTotal=e.data.total),t.fromLoading=!1})},getCategory:function(){var t=this;getProductCategoryShopAllList(this.shop.shopId).then(function(e){console.log("获取店铺分类",e),t.category=e.data})},close:function(){this.$emit("customerClose",!0)},change:function(){this.$forceUpdate()}},computed:s()({},Object(a.c)(["user","shop"]))},r=o("KHd+"),c=Object(r.a)(i,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-dialog",{attrs:{"append-to-body":!0,title:"客户选择",visible:t.customerShow,width:"70%","close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1},on:{"update:visible":function(e){t.customerShow=e}}},[o("el-card",{staticClass:"filter-container",attrs:{shadow:"never"}},[o("div",[o("i",{staticClass:"el-icon-search"}),t._v(" "),o("span",[t._v("筛选搜索")]),t._v(" "),o("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"small"},on:{click:t.getData}},[t._v("查询")]),t._v(" "),o("el-button",{staticStyle:{float:"right","margin-right":"15px"},attrs:{size:"small"},on:{click:t.reset}},[t._v("重置")])],1),t._v(" "),o("div",{staticStyle:{"margin-top":"15px"}},[o("el-form",{attrs:{inline:!0,model:t.searchList,size:"small","label-width":"140px"}},[o("el-form-item",{attrs:{label:"客户身份"}},[o("el-select",{attrs:{placeholder:"请选择客户身份"},model:{value:t.searchList.vipType,callback:function(e){t.$set(t.searchList,"vipType",e)},expression:"searchList.vipType"}},[o("el-option",{attrs:{label:"会员用户",value:"1"}}),t._v(" "),o("el-option",{attrs:{label:"普通用户",value:"2"}})],1)],1),t._v(" "),o("el-form-item",{attrs:{label:"联系方式："}},[o("el-input",{staticStyle:{width:"203px"},attrs:{clearable:"",placeholder:"联系方式"},on:{input:function(e){t.change(e)}},model:{value:t.searchList.cellPhone,callback:function(e){t.$set(t.searchList,"cellPhone",e)},expression:"searchList.cellPhone"}})],1)],1)],1)]),t._v(" "),o("el-card",{staticClass:"filter-container",staticStyle:{"margin-top":"10px"},attrs:{shadow:"never"}},[o("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.list,"tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange}},[o("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),o("el-table-column",{attrs:{label:"用户昵称",prop:"nikeName"}}),t._v(" "),o("el-table-column",{attrs:{label:"联系方式",width:"240"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.cellPhone?e.row.cellPhone:"-"))]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"来源",prop:"sourType"}}),t._v(" "),o("el-table-column",{attrs:{label:"客户身份",prop:"vipTypeName"}}),t._v(" "),o("el-table-column",{attrs:{label:"注册时间",prop:"createTime"}})],1),t._v(" "),o("div",{staticStyle:{padding:"10px 0 20px 0"}},[o("el-pagination",{attrs:{"page-sizes":[5,10,15,20],"page-size":t.searchList.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.listTotal},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1),t._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:t.close}},[t._v("取 消")]),t._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:t.sub}},[t._v("确 定")])],1)],1)},[],!1,null,null,null);c.options.__file="customer.vue";e.default=c.exports}}]);
//# sourceMappingURL=chunk-9b4b.46867606.js.map