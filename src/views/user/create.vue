<template>
  <div>
    <FastAdminCreate :module="module" :attributes="attributes" :form="form" :basePath="basePath"></FastAdminCreate>
  </div>
</template>

<script>
import FastAdminCreate from '@/components/FastAdmin/create'
import { resourceIndex } from '@/api/rest'
import config from './config.js'

export default {
  name: 'ManagerCreate',
  components: {
    FastAdminCreate
  },
  data() {
    return {
      module: 'user',
      basePath: '/user-management/',
      form: {
        username: '',
        email: '',
        role: 4,
        password: '',
        password_confirmation: '',
        is_locked: 0,
        realname: '',
        phone: ''
      },
      attributes: {}
    }
  },
  mounted() {
  },
  created() {
    this.attributes = config.attributes
    const query = {
      page: 1,
      page_size: 150
    }
    resourceIndex('role', query).then(response => {
      console.log(response)
      const roles = response.items
      const options = []
      roles.forEach((role, index) => {
        console.log(role)
        options.push({
          label: role.name + '[' + role.display_name + ']',
          value: role.id
        })
      })
      this.attributes.role.options = options
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
