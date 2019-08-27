// 正则验证姓名
export const isUserName = str => {
  const myreg = str.replace(/[\u4e00-\u9fa5]/g, '');
  return !((str.length - myreg.length) * 2 + myreg.length <= 12)
}

// 正则验证手机号
export const isPoneAvailable = str => /^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(str)

// 正则验证身份证号
export const isShenFenZheng = num => {
  const myreg = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i
  return myreg.test(num)
}

//时间格式化
export const dateFilter = (time, type) => {
  const date = new Date(time)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const second = date.getSeconds()
  const format = value => value >= 10 ? value : '0' + value
  let result

  switch (type) {
    case 0: // 01-05 月-日
      result = `${format(month)}-${format(day)}`;
      break;
    case 1: // 11:12 时:分
      result = `${format(hours)}:${format(minutes)}`;
      break;
    case 2: // 2015-01-05 年-月-日
      result = `${year}-${format(month)}-${format(day)}`;
      break;
    case 3: // 2015-01-05 11:12 年-月-日 时:分
      result = `${year}-${format(month)}-${format(day)}  ${format(hours)}:${format(minutes)}`;
      break;
    case 4: // 2015-01-05 11:12:06 年-月-日 时:分:秒
      result = `${year}-${format(month)}-${format(day)}  ${format(hours)}:${format(minutes)}:${format(second)}`;
      break;
    case 5: // 2015年01月05日
      result = `${year}年${month}月${day}日`;
      break;
    case 6: // 2015-01-05T11:12 年-月-日T时:分
      result = `${year}-${format(month)}-${format(day)}T${format(hours)}:${format(minutes)}`;
      break;
    case 7:
      result = `${year}年${month}月${day}日`
      break;
    case 8: // 1小时前
      const currentDate = new Date()
      const tempTime = currentDate.getTime()
      const timeGap = tempTime - time
      const minuteGap = 60 * 1000
      const hourGap = 60 * minuteGap
      const dayGap = 12 * hourGap
      const fullGap = 15 * dayGap
      if (minuteGap > timeGap) {
        result = '刚刚';
      } else if (hourGap > timeGap) {
        result = Math.floor(timeGap / minuteGap) + '分钟前';
      } else if (dayGap > timeGap) {
        result = Math.floor(timeGap / hourGap) + '小时前';
      } else if (fullGap > timeGap) {
        result = Math.floor(timeGap / dayGap) + '天前';
      } else {
        result = `${year}-${format(month)}-${format(day)}  ${format(hours)}:${format(minutes)}`;
      }
      break;
    default:
      break;
  }
  return result;
}

/** 如果url是http 就转为https
 *  url == https-url ? url : https-url
 */
export const transformationHttp = url => url.includes('https') ? url : url.replace('http', 'https');

// 序列化参数 {key: value} -> key=value&key=value
export const serializeParams = data => {
  let str = ''

  for (let i in data) {
    str += `${i}=${data[i]}&`
  }

  return str.slice(0, str.length - 1);
};

// 防抖函数
export const debounceFn = (fn, delay) => {
  if (fn.timeid) {
    clearTimeout(fn.timeid)
  }

  fn.timeid = setTimeout(function () {
    fn()
  }, delay);
}

export function findIndex(ary, fn) {
  if (ary.findIndex) {
    return ary.findIndex(fn)
  }
  /* istanbul ignore next */
  let index = -1
  /* istanbul ignore next */
  ary.some(function (item, i, ary) {
    const ret = fn.call(this, item, i, ary)
    if (ret) {
      index = i
      return ret
    }
  })
  /* istanbul ignore next */
  return index
}

export function judgeTypeFnCreator(type) {
  const toString = Object.prototype.toString
  return function isType(o) {
    return toString.call(o) === `[object ${type}]`
  }
}

export const isFunc = judgeTypeFnCreator('Function')
export const isUndef = judgeTypeFnCreator('Undefined')
export const isArray = judgeTypeFnCreator('Array')
export const isString = judgeTypeFnCreator('String')
export const isObject = judgeTypeFnCreator('Object')
export const isNumber = judgeTypeFnCreator('Number')

export const getUrlParams = () => {
  const q = {}
  window.location.search.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => q[k] = v)
  return q
}

// 精确到小数点几位
export const round = (num, decimal) => Math.round(num * 10 ** decimal) / 10 ** decimal

// 引入腾讯地图
export const importQQMap = (callback, key = 'TUKBZ-QVVKX-NIM4F-TATXU-AQHO7-5GBKS') => {
  const oHead = document.getElementsByTagName('head')[0]
  const oScript = document.createElement('script')
  oScript.type = 'text/javascript'
  oScript.src = `https://map.qq.com/api/js?v=2.exp&key=${key}`
  oHead.appendChild(oScript)
  oScript.onload = callback
}

// img + width="100%" height="auto"
export const amendPictureProperty = (data, width) => {
  const m = data.replace(/<img[^>]*\/>/g, s => {
    if (['width', 'height'].some(i => s.includes(i))) {
      s = s.replace(/width="\d{1,5}"/g, 'width="100%"').replace(/height="\d{1,5}"/g, 'height="auto"')
    } else {
      s = s.replace(/<img[^>]/, () => '<img width="100%" height="auto" ')
    }
    return s
  })
  if (width) {
    return m.replace(/width: \d{1,5}px/g, c => c.replace(/\d{1,5}px/g, d => parseInt(d) > width ? '100%' : d))
  }

  return m
}

// 输入框隐藏 页面不能回弹
export const kickBack = () => {
  setTimeout(() => {
    window.scrollTo(0, document.body.scrollTop + 1)
    document.body.scrollTop >= 1 && window.scrollTo(0, document.body.scrollTop - 1)
  }, 10)
}

// 判断是ios设备还是安卓
export const isEquipment = () => {
  const u = navigator.userAgent
  // const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 //android终端或者uc浏览器
  const isiOS = Boolean(u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) //ios终端
  return isiOS ? 'ios' : 'android'
}