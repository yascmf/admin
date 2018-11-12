export default {
  module: 'tag',
  basePath: '/content-management/',
  labels: {
    name: '名称',
    description: '描述'
  },
  castAttributes: {
  },
  form: {
    name: '',
    description: ''
  },
  attributes: {
    name: {
      label: '名称(*)',
      displayAs: 'input',
      type: 'text',
      placeholder: '请输入标签名称'
    },
    description: {
      label: '描述',
      displayAs: 'input',
      type: 'textarea',
      placeholder: '请输入标签描述'
    }
  }
}
