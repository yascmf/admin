<template>
  <FastAdminEdit :module="module" :attributes="attributes" :basePath="basePath" :resourceId="resourceId"></FastAdminEdit>
</template>

<script>
import FastAdminEdit from '@/components/FastAdmin/edit'
import config from './config.js'

export default {
  name: 'ArticleEdit',
  components: {
    FastAdminEdit
  },
  data() {
    return {
      module: 'article',
      basePath: '',
      resourceId: this.$route.params && this.$route.params.id,
      attributes: {}
    }
  },
  mounted() {
    this.basePath = config.basePath
    this.attributes = config.attributes
  },
  methods: {
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
