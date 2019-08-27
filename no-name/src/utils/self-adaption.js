// (function (docs, win) {
//   var docEls = docs.documentElement,
//     resizeEvts = 'orientationchange' in window ? 'orientationchange' : 'resize',
//     recalcs = function () {
//       //getBoundingClientRect()这个方法返回一个矩形对象
//       console.log(docEls.getBoundingClientRect().width, '查看屏幕宽度')
//       window.rem = docEls.getBoundingClientRect().width / 375 * 100
//       docEls.style.fontSize = window.rem + 'px'
//     }
//   recalcs()
//   if (!docs.addEventListener) return;
//   win.addEventListener(resizeEvts, recalcs, false)
// })(document, window)
(function (window, document) {

  function resize() {
    var ww = window.innerWidth;
    if (ww > window.screen.width) {
      window.requestAnimationFrame(resize);
    }
    else {
      if (ww > 750) ww = 750;
      // 下面代码按照比例为100px = 1rem，此处一定要同pxToRem的转换比例
      document.documentElement.style.fontSize = ww * 100 / 750 + 'px';
    }
  }

  if (document.readyState !== 'loading') {
    resize();
  } else {
    document.addEventListener('DOMContentLoaded', resize);
  }

  window.addEventListener('resize', resize);
  alert('哈哈')

})(window, document);
