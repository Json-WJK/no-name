(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6b9c","chunk-9b4e"],{"+yvt":function(t,o,e){"use strict";var n=e("uzXn");e.n(n).a},BJ7B:function(t,o,e){"use strict";e.d(o,"g",function(){return a}),e.d(o,"j",function(){return s}),e.d(o,"k",function(){return i}),e.d(o,"a",function(){return l}),e.d(o,"d",function(){return c}),e.d(o,"b",function(){return u}),e.d(o,"e",function(){return r}),e.d(o,"c",function(){return p}),e.d(o,"l",function(){return d}),e.d(o,"i",function(){return h}),e.d(o,"h",function(){return f}),e.d(o,"f",function(){return m});var n=e("t3Un");function a(t){return Object(n.a)({url:"/sys/couponInfo/getCouponInfoPage",method:"post",data:t})}function s(t){return Object(n.a)({url:"/sys/couponProduct/getCouponProductPage",method:"post",data:t})}function i(t){return Object(n.a)({url:"/sys/couponProduct/getCouponUserPage",method:"post",data:t})}function l(t){return Object(n.a)({url:"/sys/couponInfo/addCouponInfo",method:"post",data:t})}function c(t){return Object(n.a)({url:"/sys/couponInfo/editCouponInfo",method:"post",data:t})}function u(t){return Object(n.a)({url:"/sys/couponInfo/couponData?couponId="+t,method:"get"})}function r(t){return Object(n.a)({url:"/sys/couponInfo/findCouponInfo?couponId="+t,method:"get"})}function p(t){return Object(n.a)({url:"/sys/couponInfo/deleteCouponInfo?couponId="+t,method:"DELETE"})}function d(t){return Object(n.a)({url:"/sys/couponProduct/userCouponProductPage",method:"post",data:t})}function h(t){return Object(n.a)({url:"/sys/couponInfo/getCouponInfoSubGroupPage",method:"post",data:t})}function f(t){return Object(n.a)({url:"/sys/couponInfo/getCouponInfoSubGroupInfo?couponIdStr="+t,method:"get"})}function m(t){return Object(n.a)({url:"/sys/couponInfo/getCouponCodeUrl?shopId="+t.shopId+"&couponId="+t.couponId,method:"get"})}},n0nd:function(t,o,e){"use strict";e.r(o);var n=e("ngLG"),a={props:{itemData:{type:Object}},data:function(){return{checkList:[0,1],navigation:0,couponShow:!1}},methods:{couponFun:function(t){var o=this;console.log("父接受",t,this.itemData),0==this.itemData.couponIds.length?(this.itemData.coupons=t,t.forEach(function(t){o.itemData.couponIds.push(t.id)})):t.forEach(function(t){o.itemData.coupons.push(t),o.itemData.couponIds.push(t.id)}),this.couponShow=!1,console.log("this.itemData.coupons",this.itemData.coupons)},deleteItem:function(t){this.itemData.coupons.splice(t,1),this.itemData.couponIds.splice(t,1),0==this.itemData.couponIds.length&&(this.itemData.coupons.push({discountAmount:"200",couponContext:"满999可用",disabled:!1}),this.itemData.coupons.push({discountAmount:"200",couponContext:"满999可用",disabled:!1}),this.itemData.coupons.push({discountAmount:"200",couponContext:"满999可用",disabled:!0}))}},components:{coupon:n.default}},s=(e("+yvt"),e("KHd+")),i=Object(s.a)(a,function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"itemBox"},[e("p",{staticClass:"title"},[t._v("优惠券")]),t._v(" "),e("el-form",{ref:"form",attrs:{model:t.itemData,size:"mini"}},[e("el-form-item",{staticClass:"navigation",attrs:{label:"添加方式"}},[e("el-radio-group",{model:{value:t.navigation,callback:function(o){t.navigation=o},expression:"navigation"}},[e("el-radio",{attrs:{label:0}},[t._v("手动添加")])],1),t._v(" "),t.itemData.couponIds.length>0?e("div",[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.itemData.coupons,border:!1,"show-header":!1}},[e("el-table-column",{attrs:{"show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(o){return[e("div",[t._v(t._s(o.row.couponName+o.row.couponContext))])]}}])}),t._v(" "),e("el-table-column",{attrs:{width:"60"},scopedSlots:t._u([{key:"default",fn:function(o){return[e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){t.deleteItem(o.$index)}}},[t._v("删除")])]}}])})],1)],1):t._e(),t._v(" "),e("el-button",{staticClass:"goodsUpload",attrs:{disabled:t.itemData.couponIds.length>=10,icon:"el-icon-circle-plus-outline"},on:{click:function(o){t.couponShow=!0}}},[t._v("添加优惠券")]),t._v(" "),e("div",{staticClass:"infoFont"},[t._v("最多可添加10张优惠券")])],1),t._v(" "),e("el-form-item",{staticClass:"showType",attrs:{label:"样式"}},[e("div",{staticClass:"fistType"},[e("span",{staticClass:"showClass"},[t._v("样式展示")]),t._v(" "),e("el-radio-group",{model:{value:t.itemData.style,callback:function(o){t.$set(t.itemData,"style",o)},expression:"itemData.style"}},[e("el-radio",{attrs:{label:"style_1"}},[t._v("样式1")]),t._v(" "),e("el-radio",{attrs:{label:"style_2"}},[t._v("样式2")]),t._v(" "),e("el-radio",{attrs:{label:"style_3"}},[t._v("样式3")]),t._v(" "),e("el-radio",{attrs:{label:"style_4"}},[t._v("样式4")]),t._v(" "),e("el-radio",{attrs:{label:"style_5"}},[t._v("样式5")])],1)],1),t._v(" "),e("div",{staticClass:"sendType"},[e("span",{staticClass:"showClass"},[t._v("推荐颜色")]),t._v(" "),e("div",{staticClass:"selctColor"},[e("span",{staticClass:"bg1",on:{click:function(o){t.itemData.color="color_1"}}},[e("span")]),t._v(" "),e("span",{staticClass:"bg2",on:{click:function(o){t.itemData.color="color_2"}}},[e("span")]),t._v(" "),e("span",{staticClass:"bg3",on:{click:function(o){t.itemData.color="color_3"}}},[e("span")]),t._v(" "),e("span",{staticClass:"bg4",on:{click:function(o){t.itemData.color="color_4"}}},[e("span")])])])]),t._v(" "),e("el-form-item",{attrs:{label:"更多设置"}},[e("el-checkbox-group",{model:{value:t.checkList,callback:function(o){t.checkList=o},expression:"checkList"}},[e("el-checkbox",{attrs:{label:0}},[t._v("隐藏已抢完券")])],1),t._v(" "),e("p",{staticClass:"prompt"},[t._v("当页面无可显示的优惠券时，优惠券区块将隐藏")])],1)],1),t._v(" "),e("coupon",{attrs:{couponShow:t.couponShow,couponIds:t.itemData.couponIds},on:{couponClose:function(o){t.couponShow=!1},couponFun:t.couponFun}})],1)},[],!1,null,"2de81e0b",null);i.options.__file="editorCouponBox.vue";o.default=i.exports},ngLG:function(t,o,e){"use strict";e.r(o);var n=e("QbLZ"),a=e.n(n),s=e("L2JU"),i=e("BJ7B"),l={props:["couponIds","couponShow"],watch:{couponShow:function(t,o){t&&this.getData()}},data:function(){return{fromLoading:!1,searchList:{pageNum:1,pageSize:5},category:[],list:[],listTotal:0,multipleSelection:[]}},created:function(){this.searchList.shopId=this.shop.shopId},methods:{sub:function(){console.log("multipleSelection",this.multipleSelection),0!=this.multipleSelection.length?this.couponIds.length+this.multipleSelection.length>10?this.$message.error("最多可选择10张优惠券"):(this.$emit("couponFun",this.multipleSelection),this.$refs.multipleTable.clearSelection()):this.$message.error("请选择优惠券后再试")},toggleSelection:function(t){var o=this;t?t.forEach(function(t){o.$refs.multipleTable.toggleRowSelection(t)}):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(t){this.multipleSelection=t},handleSizeChange:function(t){console.log("每页 "+t+" 条"),this.searchList.pageSize=t,this.getData()},handleCurrentChange:function(t){console.log("当前页: "+t),this.searchList.pageNum=t,this.getData()},reset:function(){this.searchList.productName="",this.searchList.shopCategoryIdArr=[],this.getData()},getData:function(){var t=this;this.fromLoading=!0,this.searchList.couponIds=this.couponIds||[],console.log("请求的数据",this.searchList),Object(i.i)(this.searchList).then(function(o){console.log("优惠券数据列表",o),200==o.code&&(t.list=o.data.list,t.listTotal=o.data.total),t.fromLoading=!1})},close:function(){this.$emit("couponClose",!0)},change:function(){this.$forceUpdate()}},computed:a()({},Object(s.c)(["user","shop"]))},c=e("KHd+"),u=Object(c.a)(l,function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("el-dialog",{attrs:{"append-to-body":!0,title:"新增商品列表",visible:t.couponShow,width:"70%","close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1},on:{"update:visible":function(o){t.couponShow=o}}},[e("el-card",{staticClass:"filter-container",attrs:{shadow:"never"}},[e("div",[e("i",{staticClass:"el-icon-search"}),t._v(" "),e("span",[t._v("筛选搜索")]),t._v(" "),e("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"small"},on:{click:t.getData}},[t._v("查询")]),t._v(" "),e("el-button",{staticStyle:{float:"right","margin-right":"15px"},attrs:{size:"small"},on:{click:t.reset}},[t._v("重置")])],1),t._v(" "),e("div",{staticStyle:{"margin-top":"15px"}},[e("el-form",{attrs:{inline:!0,model:t.searchList,size:"small","label-width":"140px"}},[e("el-form-item",{attrs:{label:"优惠券名称："}},[e("el-input",{staticStyle:{width:"203px"},attrs:{clearable:"",placeholder:"优惠券名称"},on:{input:function(o){t.change(o)}},model:{value:t.searchList.couponName,callback:function(o){t.$set(t.searchList,"couponName",o)},expression:"searchList.couponName"}})],1)],1)],1)]),t._v(" "),e("el-card",{staticClass:"filter-container",staticStyle:{"margin-top":"10px"},attrs:{shadow:"never"}},[e("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.list,"tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange}},[e("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),e("el-table-column",{attrs:{label:"优惠券名称",prop:"couponName"}}),t._v(" "),e("el-table-column",{attrs:{label:"适用商品",width:"240",prop:"productTypeName"}}),t._v(" "),e("el-table-column",{attrs:{label:"优惠内容",width:"240",prop:"couponContext"}}),t._v(" "),e("el-table-column",{attrs:{label:"领取人限制",width:"140"},scopedSlots:t._u([{key:"default",fn:function(o){return[e("div",{attrs:{"data-id":o.row.id}},[t._v("全部用户")])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"限领次数",width:"140"},scopedSlots:t._u([{key:"default",fn:function(o){return[t._v(t._s(0==o.row.limitNumber?"不限制":o.row.limitNumber))]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"剩余库存",prop:"havaNum",width:"140"}})],1),t._v(" "),e("div",{staticStyle:{padding:"10px 0 20px 0"}},[e("el-pagination",{attrs:{"page-sizes":[5,10,15,20],"page-size":t.searchList.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.listTotal},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1),t._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:t.close}},[t._v("取 消")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:t.sub}},[t._v("确 定")])],1)],1)},[],!1,null,null,null);u.options.__file="coupon.vue";o.default=u.exports},uzXn:function(t,o,e){}}]);
//# sourceMappingURL=chunk-6b9c.09a0390b.js.map