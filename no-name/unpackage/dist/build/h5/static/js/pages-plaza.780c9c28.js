(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-plaza"],{"0e49":function(t,n,e){"use strict";e.r(n);var a=e("6e71"),i=e("131d");for(var c in i)"default"!==c&&function(t){e.d(n,t,(function(){return i[t]}))}(c);var u,s=e("f0c5"),o=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"e37fcdbc",null,!1,a["a"],u);n["default"]=o.exports},"0e86":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{InputBottom:0}},computed:{highlight:function(){return this.$store.state.highlight}},methods:{skip:function(t){console.log(t,this.highlight,"跳转路径"),this.$store.commit("setHighlight",t),uni.reLaunch({url:t})}}};n.default=a},"131d":function(t,n,e){"use strict";e.r(n);var a=e("c0fe"),i=e.n(a);for(var c in a)"default"!==c&&function(t){e.d(n,t,(function(){return a[t]}))}(c);n["default"]=i.a},"1ee1":function(t,n,e){var a=e("fe26");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("38c4837e",a,!0,{sourceMap:!1,shadowMode:!1})},"2b58":function(t,n,e){"use strict";e.r(n);var a=e("7e03"),i=e("61b6");for(var c in i)"default"!==c&&function(t){e.d(n,t,(function(){return i[t]}))}(c);e("9d7b");var u,s=e("f0c5"),o=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"1bfc5206",null,!1,a["a"],u);n["default"]=o.exports},"61b6":function(t,n,e){"use strict";e.r(n);var a=e("0e86"),i=e.n(a);for(var c in a)"default"!==c&&function(t){e.d(n,t,(function(){return a[t]}))}(c);n["default"]=i.a},"6e71":function(t,n,e){"use strict";var a,i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"content",style:{marginTop:t.statusBarHeight+"px"}},[t._v("plaza"),e("TabBar")],1)},c=[];e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return a}))},"7e03":function(t,n,e){"use strict";var a,i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"TabBar"},[e("v-uni-view",{staticClass:"cu-bar tabbar bg-white"},[e("v-uni-view",{class:"/pages/plaza"==t.highlight?"action text-green":"action text-gray",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.skip("/pages/plaza")}}},[e("v-uni-view",{staticClass:"cuIcon-activity"}),t._v("广场")],1),e("v-uni-view",{class:"/pages/attention"==t.highlight?"action text-green":"action text-gray",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.skip("/pages/attention")}}},[e("v-uni-view",{staticClass:"cuIcon-favor"}),t._v("关注")],1),e("v-uni-view",{staticClass:"action text-gray add-action"},[e("v-uni-button",{staticClass:"cu-btn cuIcon-add bg-green shadow"}),t._v("发布")],1),e("v-uni-view",{class:"/pages/chat"==t.highlight?"action text-green":"action text-gray",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.skip("/pages/chat")}}},[e("v-uni-view",{staticClass:"cuIcon-message"},[e("v-uni-view",{staticClass:"cu-tag badge"},[t._v("99")])],1),t._v("聊天")],1),e("v-uni-view",{class:"/pages/my"==t.highlight?"action text-green":"action text-gray",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.skip("/pages/my")}}},[e("v-uni-view",{staticClass:"cuIcon-my"},[e("v-uni-view",{staticClass:"cu-tag badge"})],1),t._v("我的")],1)],1)],1)},c=[];e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return a}))},"9d7b":function(t,n,e){"use strict";var a=e("1ee1"),i=e.n(a);i.a},c0fe:function(t,n,e){"use strict";var a=e("ee27");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("2b58")),c={components:{TabBar:i.default},data:function(){return{statusBarHeight:uni.getStorageSync("statusBarHeight")}},onLoad:function(){},methods:{}};n.default=c},fe26:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,".TabBar[data-v-1bfc5206]{position:fixed;left:0;bottom:0;width:100%}",""]),t.exports=n}}]);