// 正则验证姓名
export const isUserName = str => {
  const myreg = str.replace(/[\u4e00-\u9fa5]/g, '');
  return !((str.length - myreg.length) * 2 + myreg.length <= 12)
}

// 正则验证手机号
export const isPoneAvailable = str => /^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(str)