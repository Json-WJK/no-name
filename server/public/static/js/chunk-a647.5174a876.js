(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-a647","WFwG"],{"4jk9":function(t,e,i){},"8/xu":function(t,e,i){"use strict";var s=i("4jk9");i.n(s).a},KuD8:function(t,e,i){"use strict";i.r(e);var s=i("SW5y"),a=i("pgPq"),l={props:{itemData:{type:Object}},components:{VueUeditor:s.a,imageMaterial:a.a},data:function(){return{ue1:"ue1",dialogVisible:!1,getPost:!0,limitType:!1,selectNum:0}},methods:{submitFormqx:function(){this.dialogVisible=!1,this.getPost=!1},submitForm:function(t){if(console.log(t),0!=t.length){var e="";t.forEach(function(t){e+='<p><img src="'+t.imageUrl+'" alt=""></p>'}),this.ue1.execCommand("inserthtml",e),console.log("上传给富文本的图片",e),this.dialogVisible=!1,this.getPost=!1}else this.$message.error("请选择图片")}},mounted:function(){var t=this,e=this;this.$nextTick(function(){UE.registerUI("diyimg",function(t,i){return new UE.ui.Button({name:i,title:"添加图片",cssRules:"background-position: -380px 0;",elementPathEnabled:!1,onclick:function(){e.selectNum=0,e.getPost=!0,e.dialogVisible=!0,e.limitType=!1}})}),t.ue1=UE.getEditor("editor",{zIndex:9,elementPathEnabled:!1}),console.log("实例化成功！"),t.ue1.addListener("ready",function(){this.ue1.setContent(this.itemData.html)}.bind(t)),t.ue1.addListener("contentChange",function(){this.itemData.html=this.ue1.getContent()}.bind(t))}),setTimeout(function(){},3e3)},destroyed:function(){this.ue1.destroy(),console.log("销毁")}},o=(i("LrAb"),i("KHd+")),n=Object(o.a)(l,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"itemBox"},[t._m(0),t._v(" "),i("el-form",{ref:"form",attrs:{model:t.itemData,size:"mini"}},[i("el-form-item",{staticClass:"bgColor bottomLine",attrs:{label:"背景颜色"}},[i("el-color-picker",{attrs:{size:"mini"},model:{value:t.itemData.backgroundColor,callback:function(e){t.$set(t.itemData,"backgroundColor",e)},expression:"itemData.backgroundColor"}}),t._v(" "),i("el-button",{attrs:{type:"text"},on:{click:function(e){t.itemData.backgroundColor="#fff"}}},[t._v("重置")])],1),t._v(" "),i("el-form-item",{staticClass:"bottomLine",attrs:{label:"是否全屏显示"}},[i("el-radio-group",{model:{value:t.itemData.isFullScreen,callback:function(e){t.$set(t.itemData,"isFullScreen",e)},expression:"itemData.isFullScreen"}},[i("el-radio",{attrs:{label:0}},[t._v("全屏展示")]),t._v(" "),i("el-radio",{attrs:{label:1}},[t._v("不全屏展示")])],1)],1),t._v(" "),i("el-form-item",[i("input",{staticStyle:{display:"none"},attrs:{type:"file",name:"file",id:"file",accept:"image/jpeg, image/png, image/jpg, image/gif"},on:{change:function(e){t.getimg(e)}}}),t._v(" "),i("div",{staticStyle:{height:"300px"},attrs:{id:"editor"}})])],1),t._v(" "),i("el-dialog",{staticClass:"add-dialog",attrs:{title:"图库列表",visible:t.dialogVisible,width:"76%","close-on-click-modal":!1,"append-to-body":!0,top:"6vh"},on:{"update:visible":function(e){t.dialogVisible=e},close:t.submitFormqx}},[i("imageMaterial",{attrs:{limitType:t.limitType,getPost:t.getPost,multiple:!0,totalNum:5,selectNum:t.selectNum},on:{onlyclose:t.submitFormqx,subMit:t.submitForm}})],1)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"title"},[this._v("\n    富文本 \n    "),e("span",[this._v("以实际效果为准，左侧预览仅供参考")])])}],!1,null,"3d415738",null);n.options.__file="editorRichTxtBox.vue";e.default=n.exports},LrAb:function(t,e,i){"use strict";var s=i("csry");i.n(s).a},SW5y:function(t,e,i){"use strict";var s={name:"VueUEditor",props:{ueditorPath:{type:String,default:"/static/ueditor1_4_3_3/"},ueditorConfig:{type:Object,default:function(){return{}}}},data:()=>({randomId:"editor_"+1e17*Math.random(),instance:null,scriptTagStatus:0}),created(){void 0!==window.UE?(this.scriptTagStatus=2,this.initEditor()):this.insertScriptTag()},beforeDestroy(){null!==this.instance&&this.instance.destroy&&this.instance.destroy()},methods:{insertScriptTag(){let t=document.getElementById("editorScriptTag"),e=document.getElementById("configScriptTag");if(null===t){(e=document.createElement("script")).type="text/javascript",e.src=this.ueditorPath+"ueditor.config.js",e.id="configScriptTag",(t=document.createElement("script")).type="text/javascript",t.src=this.ueditorPath+"ueditor.all.js",t.id="editorScriptTag";let i=document.getElementsByTagName("head")[0];i.appendChild(e),i.appendChild(t)}e.loaded?this.scriptTagStatus++:e.addEventListener("load",()=>{this.scriptTagStatus++,e.loaded=!0,this.initEditor()}),t.loaded?this.scriptTagStatus++:t.addEventListener("load",()=>{this.scriptTagStatus++,t.loaded=!0,this.initEditor()}),this.initEditor()},initEditor(){2===this.scriptTagStatus&&null===this.instance&&this.$nextTick(()=>{this.instance=window.UE.getEditor(this.randomId,this.ueditorConfig),this.instance.addListener("ready",()=>{this.$emit("ready",this.instance)})})}}},a=i("KHd+"),l=Object(a.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("script",{attrs:{id:this.randomId,name:"content",type:"text/plain"}})},[],!1,null,null,null);l.options.__file="UEditor.vue";var o=l.exports;e.a=o},U7fH:function(t,e,i){"use strict";var s=i("ZB0S");i.n(s).a},WFwG:function(t,e,i){"use strict";i.d(e,"f",function(){return a}),i.d(e,"h",function(){return l}),i.d(e,"l",function(){return o}),i.d(e,"b",function(){return n}),i.d(e,"g",function(){return r}),i.d(e,"d",function(){return c}),i.d(e,"a",function(){return u}),i.d(e,"k",function(){return d}),i.d(e,"j",function(){return m}),i.d(e,"c",function(){return g}),i.d(e,"e",function(){return h}),i.d(e,"i",function(){return p});var s=i("t3Un");function a(t){return Object(s.a)({url:"/product/business/gallery/getGalleryByShopId?shopId="+t.shopId+"&galleryName="+(t.galleryName?t.galleryName:"")+"&type="+t.type,method:"get"})}function l(t){return Object(s.a)({url:"/product/business/gallery/insertGallery",method:"post",data:t})}function o(t){return Object(s.a)({url:"/product/business/gallery/updateGalleryName",method:"post",data:t})}function n(t){return Object(s.a)({url:"/product/business/gallery/deleteGallery",method:"post",data:t})}function r(t){return Object(s.a)({url:"/product/business/gallery/getGalleryImageByGroup",method:"post",data:t})}function c(t){return Object(s.a)({url:"/product/business/gallery/deleteOssFile",method:"post",data:t})}function u(t){return Object(s.a)({url:"/product/business/gallery/addGalleryImage",method:"post",data:t})}function d(t){return Object(s.a)({url:"/product/business/gallery/updateGalleryImageName",method:"post",data:t})}function m(t){return Object(s.a)({url:"/product/business/gallery/updateGalleryImageGroup",method:"post",data:t})}function g(t){return Object(s.a)({url:"/product/business/gallery/deleteGalleryImage",method:"post",data:t})}function h(t){return Object(s.a)({url:"/product/business/gallery/getDeleteGallery",method:"post",data:t})}function p(t){return Object(s.a)({url:"/product/business/gallery/updateDeleteStatus",method:"post",data:t})}},ZB0S:function(t,e,i){},csry:function(t,e,i){},"jM9+":function(t,e,i){"use strict";var s=i("ri7H");i.n(s).a},pgPq:function(t,e,i){"use strict";var s=i("QbLZ"),a=i.n(s),l=i("L2JU"),o=i("WFwG"),n={props:["getPost","limitType","multiple","totalNum","selectNum"],watch:{getPost:function(t,e){t&&(console.log("执行了"),this.selectImgArr=[],this.getGaller(),this.hideUpload=this.totalNum-this.selectNum-this.selectImgArr.length==0)}},data:function(){return{selectImgArr:[],hideUpload:!1,imageClassTags:[],getGalleryForm:{},getImgsForm:{pageSize:30,pageNum:1},imgs:[],imgsTotal:0,uploadImg:!1,uploadImgLoading:!1,uploadImgForm:{galleryId:0},galleryList:[],activeClassName:"",updateClassArr:[],ImageBoxHeight:0,OperationHeight:0,action:""}},created:function(){console.log("图片库created的multiple",this.multiple),console.log("图片库created的totalNum",this.totalNum),console.log("图片库created的selectNum",this.selectNum),this.getGalleryForm.shopId=this.shop.shopId,this.getGalleryForm.type=1,this.getImgsForm.shopId=this.shop.shopId,this.getImgsForm.type=1,this.action="/product/business/gallery/uploadGalleryImage?shopId="+this.shop.shopId,this.getGaller()},mounted:function(){var t=this;console.log("执行了mounted"),this.$nextTick(function(){this.OperationHeight=window.innerHeight-282,this.ImageBoxHeight=window.innerHeight-400}),window.onresize=function(){return t.OperationHeight=window.innerHeight-282,void(t.ImageBoxHeight=window.innerHeight-400)}},methods:{showPos:function(t){return-1!==this.selectImgArr.findIndex(function(e){return e.id==t.id})},showNum:function(t){return this.selectImgArr.findIndex(function(e){return e.id==t.id})+1},clickItem:function(t){if(-1===this.selectImgArr.findIndex(function(e){return e.id==t.id})){if(this.limitType&&this.totalNum-this.selectNum-this.selectImgArr.length<=0)return void this.$message.error("已超过添加最大图片数量");this.selectImgArr.push(t)}else this.selectImgArr.splice(this.selectImgArr.findIndex(function(e){return e.id===t.id}),1)},onlyClose:function(){this.$emit("onlyclose",!0)},subMit:function(){console.log("this.selectImgArr",this.selectImgArr),0!=this.selectImgArr.length?this.$emit("subMit",this.selectImgArr):this.$message.error("请先选择图片")},getImgs:function(){var t=this;Object(o.g)(this.getImgsForm).then(function(e){console.log("获取分类下图片",e);var i=e.data.list;i.forEach(function(t){return t.checked=!1}),t.imgs=i,t.imgsTotal=e.data.total})},imgUp:function(t,e){console.log(t,e);var i={};i.imageName=t.data[0].orginName,i.imageSize=t.data[0].size,i.imageUrl=t.data[0].name,i.width=t.data[0].width,i.height=t.data[0].height,this.galleryList.push(i),this.selectImgArr.push(i),this.hideUpload=this.totalNum-this.selectNum-this.selectImgArr.length==0},imgRemove:function(t,e){var i=this;if(console.log("图片删除",t,e),t.response){var s={},a=[],l={};l.imageUrl=t.response.data[0].name,a.push(l),s.shopId=this.shop.shopId,s.type=1,s.galleryList=a,this.deleteImgFun(s),this.galleryList=[],e.forEach(function(t){var e={};e.imageName=t.response.data[0].orginName,e.imageSize=t.response.data[0].size,e.imageUrl=t.response.data[0].name,e.width=t.response.data[0].width,e.height=t.response.data[0].height,i.galleryList.push(e)});var o=t.response.data[0].uid;this.selectImgArr.splice(this.selectImgArr.findIndex(function(t){return(t.uid&&t.uid)===o}),1),this.hideUpload=this.totalNum-this.selectNum-this.selectImgArr.length==0,console.log("删除后的已选择",this.selectImgArr)}},deleteImgFun:function(t){Object(o.d)(t).then(function(t){console.log("删除oss资源",t)})},uploadImgFun:function(){var t=this;this.uploadImgForm.type=1,this.uploadImgForm.shopId=this.shop.shopId,0!=this.galleryList.length?(this.uploadImgLoading=!0,this.uploadImgForm.galleryList=this.galleryList,Object(o.a)(this.uploadImgForm).then(function(e){console.log("上传图片保存",e),200==e.code?(t.$message({message:"恭喜，上传成功",type:"success"}),t.uploadImg=!1,t.uploadImgForm.galleryId=0,t.galleryList=[],t.$refs.upload.clearFiles(),t.subMit(),setTimeout(function(){t.uploadImgLoading=!1},1e3)):(t.uploadImgLoading=!1,t.$message.error(e.message))})):this.$message.error("请先上传图片")},showUploadImg:function(){this.limitType&&this.totalNum-this.selectNum-this.selectImgArr.length<=0?this.$message.error("已超过添加最大图片数量"):this.uploadImg=!0},uploadImgClose:function(t){var e=this;this.$confirm("确认关闭？").then(function(i){console.log("执行了",e.galleryList);var s={},a=[];e.galleryList.forEach(function(t){var e={};e.imageUrl=t.imageUrl,a.push(e)}),s.shopId=e.shop.shopId,s.type=1,s.galleryList=a,e.galleryList=[],e.$refs.upload.clearFiles(),e.deleteImgFun(s),t()}).catch(function(t){})},handleExceed:function(t,e){this.$message.warning("单次最多上传"+(this.totalNum-this.selectNum-this.selectImgArr.length)+"张图片，共选择了 "+(t.length+e.length)+" 个文件")},beforeAvatarUpload:function(t){console.log("file",t);var e="image/jpeg"===t.type||"image/gif"===t.type||"image/png"===t.type||"image/bmp"===t.type;console.log(e);var i=t.size/1024/1024<3;return e||this.$message.error("上传头像图片只能是 JPG 格式!"),i||this.$message.error("上传头像图片大小不能超过 2MB!"),e&&i},getGaller:function(){var t=this;console.log("请求分类的数据",this.getGalleryForm),Object(o.f)(this.getGalleryForm).then(function(e){console.log("获取图片库分组",e);var i=e.data;if(i.forEach(function(t){t.type="info"}),""==t.activeClassName)t.activeClassName=i[0].galleryName,i[0].type="",t.getImgsForm.galleryId=i[0].id;else{var s=i.findIndex(function(e){return e.galleryName==t.activeClassName});i[s].type="",t.getImgsForm.galleryId=i[s].id}for(var a=[],l=1;l<i.length;l++)a.push(i[l]);t.updateClassArr=a,t.changeClassArr=a,console.log("arr",a),t.getImgs(),t.imageClassTags=i})},activeClass:function(t){console.log("点击了分组按钮"),this.imageClassTags.forEach(function(t){return t.type="info"}),t.type="",this.allChecked=!1,this.getImgsForm.galleryId=t.id,this.activeClassName=t.galleryName,this.getImgs()},handleSizeChange:function(t){this.getImgsForm.pageSize=t,this.getImgs()},handleCurrentChange:function(t){this.getImgsForm.pageNum=t,this.getImgs()},change:function(t){this.$forceUpdate()}},computed:a()({},Object(l.c)(["user","shop"]))},r=(i("jM9+"),i("U7fH"),i("8/xu"),i("KHd+")),c=Object(r.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"box"},[i("div",{staticClass:"flex-row-start"},[i("el-row",{staticStyle:{width:"100%"},attrs:{gutter:20}},[i("el-col",{attrs:{span:6}},[i("div",{staticClass:"materinalOperation"},[i("el-card",{staticClass:"box-card"},[i("div",{staticClass:"search",staticStyle:{"margin-bottom":"20px"}},[i("el-input",{staticClass:"input-with-select searchInput",attrs:{placeholder:"搜索分组"},model:{value:t.getGalleryForm.galleryName,callback:function(e){t.$set(t.getGalleryForm,"galleryName",e)},expression:"getGalleryForm.galleryName"}},[i("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.getGaller},slot:"append"})],1)],1),t._v(" "),i("div",{staticClass:"class flex-column-center"},[i("div",{staticClass:"classList",style:{height:t.OperationHeight+"px"},attrs:{height:t.OperationHeight+"px"}},[i("ul",{staticClass:"infinite-list",staticStyle:{overflow:"auto",height:"100%"}},t._l(t.imageClassTags,function(e){return i("li",{key:e.name,staticClass:"li infinite-list-item",on:{click:function(i){t.activeClass(e)}}},[i("el-tag",{staticStyle:{width:"100%"},attrs:{type:e.type}},[t._v(t._s(e.galleryName)+" "+t._s(-1===e.id?"":"( "+e.totalAmount+" )"))])],1)}))])])])],1)]),t._v(" "),i("el-col",{attrs:{span:18}},[i("div",{staticClass:"materinalContent"},[i("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"20px"}},[i("h3",{staticStyle:{"margin-bottom":"20px"}},[t._v(t._s(t.activeClassName))]),t._v(" "),i("div",{staticClass:"flex-row-between"},[i("el-button",{attrs:{type:"primary"},on:{click:t.showUploadImg}},[t._v("上传图片")]),t._v(" "),i("div",{staticClass:"search"},[i("el-input",{staticClass:"input-with-select searchInput",attrs:{placeholder:"搜索图片"},model:{value:t.getImgsForm.imageName,callback:function(e){t.$set(t.getImgsForm,"imageName",e)},expression:"getImgsForm.imageName"}},[i("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.getImgs},slot:"append"})],1)],1)],1)]),t._v(" "),i("el-card",{staticClass:"box-card"},[t.imgs.length>0?i("div",[i("div",{staticClass:"classList",style:{height:t.ImageBoxHeight+"px"}},[i("ul",{staticClass:"infinite-list flex-row-start1 ul",staticStyle:{"overflow-x":"hidden","overflow-y":"auto",height:"100%"}},t._l(t.imgs,function(e,s){return i("li",{key:s,staticClass:"infinite-list-item item",on:{click:function(i){t.clickItem(e,s)}}},[i("div",{staticClass:"demo-image__preview"},[i("el-image",{staticStyle:{width:"200px",height:"200px"},attrs:{fit:"fill",src:e.imageUrl}}),t._v(" "),i("div",{staticClass:"imgNameBox"},[t._v(t._s(e.imageName))]),t._v(" "),i("div",{staticStyle:{"text-align":"center",color:"#909399"}},[t._v(t._s(e.width+" x "+e.height))])],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showPos(e),expression:"showPos(item)"}],staticClass:"pos"},[t._v(t._s(t.showNum(e)))])])}))]),t._v(" "),i("div",{staticClass:"fy flex-row-end"},[i("div",[i("el-pagination",{attrs:{"page-sizes":[10,20,30],"page-size":t.getImgsForm.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.imgsTotal},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])]):i("div",[t._v("暂无图片，可以点击左上角“上传图片”按钮添加")])])],1)])],1)],1),t._v(" "),i("div",{staticClass:"flex-row-between",staticStyle:{"margin-top":"10px"}},[t.limitType?i("div",[t._v("已选 "+t._s(t.selectNum+t.selectImgArr.length)+" 张，还可以选择 "+t._s(t.totalNum-t.selectNum-t.selectImgArr.length)+" 张")]):i("div",[t._v("已选 "+t._s(t.selectNum+t.selectImgArr.length)+" 张")]),t._v(" "),i("div",[i("el-button",{on:{click:t.onlyClose}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.subMit}},[t._v("确 定")])],1)])]),t._v(" "),i("el-dialog",{attrs:{title:"上传图片",visible:t.uploadImg,"before-close":t.uploadImgClose,"modal-append-to-body":!1,width:"65%"},on:{"update:visible":function(e){t.uploadImg=e}}},[i("el-form",{ref:"editGalleryForm",staticClass:"demo-ruleForm",attrs:{model:t.uploadImgForm,"label-width":"100px"}},[i("el-form-item",{attrs:{label:"本地图片"}},[i("el-upload",{ref:"upload",class:{hide:t.hideUpload},attrs:{action:t.action,name:"files",multiple:t.multiple,"list-type":"picture-card","on-success":t.imgUp,"on-remove":t.imgRemove,"on-exceed":t.handleExceed,limit:t.limitType?t.totalNum-t.selectNum-t.selectImgArr.length:9999,"before-upload":t.beforeAvatarUpload}},[i("i",{staticClass:"el-icon-plus"}),t._v(" "),t.limitType?i("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("单次最多上传"+t._s(this.totalNum-this.selectNum-this.selectImgArr.length)+"张图片，仅支持 gif、 jpeg、 png、 bmp 4种格式, 大小不超过3.0 MB")]):i("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("仅支持 gif、 jpeg、 png、 bmp 4种格式, 大小不超过3.0 MB")])])],1),t._v(" "),i("el-form-item",{attrs:{label:"选择分组"}},[i("el-select",{attrs:{placeholder:"请选择"},model:{value:t.uploadImgForm.galleryId,callback:function(e){t.$set(t.uploadImgForm,"galleryId",e)},expression:"uploadImgForm.galleryId"}},t._l(t.updateClassArr,function(t){return i("el-option",{key:t.name,attrs:{label:t.galleryName,value:t.id}})}))],1),t._v(" "),i("el-form-item",{staticStyle:{"text-align":"center"}},[i("el-button",{attrs:{loading:t.uploadImgLoading,type:"primary"},on:{click:t.uploadImgFun}},[t._v("确 定")])],1)],1)],1)],1)},[],!1,null,"3039c789",null);c.options.__file="imageMaterial.vue";e.a=c.exports},ri7H:function(t,e,i){}}]);
//# sourceMappingURL=chunk-a647.5174a876.js.map