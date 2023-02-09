// 遍历 views 文件夹下的全部 vue 文件
const requireViews = require.context('@/views', true, /\w+\.vue$/)

const AppRouter = []

requireViews.keys().map((viewPath, index) => {
  const viewName = viewPath.split('.vue')[0].substr(2)

  AppRouter[viewName] = {
    path: viewName === 'index' ? '/' : `/${viewName}`,
    name: viewName,
    component: (resolve) => require(['@/views/' + viewName + '.vue'], resolve)
  }
})

export default AppRouter
