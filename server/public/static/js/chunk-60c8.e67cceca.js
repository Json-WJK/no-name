(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-60c8"],{"0d8w":function(t,e,s){"use strict";var a=s("CJlP");s.n(a).a},"5Zff":function(t,e,s){"use strict";s.r(e);var a=s("QbLZ"),n=s.n(a),c=s("L2JU"),o=s("PgIU"),i={data:function(){return{searchList:{pageNum:1,pageSize:5},list:[],listTotal:0,selffedchStatus:"0"}},created:function(){this.searchList.shopId=this.shop.shopId,this.getData(),this.getStatus()},methods:{getData:function(){var t=this;Object(o.g)(this.searchList).then(function(e){console.log("数据列表",e),200==e.code&&(t.list=e.data.list,t.listTotal=e.data.total)})},getStatus:function(){var t=this;Object(o.e)(this.shop.shopId).then(function(e){console.log("是否开启了自提",e),t.selffedchStatus=e.data})},changeStatus:function(){var t=this;Object(o.f)(this.shop.shopId,this.selffedchStatus).then(function(e){console.log("设置门店自提",e),200==e.code?t.$message({message:e.message,type:"success"}):t.$message.error(e.message),t.getStatus()})},deleteItem:function(t){var e=this;this.$confirm("此操作将删除该数据","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(o.b)(t,e.shop.shopId).then(function(t){console.log("删除自提点",t),200==t.code?(e.$message({message:t.message,type:"success"}),e.getData()):e.$message.error(t.message)})}).catch(function(){})},handleSizeChange:function(t){console.log("每页 "+t+" 条"),this.searchList.pageSize=t,this.getData()},handleCurrentChange:function(t){console.log("当前页: "+t),this.searchList.pageNum=t,this.getData()}},computed:n()({},Object(c.c)(["user","shop"]))},l=(s("0d8w"),s("KHd+")),r=Object(l.a)(i,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pageContent"},[s("el-card",{staticClass:"filter-container",attrs:{shadow:"never"}},[s("div",{staticClass:"flex-row-between"},[s("div",[s("div",{staticClass:"h3"},[t._v("买家上门自提功能")]),t._v(" "),s("div",{staticClass:"h3word"},[t._v("启用上门自提功能后,买家可以就近选择你预设的自提点,下单后你需要尽快将商品配送至指定自提点。")])]),t._v(" "),s("div",[s("el-switch",{attrs:{"active-color":"#13ce66","active-value":"1","inactive-value":"0","inactive-color":"#ff4949"},on:{change:t.changeStatus},model:{value:t.selffedchStatus,callback:function(e){t.selffedchStatus=e},expression:"selffedchStatus"}})],1)])]),t._v(" "),s("el-card",{staticClass:"operate-container",staticStyle:{"margin-top":"10px"},attrs:{shadow:"never"}},[s("div",{staticClass:"flex-row-between",staticStyle:{width:"100%"}},[s("div",[s("i",{staticClass:"el-icon-tickets"}),t._v(" "),s("span",[t._v("数据列表")])]),t._v(" "),s("div",{staticStyle:{"padding-right":"20px"}},[s("el-button",{attrs:{type:"text",icon:"el-icon-circle-plus-outline"},on:{click:function(e){t.$router.push({path:"/logistics/selfPickUp/newSelf"})}}},[t._v("新增自提点")])],1)])]),t._v(" "),s("el-card",{staticClass:"filter-container",staticStyle:{"margin-top":"20px"},attrs:{shadow:"never"}},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,border:""}},[s("el-table-column",{attrs:{label:"自提点名称",prop:"name"}}),t._v(" "),s("el-table-column",{attrs:{label:"联系地址"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(e.row.provinceName+e.row.cityName+e.row.districtName+e.row.address)+"\n        ")]}}])}),t._v(" "),s("el-table-column",{attrs:{label:"联系电话",prop:"phoneNumber"}}),t._v(" "),s("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){t.$router.push({path:"/logistics/selfPickUp/editSelf",query:{id:e.row.id}})}}},[t._v("编辑")]),t._v(" "),s("el-button",{staticStyle:{color:"#F56C6C"},attrs:{type:"text",size:"small"},on:{click:function(s){t.deleteItem(e.row.id)}}},[t._v("删除")])]}}])})],1)],1),t._v(" "),s("div",{staticClass:"pageDown"},[s("el-pagination",{attrs:{"page-sizes":[5,10,15,20],"page-size":t.searchList.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.listTotal},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},[],!1,null,"05ea33ed",null);r.options.__file="selfPickUp.vue";e.default=r.exports},CJlP:function(t,e,s){},PgIU:function(t,e,s){"use strict";s.d(e,"g",function(){return n}),s.d(e,"e",function(){return c}),s.d(e,"f",function(){return o}),s.d(e,"a",function(){return i}),s.d(e,"b",function(){return l}),s.d(e,"d",function(){return r}),s.d(e,"c",function(){return u});var a=s("t3Un");function n(t){return Object(a.a)({url:"/sys/shopSelffetch/shopSelffetchPage",method:"post",data:t})}function c(t){return Object(a.a)({url:"/sys/shopSelffetch/getShopSelffetch?shopId="+t,method:"get"})}function o(t,e){return Object(a.a)({url:"/sys/shopSelffetch/setShopSelffetch?shopId="+t+"&selffedchStatus="+e,method:"get"})}function i(t){return Object(a.a)({url:"/sys/shopSelffetch/addShopSelffetch",method:"post",data:t})}function l(t,e){return Object(a.a)({url:"/sys/shopSelffetch/deleteShopSelffetch?selffetchId="+t+"&shopId="+e,method:"delete"})}function r(t){return Object(a.a)({url:"/sys/shopSelffetch/findShopSelffetchById?selffetchId="+t,method:"get"})}function u(t){return Object(a.a)({url:"/sys/shopSelffetch/editShopSelffetch",method:"post",data:t})}}}]);
//# sourceMappingURL=chunk-60c8.e67cceca.js.map