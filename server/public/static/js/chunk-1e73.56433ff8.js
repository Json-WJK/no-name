(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1e73"],{"3biz":function(t,e,a){"use strict";a.r(e);var s={props:{itemData:{type:Object}},data:function(){return{rules:{title:[{required:!0,message:"请输入标题名称",trigger:"blur"}]},predefineColors:["#ff4500","#ff8c00","#ffd700","#90ee90","#00ced1","#1e90ff","#c71585"]}},methods:{selectStyle:function(){0==this.itemData.textSelect?this.itemData.fontWeight=100:this.itemData.fontWeight=700},selectAlign:function(){0==this.itemData.showAddress?this.itemData.showAlign="left":1==this.itemData.showAddress?this.itemData.showAlign="center":this.itemData.showAlign="right"},textColorChange:function(t){switch(this.itemData.textColorSelect=t,t){case 0:this.itemData.textColor="#3a3a3a";break;case 1:this.itemData.textColor="#db2828";break;case 2:this.itemData.textColor="#fb5d06";break;case 3:this.itemData.textColor="#c29a6c";break;case 4:this.itemData.textColor="#558bd3";break;case 5:this.itemData.textColor="#ffffff"}},bgChange:function(t){switch(this.itemData.bgSelect=t,t){case 0:this.itemData.backgroundColor="#ffffff";break;case 1:this.itemData.backgroundColor="#f44877";break;case 2:this.itemData.backgroundColor="#ffecee";break;case 3:this.itemData.backgroundColor="#fbf5dd";break;case 4:this.itemData.backgroundColor="#deebf2";break;case 5:this.itemData.backgroundColor="#333"}},activeChange:function(t){1==t?(this.itemData.textColor,this.itemData.textColorSelect=6):(this.itemData.backgroundColor,this.itemData.bgSelect=6)}}},l=(a("h6v/"),a("KHd+")),i=Object(l.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"itemBox"},[a("p",{staticClass:"title"},[t._v("标题文本")]),t._v(" "),a("el-form",{ref:"form",attrs:{rules:t.rules,model:t.itemData,size:"mini"}},[a("el-form-item",{attrs:{label:"标题名称",prop:"title"}},[a("el-input",{attrs:{maxlength:"10",placeholder:"最多输入10个字"},model:{value:t.itemData.title,callback:function(e){t.$set(t.itemData,"title","string"==typeof e?e.trim():e)},expression:"itemData.title"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"字体大小"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.itemData.fontSize,callback:function(e){t.$set(t.itemData,"fontSize",e)},expression:"itemData.fontSize"}},[a("el-option",{attrs:{label:20,value:20}}),t._v(" "),a("el-option",{attrs:{label:24,value:24}}),t._v(" "),a("el-option",{attrs:{label:28,value:28}}),t._v(" "),a("el-option",{attrs:{label:32,value:32}})],1)],1),t._v(" "),a("el-form-item",{staticClass:"navigation",attrs:{label:"文本样式"}},[a("el-radio-group",{on:{change:t.selectStyle},model:{value:t.itemData.textSelect,callback:function(e){t.$set(t.itemData,"textSelect",e)},expression:"itemData.textSelect"}},[a("el-radio",{attrs:{label:0}},[t._v("常规")]),t._v(" "),a("el-radio",{attrs:{label:1}},[t._v("加粗")])],1)],1),t._v(" "),a("el-form-item",{staticClass:"navigation",attrs:{label:"显示位置"}},[a("el-radio-group",{on:{change:t.selectAlign},model:{value:t.itemData.showAddress,callback:function(e){t.$set(t.itemData,"showAddress",e)},expression:"itemData.showAddress"}},[a("el-radio",{attrs:{label:0}},[t._v("居左")]),t._v(" "),a("el-radio",{attrs:{label:1}},[t._v("居中")]),t._v(" "),a("el-radio",{attrs:{label:2}},[t._v("居右")])],1)],1),t._v(" "),a("el-form-item",{staticClass:"showType bottomLine",attrs:{label:"文字颜色"}},[a("div",{staticClass:"sendType"},[a("span",{staticClass:"showClass"},[t._v("推荐颜色")]),t._v(" "),a("div",{staticClass:"selctColor"},[a("span",{staticClass:"bg1",class:0==t.itemData.textColorSelect?"selsecColor":"",on:{click:function(e){t.textColorChange(0)}}},[a("span")]),t._v(" "),a("span",{staticClass:"bg2",class:1==t.itemData.textColorSelect?"selsecColor":"",on:{click:function(e){t.textColorChange(1)}}},[a("span")]),t._v(" "),a("span",{staticClass:"bg3",class:2==t.itemData.textColorSelect?"selsecColor":"",on:{click:function(e){t.textColorChange(2)}}},[a("span")]),t._v(" "),a("span",{staticClass:"bg4",class:3==t.itemData.textColorSelect?"selsecColor":"",on:{click:function(e){t.textColorChange(3)}}},[a("span")]),t._v(" "),a("span",{staticClass:"bg5",class:4==t.itemData.textColorSelect?"selsecColor":"",on:{click:function(e){t.textColorChange(4)}}},[a("span")]),t._v(" "),a("span",{staticClass:"bg6",class:5==t.itemData.textColorSelect?"selsecColor":"",on:{click:function(e){t.textColorChange(5)}}},[a("span")])])]),t._v(" "),a("div",{staticClass:"sendType"},[a("span",{staticClass:"showClass"},[t._v("自定义颜色")]),t._v(" "),a("div",{staticClass:"selctColor"},[a("el-color-picker",{attrs:{size:"mini"},on:{change:function(e){t.activeChange(1)}},model:{value:t.itemData.textColor,callback:function(e){t.$set(t.itemData,"textColor",e)},expression:"itemData.textColor"}})],1)])]),t._v(" "),a("el-form-item",{staticClass:"showType",attrs:{label:"背景颜色"}},[a("div",{staticClass:"sendType"},[a("span",{staticClass:"showClass"},[t._v("推荐颜色")]),t._v(" "),a("div",{staticClass:"selctColor"},[a("span",{staticClass:"bg7",class:0==t.itemData.bgSelect?"selsecColor":"",on:{click:function(e){t.bgChange(0)}}},[a("span")]),t._v(" "),a("span",{staticClass:"bg8",class:1==t.itemData.bgSelect?"selsecColor":"",on:{click:function(e){t.bgChange(1)}}},[a("span")]),t._v(" "),a("span",{staticClass:"bg9",class:2==t.itemData.bgSelect?"selsecColor":"",on:{click:function(e){t.bgChange(2)}}},[a("span")]),t._v(" "),a("span",{staticClass:"bg10",class:3==t.itemData.bgSelect?"selsecColor":"",on:{click:function(e){t.bgChange(3)}}},[a("span")]),t._v(" "),a("span",{staticClass:"bg11",class:4==t.itemData.bgSelect?"selsecColor":"",on:{click:function(e){t.bgChange(4)}}},[a("span")]),t._v(" "),a("span",{staticClass:"bg12",class:5==t.itemData.bgSelect?"selsecColor":"",on:{click:function(e){t.bgChange(5)}}},[a("span")])])]),t._v(" "),a("div",{staticClass:"sendType"},[a("span",{staticClass:"showClass"},[t._v("自定义颜色")]),t._v(" "),a("div",{staticClass:"selctColor"},[a("el-color-picker",{attrs:{size:"mini"},on:{change:function(e){t.activeChange(2)}},model:{value:t.itemData.backgroundColor,callback:function(e){t.$set(t.itemData,"backgroundColor",e)},expression:"itemData.backgroundColor"}})],1)])])],1)],1)},[],!1,null,"57f56435",null);i.options.__file="editorTitleBox.vue";e.default=i.exports},"h6v/":function(t,e,a){"use strict";var s=a("zJ4r");a.n(s).a},zJ4r:function(t,e,a){}}]);
//# sourceMappingURL=chunk-1e73.56433ff8.js.map