(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-03ac"],{Mcbz:function(t,e,n){"use strict";n.r(e);var s=n("QbLZ"),i=n.n(s),o=n("L2JU"),a=n("nP1G"),r={data:function(){return{list:{groupId:""},id:this.$route.query.id,name:this.$route.query.name,tableList:[],multipleSelection:[],groupList:[],ids:[],dialogFormVisible:!1,pageNum:1,page_size:15,total:0}},created:function(){this.searchGroupList(),this.searchList()},mounted:function(){},methods:{searchGroupList:function(){var t=this;Object(a.p)({shopId:this.shop.shopId}).then(function(e){200==e.code?t.groupList=e.data:t.$notify.error({title:"错误",message:e.message})}).catch(function(t){console.log(t)})},searchList:function(){var t=this;Object(a.m)({shopId:this.shop.shopId,groupId:this.id,pageNum:this.pageNum,pageSize:this.page_size}).then(function(e){200==e.code?(t.tableList=e.data.list,t.total=e.data.total):t.$notify.error({title:"失败",message:e.message})})},handleSelectionChange:function(t){this.multipleSelection=t,console.log(this.multipleSelection,"多选")},changeGroup:function(t){if(console.log(t),this.ids=[],t||0!=this.multipleSelection.length){t?this.ids.push(t.cUserId):this.ids=this.multipleSelection.map(function(t){return t.cUserId}),this.dialogFormVisible=!0;var e=this.groupList.find(function(t){return 1==t.isDefault});this.list.groupId=e.id}else this.$message({message:"请选择要操作的申请",type:"warning",duration:1e3})},setDistriGroup:function(){var t=this;""==this.list.groupId&&this.$notify.error({title:"失败",message:"请选择分组"}),Object(a.o)({shopId:this.shop.shopId,groupId:this.list.groupId,count:this.ids.length}).then(function(e){1==e.data?Object(a.b)({shopId:t.shop.shopId,groupId:t.list.groupId,ids:t.ids}).then(function(e){console.log(e),1==e.data?(t.$notify({title:"成功",type:"success",message:e.message}),t.dialogFormVisible=!1,t.searchList()):t.$notify.error({title:"失败",message:e.message})}):t.$notify.error({title:"错误",message:e.message})})},goBack:function(){this.$router.push({path:"/distributionManagement/distributor",query:{activeName:"four"}})},handleSizeChange:function(t){this.page_size=t,this.searchList()},pageChange:function(t){this.pageNum=t,this.searchList()}},computed:i()({},Object(o.c)(["user","shop"]))},u=(n("Ymvs"),n("KHd+")),l=Object(u.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-card",[n("div",{staticClass:"main-title"},[n("span",[t._v("分组名称："+t._s(t.name))]),t._v(" "),n("span",[t._v("分销成员数量："+t._s(t.total))])])]),t._v(" "),n("div",{staticClass:"table-container"},[n("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableList},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),n("el-table-column",{attrs:{label:"分销员昵称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.channelUsernickName))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"分销员手机号",prop:"channelUserPhone",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{label:"邀请方昵称",prop:"inviternickName",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{label:"邀请方手机号",prop:"inviterPhone",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text"},on:{click:function(n){t.changeGroup(e.row)}}},[t._v("修改分组")])]}}])})],1)],1),t._v(" "),n("el-dialog",{attrs:{title:"修改用户分组",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[n("el-form",[n("el-form-item",{attrs:{label:"按分组查看："}},[n("el-select",{attrs:{placeholder:"默认分组"},model:{value:t.list.groupId,callback:function(e){t.$set(t.list,"groupId",e)},expression:"list.groupId"}},t._l(t.groupList,function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1)],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.setDistriGroup()}}},[t._v("确 定")])],1)],1),t._v(" "),n("div",{staticClass:"flex-row-between",staticStyle:{"margin-top":"20px"}},[n("div",[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.changeGroup()}}},[t._v("\n        批量修改分组\n      ")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.goBack()}}},[t._v("\n        返回上一页\n      ")])],1),t._v(" "),n("el-pagination",{staticStyle:{"margin-top":"10px","margin-left":"20px"},attrs:{background:"",layout:"total,sizes,prev,pager,next,jumper","page-size":t.page_size,"page-sizes":[10,20,30],"current-page":t.pageNum,total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.pageChange}})],1)],1)},[],!1,null,"70541974",null);l.options.__file="editGroupMember.vue";e.default=l.exports},Ymvs:function(t,e,n){"use strict";var s=n("eOFW");n.n(s).a},eOFW:function(t,e,n){},nP1G:function(t,e,n){"use strict";n.d(e,"c",function(){return i}),n.d(e,"t",function(){return o}),n.d(e,"n",function(){return a}),n.d(e,"r",function(){return r}),n.d(e,"p",function(){return u}),n.d(e,"o",function(){return l}),n.d(e,"b",function(){return c}),n.d(e,"i",function(){return h}),n.d(e,"e",function(){return d}),n.d(e,"h",function(){return p}),n.d(e,"f",function(){return f}),n.d(e,"q",function(){return b}),n.d(e,"m",function(){return m}),n.d(e,"l",function(){return g}),n.d(e,"d",function(){return y}),n.d(e,"k",function(){return v}),n.d(e,"a",function(){return C}),n.d(e,"g",function(){return _}),n.d(e,"s",function(){return I}),n.d(e,"j",function(){return j});var s=n("t3Un");function i(t){return Object(s.a)({url:"/sys/business/shopChannel/findChannelUserList",method:"post",data:t})}function o(t){return Object(s.a)({url:"/sys/business/shopChannel/updateChannelUserStatus",method:"post",data:t})}function a(t){return Object(s.a)({url:"/sys/business/shopChannel/findChannelUserByParentId",method:"post",data:t})}function r(t){return Object(s.a)({url:"/sys/business/shopChannel/removeBindByid",method:"post",data:t})}function u(t){return Object(s.a)({url:"/sys/business/shopChannel/initChannelGroupList",method:"post",data:t})}function l(t){return Object(s.a)({url:"/sys/business/shopChannel/verificationGroupCapacity",method:"post",data:t})}function c(t){return Object(s.a)({url:"/sys/business/shopChannel/changeChannelUserGroup",method:"post",data:t})}function h(t){return Object(s.a)({url:"/sys/business/shopChannel/findChannelGroupList",method:"post",data:t})}function d(t){return Object(s.a)({url:"/sys/business/shopChannel/verificationGroupName",method:"post",data:t})}function p(t){return Object(s.a)({url:"/sys/business/shopChannel/editChannelGroup",method:"post",data:t})}function f(t){return Object(s.a)({url:"/sys/business/shopChannel/deleteChannelGroup",method:"post",data:t})}function b(t){return Object(s.a)({url:"/sys/business/shopChannel/initChannelUserList",method:"post",data:t})}function m(t){return Object(s.a)({url:"/sys/business/shopChannel/findChannelUserByGroupId",method:"post",data:t})}function g(t){return Object(s.a)({url:"/sys/business/shopChannel/findChannelUserApplyRecordList",method:"post",data:t})}function y(t){return Object(s.a)({url:"/sys/business/shopChannel/checkApplyState",method:"post",data:t})}function v(t){return Object(s.a)({url:"/sys/business/shopChannel/findChannelRecruitInfoList",method:"post",data:t})}function C(t){return Object(s.a)({url:"/sys/business/shopChannel/addChannelRecruitInfo",method:"post",data:t})}function _(t){return Object(s.a)({url:"/sys/business/shopChannel/deleteChannelRecruitInfoById",method:"post",data:t})}function I(t){return Object(s.a)({url:"/sys/business/shopChannel/updateChannelRecruitInfo",method:"post",data:t})}function j(t){return Object(s.a)({url:"/sys/business/shopChannel/findChannelRecruitInfoById",method:"post",data:t})}}}]);
//# sourceMappingURL=chunk-03ac.cce37d2c.js.map