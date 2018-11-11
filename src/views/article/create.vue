<template>
  <div>
    <FastAdminCreate :module="module" :attributes="attributes" :form="form" :basePath="basePath"></FastAdminCreate>
  </div>
</template>

<script>
import FastAdminCreate from '@/components/FastAdmin/create'
import config from './config.js'

const content = `
> writing markdown by [Simplemde](https://github.com/sparksuite/simplemde-markdown-editor) .
`

export default {
  name: 'ArticleCreate',
  components: {
    FastAdminCreate
  },
  data() {
    return {
      module: 'article',
      basePath: '/content-management/',
      form: {
        title: '',
        slug: '',
        cid: null,
        flag: [],
        is_top: 0,
        description: '',
        content: content
      },
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
