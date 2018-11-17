<template>
  <FastAdminEdit :module="module" :attributes="attributes" :basePath="basePath" :resourceId="resourceId"></FastAdminEdit>
</template>

<script>
import FastAdminEdit from '@/components/FastAdmin/edit'
import { resourceIndex } from '@/api/rest'
import config from './config.js'

export default {
  name: 'ArticleEdit',
  components: {
    FastAdminEdit
  },
  data() {
    return {
      module: 'article',
      basePath: '/content-management/',
      resourceId: this.$route.params && this.$route.params.id,
      attributes: {}
    }
  },
  mounted() {
    this.attributes = config.attributes
  },
  created() {
    this.attributes = config.attributes
    const query = {
      page: 1,
      page_size: 150
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
