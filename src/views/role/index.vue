<template>
  <FastAdminIndex :labels="labels" :module="module" :castAttributes="castAttributes" :basePath="basePath"></FastAdminIndex>
</template>

<script>
import FastAdminIndex from '@/components/FastAdmin/index'
import config from './config.js'

export default {
  name: 'RoleIndex',
  components: {
    FastAdminIndex
  },
  data() {
    return {
      module: 'role',
      basePath: '/user-management/',
      labels: {
        name: '角色名',
        display_name: '角色展示名'
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
