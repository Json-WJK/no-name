import request from './request'

// 注册
export const register = data => request.post('/user/register', data)

// 登录
export const login = data => request.post('/user/login', data)