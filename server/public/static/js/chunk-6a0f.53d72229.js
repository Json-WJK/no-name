(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6a0f"],{FiV3:function(e,t,n){"use strict";var s=n("IbPx");n.n(s).a},IbPx:function(e,t,n){},X3Wo:function(e,t,n){"use strict";n.r(t);var s=n("pLQY"),a={props:["status","shop","user"],data:function(){return{list:{orderNo:"",orderStauts:"",registerTime:""},id:"",tableList:[],multipleTable:[],orderId:"",listChaildren:[],pageNum:1,page_size:10,total:0,loading:!1,listLoading:!1,pickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()},shortcuts:[{text:"今天",onClick:function(e){var t=new Date;t.setTime(t.getTime()),t.setHours(t.getHours()),t.setMinutes(t.getMinutes()),t.setSeconds(t.getSeconds());var n=new Date;n.setTime(n.getTime()),n.setHours(0),n.setMinutes(0),n.setSeconds(0),e.$emit("pick",[n,t])}},{text:"昨天",onClick:function(e){var t=new Date;t.setTime(t.getTime()-864e5),t.setHours(23),t.setMinutes(59),t.setSeconds(59);var n=new Date;n.setTime(n.getTime()-864e5),n.setHours(0),n.setMinutes(0),n.setSeconds(0),e.$emit("pick",[n,t])}},{text:"最近一周",onClick:function(e){var t=new Date,n=new Date;n.setTime(n.getTime()-6048e5),e.$emit("pick",[n,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,n=new Date;n.setTime(n.getTime()-2592e6),e.$emit("pick",[n,t])}}]},settlementList:[{value:"",label:"全部"},{value:"1",label:"待发货"},{value:"2",label:"已发货"},{value:"3",label:"已完成"},{value:"4",label:"已关闭"}],value:""}},created:function(){this.searchList()},mounted:function(){},methods:{searchList:function(){var e=this;this.loading=!0,Object(s.c)({shopId:this.shop.shopId,pageNum:this.pageNum,pageSize:this.page_size,userId:this.$route.query.userId,orderStauts:this.list.orderStauts,orderNo:this.list.orderNo,beginTime:null==this.list.registerTime?"":this.list.registerTime[0],endTime:null==this.list.registerTime?"":this.list.registerTime[1]}).then(function(t){200==t.code?(e.tableList=t.data.list,e.total=t.data.total,e.loading=!1):e.$notify.error({title:"错误",message:t.message})})},onRowClick:function(e,t,n){this.orderId=e.orderId,this.orderType=e.orderType},getChaildren:function(e,t){var n=this;t.length>1?this.tableList.forEach(function(t){t.orderId!=e.orderId&&n.$refs.multipleTable.toggleRowExpansion(t,!1)}):(console.log(this.orderId,e.orderId),this.listLoading=!0,channelUserOrderDetail({orderId:this.orderId,orderType:this.orderType}).then(function(e){n.listLoading=!1,n.listChaildren=e.data}))},toggleRowExpansion:function(e){},reset:function(){this.list={orderNo:"",status:"",registerTime:""},this.searchList()},goBack:function(){this.$store.dispatch("delView",this.$route),this.$router.go(-1)},handleSizeChange:function(e){this.page_size=e,this.searchList()},pageChange:function(e){this.pageNum=e,this.searchList()}},computed:{startTime:function(){return this.status}},watch:{startTime:function(e,t){return this.searchList(),console.log(e),e}}},r=(n("FiV3"),n("KHd+")),l=Object(r.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-card",{staticClass:"filter-container",attrs:{shadow:"never"}},[n("div",[n("i",{staticClass:"el-icon-search"}),e._v(" "),n("span",[e._v("筛选搜索")]),e._v(" "),n("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"small"},on:{click:e.searchList}},[e._v("\n        查询\n      ")]),e._v(" "),n("el-button",{staticStyle:{float:"right","margin-right":"15px"},attrs:{size:"small"},on:{click:e.reset}},[e._v("\n        重置\n      ")])],1),e._v(" "),n("div",{staticStyle:{"margin-top":"40px"}},[n("el-form",{attrs:{inline:!0,model:e.list,size:"small","label-width":"160px"}},[n("el-form-item",{attrs:{label:"订单号："}},[n("el-input",{attrs:{clearable:"",placeholder:"订单号"},model:{value:e.list.orderNo,callback:function(t){e.$set(e.list,"orderNo",t)},expression:"list.orderNo"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"单据状态："}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.list.orderStauts,callback:function(t){e.$set(e.list,"orderStauts",t)},expression:"list.orderStauts"}},e._l(e.settlementList,function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),n("el-form-item",{attrs:{label:"下单时间："}},[n("el-date-picker",{attrs:{type:"datetimerange","value-format":"yyyy-MM-dd HH-mm-ss","picker-options":e.pickerOptions,"range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.list.registerTime,callback:function(t){e.$set(e.list,"registerTime",t)},expression:"list.registerTime"}})],1)],1)],1)]),e._v(" "),n("el-card",{staticClass:"operate-container",attrs:{shadow:"never"}},[n("span",{staticStyle:{"margin-left":"20px",color:"#f59a23","font-weight":"500","font-size":"18px"}},[e._v("分销员昵称："),n("span",[e._v(e._s(this.$route.query.userName))])]),e._v(" "),n("span",{staticStyle:{"margin-left":"20px",color:"#f59a23","font-weight":"500","font-size":"18px"}},[e._v("分销员手机号："),n("span",[e._v(e._s(this.$route.query.cellPhone))])]),e._v(" "),n("span",{staticStyle:{"margin-left":"20px",color:"#f59a23","font-weight":"500","font-size":"18px"}},[e._v("分销员所属分组："),n("span",[e._v(e._s(this.$route.query.groupName))])]),e._v(" "),n("div",{staticStyle:{margin:"10px 0 0 20px",color:"#f59a23","font-weight":"500","font-size":"16px","line-height":"32px"}},[e._v("温馨提示：业务员的订单成功支付后才可以查到；未结算时，买家退款成功后，生成对应的待结算退款单据，与订单一并结算；")])]),e._v(" "),n("el-card",{staticClass:"table-container",attrs:{shadow:"never"}},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableList,border:""},on:{"current-change":e.toggleRowExpansion,"cell-mouse-enter":e.onRowClick,"expand-change":e.getChaildren}},[n("el-table-column",{attrs:{type:"expand","default-expand-all":"false"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-table",{staticStyle:{width:"100%",border:"none","margin-top":"-20px"},attrs:{"header-cell-style":{background:"#F4F5F6",color:"#131D34",padding:"8px 0"},data:t.row.channelProductDtoList,border:""}},[n("el-table-column",{attrs:{type:"index",width:"50"}}),e._v(" "),n("el-table-column",{attrs:{label:"商品名称",width:"100","show-overflow-tooltip":"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                "+e._s(t.row.productName)+"\n              ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"商品编码",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                "+e._s(t.row.productCode)+"\n              ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"规格",width:"100","show-overflow-tooltip":"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                "+e._s(t.row.skuName)+"\n              ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"数量",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                "+e._s(t.row.productCount)+"\n              ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"购买实付单价",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                "+e._s(t.row.payAmount)+"\n              ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"分佣类型",width:"220",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                "+e._s(t.row.commissionTypeName)+"\n              ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"订单类型",width:"220",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                "+e._s(t.row.orderTypeName)+"\n              ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"收益比例",width:"220",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                "+e._s("--"==t.row.rate?"--":t.row.rate+"%")+"\n              ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"所得邀请奖励",width:"220",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.type||2==t.row.type?n("span",{staticStyle:{color:"#67C23A"}},[e._v("￥"+e._s(t.row.commission))]):e._e(),e._v(" "),3==t.row.type||4==t.row.type?n("span",{staticStyle:{color:"#F56C6C"}},[e._v("￥"+e._s(t.row.commission))]):e._e()]}}])})],1)]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"订单号",width:"140",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.orderNo))]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"用户昵称",prop:"userName",width:"130",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{label:"手机号",width:"130",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(""==t.row.cellPhone?"--":t.row.cellPhone))]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"下单时间",width:"160",prop:"createTime",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{label:"单据状态",width:"160",prop:"statusName",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{label:"结算状态",width:"120",prop:"setStateName",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{label:"分佣商品金额",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          ￥"+e._s(t.row.payAmount)+"\n        ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"佣金提成",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          ￥"+e._s(t.row.commissionAmount)+"\n        ")]}}])})],1),e._v(" "),n("div",{staticClass:"flex-row-between",staticStyle:{"margin-top":"20px"}},[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.goBack}},[e._v("返回上一页")]),e._v(" "),n("el-pagination",{attrs:{background:"",layout:"total,sizes,prev,pager,next,jumper","page-size":e.page_size,"page-sizes":[10,30,50],"current-page":e.pageNum,total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.pageChange}})],1)],1)],1)},[],!1,null,"e402c28e",null);l.options.__file="documentsRewards.vue";t.default=l.exports},pLQY:function(e,t,n){"use strict";n.d(t,"e",function(){return a}),n.d(t,"b",function(){return r}),n.d(t,"a",function(){return l}),n.d(t,"c",function(){return i}),n.d(t,"d",function(){return o});var s=n("t3Un");function a(e){return Object(s.a)({url:"/sys/business/channelUser/channelUserList",method:"post",data:e})}function r(e){return Object(s.a)({url:"/sys/business/channelUser/channelGroupList",method:"post",data:e})}function l(e){return Object(s.a)({url:"/sys/business/channelUser/channelCommissionOrderList",method:"post",data:e})}function i(e){return Object(s.a)({url:"/sys/business/channelUser/channelInviteOrderList",method:"post",data:e})}function o(e){return Object(s.a)({url:"/sys/business/channelUser/channelOrderList",method:"post",data:e})}}}]);
//# sourceMappingURL=chunk-6a0f.53d72229.js.map