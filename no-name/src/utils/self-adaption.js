(function (docs, win) {
  var docEls = docs.documentElement,
    resizeEvts = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalcs = function () {
      //getBoundingClientRect()这个方法返回一个矩形对象
      console.log(docEls.getBoundingClientRect().width, '查看屏幕宽度')
      window.rem = docEls.getBoundingClientRect().width / 375 * 100
      docEls.style.fontSize = window.rem + 'px'
    }
  recalcs()
  if (!docs.addEventListener) return;
  win.addEventListener(resizeEvts, recalcs, false)
})(document, window)
