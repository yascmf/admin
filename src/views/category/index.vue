<template>
  <FastAdminIndex :labels="labels" :module="module" :castAttributes="castAttributes" :basePath="basePath"></FastAdminIndex>
</template>

<script>
import FastAdminIndex from '@/components/FastAdmin/index'
import config from './config.js'

export default {
  name: 'CategoryList',
  components: {
    FastAdminIndex
  },
  data() {
    return {
      module: 'category',
      basePath: '/content-management/',
      labels: {
        name: '名称',
        slug: '标识符',
        sort: '排序'
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
