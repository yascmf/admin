export default {
  dict: {
    create: '创建',
    store: '保存',
    update: '更新',
    delete: '删除'
  },
  naviCategories: {
    contentManagement: '内容管理',
    extraManagment: '杂项管理',
    userManagement: '用户管理',
    systemManagement: '系统管理'
  },
  routers: {
    contentManagement: {
      article: {
        title: '文章',
        path: 'article', //  如为 {上级对象名} 可省略
        can: '@article', // 如为 @{上级对象名} 可省略
        views: ['index', 'create', 'edit'] // 如使用到了 `index/create/edit` 三种 view 组件模板 可省略
      },
      category: {
        title: '分类'
      },
      tag: {
        title: '标签'
      }
    },
    extraManagment: {
      document: {
        title: '文档'
      }
    },
    userManagement: {
      me: {
        title: '个人资料',
        views: ['update']
      },
      user: {
        title: '管理员(用户)'
      },
      role: {
        title: '角色'
      },
      permission: {
        title: '权限',
        views: ['show']
      }
    },
    systemManagement: {
      option: {
        title: '系统配置',
        views: ['@/views/option/index'] // 自定义独有view
      },
      log: {
        title: '系统日志',
        views: ['index']
      }
    }
  }
}
