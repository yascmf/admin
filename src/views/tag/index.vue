<template>
  <FastAdminIndex :labels="labels" :module="module" :castAttributes="castAttributes" :basePath="basePath"></FastAdminIndex>
</template>

<script>
import FastAdminIndex from '@/components/FastAdmin/index'
import config from './config.js'

export default {
  name: 'TagList',
  components: {
    FastAdminIndex
  },
  data() {
    return {
      module: 'tag',
      basePath: '/content-management/',
      labels: {
        name: '名称',
        description: '描述'
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
