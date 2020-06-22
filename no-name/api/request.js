import { HTTP } from '@/store'
const request = {
  post: (url, data) => new Promise(resolve => uni.request({
    url: HTTP + url, //仅为示例，并非真实接口地址。
    data,
    header: {
      'content-type': 'application/json'
    },
    method: 'POST',
    timeout: 10000,
    success: res => {
      console.log('走了')
      resolve(res.data)
    }
  })),
  get: (url, data) => new Promise(resolve => uni.request({
    url: HTTP + url, //仅为示例，并非真实接口地址。
    data,
    header: {
      'content-type': 'application/json'
    },
    method: 'get',
    timeout: 10000,
    success: res => {
      console.log('走了')
      resolve(res.data)
    }
  }))
}

export default request

