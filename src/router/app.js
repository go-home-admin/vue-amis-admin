import Layout from '@/layout'

// 遍历 views 文件夹下的全部 vue 文件
const requireViews = require.context('@/views', true, /\w+\.vue$/)

const AppRouter = [
  {
    path: 'Layout',
    name: 'Layout',
    component: Layout
  }
]
// 过滤目录
const excludedPrefixes = ['dashboard/admin/', 'error-', 'login/', 'profile/components/']

requireViews.keys().map((viewPath, index) => {
  const viewName = viewPath.split('.vue')[0].substr(2)

  const excludedPrefix = excludedPrefixes.find(prefix => viewPath.startsWith(`./${prefix}`))
  if (excludedPrefix) return

  AppRouter[viewName] = {
    path: viewName === 'index' ? '/' : `/${viewName}`,
    name: viewName,
    component: (resolve) => require(['@/views/' + viewName + '.vue'], resolve)
  }
})

export default AppRouter
