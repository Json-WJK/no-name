(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3ee2"],{LhgM:function(e,t,s){"use strict";s.d(t,"b",function(){return o}),s.d(t,"c",function(){return a}),s.d(t,"a",function(){return d});var r=s("t3Un");function o(e,t){return Object(r.a)({url:"/order/mall/district/getSysDistrict",method:"post",data:{level:e,code:t}})}function a(){return Object(r.a)({url:"/sys/business/shopInfo/getShopCategoryList",method:"get"})}function d(e){return Object(r.a)({url:"/sys/business/shopInfo/addShop",method:"post",data:e})}},QdlB:function(e,t,s){},gz1f:function(e,t,s){"use strict";s.r(t);var r=s("QbLZ"),o=s.n(r),a=s("L2JU"),d=s("LhgM"),n={data:function(){return{form:{},industry:[],addressList1:[],addressList2:[],addressList3:[]}},created:function(){1==this.$route.query.shopType&&console.log("微商城"),3==this.$route.query.shopType&&console.log("健身房")},methods:{getShopCategoryList:function(){var e=this;Object(d.c)().then(function(t){console.log("获取下拉行业",t),e.industry=t.data})},getAddressInput:function(e,t){var s=this;Object(d.b)(e,t).then(function(t){console.log("获取下拉框地址",t),1!=e?2!=e?3!=e||(s.addressList3=t.data):s.addressList2=t.data:s.addressList1=t.data})},address1:function(e){this.addressList2=[],this.createForm.addressCityCode&&(this.createForm.addressCityCode=""),this.addressList3=[],this.createForm.addressCountyCode&&(this.createForm.addressCountyCode=""),this.getAddressInput(2,e)},address2:function(e){this.addressList3=[],this.createForm.addressCountyCode&&(this.createForm.addressCountyCode=""),this.getAddressInput(3,e)},change:function(e){this.$forceUpdate()}},computed:o()({},Object(a.c)(["user"]))},i=(s("rBbs"),s("KHd+")),l=Object(i.a)(n,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"pageContent bgfff"},[s("el-card",{staticClass:"filter-container",attrs:{shadow:"never"}},[s("el-form",{ref:"form",staticClass:"demo-ruleForm",attrs:{model:e.form,"label-width":"100px"}},[s("el-form-item",{attrs:{label:"店铺名称：",required:""}},[s("el-input",{attrs:{maxlength:"20","show-word-limit":""},model:{value:e.form.shopName,callback:function(t){e.$set(e.form,"shopName",t)},expression:"form.shopName"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"主营商品：",required:""}},[s("el-select",{attrs:{placeholder:"请选择主营产品"},model:{value:e.form.categoryCode,callback:function(t){e.$set(e.form,"categoryCode",t)},expression:"form.categoryCode"}},e._l(e.industry,function(e){return s("el-option",{key:e.id,attrs:{label:e.name,value:e.code}})}))],1),e._v(" "),s("el-form-item",{attrs:{label:"省市区：",required:""}},[s("el-col",{attrs:{span:8}},[s("el-form-item",{attrs:{required:""}},[s("el-select",{attrs:{placeholder:"请选择省"},on:{change:e.address1},model:{value:e.form.addressProvinceCode,callback:function(t){e.$set(e.form,"addressProvinceCode",t)},expression:"form.addressProvinceCode"}},e._l(e.addressList1,function(e,t){return s("el-option",{key:t,attrs:{label:e.name,value:e.code}})}))],1)],1),e._v(" "),s("el-col",{attrs:{span:8}},[s("el-form-item",{attrs:{required:""}},[s("el-select",{attrs:{placeholder:"请选择市"},on:{change:e.address2},model:{value:e.form.addressCityCode,callback:function(t){e.$set(e.form,"addressCityCode",t)},expression:"form.addressCityCode"}},e._l(e.addressList2,function(e,t){return s("el-option",{key:t,attrs:{label:e.name,value:e.code}})}))],1)],1),e._v(" "),s("el-col",{attrs:{span:8}},[s("el-form-item",{attrs:{required:""}},[s("el-select",{attrs:{placeholder:"请选择区"},model:{value:e.form.addressCountyCode,callback:function(t){e.$set(e.form,"addressCountyCode",t)},expression:"form.addressCountyCode"}},e._l(e.addressList3,function(e,t){return s("el-option",{key:t,attrs:{label:e.name,value:e.code}})}))],1)],1)],1),e._v(" "),s("el-form-item",{attrs:{label:"详细地址：",required:""}},[s("el-input",{attrs:{maxlength:"50","show-word-limit":""},model:{value:e.form.addressDetails,callback:function(t){e.$set(e.form,"addressDetails",t)},expression:"form.addressDetails"}})],1)],1)],1)],1)},[],!1,null,"7a048537",null);l.options.__file="newShop.vue";t.default=l.exports},rBbs:function(e,t,s){"use strict";var r=s("QdlB");s.n(r).a}}]);
//# sourceMappingURL=chunk-3ee2.5d275c57.js.map