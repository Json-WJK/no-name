(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4f8d"],{Cgco:function(t,e,n){"use strict";var i=n("tpTh");n.n(i).a},lbaW:function(t,e,n){"use strict";n.r(e);var i=n("QbLZ"),a=n.n(i),o=n("L2JU"),s=n("rg5m"),l={data:function(){return{configLoading:!1,editNameLoading:!1,searchList:{name:"",pageNum:1,pageSize:5},list:[],listTotal:0,multipleSelection:[],selectAllSure:!1,editNameShow:!1,ruleForm:{},rules:{name:[{required:!0,message:"请输入导航名称",trigger:"blur"}]},activeName:"0",navShow:!1,navigation1:[],navigation2:[],shopNavList:[]}},created:function(){this.searchList.shopId=this.shop.shopId,this.getData(),this.getSelect()},methods:{subConfig:function(){var t=this;this.configLoading=!0;var e={shopId:this.shop.shopId,navigationArray:this.navigation1.concat(this.navigation2)};Object(s.h)(e).then(function(e){console.log("配置",e),200==e.code?(t.$message({message:"配置成功",type:"success"}),t.navShow=!1,setTimeout(function(){t.configLoading=!1},1e3)):(t.$message.error(e.message),t.configLoading=!1)})},navShowFun:function(){this.getNav(),this.navShow=!0},getSelect:function(){var t=this;Object(s.f)(this.shop.shopId).then(function(e){console.log("权限配置下拉框",e),t.shopNavList=e.data,t.shopNavList.forEach(function(t){return t.id=""+t.id})})},getNav:function(){var t=this;Object(s.b)(this.shop.shopId).then(function(e){console.log("获取店铺配置",e),t.navigation1=e.data.navigation1,t.navigation1.forEach(function(t){t.type=1,t.navigationId=""+t.navigationId}),t.navigation2=e.data.navigation2,t.navigation2.forEach(function(t){t.type=2,t.navigationId=""+t.navigationId})})},deleteItem:function(t){var e=this;this.$confirm("此操作将删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.deleteFun(t.id)}).catch(function(){})},deleteAll:function(){var t=this;0!=this.multipleSelection.length?this.$confirm("此操作将删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e=[];t.multipleSelection.forEach(function(t){return e.push(t.id)}),e=e.join(","),t.deleteFun(e)}).catch(function(){}):this.$message.error("请选择数据后再试")},deleteFun:function(t){var e=this;Object(s.a)({ids:t}).then(function(t){console.log("删除",t),200==t.code?(e.$message({message:"删除成功",type:"success"}),e.getData(),e.getSelect()):e.$message.error(t.message)})},submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;if(e.ruleForm.oldName==e.ruleForm.newName)return console.log("傻逼没改直接点的确定"),void e.$message({message:"修改成功",type:"success"});e.editNameLoading=!0;var n={shopId:e.shop.shopId,name:e.ruleForm.newName,id:e.ruleForm.id};Object(s.j)(n).then(function(t){console.log("验证是否重名",t),200==t.code?Object(s.l)(n).then(function(n){console.log("改名",n),200==t.code?(e.$message({message:"修改成功",type:"success"}),e.editNameShow=!1,e.getData(),setTimeout(function(){e.editNameLoading=!1},1e3)):(e.editNameLoading=!1,e.$message.error(t.message))}):(e.editNameLoading=!1,e.$message.error(t.message))})})},editNameShowFun:function(t){this.ruleForm=t,this.ruleForm.oldName=t.name,this.ruleForm.newName=t.name,this.editNameShow=!0},isDisabled:function(t,e){return!t.isDefault},getData:function(){var t=this;Object(s.e)(this.searchList).then(function(e){console.log("获取店铺导航列表",e),t.list=e.data.list,t.listTotal=e.data.total})},reset:function(){this.searchList.name="",this.getData()},selectAllSureList:function(){this.selectAllSure?(this.selectAllSure=!1,this.$refs.multipleTable.toggleAllSelection()):(this.selectAllSure=!0,this.$refs.multipleTable.clearSelection())},toggleSelection:function(t){var e=this;t?t.forEach(function(t){e.$refs.multipleTable.toggleRowSelection(t)}):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(t){this.multipleSelection=t,this.selectAllSure=this.multipleSelection.length==this.list.length-1&&0!=this.list.length},handleSizeChange:function(t){console.log("每页 "+t+" 条"),this.searchList.pageSize=t,this.getData()},handleCurrentChange:function(t){console.log("当前页: "+t),this.searchList.pageNum=t,this.getData()},change:function(t){this.$forceUpdate()}},computed:a()({},Object(o.c)(["user","shop"]))},r=(n("Cgco"),n("KHd+")),c=Object(r.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pageContent"},[n("el-card",{staticClass:"filter-container",attrs:{shadow:"never"}},[n("div",[n("i",{staticClass:"el-icon-search"}),t._v(" "),n("span",[t._v("筛选搜索")]),t._v(" "),n("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"small"},on:{click:t.getData}},[t._v("查询")]),t._v(" "),n("el-button",{staticStyle:{float:"right","margin-right":"15px"},attrs:{size:"small"},on:{click:t.reset}},[t._v("重置")])],1),t._v(" "),n("div",{staticStyle:{"margin-top":"15px"}},[n("el-form",{attrs:{inline:!0,model:t.searchList,size:"small","label-width":"140px"}},[n("el-form-item",{attrs:{label:"导航名称："}},[n("el-input",{staticStyle:{width:"203px"},attrs:{clearable:"",placeholder:"导航名称"},model:{value:t.searchList.name,callback:function(e){t.$set(t.searchList,"name",e)},expression:"searchList.name"}})],1)],1)],1)]),t._v(" "),n("el-card",{staticClass:"operate-container",staticStyle:{"margin-top":"10px"},attrs:{shadow:"never"}},[n("div",{staticClass:"flex-row-between",staticStyle:{width:"100%"}},[n("div",[n("i",{staticClass:"el-icon-tickets"}),t._v(" "),n("span",[t._v("数据列表")])]),t._v(" "),n("div",{staticStyle:{"padding-right":"20px"}},[n("el-button",{staticStyle:{"margin-right":"20px"},attrs:{type:"text"},on:{click:function(e){t.navShowFun()}}},[t._v("系统导航设置")]),t._v(" "),n("el-button",{attrs:{type:"text",icon:"el-icon-circle-plus-outline"},on:{click:function(e){t.$router.push({path:"/shop/shopNavBar/newNavBar"})}}},[t._v("新增导航")])],1)])]),t._v(" "),n("div",[n("el-card",{staticClass:"filter-container",staticStyle:{"margin-top":"20px"},attrs:{shadow:"never"}},[n("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.list,"tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",selectable:t.isDisabled,width:"55",disabled:"true"}}),t._v(" "),n("el-table-column",{attrs:{label:"导航名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"nameBtn flex-row-center"},[n("div",{staticStyle:{"line-height":"40px"}},[t._v(t._s(e.row.name))]),t._v(" "),n("el-button",{staticClass:"editBtn",attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(n){t.editNameShowFun(e.row)}}})],1)]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){t.$router.push({path:"/shop/shopNavBar/editNavBar",query:{id:e.row.id}})}}},[t._v("编辑")]),t._v(" "),0==e.row.isDefault?n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){t.deleteItem(e.row)}}},[t._v("删除")]):t._e()]}}])})],1),t._v(" "),n("div",{staticClass:"flex-row-between",staticStyle:{"padding-top":"20px"}},[n("div",{staticClass:"flex-row-start"},[n("div",{staticClass:"flex-row-start"},[n("el-checkbox",{on:{change:t.selectAllSureList},model:{value:t.selectAllSure,callback:function(e){t.selectAllSure=e},expression:"selectAllSure"}},[t._v("当前页全选")]),t._v(" "),n("div",{staticClass:"checkBoxDiv"},[t._v("\n              已选择 "),n("span",{staticStyle:{color:"#409EFF"}},[t._v(t._s(t.multipleSelection.length))]),t._v(" 项\n            ")])],1),t._v(" "),n("div",{staticClass:"flex-row-start",staticStyle:{"margin-left":"20px"}},[n("el-button",{attrs:{type:"primary"},on:{click:t.deleteAll}},[t._v("批量删除")])],1)]),t._v(" "),n("div",[n("el-pagination",{attrs:{"page-sizes":[5,10,15,20],"page-size":t.searchList.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.listTotal},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])],1)],1),t._v(" "),n("el-dialog",{attrs:{title:"",visible:t.navShow,width:"70%"},on:{"update:visible":function(e){t.navShow=e}}},[n("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"系统导航设置",name:"0"}},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.navigation1}},[n("el-table-column",{attrs:{prop:"name",label:"名称"}}),t._v(" "),n("el-table-column",{attrs:{label:"配置"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.row.navigationId,callback:function(n){t.$set(e.row,"navigationId",n)},expression:"scope.row.navigationId"}},t._l(t.shopNavList,function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))]}}])})],1)],1),t._v(" "),n("el-tab-pane",{attrs:{label:"功能导航设置",name:"1"}},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.navigation2}},[n("el-table-column",{attrs:{prop:"name",label:"名称"}}),t._v(" "),n("el-table-column",{attrs:{label:"配置"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.row.navigationId,callback:function(n){t.$set(e.row,"navigationId",n)},expression:"scope.row.navigationId"}},t._l(t.shopNavList,function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))]}}])})],1)],1),t._v(" "),n("div",{staticClass:"flex-row-center",staticStyle:{"margin-top":"40px"}},[n("el-button",{staticStyle:{"margin-right":"40px"},on:{click:function(e){t.navShow=!1}}},[t._v("返 回")]),t._v(" "),n("el-button",{attrs:{type:"primary",loading:t.configLoading},on:{click:t.subConfig}},[t._v("确 认")])],1)],1)],1),t._v(" "),n("el-dialog",{attrs:{title:"导航信息修改",visible:t.editNameShow,width:"30%"},on:{"update:visible":function(e){t.editNameShow=e}}},[n("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm,rules:t.rules,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"导航名称：",prop:"name"}},[n("el-input",{attrs:{maxlength:"15","show-word-limit":""},on:{input:function(e){t.change(e)}},model:{value:t.ruleForm.newName,callback:function(e){t.$set(t.ruleForm,"newName",e)},expression:"ruleForm.newName"}})],1),t._v(" "),n("el-form-item",[n("el-button",{on:{click:function(e){t.editNameShow=!1}}},[t._v("取 消")]),t._v(" "),n("el-button",{attrs:{loading:t.editNameLoading,type:"primary"},on:{click:function(e){t.submitForm("ruleForm")}}},[t._v("确 定")])],1)],1)],1)],1)},[],!1,null,"228db2c2",null);c.options.__file="shopNavBar.vue";e.default=c.exports},rg5m:function(t,e,n){"use strict";n.d(e,"c",function(){return a}),n.d(e,"e",function(){return o}),n.d(e,"j",function(){return s}),n.d(e,"l",function(){return l}),n.d(e,"a",function(){return r}),n.d(e,"g",function(){return c}),n.d(e,"i",function(){return u}),n.d(e,"b",function(){return h}),n.d(e,"f",function(){return d}),n.d(e,"h",function(){return g}),n.d(e,"d",function(){return p}),n.d(e,"k",function(){return m});var i=n("t3Un");function a(){return Object(i.a)({url:"/sys/business/shopNavigation/getShopNavigationIconList",method:"get"})}function o(t){return Object(i.a)({url:"/sys/business/shopNavigation/getShopNavigationInfoList",method:"post",data:t})}function s(t){return Object(i.a)({url:"/sys/business/shopNavigation/isShopNavigationExist?shopId="+t.shopId+"&name="+t.name,method:"get"})}function l(t){return Object(i.a)({url:"/sys/business/shopNavigation/updateShopNaigationName",method:"post",data:t})}function r(t){return Object(i.a)({url:"/sys/business/shopNavigation/deleteShopNaigation",method:"post",data:t})}function c(t){return Object(i.a)({url:"/sys/business/shopNavigation/getSystemLinkList",method:"get"})}function u(t){return Object(i.a)({url:"/sys/business/shopNavigation/insertShopNavigation",method:"post",data:t})}function h(t){return Object(i.a)({url:"/sys/business/shopNavigation/getShopNavigationConfig?shopId="+t,method:"get"})}function d(t){return Object(i.a)({url:"/sys/business/shopNavigation/getShopNavigationInfoNoPageList?shopId="+t,method:"get"})}function g(t){return Object(i.a)({url:"/sys/business/shopNavigation/insertNavigationConfig",method:"post",data:t})}function p(t){return Object(i.a)({url:"/sys/business/shopNavigation/getShopNavigationInfo?id="+t,method:"get"})}function m(t){return Object(i.a)({url:"/sys/business/shopNavigation/udpateShopNaigationInfo",method:"post",data:t})}},tpTh:function(t,e,n){}}]);
//# sourceMappingURL=chunk-4f8d.01ccfbc2.js.map