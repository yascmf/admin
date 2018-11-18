export default {
  module: 'role',
  basePath: '/user-management/',
  labels: {
    name: '角色名',
    display_name: '角色展示名'
  },
  castAttributes: {

  },
  form: {
    name: '',
    display_name: '',
    description: '',
    permissions: []
  },
  attributes: {
    name: {
      label: '角色名(*)',
      displayAs: 'input',
      type: 'text',
      placeholder: '请输入角色名'
    },
    display_name: {
      label: '角色展示名(*)',
      displayAs: 'input',
      type: 'text',
      placeholder: '请输入角色展示名'
    },
    description: {
      label: '角色描述',
      displayAs: 'input',
      type: 'text',
      placeholder: '请输入角色描述'
    }
  }
}
