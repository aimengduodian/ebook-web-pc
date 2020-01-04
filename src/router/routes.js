// 定义路由
const routes = [
  { path: '/', redirect: '/dashboard' },
  {
    path: '/',
    component: () => import('../components/common/Home.vue'),
    meta: { title: '自述文件' },
    children: [
      {
        path: '/dashboard',
        component: () => import('../components/page/Dashboard.vue'),
        meta: { title: '仪表盘' }
      },
      {
        path: '/books',
        component: () => import('../components/page/ebook/Books.vue'),
        meta: { title: '图书' }
      },
      {
        path: '/electronics',
        component: () => import('../components/page/ebook/Electronics.vue'),
        meta: { title: '电子' }
      },
      {
        path: '/others',
        component: () => import('../components/page/ebook/Others.vue'),
        meta: { title: '其他' }
      },
      {
        path: '/tutoring',
        component: () => import('../components/page/ebook/Tutoring.vue'),
        meta: { title: '辅导' }
      },
      {
        path: '/productWarning',
        component: () => import('../components/page/ebook/ProductWarning.vue'),
        meta: { title: '产品预警' }
      },
      {
        path: '/userWarning',
        component: () => import('../components/page/ebook/UsersWarning.vue'),
        meta: { title: '用户预警' }
      },
      {
        path: '/systemWarning',
        component: () => import('../components/page/ebook/ProductWarning.vue'),
        meta: { title: '系统预警' }
      },
      {
        path: '/table',
        component: () => import('../components/page/demo/BaseTable.vue'),
        meta: { title: '后台用户管理' }
      },
      {
        path: '/icon',
        component: () => import('../components/page/demo/Icon.vue'),
        meta: { title: '自定义图标' }
      },
      {
        path: '/tabs',
        component: () => import('../components/page/demo/Tabs.vue'),
        meta: { title: 'tab选项卡' }
      },
      {
        path: '/form',
        component: () => import('../components/page/demo/BaseForm.vue'),
        meta: { title: '基本表单' }
      },
      {
        path: '/editor',
        component: () => import('../components/page/demo/VueEditor.vue'),
        meta: { title: '富文本编辑器' }
      },
      {
        path: '/markdown',
        component: () => import('../components/page/demo/Markdown.vue'),
        meta: { title: 'markdown编辑器' }
      },
      {
        path: '/upload',
        component: () => import('../components/page/demo/Upload.vue'),
        meta: { title: '文件上传' }
      },
      {
        path: '/charts',
        component: () => import('../components/page/demo/BaseCharts.vue'),
        meta: { title: 'schart图表' }
      },
      {
        path: '/drag',
        component: () => import('../components/page/demo/DragList.vue'),
        meta: { title: '拖拽列表' }
      },
      {
        path: '/dialog',
        component: () => import('../components/page/demo/DragDialog.vue'),
        meta: { title: '拖拽弹框' }
      },
      {
        path: '/i18n',
        component: () => import('../components/page/demo/I18n.vue'),
        meta: { title: '国际化' }
      },
      {
        path: '/permission',
        component: () => import('../components/page/demo/Permission.vue'),
        meta: { title: '权限测试', permission: true }
      },
      {
        path: '/404',
        component: () => import('../components/page/404.vue'),
        meta: { title: '404' }
      },
      {
        path: '/403',
        component: () => import('../components/page/403.vue'),
        meta: { title: '403' }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../components/page/Login.vue'),
    meta: { title: '登录' }
  },
  { path: '*', redirect: '/404' }
]

export default routes
