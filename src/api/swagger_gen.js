import http from '@/utils/request'

/**
 *  登陆
 * @param {{username?:string,password?:string}} data
 * @returns {Promise<{code:Number,data:{token:string},message:string}>}
 * @callback
  */
export async function AuthLoginPost(data) {
  return http.post(`/auth/login`, data)
}

/**
 *  退出登陆
 * @param {{username?:string,password?:string}} data
 * @returns {Promise<{code:Number,data:{token:string},message:string}>}
 * @callback
  */
export async function AuthLogoutPost(data) {
  return await http.post(`/auth/logout`, data)
}

/**
 *  测试
 * @returns {Promise<{code:Number,data:{body:,title:string},message:string}>}
 * @callback
  */
export async function AmisTabsGet() {
  return await http.get(`/amis/tabs`)
}

/**
 *  登陆信息
 * @param {{token?:string}} data
 * @returns {Promise<{code:Number,data:{name:string,avatar:string},message:string}>}
 * @callback
  */
export async function AuthInfoGet(data) {
  return await http.get(`/auth/info`, data)
}

/**
 *  首页
 * @returns {Promise<{code:Number,data:{start_time:string,tip:string},message:string}>}
 * @callback
  */
export async function Get() {
  return await http.get(`/`)
}

/**
 *  api demo
 * @param {{id?:number}} data
 * @returns {Promise<{code:Number,data:{tip:string,data:,start_time:string},message:string}>}
 * @callback
  */
export async function ApiDemoGet(data) {
  return await http.get(`/api/demo`, data)
}
