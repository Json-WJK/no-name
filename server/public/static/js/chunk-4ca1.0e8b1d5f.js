(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4ca1"],{JSf9:function(e,t,r){"use strict";r.r(t);var s=r("QbLZ"),o=r.n(s),i=r("L2JU"),l=r("LhgM"),a=r("PgIU"),n={data:function(){var e=this;return{subLoading:!1,checkDays:[],days:[{value:"0",label:"周一",disabled:!1},{value:"1",label:"周二",disabled:!1},{value:"2",label:"周三",disabled:!1},{value:"3",label:"周四",disabled:!1},{value:"4",label:"周五",disabled:!1},{value:"5",label:"周六",disabled:!1},{value:"6",label:"周日",disabled:!1}],center:[121.59996,31.197646],searchOption:{city:"",citylimit:!1},lng:0,lat:0,trueMaker:!1,plugin:[{pName:"ToolBar",events:{init:function(e){console.log("instance",e)}}}],events:{click:function(t){var r=t.lnglat,s=r.lng,o=r.lat;e.lng=s,e.lat=o,new AMap.Geocoder({city:"全国",radius:1e3,extensions:"all"}).getAddress([s,o],function(t,r){if("complete"===t&&"OK"===r.info&&r&&r.regeocode){console.log("status",t),console.log("result",r),e.ruleForm.address=r.regeocode.formattedAddress,e.$nextTick();var i=r.regeocode.addressComponent.adcode,l=i.substring(0,2)+"0000",a=r.regeocode.addressComponent.province;e.ruleForm.province={name:a,code:l},e.ruleForm.provinceCode=l,e.ruleForm.provinceName=a,e.getAddressInput(2,l);var n=r.regeocode.addressComponent.city;"北京市"==a&&(n="北京城区"),"上海市"==a&&(n="上海城区"),"天津市"==a&&(n="天津城区");var c=i.substring(0,4)+"00";e.ruleForm.city={name:n,code:c},console.log("city",e.ruleForm.city),e.ruleForm.cityCode=c,e.ruleForm.cityName=n,e.getAddressInput(3,c),e.ruleForm.districtCode=i,e.ruleForm.districtName=r.regeocode.addressComponent.district,e.ruleForm.district={name:r.regeocode.addressComponent.district,code:i},e.trueMaker=!0,e.markers=[];var u={position:[s,o],text:r.regeocode.formattedAddress,offset:[0,-60]};e.markers.push(u)}})}},ruleForm:{selffetchTimeJson:[],isSelectSelffetchTime:"1",moveUpState:1},addressList1:[],addressList2:[],addressList3:[],markers:[{position:["1","1"],text:"123",offset:[0,-60]}],timerTimes:[],timerDays:[],selfdays:[{value:"0",label:"周一",disabled:!1},{value:"1",label:"周二",disabled:!1},{value:"2",label:"周三",disabled:!1},{value:"3",label:"周四",disabled:!1},{value:"4",label:"周五",disabled:!1},{value:"5",label:"周六",disabled:!1},{value:"6",label:"周日",disabled:!1}],selfcheckDays:[],selfeditNow:!1}},created:function(){this.getAddressInput(1,""),this.getData()},methods:{getData:function(){var e=this;Object(a.d)(this.$route.query.id).then(function(t){if(console.log("查看详情",t),200==t.code){t.data.selffetchTimeJson=JSON.parse(t.data.selffetchTimeJson),2==t.data.moveUpState&&(t.data.moveUpDayNum=t.data.moveUpNum),3==t.data.moveUpState&&(t.data.moveUpHourNum=t.data.moveUpNum),t.data.isSelectSelffetchTimeType=1==t.data.isSelectSelffetchTime,e.ruleForm=t.data,e.trueMaker=!0;var r=t.data.location.split(",");e.center=r,e.markers[0].position=r,e.markers[0].text=t.data.locationDesc,e.ruleForm.province={name:t.data.provinceName,code:t.data.provinceCode},e.getAddressInput(2,t.data.provinceCode),e.ruleForm.city={name:t.data.cityName,code:t.data.cityCode},e.getAddressInput(3,t.data.cityCode),e.ruleForm.district={name:t.data.districtName,code:t.data.districtCode},t.data.selffetchTimeJson.forEach(function(t){t.selectDay.forEach(function(t){return e.selfcheckDays.push(t)})}),e.selfcheckDays.forEach(function(t){return e.selfdays[t].disabled=!0}),console.log(),e.selfeditNow=7==e.selfcheckDays.length}})},selfaddTimer:function(){this.ruleForm.selffetchTimeJson.push({beginTime:"06:00",finishTime:"23:00",selectDay:[],times:["06:00","23:00"],type:"edit"}),this.selfeditNow=!0},selfeditTimerData:function(e,t){var r=this;e.selectDay.forEach(function(e){return r.selfdays[e].disabled=!1}),this.ruleForm.selffetchTimeJson.splice(t,1),this.selfeditNow=!1},selfgetTimerData:function(e){var t=this;(console.log("e",e),e.times&&e.times[0]&&e.times[1])?Date.parse("2019-12-31 "+e.times[0]+":00")>=Date.parse("2019-12-31 "+e.times[1]+":00")?this.$message.error("开始时间应大于结束时间"):(e.beginTime=e.times[0],e.finishTime=e.times[1],0!=e.selectDay.length?(e.selectDay.forEach(function(e){t.selfdays[e].disabled=!0,t.selfcheckDays.push(e)}),e.type="finish",7!=this.selfcheckDays.length&&(this.selfeditNow=!1)):this.$message.error("请选择接待日")):this.$message.error("请选择自提时间")},onSubmit:function(){var e=this;if(console.log("ruleForm",this.ruleForm),this.ruleForm.name)if(this.ruleForm.phoneNumber)if(this.ruleForm.province&&this.ruleForm.city&&this.ruleForm.district)if(this.ruleForm.address)if(this.trueMaker){if(this.ruleForm.location=this.markers[0].position.join(","),this.ruleForm.isSelectSelffetchTimeType){if(this.ruleForm.isSelectSelffetchTime=1,0==this.ruleForm.selffetchTimeJson.length)return void this.$message.error("请添加自提时段");var t=this.ruleForm.selffetchTimeJson.filter(function(e){return"edit"==e.type});if(console.log("erHourArr1",t),t.length>0)return void this.$message.error("请完善自提时段");var r="";if(2==this.ruleForm.moveUpState){if(!this.ruleForm.moveUpDayNum)return void this.$message.error("请完善预约自提的提前时段");this.ruleForm.moveUpNum=this.ruleForm.moveUpDayNum,r=this.ruleForm.moveUpDayNum}if(3==this.ruleForm.moveUpState){if(!this.ruleForm.moveUpHourNum)return void this.$message.error("请完善预约自提的提前时段");this.ruleForm.moveUpNum=this.ruleForm.moveUpHourNum,r=this.ruleForm.moveUpHourNum/24}if(!this.ruleForm.maxMoveUpNum)return void this.$message.error("请完善预约天时");if(this.ruleForm.maxMoveUpNum<=r)return void this.$message.error("提前预约时间必须小于最长可预约时间")}else this.ruleForm.isSelectSelffetchTime=2;this.ruleForm.shopId=this.shop.shopId,this.ruleForm.editor=this.user.userId,console.log("成功了！",this.ruleForm),this.subLoading=!0,Object(a.c)(this.ruleForm).then(function(t){console.log("res",t),200==t.code?(e.$message({message:"编辑成功",type:"success"}),setTimeout(function(){e.$router.replace({path:"/logistics/selfPickUp"}),e.subLoading=!1},1e3)):(e.subLoading=!1,e.$message.error(t.message))})}else this.$message.error("请在地图上点击自提点导航位置");else this.$message.error("请填写自提点详细地址");else this.$message.error("请选择自提点门店地址");else this.$message.error("请填写自提点联系电话");else this.$message.error("请填写自提点名称")},backPage:function(){var e=this;this.$confirm("是否放弃编辑?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$router.replace({path:"/logistics/selfPickUp"})}).catch(function(){})},onSearchResult:function(e){var t=this;console.log("地图搜索结果",e);var r=0,s=0;if(e.length>0){e.forEach(function(e){var o=e.lng,i=e.lat;s+=o,r+=i;var l={position:[e.lng,e.lat],text:e.name,offset:[0,-60]};t.markers.push(l)});var o={lng:s/e.length,lat:r/e.length};this.center=[o.lng,o.lat]}},address1:function(e){console.log("执行了1",e),this.addressList2=[],this.ruleForm.city&&(this.ruleForm.city=""),this.addressList3=[],this.ruleForm.district&&(this.ruleForm.district=""),this.getAddressInput(2,e.code)},address2:function(e){console.log("执行了2",e),this.addressList3=[],this.ruleForm.district&&(this.ruleForm.district=""),this.getAddressInput(3,e.code)},getAddressInput:function(e,t){var r=this;Object(l.b)(e,t).then(function(t){console.log(e+"级下拉获取下拉框地址",t),1!=e?2!=e?3!=e||(r.addressList3=t.data):r.addressList2=t.data:r.addressList1=t.data})}},computed:o()({},Object(i.c)(["user","shop"]))},c=(r("bWa4"),r("KHd+")),u=Object(c.a)(n,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"pageContent"},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"pageHead"},[e._v("门店信息")]),e._v(" "),r("div",[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"label-width":"160px"}},[r("el-form-item",{attrs:{label:"自提点名称：",required:""}},[r("el-input",{staticStyle:{width:"400px"},attrs:{maxlength:"20","show-word-limit":""},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name","string"==typeof t?t.trim():t)},expression:"ruleForm.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"联系电话：",required:""}},[r("el-input",{staticStyle:{width:"400px"},attrs:{maxlength:"11","show-word-limit":""},model:{value:e.ruleForm.phoneNumber,callback:function(t){e.$set(e.ruleForm,"phoneNumber","string"==typeof t?t.trim():t)},expression:"ruleForm.phoneNumber"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"自提点地址：",required:""}},[r("div",{staticClass:"flex-row-start"},[r("el-form-item",{staticStyle:{"margin-right":"10px"}},[r("el-select",{attrs:{"value-key":"code",placeholder:"请选择省"},on:{change:e.address1},model:{value:e.ruleForm.province,callback:function(t){e.$set(e.ruleForm,"province",t)},expression:"ruleForm.province"}},e._l(e.addressList1,function(e){return r("el-option",{key:e.code,attrs:{label:e.name,value:e}})}))],1),e._v(" "),r("el-form-item",{staticStyle:{"margin-right":"10px"}},[r("el-select",{attrs:{"value-key":"code",placeholder:"请选择市"},on:{change:e.address2},model:{value:e.ruleForm.city,callback:function(t){e.$set(e.ruleForm,"city",t)},expression:"ruleForm.city"}},e._l(e.addressList2,function(e){return r("el-option",{key:e.code,attrs:{label:e.name,value:e}})}))],1),e._v(" "),r("el-form-item",[r("el-select",{attrs:{"value-key":"code",placeholder:"请选择区"},model:{value:e.ruleForm.district,callback:function(t){e.$set(e.ruleForm,"district",t)},expression:"ruleForm.district"}},e._l(e.addressList3,function(e){return r("el-option",{key:e.code,attrs:{label:e.name,value:e}})}))],1)],1)]),e._v(" "),r("el-form-item",{attrs:{label:"自提点详细地址：",required:""}},[r("el-input",{staticStyle:{width:"400px"},attrs:{type:"textarea",maxlength:"50","show-word-limit":""},model:{value:e.ruleForm.address,callback:function(t){e.$set(e.ruleForm,"address","string"==typeof t?t.trim():t)},expression:"ruleForm.address"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"自提点门店导航：",required:""}},[r("div",{staticClass:"mapBox amap-page-container"},[r("div",{style:{width:"100%",height:"400px"}},[r("el-amap-search-box",{staticClass:"search-box",attrs:{"search-option":e.searchOption,"on-search-result":e.onSearchResult}}),e._v(" "),r("el-amap",{ref:"map",staticClass:"amap-demo",attrs:{vid:"amap",plugin:e.plugin,center:e.center,events:e.events}},[e._l(e.markers,function(e,t){return r("el-amap-text",{key:"text"+t,attrs:{text:e.text,offset:e.offset,position:e.position}})}),e._v(" "),e._l(e.markers,function(e,t){return r("el-amap-marker",{key:"marker"+t,attrs:{position:e.position,events:e.events}})})],2)],1)])]),e._v(" "),r("el-form-item",{attrs:{label:"自提时间："}},[r("el-checkbox",{model:{value:e.ruleForm.isSelectSelffetchTimeType,callback:function(t){e.$set(e.ruleForm,"isSelectSelffetchTimeType",t)},expression:"ruleForm.isSelectSelffetchTimeType"}},[e._v("需要卖家选择自提时间")]),e._v(" "),r("div",[e._v("勾选后,买家下单选择上门自提,必须选择自提时间,卖家需要按约定时间备货")]),e._v(" "),r("div",[e._v("不勾选,将会提示卖家尽快到店自提")])],1),e._v(" "),e.ruleForm.isSelectSelffetchTimeType?r("el-form-item",{attrs:{label:"自提时段：",required:""}},[r("el-button",{attrs:{type:"primary",disabled:e.selfeditNow},on:{click:e.selfaddTimer}},[e._v("添加自提时段")]),e._v(" "),e._l(e.ruleForm.selffetchTimeJson,function(t,s){return r("div",{key:s,staticClass:"timePick"},[r("el-time-picker",{attrs:{disabled:"finish"==t.type,"is-range":"","value-format":"HH:mm","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间",placeholder:"选择时间范围","picker-options":{format:"HH:mm"}},model:{value:t.times,callback:function(r){e.$set(t,"times",r)},expression:"item.times"}}),e._v(" "),r("el-select",{staticStyle:{width:"350px"},attrs:{disabled:"finish"==t.type,multiple:"",placeholder:"请选择"},model:{value:t.selectDay,callback:function(r){e.$set(t,"selectDay",r)},expression:"item.selectDay"}},e._l(e.selfdays,function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value,disabled:e.disabled}})})),e._v(" "),"edit"==t.type?r("el-button",{attrs:{type:"primary"},on:{click:function(r){e.selfgetTimerData(t)}}},[e._v("确定")]):e._e(),e._v(" "),r("el-button",{on:{click:function(r){e.selfeditTimerData(t,s)}}},[e._v("删除")])],1)})],2):e._e(),e._v(" "),e.ruleForm.isSelectSelffetchTimeType?r("el-form-item",{attrs:{label:"预约自提：",required:""}},[r("div",[r("el-radio-group",{model:{value:e.ruleForm.moveUpState,callback:function(t){e.$set(e.ruleForm,"moveUpState",t)},expression:"ruleForm.moveUpState"}},[r("div",{staticClass:"mt13"},[r("el-radio",{attrs:{label:1}},[e._v("无需提前")])],1),e._v(" "),r("div",{staticClass:"mt20"},[r("el-radio",{attrs:{label:2}},[e._v("提前  \n                  "),r("el-input-number",{attrs:{controls:!1,"step-strictly":"",min:1,max:31,placeholder:"仅可输入1-31"},model:{value:e.ruleForm.moveUpDayNum,callback:function(t){e.$set(e.ruleForm,"moveUpDayNum",t)},expression:"ruleForm.moveUpDayNum"}}),e._v(" 天预约。为自然天,提前1天,买家则预约第二天自提。\n                ")],1)],1),e._v(" "),r("div",{staticClass:"mt20"},[r("el-radio",{attrs:{label:3}},[e._v("提前  \n                  "),r("el-input-number",{attrs:{controls:!1,"step-strictly":"",min:1,max:48,placeholder:"仅可输入1-48"},model:{value:e.ruleForm.moveUpHourNum,callback:function(t){e.$set(e.ruleForm,"moveUpHourNum",t)},expression:"ruleForm.moveUpHourNum"}}),e._v(" 小时预约。提前1小时,买家则预约60分钟后时段自提。\n                ")],1)],1)])],1)]):e._e(),e._v(" "),e.ruleForm.isSelectSelffetchTimeType?r("el-form-item",{attrs:{label:"预约天时：",required:""}},[r("span",[e._v("最长可预约 ")]),e._v(" "),r("el-input-number",{attrs:{controls:!1,"step-strictly":"",min:1,max:31,placeholder:"仅可输入1-31"},model:{value:e.ruleForm.maxMoveUpNum,callback:function(t){e.$set(e.ruleForm,"maxMoveUpNum",t)},expression:"ruleForm.maxMoveUpNum"}}),e._v(" "),r("span",[e._v(" 天内订单。建议最长预约时间大于提前预约时间一周以上，避免用户无法下单。")])],1):e._e(),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary",loading:e.subLoading},on:{click:e.onSubmit}},[e._v("编辑")]),e._v(" "),r("el-button",{on:{click:e.backPage}},[e._v("取消")])],1)],1)],1)])],1)},[],!1,null,"4e61098a",null);u.options.__file="editSelf.vue";t.default=u.exports},LhgM:function(e,t,r){"use strict";r.d(t,"b",function(){return o}),r.d(t,"c",function(){return i}),r.d(t,"a",function(){return l});var s=r("t3Un");function o(e,t){return Object(s.a)({url:"/order/mall/district/getSysDistrict",method:"post",data:{level:e,code:t}})}function i(){return Object(s.a)({url:"/sys/business/shopInfo/getShopCategoryList",method:"get"})}function l(e){return Object(s.a)({url:"/sys/business/shopInfo/addShop",method:"post",data:e})}},PgIU:function(e,t,r){"use strict";r.d(t,"g",function(){return o}),r.d(t,"e",function(){return i}),r.d(t,"f",function(){return l}),r.d(t,"a",function(){return a}),r.d(t,"b",function(){return n}),r.d(t,"d",function(){return c}),r.d(t,"c",function(){return u});var s=r("t3Un");function o(e){return Object(s.a)({url:"/sys/shopSelffetch/shopSelffetchPage",method:"post",data:e})}function i(e){return Object(s.a)({url:"/sys/shopSelffetch/getShopSelffetch?shopId="+e,method:"get"})}function l(e,t){return Object(s.a)({url:"/sys/shopSelffetch/setShopSelffetch?shopId="+e+"&selffedchStatus="+t,method:"get"})}function a(e){return Object(s.a)({url:"/sys/shopSelffetch/addShopSelffetch",method:"post",data:e})}function n(e,t){return Object(s.a)({url:"/sys/shopSelffetch/deleteShopSelffetch?selffetchId="+e+"&shopId="+t,method:"delete"})}function c(e){return Object(s.a)({url:"/sys/shopSelffetch/findShopSelffetchById?selffetchId="+e,method:"get"})}function u(e){return Object(s.a)({url:"/sys/shopSelffetch/editShopSelffetch",method:"post",data:e})}},bWa4:function(e,t,r){"use strict";var s=r("pkFA");r.n(s).a},pkFA:function(e,t,r){}}]);
//# sourceMappingURL=chunk-4ca1.0e8b1d5f.js.map