import request from './request'

// 注册
export const register = data => request.post('/user/register', data)

// 登录
export const login = data => request.post('/user/login', data)

// 基本流程 设置用户头像与昵称
export const basicSetup = data => request.post('/user/basicSetup', data)

// 基本流程 设置用户头像与昵称
export const getUserInfo = data => request.post('/user/getUserInfo', data)

// 修改用户信息
export const setUserInfo = data => request.post('/user/setUserInfo', data)