export default {
  module: 'category',
  basePath: '/content-management/',
  labels: {
    name: '名称',
    slug: '标识符',
    sort: '排序'
  },
  castAttributes: {
  },
  form: {
    name: '',
    slug: '',
    sort: 0
  },
  attributes: {
    name: {
      label: '名称(*)',
      displayAs: 'input',
      type: 'text',
      placeholder: '请输入分类名称'
    },
    slug: {
      label: '标识符(*)',
      displayAs: 'input',
      type: 'text',
      placeholder: '请输入分类标识符'
    },
    sort: {
      label: '排序',
      displayAs: 'input',
      type: 'number',
      placeholder: '请输入分类排序数值(1-999之间)'
    }
  }
}
