<template>
  <FastAdminIndex :labels="labels" :module="module" :castAttributes="castAttributes" :basePath="basePath"></FastAdminIndex>
</template>

<script>
import FastAdminIndex from '@/components/FastAdmin/index'
import config from './config.js'

export default {
  name: 'ManagerIndex',
  components: {
    FastAdminIndex
  },
  data() {
    return {
      module: 'user',
      basePath: '/user-management/',
      labels: {
        username: '登录名',
        nickname: '昵称',
        email: '邮箱',
        role: '角色',
        is_locked: '状态'
      },
      castAttributes: config.castAttributes
    }
  }
}
</script>

<style scoped>
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>
