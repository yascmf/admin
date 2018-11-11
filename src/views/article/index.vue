<template>
  <FastAdminIndex :labels="labels" :module="module" :castAttributes="castAttributes" :basePath="basePath"></FastAdminIndex>
</template>

<script>
import FastAdminIndex from '@/components/FastAdmin/index'
import config from './config.js'

export default {
  name: 'ArticleIndex',
  components: {
    FastAdminIndex
  },
  data() {
    return {
      module: 'article',
      basePath: '/content-management/',
      labels: {
        flag: '推荐位',
        slug: '标识符',
        cid: '分类'
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
