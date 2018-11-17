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
    display_name: ''
  },
  attributes: {
    title: {
      label: '标题(*)',
      displayAs: 'input',
      type: 'text',
      placeholder: '请输入文章标题'
    },
    slug: {
      label: '标识符(*)',
      displayAs: 'input',
      type: 'text',
      placeholder: '请输入文章标识符'
    },
    cid: {
      label: '分类(*)',
      displayAs: 'select',
      options: [
        {
          label: '默认',
          value: '1'
        }
      ],
      placeholder: '请选择文章分类'
    },
    flag: {
      label: '推荐位',
      displayAs: 'checkbox',
      options: [
        {
          label: 'l',
          value: '链接'
        },
        {
          label: 'f',
          value: '幻灯'
        },
        {
          label: 's',
          value: '滚动'
        },
        {
          label: 'h',
          value: '热门'
        },
        {
          label: 't',
          value: '置顶'
        }
      ]
    },
    /*
    is_top: {
      label: '是否置顶',
      displayAs: 'radio',
      options: [
        {
          label: 0,
          value: '否'
        },
        {
          label: 1,
          value: '是'
        }
      ],
      placeholder: '请选择文章是否置顶'
    },
    */
    description: {
      label: '摘要(*)',
      displayAs: 'input',
      type: 'textarea',
      placeholder: '请输入文章摘要'
    },
    /*
    content: {
      label: '正文(*)',
      displayAs: 'markdownEditor',
      poweredBy: 'Simplemde',
      placeholder: '请输入文章正文'
    }
    */
    content: {
      label: '正文(*)',
      displayAs: 'richEditor',
      poweredBy: 'Tinymce',
      placeholder: '请输入文章正文'
    }
  }
}
