<template>
  <div>
    <FastAdminCreate :module="module" :attributes="attributes" :form="form" :basePath="basePath"></FastAdminCreate>
  </div>
</template>

<script>
import FastAdminCreate from '@/components/FastAdmin/create'
import { resourceIndex } from '@/api/rest'
import config from './config.js'
import uuid from 'uuid'

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
        description: '',
        content: content
      },
      attributes: {}
    }
  },
  mounted() {
  },
  created() {
    this.form.slug = uuid.v4()
    this.attributes = config.attributes
    const query = {
      page: 1,
      page_size: 9999
    }
    resourceIndex('category', query).then(response => {
      console.log(response)
      const categories = response.items
      const options = []
      categories.forEach((category, index) => {
        console.log(category)
        options.push({
          label: category.name,
          value: category.id
        })
      })
      this.attributes.cid.options = options
      console.log(options)
      console.log(this.attributes)
    })
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
