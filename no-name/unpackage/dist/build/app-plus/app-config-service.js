
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/plaza","pages/attention","pages/chat","pages/my","pages/login"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8","navigationStyle":"custom"},"splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"no-name","compilerVersion":"2.5.1","entryPagePath":"pages/plaza","networkTimeout":{"request":6000,"connectSocket":6000,"uploadFile":6000,"downloadFile":6000}};
var __uniRoutes = [{"path":"/pages/plaza","meta":{"isQuit":true},"window":{}},{"path":"/pages/attention","meta":{},"window":{}},{"path":"/pages/chat","meta":{},"window":{}},{"path":"/pages/my","meta":{},"window":{}},{"path":"/pages/login","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes}}}});