<template>
  <FastAdminEdit :module="module" :attributes="attributes" :basePath="basePath" :resourceId="resourceId"></FastAdminEdit>
</template>

<script>
import FastAdminEdit from '@/components/FastAdmin/edit'
import config from './config.js'

export default {
  name: 'CategoryEdit',
  components: {
    FastAdminEdit
  },
  data() {
    return {
      module: 'category',
      basePath: '/content-management/',
      resourceId: this.$route.params && this.$route.params.id,
      attributes: {}
    }
  },
  mounted() {
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
