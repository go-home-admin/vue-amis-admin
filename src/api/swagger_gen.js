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
 * @returns {Promise<{code:Number,data:{menus:{meta:,parent_id:number,redirect:string,children:{}[],component:string,hidden:boolean,id:number,name:string,path:string}[]},message:string}>}
 * @callback
 */
export async function AuthMenusGet() {
  return await http.get(`/auth/menus`)
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
 * @returns {Promise<{code:Number,data:{name:string,roles:string,avatar:string,introduction:string},message:string}>}
 * @callback
 */
export async function AuthInfoGet(data) {
  return await http.get(`/auth/info`, data)
}

/**
 *  菜单列表
 * @param {{username?:string,password?:string}} data
 * @returns {Promise<{code:Number,data:{rows:{affix:number,enable:number,id:number,hidden:number,title:string,path:string,auth:string,children:{}[],icon:string,redirect:string,sort:number,component:string,name:string,parent_id:{}[]}[]},message:string}>}
 * @callback
 */
export async function MenuGet(data) {
  return await http.get(`/menu`, data)
}

/**
 *  创建菜单
 * @returns {Promise<{code:Number,data:{},message:string}>}
 * @callback
 */
export async function MenuPost() {
  return await http.post(`/menu`)
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
 * @returns {Promise<{code:Number,data:{data:,start_time:string,tip:string},message:string}>}
 * @callback
 */
export async function ApiDemoGet(data) {
  return await http.get(`/api/demo`, data)
}
