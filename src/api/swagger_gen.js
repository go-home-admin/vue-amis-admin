import http from '@/utils/request'

/**
 *  登陆
 * @param {{username?:string,password?:string}} data
 * @returns {Promise<{code:Number,data:{token:string},message:string}>}
 * @callback
 */
export async function AuthLoginPost(data) {
  return await http.post(`/auth/login`, data)
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
 *  我的菜单
 * @returns {Promise<{code:Number,data:{menus:{path:string,redirect:string,children:{}[],component:string,hidden:boolean,id:number,meta:,name:string,parent_id:number}[]},message:string}>}
 * @callback
 */
export async function AuthMenusGet() {
  return await http.get(`/auth/menus`)
}

/**
 *  管理用户的增删改查 登陆信息
 * @param {{token?:string}} data
 * @returns {Promise<{code:Number,data:{avatar:string,introduction:string,name:string,roles:string},message:string}>}
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
 * @returns {Promise<{code:Number,data:{start_time:string,tip:string,data:},message:string}>}
 * @callback
 */
export async function ApiDemoGet(data) {
  return await http.get(`/api/demo`, data)
}
