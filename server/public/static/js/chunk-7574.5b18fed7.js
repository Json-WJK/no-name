(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7574","WFwG"],{"4jk9":function(e,t,s){},"8/xu":function(e,t,s){"use strict";var o=s("4jk9");s.n(o).a},Az8M:function(e,t,s){"use strict";s.d(t,"e",function(){return a}),s.d(t,"f",function(){return i}),s.d(t,"a",function(){return r}),s.d(t,"d",function(){return l}),s.d(t,"c",function(){return n}),s.d(t,"b",function(){return c});var o=s("t3Un");function a(e,t){return Object(o.a)({url:"/sys/shopRoom/invalidShopRoomById?shopRoomId="+e+"&invalid="+t,method:"get"})}function i(e){return Object(o.a)({url:"/sys/shopRoom/selectBusinessShopRoomList",method:"post",data:e})}function r(e){return Object(o.a)({url:"/sys/shopRoom/addShopRoom",method:"post",data:e})}function l(e){return Object(o.a)({url:"/sys/shopRoom/findShopRoomByIds?shopRoomIds="+e,method:"get"})}function n(e){return Object(o.a)({url:"/sys/shopRoom/findShopRoomById?shopRoomId="+e,method:"get"})}function c(e){return Object(o.a)({url:"/sys/shopRoom/editShopRoom",method:"post",data:e})}},Is48:function(e,t,s){},LhgM:function(e,t,s){"use strict";s.d(t,"b",function(){return a}),s.d(t,"c",function(){return i}),s.d(t,"a",function(){return r});var o=s("t3Un");function a(e,t){return Object(o.a)({url:"/order/mall/district/getSysDistrict",method:"post",data:{level:e,code:t}})}function i(){return Object(o.a)({url:"/sys/business/shopInfo/getShopCategoryList",method:"get"})}function r(e){return Object(o.a)({url:"/sys/business/shopInfo/addShop",method:"post",data:e})}},RUfJ:function(e,t,s){"use strict";s.r(t);var o=s("QbLZ"),a=s.n(o),i=s("L2JU"),r=s("LhgM"),l=s("Az8M"),n=s("pgPq"),c={data:function(){var e=this;return{subLoading:!1,checkDays:[],days:[{value:"0",label:"周一",disabled:!1},{value:"1",label:"周二",disabled:!1},{value:"2",label:"周三",disabled:!1},{value:"3",label:"周四",disabled:!1},{value:"4",label:"周五",disabled:!1},{value:"5",label:"周六",disabled:!1},{value:"6",label:"周日",disabled:!1}],editNow:!1,center:[121.59996,31.197646],searchOption:{city:"",citylimit:!1},lng:0,lat:0,trueMaker:!0,plugin:[{pName:"ToolBar",events:{init:function(e){console.log("instance",e)}}}],events:{click:function(t){var s=t.lnglat,o=s.lng,a=s.lat;e.lng=o,e.lat=a,new AMap.Geocoder({city:"全国",radius:1e3,extensions:"all"}).getAddress([o,a],function(t,s){if("complete"===t&&"OK"===s.info&&s&&s.regeocode){console.log("status",t),console.log("result",s),e.ruleForm.locationDesc=s.regeocode.formattedAddress,e.$nextTick();var i=s.regeocode.addressComponent.adcode,r=i.substring(0,2)+"0000",l=s.regeocode.addressComponent.province;e.ruleForm.province={name:l,code:r},e.ruleForm.provinceCode=r,e.ruleForm.provinceName=l,e.getAddressInput(2,r);var n=s.regeocode.addressComponent.city;"北京市"==l&&(n="北京城区"),"上海市"==l&&(n="上海城区"),"天津市"==l&&(n="天津城区");var c=i.substring(0,4)+"00";e.ruleForm.city={name:n,code:c},console.log("city",e.ruleForm.city),e.ruleForm.cityCode=c,e.ruleForm.cityName=n,e.getAddressInput(3,c),e.ruleForm.areaCode=i,e.ruleForm.areaName=s.regeocode.addressComponent.district,e.ruleForm.area={name:s.regeocode.addressComponent.district,code:i},e.trueMaker=!0,e.markers=[];var u={position:[o,a],text:s.regeocode.formattedAddress,offset:[0,-60]};e.markers.push(u)}})}},ruleForm:{hourOperate:[]},addressList1:[],addressList2:[],addressList3:[],markers:[{position:["1","1"],text:"",offset:[0,-60]}],goodsImg:[],showImgMaterial:!1,getPost:!1,timerTimes:[],timerDays:[]}},created:function(){this.getAddressInput(1,""),this.getData()},methods:{getData:function(){var e=this;Object(l.c)(this.$route.query.id).then(function(t){console.log("门店详情",t),t.data.hourOperate=JSON.parse(t.data.hourOperate),e.ruleForm=t.data;var s=t.data.location.split(",");e.center=s,e.markers[0].position=s,e.markers[0].text=t.data.locationDesc;var o=[];t.data.roomPictures.forEach(function(e){var t={imageUrl:e};o.push(t)}),e.goodsImg=o,e.ruleForm.province={name:t.data.provinceName,code:t.data.provinceCode},e.getAddressInput(2,t.data.provinceCode),e.ruleForm.city={name:t.data.cityName,code:t.data.cityCode},e.getAddressInput(3,t.data.cityCode),e.ruleForm.area={name:t.data.areaName,code:t.data.areaCode},t.data.hourOperate.forEach(function(t){t.selectDay.forEach(function(t){return e.checkDays.push(t)})}),e.checkDays.forEach(function(t){return e.days[t].disabled=!0}),e.editNow=7==e.checkDays.length})},editTimerData:function(e,t){var s=this;e.selectDay.forEach(function(e){return s.days[e].disabled=!1}),this.ruleForm.hourOperate.splice(t,1),this.editNow=!1},getTimerData:function(e){var t=this;(console.log("e",e),e.times&&e.times[0]&&e.times[1])?Date.parse("2019-12-31 "+e.times[0]+":00")>=Date.parse("2019-12-31 "+e.times[1]+":00")?this.$message.error("开始时间应大于结束时间"):(e.beginTime=e.times[0],e.finishTime=e.times[1],0!=e.selectDay.length?(e.selectDay.forEach(function(e){t.days[e].disabled=!0,t.checkDays.push(e)}),e.type="finish",7!=this.checkDays.length&&(this.editNow=!1)):this.$message.error("请选择接待日")):this.$message.error("请选择接待时间")},addTimer:function(){this.ruleForm.hourOperate.push({beginTime:"06:00",finishTime:"23:00",selectDay:[],times:["06:00","23:00"],type:"edit"}),this.editNow=!0},onSubmit:function(){var e=this;if(console.log("ruleForm",this.ruleForm),this.ruleForm.roomName)if(this.ruleForm.telephone)if(this.ruleForm.province&&this.ruleForm.city&&this.ruleForm.area)if(this.ruleForm.locationDesc)if(this.trueMaker)if(this.ruleForm.location=this.markers[0].position.join(","),0!=this.ruleForm.hourOperate.length){var t=this.ruleForm.hourOperate.filter(function(e){return"edit"==e.type});if(console.log("erHourArr",t),t.length>0)this.$message.error("请完善接待时间");else if(0!=this.goodsImg.length){var s=[];this.goodsImg.forEach(function(e){return s.push(e.imageUrl)}),this.ruleForm.roomPicture=s.join(","),this.ruleForm.shopId=this.shop.shopId,console.log("成功了！",this.ruleForm),this.subLoading=!0,Object(l.b)(this.ruleForm).then(function(t){console.log("res",t),200==t.code?(e.$message({message:"编辑成功",type:"success"}),setTimeout(function(){e.$router.replace({path:"/shop/shopManage"}),e.subLoading=!1},1e3)):(e.subLoading=!1,e.$message.error(t.message))})}else this.$message.error("请上传门店图片")}else this.$message.error("请添加接待时间");else this.$message.error("请在地图上点击导航位置");else this.$message.error("请填写详细地址");else this.$message.error("请选择门店地址");else this.$message.error("请填写联系电话");else this.$message.error("请填写门店名称")},backPage:function(){var e=this;this.$confirm("是否放弃编辑?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$router.replace({path:"/shop/shopManage"})}).catch(function(){})},onlyclose:function(e){console.log("值点了关闭",e),this.showImgMaterial=!1,this.getPost=!1},subMit:function(e){var t=this;console.log("点击了确定",e),this.showImgMaterial=!1,this.getPost=!1,e.forEach(function(e){return t.goodsImg.push(e)}),console.log("goodsImg",this.goodsImg)},deleteImg:function(e){this.goodsImg.splice(e,1)},showImgMaterialDia:function(){this.getPost=!0,this.limitType=!0,this.selectNum=this.goodsImg.length,this.imgMaterialType="goodsImg",this.showImgMaterial=!0},onSearchResult:function(e){var t=this;console.log("地图搜索结果",e);var s=0,o=0;if(e.length>0){e.forEach(function(e){var a=e.lng,i=e.lat;o+=a,s+=i;var r={position:[e.lng,e.lat],text:e.name,offset:[0,-60]};t.markers.push(r)});var a={lng:o/e.length,lat:s/e.length};this.center=[a.lng,a.lat]}},address1:function(e){console.log("执行了1",e),this.addressList2=[],this.ruleForm.city&&(this.ruleForm.city=""),this.addressList3=[],this.ruleForm.area&&(this.ruleForm.area=""),this.getAddressInput(2,e.code)},address2:function(e){console.log("执行了2",e),this.addressList3=[],this.ruleForm.area&&(this.ruleForm.area=""),this.getAddressInput(3,e.code)},getAddressInput:function(e,t){var s=this;Object(r.b)(e,t).then(function(t){console.log(e+"级下拉获取下拉框地址",t),1!=e?2!=e?3!=e||(s.addressList3=t.data):s.addressList2=t.data:s.addressList1=t.data})}},computed:a()({},Object(i.c)(["user","shop"])),components:{imageMaterial:n.a}},u=(s("pgVq"),s("KHd+")),m=Object(u.a)(c,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"pageContent"},[s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"pageHead"},[e._v("门店信息")]),e._v(" "),s("div",[s("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"label-width":"100px"}},[s("el-form-item",{attrs:{label:"门店名称：",required:""}},[s("el-input",{staticStyle:{width:"400px"},attrs:{maxlength:"20","show-word-limit":""},model:{value:e.ruleForm.roomName,callback:function(t){e.$set(e.ruleForm,"roomName","string"==typeof t?t.trim():t)},expression:"ruleForm.roomName"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"联系电话：",required:""}},[s("el-input",{staticStyle:{width:"400px"},attrs:{maxlength:"11","show-word-limit":""},model:{value:e.ruleForm.telephone,callback:function(t){e.$set(e.ruleForm,"telephone","string"==typeof t?t.trim():t)},expression:"ruleForm.telephone"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"门店地址：",required:""}},[s("div",{staticClass:"flex-row-start"},[s("el-form-item",{staticStyle:{"margin-right":"10px"}},[s("el-select",{attrs:{"value-key":"code",placeholder:"请选择省"},on:{change:e.address1},model:{value:e.ruleForm.province,callback:function(t){e.$set(e.ruleForm,"province",t)},expression:"ruleForm.province"}},e._l(e.addressList1,function(e){return s("el-option",{key:e.code,attrs:{label:e.name,value:e}})}))],1),e._v(" "),s("el-form-item",{staticStyle:{"margin-right":"10px"}},[s("el-select",{attrs:{"value-key":"code",placeholder:"请选择市"},on:{change:e.address2},model:{value:e.ruleForm.city,callback:function(t){e.$set(e.ruleForm,"city",t)},expression:"ruleForm.city"}},e._l(e.addressList2,function(e){return s("el-option",{key:e.code,attrs:{label:e.name,value:e}})}))],1),e._v(" "),s("el-form-item",[s("el-select",{attrs:{"value-key":"code",placeholder:"请选择区"},model:{value:e.ruleForm.area,callback:function(t){e.$set(e.ruleForm,"area",t)},expression:"ruleForm.area"}},e._l(e.addressList3,function(e){return s("el-option",{key:e.code,attrs:{label:e.name,value:e}})}))],1)],1)]),e._v(" "),s("el-form-item",{attrs:{label:"详细地址：",required:""}},[s("el-input",{staticStyle:{width:"400px"},attrs:{type:"textarea",maxlength:"50","show-word-limit":""},model:{value:e.ruleForm.locationDesc,callback:function(t){e.$set(e.ruleForm,"locationDesc","string"==typeof t?t.trim():t)},expression:"ruleForm.locationDesc"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"门店导航：",required:""}},[s("div",{staticClass:"mapBox amap-page-container"},[s("div",{style:{width:"100%",height:"400px"}},[s("el-amap-search-box",{staticClass:"search-box",attrs:{"search-option":e.searchOption,"on-search-result":e.onSearchResult}}),e._v(" "),s("el-amap",{ref:"map",staticClass:"amap-demo",attrs:{vid:"amap",plugin:e.plugin,center:e.center,events:e.events}},[e._l(e.markers,function(e,t){return s("el-amap-text",{key:"text"+t,attrs:{text:e.text,offset:e.offset,position:e.position}})}),e._v(" "),e._l(e.markers,function(e,t){return s("el-amap-marker",{key:"marker"+t,attrs:{position:e.position,events:e.events}})})],2)],1)])]),e._v(" "),s("el-form-item",{attrs:{label:"接待时间：",required:""}},[s("el-button",{attrs:{type:"primary",disabled:e.editNow},on:{click:e.addTimer}},[e._v("添加时间段")]),e._v(" "),e._l(e.ruleForm.hourOperate,function(t,o){return s("div",{key:o,staticClass:"timePick"},[s("el-time-picker",{attrs:{disabled:"finish"==t.type,"is-range":"","value-format":"HH:mm","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间",placeholder:"选择时间范围","picker-options":{format:"HH:mm"}},model:{value:t.times,callback:function(s){e.$set(t,"times",s)},expression:"item.times"}}),e._v(" "),s("el-select",{staticStyle:{width:"350px"},attrs:{disabled:"finish"==t.type,multiple:"",placeholder:"请选择"},model:{value:t.selectDay,callback:function(s){e.$set(t,"selectDay",s)},expression:"item.selectDay"}},e._l(e.days,function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value,disabled:e.disabled}})})),e._v(" "),"edit"==t.type?s("el-button",{attrs:{type:"primary"},on:{click:function(s){e.getTimerData(t)}}},[e._v("确定")]):e._e(),e._v(" "),s("el-button",{on:{click:function(s){e.editTimerData(t,o)}}},[e._v("删除")])],1)})],2),e._v(" "),s("el-form-item",{attrs:{label:"门店照片：",required:""}},[s("div",[s("el-button",{attrs:{disabled:e.goodsImg.length>=3,type:"primary"},on:{click:e.showImgMaterialDia}},[e._v("添加图片"),s("i",{staticClass:"el-icon-upload el-icon--right"})]),e._v(" "),s("span",{staticStyle:{color:"#909399"}},[e._v("已上传"+e._s(e.goodsImg.length)+"张，还可上传"+e._s(3-e.goodsImg.length)+"张")]),e._v(" "),s("div",{staticStyle:{color:"#909399"}},[e._v("建议尺寸750*350像素，你可以拖拽图片调整顺序，最多上传5张，仅支持jpg、png、gif格式")]),e._v(" "),s("div",{staticStyle:{color:"#F56C6C"}},[e._v("最少需要添加一张商品图片")])],1),e._v(" "),e.goodsImg.length>=1?s("div",{staticClass:"flex-row-start",staticStyle:{padding:"20px 0"}},e._l(e.goodsImg,function(t,o){return s("div",{directives:[{name:"dragging",rawName:"v-dragging",value:{item:t,list:e.goodsImg,group:"index"},expression:"{ item: li, list: goodsImg, group: 'index' }"}],key:o,staticClass:"li"},[s("el-popover",{attrs:{placement:"bottom",trigger:"hover"}},[s("el-button",{staticStyle:{color:"#909399"},attrs:{type:"text",icon:"el-icon-circle-close"},on:{click:function(t){t.stopPropagation(),e.deleteImg(o)}}},[e._v("删除")]),e._v(" "),s("el-image",{staticStyle:{width:"150px",height:"150px"},attrs:{slot:"reference",src:t.imageUrl,fit:"fill"},slot:"reference"})],1)],1)})):e._e()]),e._v(" "),s("el-form-item",{attrs:{label:"门店描述："}},[s("el-input",{staticStyle:{width:"400px"},attrs:{type:"textarea",placeholder:"请输入门店描述",maxlength:"35","show-word-limit":""},model:{value:e.ruleForm.roomDesc,callback:function(t){e.$set(e.ruleForm,"roomDesc",t)},expression:"ruleForm.roomDesc"}})],1),e._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary",loading:e.subLoading},on:{click:e.onSubmit}},[e._v("保存")]),e._v(" "),s("el-button",{on:{click:e.backPage}},[e._v("取消")])],1)],1)],1)]),e._v(" "),s("el-dialog",{attrs:{title:"图片库",visible:e.showImgMaterial,width:"70%"},on:{"update:visible":function(t){e.showImgMaterial=t}}},[s("imageMaterial",{attrs:{limitType:!0,getPost:e.getPost,multiple:!1,totalNum:3,selectNum:this.goodsImg.length},on:{onlyclose:e.onlyclose,subMit:e.subMit}})],1)],1)},[],!1,null,"4011b2b0",null);m.options.__file="editShop.vue";t.default=m.exports},U7fH:function(e,t,s){"use strict";var o=s("ZB0S");s.n(o).a},WFwG:function(e,t,s){"use strict";s.d(t,"f",function(){return a}),s.d(t,"h",function(){return i}),s.d(t,"l",function(){return r}),s.d(t,"b",function(){return l}),s.d(t,"g",function(){return n}),s.d(t,"d",function(){return c}),s.d(t,"a",function(){return u}),s.d(t,"k",function(){return m}),s.d(t,"j",function(){return d}),s.d(t,"c",function(){return g}),s.d(t,"e",function(){return h}),s.d(t,"i",function(){return p});var o=s("t3Un");function a(e){return Object(o.a)({url:"/product/business/gallery/getGalleryByShopId?shopId="+e.shopId+"&galleryName="+(e.galleryName?e.galleryName:"")+"&type="+e.type,method:"get"})}function i(e){return Object(o.a)({url:"/product/business/gallery/insertGallery",method:"post",data:e})}function r(e){return Object(o.a)({url:"/product/business/gallery/updateGalleryName",method:"post",data:e})}function l(e){return Object(o.a)({url:"/product/business/gallery/deleteGallery",method:"post",data:e})}function n(e){return Object(o.a)({url:"/product/business/gallery/getGalleryImageByGroup",method:"post",data:e})}function c(e){return Object(o.a)({url:"/product/business/gallery/deleteOssFile",method:"post",data:e})}function u(e){return Object(o.a)({url:"/product/business/gallery/addGalleryImage",method:"post",data:e})}function m(e){return Object(o.a)({url:"/product/business/gallery/updateGalleryImageName",method:"post",data:e})}function d(e){return Object(o.a)({url:"/product/business/gallery/updateGalleryImageGroup",method:"post",data:e})}function g(e){return Object(o.a)({url:"/product/business/gallery/deleteGalleryImage",method:"post",data:e})}function h(e){return Object(o.a)({url:"/product/business/gallery/getDeleteGallery",method:"post",data:e})}function p(e){return Object(o.a)({url:"/product/business/gallery/updateDeleteStatus",method:"post",data:e})}},ZB0S:function(e,t,s){},"jM9+":function(e,t,s){"use strict";var o=s("ri7H");s.n(o).a},pgPq:function(e,t,s){"use strict";var o=s("QbLZ"),a=s.n(o),i=s("L2JU"),r=s("WFwG"),l={props:["getPost","limitType","multiple","totalNum","selectNum"],watch:{getPost:function(e,t){e&&(console.log("执行了"),this.selectImgArr=[],this.getGaller(),this.hideUpload=this.totalNum-this.selectNum-this.selectImgArr.length==0)}},data:function(){return{selectImgArr:[],hideUpload:!1,imageClassTags:[],getGalleryForm:{},getImgsForm:{pageSize:30,pageNum:1},imgs:[],imgsTotal:0,uploadImg:!1,uploadImgLoading:!1,uploadImgForm:{galleryId:0},galleryList:[],activeClassName:"",updateClassArr:[],ImageBoxHeight:0,OperationHeight:0,action:""}},created:function(){console.log("图片库created的multiple",this.multiple),console.log("图片库created的totalNum",this.totalNum),console.log("图片库created的selectNum",this.selectNum),this.getGalleryForm.shopId=this.shop.shopId,this.getGalleryForm.type=1,this.getImgsForm.shopId=this.shop.shopId,this.getImgsForm.type=1,this.action="/product/business/gallery/uploadGalleryImage?shopId="+this.shop.shopId,this.getGaller()},mounted:function(){var e=this;console.log("执行了mounted"),this.$nextTick(function(){this.OperationHeight=window.innerHeight-282,this.ImageBoxHeight=window.innerHeight-400}),window.onresize=function(){return e.OperationHeight=window.innerHeight-282,void(e.ImageBoxHeight=window.innerHeight-400)}},methods:{showPos:function(e){return-1!==this.selectImgArr.findIndex(function(t){return t.id==e.id})},showNum:function(e){return this.selectImgArr.findIndex(function(t){return t.id==e.id})+1},clickItem:function(e){if(-1===this.selectImgArr.findIndex(function(t){return t.id==e.id})){if(this.limitType&&this.totalNum-this.selectNum-this.selectImgArr.length<=0)return void this.$message.error("已超过添加最大图片数量");this.selectImgArr.push(e)}else this.selectImgArr.splice(this.selectImgArr.findIndex(function(t){return t.id===e.id}),1)},onlyClose:function(){this.$emit("onlyclose",!0)},subMit:function(){console.log("this.selectImgArr",this.selectImgArr),0!=this.selectImgArr.length?this.$emit("subMit",this.selectImgArr):this.$message.error("请先选择图片")},getImgs:function(){var e=this;Object(r.g)(this.getImgsForm).then(function(t){console.log("获取分类下图片",t);var s=t.data.list;s.forEach(function(e){return e.checked=!1}),e.imgs=s,e.imgsTotal=t.data.total})},imgUp:function(e,t){console.log(e,t);var s={};s.imageName=e.data[0].orginName,s.imageSize=e.data[0].size,s.imageUrl=e.data[0].name,s.width=e.data[0].width,s.height=e.data[0].height,this.galleryList.push(s),this.selectImgArr.push(s),this.hideUpload=this.totalNum-this.selectNum-this.selectImgArr.length==0},imgRemove:function(e,t){var s=this;if(console.log("图片删除",e,t),e.response){var o={},a=[],i={};i.imageUrl=e.response.data[0].name,a.push(i),o.shopId=this.shop.shopId,o.type=1,o.galleryList=a,this.deleteImgFun(o),this.galleryList=[],t.forEach(function(e){var t={};t.imageName=e.response.data[0].orginName,t.imageSize=e.response.data[0].size,t.imageUrl=e.response.data[0].name,t.width=e.response.data[0].width,t.height=e.response.data[0].height,s.galleryList.push(t)});var r=e.response.data[0].uid;this.selectImgArr.splice(this.selectImgArr.findIndex(function(e){return(e.uid&&e.uid)===r}),1),this.hideUpload=this.totalNum-this.selectNum-this.selectImgArr.length==0,console.log("删除后的已选择",this.selectImgArr)}},deleteImgFun:function(e){Object(r.d)(e).then(function(e){console.log("删除oss资源",e)})},uploadImgFun:function(){var e=this;this.uploadImgForm.type=1,this.uploadImgForm.shopId=this.shop.shopId,0!=this.galleryList.length?(this.uploadImgLoading=!0,this.uploadImgForm.galleryList=this.galleryList,Object(r.a)(this.uploadImgForm).then(function(t){console.log("上传图片保存",t),200==t.code?(e.$message({message:"恭喜，上传成功",type:"success"}),e.uploadImg=!1,e.uploadImgForm.galleryId=0,e.galleryList=[],e.$refs.upload.clearFiles(),e.subMit(),setTimeout(function(){e.uploadImgLoading=!1},1e3)):(e.uploadImgLoading=!1,e.$message.error(t.message))})):this.$message.error("请先上传图片")},showUploadImg:function(){this.limitType&&this.totalNum-this.selectNum-this.selectImgArr.length<=0?this.$message.error("已超过添加最大图片数量"):this.uploadImg=!0},uploadImgClose:function(e){var t=this;this.$confirm("确认关闭？").then(function(s){console.log("执行了",t.galleryList);var o={},a=[];t.galleryList.forEach(function(e){var t={};t.imageUrl=e.imageUrl,a.push(t)}),o.shopId=t.shop.shopId,o.type=1,o.galleryList=a,t.galleryList=[],t.$refs.upload.clearFiles(),t.deleteImgFun(o),e()}).catch(function(e){})},handleExceed:function(e,t){this.$message.warning("单次最多上传"+(this.totalNum-this.selectNum-this.selectImgArr.length)+"张图片，共选择了 "+(e.length+t.length)+" 个文件")},beforeAvatarUpload:function(e){console.log("file",e);var t="image/jpeg"===e.type||"image/gif"===e.type||"image/png"===e.type||"image/bmp"===e.type;console.log(t);var s=e.size/1024/1024<3;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),s||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&s},getGaller:function(){var e=this;console.log("请求分类的数据",this.getGalleryForm),Object(r.f)(this.getGalleryForm).then(function(t){console.log("获取图片库分组",t);var s=t.data;if(s.forEach(function(e){e.type="info"}),""==e.activeClassName)e.activeClassName=s[0].galleryName,s[0].type="",e.getImgsForm.galleryId=s[0].id;else{var o=s.findIndex(function(t){return t.galleryName==e.activeClassName});s[o].type="",e.getImgsForm.galleryId=s[o].id}for(var a=[],i=1;i<s.length;i++)a.push(s[i]);e.updateClassArr=a,e.changeClassArr=a,console.log("arr",a),e.getImgs(),e.imageClassTags=s})},activeClass:function(e){console.log("点击了分组按钮"),this.imageClassTags.forEach(function(e){return e.type="info"}),e.type="",this.allChecked=!1,this.getImgsForm.galleryId=e.id,this.activeClassName=e.galleryName,this.getImgs()},handleSizeChange:function(e){this.getImgsForm.pageSize=e,this.getImgs()},handleCurrentChange:function(e){this.getImgsForm.pageNum=e,this.getImgs()},change:function(e){this.$forceUpdate()}},computed:a()({},Object(i.c)(["user","shop"]))},n=(s("jM9+"),s("U7fH"),s("8/xu"),s("KHd+")),c=Object(n.a)(l,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"box"},[s("div",{staticClass:"flex-row-start"},[s("el-row",{staticStyle:{width:"100%"},attrs:{gutter:20}},[s("el-col",{attrs:{span:6}},[s("div",{staticClass:"materinalOperation"},[s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"search",staticStyle:{"margin-bottom":"20px"}},[s("el-input",{staticClass:"input-with-select searchInput",attrs:{placeholder:"搜索分组"},model:{value:e.getGalleryForm.galleryName,callback:function(t){e.$set(e.getGalleryForm,"galleryName",t)},expression:"getGalleryForm.galleryName"}},[s("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.getGaller},slot:"append"})],1)],1),e._v(" "),s("div",{staticClass:"class flex-column-center"},[s("div",{staticClass:"classList",style:{height:e.OperationHeight+"px"},attrs:{height:e.OperationHeight+"px"}},[s("ul",{staticClass:"infinite-list",staticStyle:{overflow:"auto",height:"100%"}},e._l(e.imageClassTags,function(t){return s("li",{key:t.name,staticClass:"li infinite-list-item",on:{click:function(s){e.activeClass(t)}}},[s("el-tag",{staticStyle:{width:"100%"},attrs:{type:t.type}},[e._v(e._s(t.galleryName)+" "+e._s(-1===t.id?"":"( "+t.totalAmount+" )"))])],1)}))])])])],1)]),e._v(" "),s("el-col",{attrs:{span:18}},[s("div",{staticClass:"materinalContent"},[s("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"20px"}},[s("h3",{staticStyle:{"margin-bottom":"20px"}},[e._v(e._s(e.activeClassName))]),e._v(" "),s("div",{staticClass:"flex-row-between"},[s("el-button",{attrs:{type:"primary"},on:{click:e.showUploadImg}},[e._v("上传图片")]),e._v(" "),s("div",{staticClass:"search"},[s("el-input",{staticClass:"input-with-select searchInput",attrs:{placeholder:"搜索图片"},model:{value:e.getImgsForm.imageName,callback:function(t){e.$set(e.getImgsForm,"imageName",t)},expression:"getImgsForm.imageName"}},[s("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.getImgs},slot:"append"})],1)],1)],1)]),e._v(" "),s("el-card",{staticClass:"box-card"},[e.imgs.length>0?s("div",[s("div",{staticClass:"classList",style:{height:e.ImageBoxHeight+"px"}},[s("ul",{staticClass:"infinite-list flex-row-start1 ul",staticStyle:{"overflow-x":"hidden","overflow-y":"auto",height:"100%"}},e._l(e.imgs,function(t,o){return s("li",{key:o,staticClass:"infinite-list-item item",on:{click:function(s){e.clickItem(t,o)}}},[s("div",{staticClass:"demo-image__preview"},[s("el-image",{staticStyle:{width:"200px",height:"200px"},attrs:{fit:"fill",src:t.imageUrl}}),e._v(" "),s("div",{staticClass:"imgNameBox"},[e._v(e._s(t.imageName))]),e._v(" "),s("div",{staticStyle:{"text-align":"center",color:"#909399"}},[e._v(e._s(t.width+" x "+t.height))])],1),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.showPos(t),expression:"showPos(item)"}],staticClass:"pos"},[e._v(e._s(e.showNum(t)))])])}))]),e._v(" "),s("div",{staticClass:"fy flex-row-end"},[s("div",[s("el-pagination",{attrs:{"page-sizes":[10,20,30],"page-size":e.getImgsForm.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.imgsTotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)])]):s("div",[e._v("暂无图片，可以点击左上角“上传图片”按钮添加")])])],1)])],1)],1),e._v(" "),s("div",{staticClass:"flex-row-between",staticStyle:{"margin-top":"10px"}},[e.limitType?s("div",[e._v("已选 "+e._s(e.selectNum+e.selectImgArr.length)+" 张，还可以选择 "+e._s(e.totalNum-e.selectNum-e.selectImgArr.length)+" 张")]):s("div",[e._v("已选 "+e._s(e.selectNum+e.selectImgArr.length)+" 张")]),e._v(" "),s("div",[s("el-button",{on:{click:e.onlyClose}},[e._v("取 消")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:e.subMit}},[e._v("确 定")])],1)])]),e._v(" "),s("el-dialog",{attrs:{title:"上传图片",visible:e.uploadImg,"before-close":e.uploadImgClose,"modal-append-to-body":!1,width:"65%"},on:{"update:visible":function(t){e.uploadImg=t}}},[s("el-form",{ref:"editGalleryForm",staticClass:"demo-ruleForm",attrs:{model:e.uploadImgForm,"label-width":"100px"}},[s("el-form-item",{attrs:{label:"本地图片"}},[s("el-upload",{ref:"upload",class:{hide:e.hideUpload},attrs:{action:e.action,name:"files",multiple:e.multiple,"list-type":"picture-card","on-success":e.imgUp,"on-remove":e.imgRemove,"on-exceed":e.handleExceed,limit:e.limitType?e.totalNum-e.selectNum-e.selectImgArr.length:9999,"before-upload":e.beforeAvatarUpload}},[s("i",{staticClass:"el-icon-plus"}),e._v(" "),e.limitType?s("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("单次最多上传"+e._s(this.totalNum-this.selectNum-this.selectImgArr.length)+"张图片，仅支持 gif、 jpeg、 png、 bmp 4种格式, 大小不超过3.0 MB")]):s("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("仅支持 gif、 jpeg、 png、 bmp 4种格式, 大小不超过3.0 MB")])])],1),e._v(" "),s("el-form-item",{attrs:{label:"选择分组"}},[s("el-select",{attrs:{placeholder:"请选择"},model:{value:e.uploadImgForm.galleryId,callback:function(t){e.$set(e.uploadImgForm,"galleryId",t)},expression:"uploadImgForm.galleryId"}},e._l(e.updateClassArr,function(e){return s("el-option",{key:e.name,attrs:{label:e.galleryName,value:e.id}})}))],1),e._v(" "),s("el-form-item",{staticStyle:{"text-align":"center"}},[s("el-button",{attrs:{loading:e.uploadImgLoading,type:"primary"},on:{click:e.uploadImgFun}},[e._v("确 定")])],1)],1)],1)],1)},[],!1,null,"3039c789",null);c.options.__file="imageMaterial.vue";t.a=c.exports},pgVq:function(e,t,s){"use strict";var o=s("Is48");s.n(o).a},ri7H:function(e,t,s){}}]);
//# sourceMappingURL=chunk-7574.5b18fed7.js.map