(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-77bf"],{"5YP3":function(t,e,o){"use strict";o.r(e);var r=o("QbLZ"),l=o.n(r),a=o("L2JU"),i=o("BJ7B"),n={data:function(){return{form:{},useProList:[],unUserProList:[],customerIds:[],customerList:[],commodityIds:[]}},created:function(){this.form.couponType=0,this.form.shopId=this.shop.shopId,this.getData()},methods:{getData:function(){var t=this;Object(i.e)(this.$route.query.couponId).then(function(e){if(console.log("优惠券详情",e),200==e.code){var o=e.data;1==e.data.productType&&(t.useProList=e.data.couponProducts,t.useProList.forEach(function(e){return t.commodityIds.push(e.productId)})),2==e.data.productType&&(t.unUserProList=e.data.couponProducts,t.unUserProList.forEach(function(e){return t.commodityIds.push(e.productId)})),0==e.data.fullAmount?o.fullAmountType="0":(o.fullAmountType="1",o.fullAmountNum=o.fullAmount),0==o.timeType&&(o.time=[e.data.beginTime,e.data.endTime]),1==o.timeType&&(o.limitTime1=o.limitTime),2==o.timeType&&(o.limitTime2=o.limitTime),t.customerList=e.data.couponUsers,console.log("this.customerList",t.customerList),t.customerList.forEach(function(e){return t.customerIds.push(e.userId)}),0==e.data.limitNumber?(console.log("领取限制1"),o.limitType="0"):(console.log("领取限制2"),o.limitType="1",o.limitNumber=o.limitNumber),t.form=o}})}},computed:l()({},Object(a.c)(["user","shop"]))},s=(o("fLl3"),o("KHd+")),u=Object(s.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pageContent"},[o("el-form",{ref:"form",attrs:{model:t.form,"label-width":"160px"}},[o("el-card",{staticClass:"filter-container",attrs:{shadow:"never"}},[o("div",{staticClass:"pageHead"},[t._v("基本信息")]),t._v(" "),o("el-form-item",{attrs:{label:"优惠券名称：",required:""}},[o("el-input",{staticStyle:{width:"400px"},attrs:{maxlength:"10","show-word-limit":"",disabled:"",placeholder:"如：年货节优惠券，最多10个字"},model:{value:t.form.couponName,callback:function(e){t.$set(t.form,"couponName",e)},expression:"form.couponName"}})],1),t._v(" "),o("el-form-item",{staticClass:"inner",attrs:{label:"发放总量：",required:""}},[o("el-input-number",{staticClass:"tal",staticStyle:{width:"400px"},attrs:{disabled:"","step-strictly":"",min:1,max:1e8,controls:!1,placeholder:"最多100000000张"},model:{value:t.form.couponCount,callback:function(e){t.$set(t.form,"couponCount",e)},expression:"form.couponCount"}}),t._v(" "),o("div",{staticClass:"infoFont"},[t._v("修改优惠券总量时只能增加不能减少，请谨慎设置")])],1),t._v(" "),o("el-form-item",{attrs:{label:"适用商品：",required:""}},[o("el-radio-group",{model:{value:t.form.productType,callback:function(e){t.$set(t.form,"productType",e)},expression:"form.productType"}},[o("el-radio",{attrs:{disabled:"",label:0}},[t._v("全部商品可用")]),t._v(" "),o("el-radio",{attrs:{disabled:"",label:1}},[t._v("指定商品可用")]),t._v(" "),o("el-radio",{attrs:{disabled:"",label:2}},[t._v("指定商品不可用")])],1),t._v(" "),o("div",{staticClass:"infoFont"},[t._v("若活动商品中存在分销商品，优惠后可能造成利润受损")])],1),t._v(" "),1==t.form.productType?o("el-form-item",{attrs:{label:"选择商品：",required:""}},[o("div",[o("el-button",{attrs:{disabled:""}},[t._v("添加商品")])],1),t._v(" "),t.useProList.length>0?o("div",{staticClass:"mt10"},[o("el-table",{staticStyle:{width:"100%"},attrs:{data:t.useProList}},[o("el-table-column",{attrs:{label:"商品图片",width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-popover",{attrs:{placement:"right",title:"",trigger:"hover"}},[o("el-image",{staticStyle:{"max-height":"40px","max-width":"40px"},attrs:{slot:"reference",src:e.row.imageUrl,alt:e.row.imageUrl},slot:"reference"}),t._v(" "),o("el-image",{staticStyle:{"max-height":"350px","max-width":"350px"},attrs:{src:e.row.imageUrl}})],1)]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"商品名称",prop:"productName"}}),t._v(" "),o("el-table-column",{attrs:{label:"可用库存",width:"140",prop:"stock"}}),t._v(" "),o("el-table-column",{attrs:{label:"商品售价（元）",width:"240"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s("￥"+e.row.minPrice+" ~ ￥"+e.row.maxPrice))]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{type:"text",size:"small","data-id":e.row.id,disabled:""}},[t._v("删除")])]}}])})],1)],1):t._e()]):t._e(),t._v(" "),2==t.form.productType?o("el-form-item",{attrs:{label:"选择商品：",required:""}},[o("div",[o("el-button",{attrs:{disabled:""}},[t._v("添加商品")])],1),t._v(" "),t.unUserProList.length>0?o("div",{staticClass:"mt10"},[o("el-table",{staticStyle:{width:"100%"},attrs:{data:t.unUserProList}},[o("el-table-column",{attrs:{label:"商品图片",width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-popover",{attrs:{placement:"right",title:"",trigger:"hover"}},[o("el-image",{staticStyle:{"max-height":"40px","max-width":"40px"},attrs:{slot:"reference",src:e.row.imageUrl,alt:e.row.imageUrl},slot:"reference"}),t._v(" "),o("el-image",{staticStyle:{"max-height":"350px","max-width":"350px"},attrs:{src:e.row.imageUrl}})],1)]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"商品名称",prop:"productName"}}),t._v(" "),o("el-table-column",{attrs:{label:"可用库存",width:"140",prop:"stock"}}),t._v(" "),o("el-table-column",{attrs:{label:"商品售价（元）",width:"240"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s("￥"+e.row.minPrice+" ~ ￥"+e.row.maxPrice))]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{type:"text",size:"small","data-id":e.row.id,disabled:""}},[t._v("删除")])]}}])})],1)],1):t._e()]):t._e(),t._v(" "),o("el-form-item",{attrs:{label:"使用门槛：",required:""}},[o("el-radio-group",{model:{value:t.form.fullAmountType,callback:function(e){t.$set(t.form,"fullAmountType",e)},expression:"form.fullAmountType"}},[o("el-radio",{attrs:{disabled:"",label:"0"}},[t._v("无门槛使用")]),t._v(" "),o("el-radio",{attrs:{disabled:"",label:"1"}},[t._v("订单满\n            "),o("el-input-number",{attrs:{disabled:"",precision:2,max:1e4,controls:!1},model:{value:t.form.fullAmountNum,callback:function(e){t.$set(t.form,"fullAmountNum",e)},expression:"form.fullAmountNum"}}),t._v("\n          元")],1)],1)],1),t._v(" "),o("el-form-item",{attrs:{label:"优惠内容：",required:""}},[t._v("\n        减免\n        "),o("el-input-number",{attrs:{disabled:"",precision:2,max:1e4,controls:!1},model:{value:t.form.discountAmount,callback:function(e){t.$set(t.form,"discountAmount",e)},expression:"form.discountAmount"}}),t._v("\n        元\n        "),o("div",{staticClass:"infoFont"},[t._v("优惠券面值必须大于等于 0元的正整数, 且最大不能超过10000元")])],1),t._v(" "),o("el-form-item",{attrs:{label:"用券时间：",required:""}},[o("el-radio-group",{model:{value:t.form.timeType,callback:function(e){t.$set(t.form,"timeType",e)},expression:"form.timeType"}},[o("el-radio",{attrs:{disabled:"",label:0}},[t._v("指定日期")]),t._v(" "),o("el-radio",{attrs:{disabled:"",label:1}},[t._v("\n            领券当日起\n            "),o("el-input-number",{attrs:{precision:2,max:30,min:1,disabled:"",controls:!1},model:{value:t.form.limitTime1,callback:function(e){t.$set(t.form,"limitTime1",e)},expression:"form.limitTime1"}}),t._v("\n            天内可用\n            "),o("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"有效期按自然天计算。例如：如设置领券当日起3天内可用，用户在1月1日08:00时领取优惠券，则该优惠券可用时间为1月1日08:00至1月3日的23:59:59。",placement:"top"}},[o("i",{staticClass:"el-icon-question curP"})])],1),t._v(" "),o("el-radio",{attrs:{disabled:"",label:2}},[t._v("\n            领券次日起\n            "),o("el-input-number",{attrs:{disabled:"",precision:2,max:30,min:1,controls:!1},model:{value:t.form.limitTime2,callback:function(e){t.$set(t.form,"limitTime2",e)},expression:"form.limitTime2"}}),t._v("\n            天内可用\n            "),o("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"有效期按自然天计算。例如：如设置领券次日起3天内可用，用户在1月1日14:00时领取优惠券，则该优惠券可用时间为1月2日00:00至1月4日的23:59:59。",placement:"top"}},[o("i",{staticClass:"el-icon-question curP"})])],1)],1)],1),t._v(" "),0==t.form.timeType?o("el-form-item",{staticClass:"time",attrs:{label:"",required:""}},[o("el-date-picker",{attrs:{disabled:"",type:"datetimerange","range-separator":"至","value-format":"yyyy-MM-dd HH:mm:ss","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.form.time,callback:function(e){t.$set(t.form,"time",e)},expression:"form.time"}})],1):t._e()],1),t._v(" "),o("el-card",{staticClass:"filter-container mt10",attrs:{shadow:"never"}},[o("div",{staticClass:"pageHead"},[t._v("领取及使用规则")]),t._v(" "),o("el-form-item",{attrs:{label:"领取人限制：",required:""}},[o("el-radio-group",{model:{value:t.form.userType,callback:function(e){t.$set(t.form,"userType",e)},expression:"form.userType"}},[o("el-radio",{attrs:{disabled:"",label:0}},[t._v("不限制，全部人可领取")]),t._v(" "),o("el-radio",{attrs:{disabled:"",label:1}},[t._v("指定用户身份领取")])],1)],1),t._v(" "),1==t.form.userType?o("el-form-item",{attrs:{label:"选择客户：",required:""}},[o("div",[o("el-button",{attrs:{disabled:""}},[t._v("添加客户")])],1),t._v(" "),t.customerList.length>0?o("div",{staticClass:"mt10"},[o("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.customerList,"tooltip-effect":"dark"}},[o("el-table-column",{attrs:{label:"用户昵称",prop:"nikeName"}}),t._v(" "),o("el-table-column",{attrs:{label:"联系方式",width:"240"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.cellPhone?e.row.cellPhone:"-"))]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"来源",prop:"sourType"}}),t._v(" "),o("el-table-column",{attrs:{label:"客户身份",prop:"vipTypeName"}}),t._v(" "),o("el-table-column",{attrs:{label:"注册时间",prop:"createTime"}}),t._v(" "),o("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{type:"text",size:"small","data-id":e.row.id,disabled:""}},[t._v("删除")])]}}])})],1)],1):t._e()]):t._e(),t._v(" "),o("el-form-item",{attrs:{label:"每人限领次数：",required:""}},[o("el-radio-group",{model:{value:t.form.limitType,callback:function(e){t.$set(t.form,"limitType",e)},expression:"form.limitType"}},[o("el-radio",{attrs:{disabled:"",label:"0"}},[t._v("不限领次数")]),t._v(" "),o("el-radio",{attrs:{disabled:"",label:"1"}},[t._v("每人限领\n            "),o("el-input-number",{attrs:{disabled:"",max:10,"step-strictly":"",placeholder:"限领次数上限为10",controls:!1},model:{value:t.form.limitNumber,callback:function(e){t.$set(t.form,"limitNumber",e)},expression:"form.limitNumber"}}),t._v("\n            次\n          ")],1)],1)],1)],1),t._v(" "),o("el-form-item",{staticClass:"mt20 flex-row-center"},[o("el-button",{attrs:{type:"primary"},on:{click:function(e){t.$router.go(-1)}}},[t._v("返 回")])],1)],1)],1)},[],!1,null,"2160419d",null);u.options.__file="couponDetail.vue";e.default=u.exports},BJ7B:function(t,e,o){"use strict";o.d(e,"g",function(){return l}),o.d(e,"j",function(){return a}),o.d(e,"k",function(){return i}),o.d(e,"a",function(){return n}),o.d(e,"d",function(){return s}),o.d(e,"b",function(){return u}),o.d(e,"e",function(){return c}),o.d(e,"c",function(){return d}),o.d(e,"l",function(){return m}),o.d(e,"i",function(){return p}),o.d(e,"h",function(){return f}),o.d(e,"f",function(){return b});var r=o("t3Un");function l(t){return Object(r.a)({url:"/sys/couponInfo/getCouponInfoPage",method:"post",data:t})}function a(t){return Object(r.a)({url:"/sys/couponProduct/getCouponProductPage",method:"post",data:t})}function i(t){return Object(r.a)({url:"/sys/couponProduct/getCouponUserPage",method:"post",data:t})}function n(t){return Object(r.a)({url:"/sys/couponInfo/addCouponInfo",method:"post",data:t})}function s(t){return Object(r.a)({url:"/sys/couponInfo/editCouponInfo",method:"post",data:t})}function u(t){return Object(r.a)({url:"/sys/couponInfo/couponData?couponId="+t,method:"get"})}function c(t){return Object(r.a)({url:"/sys/couponInfo/findCouponInfo?couponId="+t,method:"get"})}function d(t){return Object(r.a)({url:"/sys/couponInfo/deleteCouponInfo?couponId="+t,method:"DELETE"})}function m(t){return Object(r.a)({url:"/sys/couponProduct/userCouponProductPage",method:"post",data:t})}function p(t){return Object(r.a)({url:"/sys/couponInfo/getCouponInfoSubGroupPage",method:"post",data:t})}function f(t){return Object(r.a)({url:"/sys/couponInfo/getCouponInfoSubGroupInfo?couponIdStr="+t,method:"get"})}function b(t){return Object(r.a)({url:"/sys/couponInfo/getCouponCodeUrl?shopId="+t.shopId+"&couponId="+t.couponId,method:"get"})}},VYug:function(t,e,o){},fLl3:function(t,e,o){"use strict";var r=o("VYug");o.n(r).a}}]);
//# sourceMappingURL=chunk-77bf.fea69e62.js.map