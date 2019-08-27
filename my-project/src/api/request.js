import axios from 'axios'
import qs from 'qs'

import { HTTP } from '@/store'

const service = axios.create({
  baseURL: HTTP,
  timeout: 5000
})
service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 添加请求拦截器
service.interceptors.request.use(function(config) {
  // 在发送请求之前做些什么
  return config
}, function(error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use(function(response) {
  // 对响应数据做点什么
  return response.data
}, function(error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default {
  default: service,
  get: (url, params) => service.get(`${url}${url.includes('?') ? '' : '?'}${qs.stringify(params)}`),
  post: (url, data) => service.post(url, data),
  put: (url, data) => service.put(url, data)
}

