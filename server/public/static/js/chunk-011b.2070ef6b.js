(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-011b"],{CIpY:function(e,t,n){"use strict";var s=n("vjlQ");n.n(s).a},ebeT:function(e,t,n){"use strict";n.r(t);var s=n("QbLZ"),a=n.n(s),i=n("L2JU"),r=n("nP1G"),l=n("pLQY"),o={data:function(){return{list:{userName:"",cellPhone:"",setState:"",orderNo:"",groupId:"",registerTime:"",setTime:""},groupList:[],id:"",tableList:[],pageNum:1,page_size:10,total:0,loading:!1,pickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()},shortcuts:[{text:"今天",onClick:function(e){var t=new Date;t.setTime(t.getTime()),t.setHours(t.getHours()),t.setMinutes(t.getMinutes()),t.setSeconds(t.getSeconds());var n=new Date;n.setTime(n.getTime()),n.setHours(0),n.setMinutes(0),n.setSeconds(0),e.$emit("pick",[n,t])}},{text:"昨天",onClick:function(e){var t=new Date;t.setTime(t.getTime()-864e5),t.setHours(23),t.setMinutes(59),t.setSeconds(59);var n=new Date;n.setTime(n.getTime()-864e5),n.setHours(0),n.setMinutes(0),n.setSeconds(0),e.$emit("pick",[n,t])}},{text:"最近一周",onClick:function(e){var t=new Date,n=new Date;n.setTime(n.getTime()-6048e5),e.$emit("pick",[n,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,n=new Date;n.setTime(n.getTime()-2592e6),e.$emit("pick",[n,t])}}]},settlementList:[{value:"0",label:"全部"},{value:"1",label:"未结算"},{value:"2",label:"已结算"}]}},created:function(){this.searchList(),this.searchGroupList()},mounted:function(){},methods:{searchGroupList:function(){var e=this;Object(r.p)({shopId:this.shop.shopId}).then(function(t){200==t.code?e.groupList=t.data:e.$notify.error({title:"错误",message:t.message})}).catch(function(e){console.log(e)})},searchList:function(){var e=this;this.loading=!0,Object(l.d)({shopId:this.shop.shopId,pageNum:this.pageNum,pageSize:this.page_size,userName:this.list.userName,cellPhone:this.list.cellPhone,orderNo:this.list.orderNo,setState:this.list.setState,groupId:this.list.groupId,beginTime:null==this.list.registerTime?"":this.list.registerTime[0],endTime:null==this.list.registerTime?"":this.list.registerTime[1],setBeginTime:null==this.list.setTime?"":this.list.setTime[0],setEndTime:null==this.list.setTime?"":this.list.setTime[1]}).then(function(t){200==t.code?(e.tableList=t.data.list,e.total=t.data.total,e.loading=!1):e.$notify.error({title:"错误",message:t.message})})},reset:function(){this.list={userName:"",cellPhone:"",setState:"",orderNo:"",groupId:"",registerTime:"",setTime:""},this.pageNum=1,this.searchList()},handleSizeChange:function(e){this.page_size=e,this.searchList()},pageChange:function(e){this.pageNum=e,this.searchList()}},computed:a()({},Object(i.c)(["user","shop"]))},u=(n("CIpY"),n("KHd+")),c=Object(u.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-card",{staticClass:"filter-container",attrs:{shadow:"never"}},[n("div",[n("i",{staticClass:"el-icon-search"}),e._v(" "),n("span",[e._v("筛选搜索")]),e._v(" "),n("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"small"},on:{click:e.searchList}},[e._v("\n        查询\n      ")]),e._v(" "),n("el-button",{staticStyle:{float:"right","margin-right":"15px"},attrs:{size:"small"},on:{click:e.reset}},[e._v("\n        重置\n      ")])],1),e._v(" "),n("div",{staticStyle:{"margin-top":"40px"}},[n("el-form",{attrs:{inline:!0,model:e.list,size:"small","label-width":"140px"}},[n("el-form-item",{attrs:{label:"分销员昵称："}},[n("el-input",{attrs:{clearable:"",placeholder:"分销员昵称"},model:{value:e.list.userName,callback:function(t){e.$set(e.list,"userName",t)},expression:"list.userName"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"分销员手机号："}},[n("el-input",{attrs:{clearable:"",placeholder:"分销员手机号"},model:{value:e.list.cellPhone,callback:function(t){e.$set(e.list,"cellPhone",t)},expression:"list.cellPhone"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"订单号："}},[n("el-input",{attrs:{clearable:"",placeholder:"订单号"},model:{value:e.list.orderNo,callback:function(t){e.$set(e.list,"orderNo",t)},expression:"list.orderNo"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"结算状态："}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.list.setState,callback:function(t){e.$set(e.list,"setState",t)},expression:"list.setState"}},e._l(e.settlementList,function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),n("el-form-item",{attrs:{label:"按分组查看："}},[n("el-select",{attrs:{clearable:"",placeholder:"默认选择全部"},model:{value:e.list.groupId,callback:function(t){e.$set(e.list,"groupId",t)},expression:"list.groupId"}},e._l(e.groupList,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),n("el-form-item",{attrs:{label:"下单时间："}},[n("el-date-picker",{attrs:{type:"datetimerange","value-format":"yyyy-MM-dd HH-mm-ss","picker-options":e.pickerOptions,"range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.list.registerTime,callback:function(t){e.$set(e.list,"registerTime",t)},expression:"list.registerTime"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"结算时间："}},[n("el-date-picker",{attrs:{type:"datetimerange","value-format":"yyyy-MM-dd HH-mm-ss","picker-options":e.pickerOptions,"range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.list.setTime,callback:function(t){e.$set(e.list,"setTime",t)},expression:"list.setTime"}})],1)],1)],1)]),e._v(" "),n("el-card",{staticClass:"operate-container",attrs:{shadow:"never"}},[n("i",{staticClass:"el-icon-tickets"}),e._v(" "),n("span",[e._v("数据列表")])]),e._v(" "),n("el-card",{staticClass:"operate-container",attrs:{shadow:"never"}},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableList,border:""}},[n("el-table-column",{attrs:{type:"index",width:"50"}}),e._v(" "),n("el-table-column",{attrs:{label:"订单号",width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticStyle:{color:"#409EFF"},on:{click:function(n){e.$router.push({path:"/order/orderList/orderinfo",query:{orderId:t.row.orderId}})}}},[e._v("\n            "+e._s(t.row.orderNo)+"\n          ")])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"下单日期",width:"190",prop:"createTime",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{label:"结算时间",prop:"setTime",width:"190",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{label:"分销商品实付金额",width:"155",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("￥"+e._s(t.row.payAmount))]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"佣金（对应分销员信息）"}},[n("el-table-column",{attrs:{label:"分销员昵称",prop:"userName",width:"155",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{label:"分销员电话",width:"155",prop:"cellPhone",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{label:"所属分组",width:"155",prop:"groupName",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{label:"佣金奖励",width:"155",prop:"commissionAmount",align:"center"}})],1),e._v(" "),n("el-table-column",{attrs:{label:"邀请奖励（对应分销员信息）"}},[n("el-table-column",{attrs:{label:"分销员昵称",prop:"channelUserName",width:"155",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{label:"分销员电话",width:"155",prop:"channelCellPhone",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{label:"所属分组",width:"155",prop:"channelGroupName",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{label:"邀请奖励",width:"155",prop:"inviteAmount",align:"center"}})],1),e._v(" "),n("el-table-column",{attrs:{label:"结算状态",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return["待结算"==t.row.setStateName?n("el-tag",{attrs:{type:"danger"}},[e._v("待结算")]):e._e(),e._v(" "),"已结算"==t.row.setStateName?n("el-tag",{attrs:{type:"success"}},[e._v("已结算")]):e._e()]}}])})],1),e._v(" "),n("div",{staticClass:"flex-row-end",staticStyle:{"margin-top":"20px"}},[n("el-pagination",{staticStyle:{"margin-top":"10px","margin-left":"20px"},attrs:{background:"",layout:"total,sizes,prev,pager,next,jumper","page-size":e.page_size,"page-sizes":[10,30,50],"current-page":e.pageNum,total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.pageChange}})],1)],1)],1)},[],!1,null,"8b172562",null);c.options.__file="index.vue";t.default=c.exports},nP1G:function(e,t,n){"use strict";n.d(t,"c",function(){return a}),n.d(t,"t",function(){return i}),n.d(t,"n",function(){return r}),n.d(t,"r",function(){return l}),n.d(t,"p",function(){return o}),n.d(t,"o",function(){return u}),n.d(t,"b",function(){return c}),n.d(t,"i",function(){return d}),n.d(t,"e",function(){return p}),n.d(t,"h",function(){return h}),n.d(t,"f",function(){return m}),n.d(t,"q",function(){return b}),n.d(t,"m",function(){return f}),n.d(t,"l",function(){return g}),n.d(t,"d",function(){return v}),n.d(t,"k",function(){return y}),n.d(t,"a",function(){return C}),n.d(t,"g",function(){return _}),n.d(t,"s",function(){return w}),n.d(t,"j",function(){return T});var s=n("t3Un");function a(e){return Object(s.a)({url:"/sys/business/shopChannel/findChannelUserList",method:"post",data:e})}function i(e){return Object(s.a)({url:"/sys/business/shopChannel/updateChannelUserStatus",method:"post",data:e})}function r(e){return Object(s.a)({url:"/sys/business/shopChannel/findChannelUserByParentId",method:"post",data:e})}function l(e){return Object(s.a)({url:"/sys/business/shopChannel/removeBindByid",method:"post",data:e})}function o(e){return Object(s.a)({url:"/sys/business/shopChannel/initChannelGroupList",method:"post",data:e})}function u(e){return Object(s.a)({url:"/sys/business/shopChannel/verificationGroupCapacity",method:"post",data:e})}function c(e){return Object(s.a)({url:"/sys/business/shopChannel/changeChannelUserGroup",method:"post",data:e})}function d(e){return Object(s.a)({url:"/sys/business/shopChannel/findChannelGroupList",method:"post",data:e})}function p(e){return Object(s.a)({url:"/sys/business/shopChannel/verificationGroupName",method:"post",data:e})}function h(e){return Object(s.a)({url:"/sys/business/shopChannel/editChannelGroup",method:"post",data:e})}function m(e){return Object(s.a)({url:"/sys/business/shopChannel/deleteChannelGroup",method:"post",data:e})}function b(e){return Object(s.a)({url:"/sys/business/shopChannel/initChannelUserList",method:"post",data:e})}function f(e){return Object(s.a)({url:"/sys/business/shopChannel/findChannelUserByGroupId",method:"post",data:e})}function g(e){return Object(s.a)({url:"/sys/business/shopChannel/findChannelUserApplyRecordList",method:"post",data:e})}function v(e){return Object(s.a)({url:"/sys/business/shopChannel/checkApplyState",method:"post",data:e})}function y(e){return Object(s.a)({url:"/sys/business/shopChannel/findChannelRecruitInfoList",method:"post",data:e})}function C(e){return Object(s.a)({url:"/sys/business/shopChannel/addChannelRecruitInfo",method:"post",data:e})}function _(e){return Object(s.a)({url:"/sys/business/shopChannel/deleteChannelRecruitInfoById",method:"post",data:e})}function w(e){return Object(s.a)({url:"/sys/business/shopChannel/updateChannelRecruitInfo",method:"post",data:e})}function T(e){return Object(s.a)({url:"/sys/business/shopChannel/findChannelRecruitInfoById",method:"post",data:e})}},pLQY:function(e,t,n){"use strict";n.d(t,"e",function(){return a}),n.d(t,"b",function(){return i}),n.d(t,"a",function(){return r}),n.d(t,"c",function(){return l}),n.d(t,"d",function(){return o});var s=n("t3Un");function a(e){return Object(s.a)({url:"/sys/business/channelUser/channelUserList",method:"post",data:e})}function i(e){return Object(s.a)({url:"/sys/business/channelUser/channelGroupList",method:"post",data:e})}function r(e){return Object(s.a)({url:"/sys/business/channelUser/channelCommissionOrderList",method:"post",data:e})}function l(e){return Object(s.a)({url:"/sys/business/channelUser/channelInviteOrderList",method:"post",data:e})}function o(e){return Object(s.a)({url:"/sys/business/channelUser/channelOrderList",method:"post",data:e})}},vjlQ:function(e,t,n){}}]);
//# sourceMappingURL=chunk-011b.2070ef6b.js.map