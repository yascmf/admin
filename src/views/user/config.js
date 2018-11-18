export default {
  module: 'user',
  basePath: '/user-management/',
  labels: {
    username: '登录名',
    nickname: '昵称',
    email: '邮箱',
    role: '角色',
    is_locked: '状态'
  },
  castAttributes: {
    nickname: function(row) {
      return row.nickname || '-'
    },
    role: function(row) {
      if (row.roles.length === 0) {
        return '-'
      } else {
        return row.roles[0]['name']
      }
    },
    is_locked: function(row) {
      return (row.is_locked === 1) ? '<span class="el-tag el-tag--danger">已锁定</span>' : '<span class="el-tag el-tag--success">正常</span>'
    }
  },
  form: {
    username: '',
    email: '',
    role: 4,
    password: '',
    password_confirmation: '',
    is_locked: 0,
    realname: '',
    phone: ''
  },
  attributes: {
    username: {
      label: '登录用户名(*)',
      displayAs: 'input',
      type: 'text',
      placeholder: '请输入用户名'
    },
    email: {
      label: '电子邮箱(*)',
      displayAs: 'input',
      type: 'text',
      placeholder: '请输入电子邮箱'
    },
    role: {
      label: '角色(*)',
      displayAs: 'select',
      options: [
        {
          label: '演示',
          value: '4'
        }
      ],
      placeholder: '请选择角色'
    },
    password: {
      label: '登录密码(*)',
      displayAs: 'input',
      type: 'text',
      placeholder: '请输入登录密码'
    },
    password_confirmation: {
      label: '确认登录密码(*)',
      displayAs: 'input',
      type: 'text',
      placeholder: '请再次确认登录密码'
    },
    is_locked: {
      label: '状态',
      displayAs: 'radio',
      options: [
        {
          label: 0,
          value: '正常'
        },
        {
          label: 1,
          value: '锁定'
        }
      ],
      placeholder: '请选择状态'
    },
    nickname: {
      label: '昵称',
      displayAs: 'input',
      type: 'text',
      placeholder: '请输入昵称'
    },
    realname: {
      label: '真实姓名',
      displayAs: 'input',
      type: 'text',
      placeholder: '请输入真实姓名'
    },
    phone: {
      label: '手机号码',
      displayAs: 'input',
      type: 'text',
      placeholder: '请输入手机号码'
    }
  }
}
