<template>
  <FastAdminCreate :module="module" :attributes="attributes" :form="form" :basePath="basePath">
    <template slot="fieldsSlot">
    </template>
  </FastAdminCreate>

</template>

<script>
import FastAdminCreate from '@/components/FastAdmin/create'
import config from './config.js'

export default {
  name: 'TagCreate',
  components: {
    FastAdminCreate
  },
  data() {
    return {
      module: 'tag',
      basePath: '/content-management/',
      form: {
        name: '',
        description: ''
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
