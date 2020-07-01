import { HTTP } from '@/store'
// 正则验证姓名
export const isUserName = str => {
  const myreg = str.replace(/[\u4e00-\u9fa5]/g, '');
  return !((str.length - myreg.length) * 2 + myreg.length <= 12)
}

// 正则验证手机号
export const isPoneAvailable = str => /^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(str)

// 图片预览
export const previewImage = (urls, current, isInitial) => {
  // urls 图片数组  index 当前显示图片下标 isInitial 是否需要舒适化 -- 拼接域名
  if (isInitial) {
    urls = urls.map(item => {
      return item = HTTP + item
    });
  }
  uni.previewImage({
    current,
    urls,
    longPressActions: {
      itemList: ['发送给朋友', '保存图片', '收藏'],
      success: function (data) {
        console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
      },
      fail: function (err) {
        console.log(err.errMsg);
      }
    }
  });
}