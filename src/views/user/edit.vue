<template>
  <FastAdminEdit :module="module" :attributes="attributes" :basePath="basePath" :resourceId="resourceId" ref="editForm"></FastAdminEdit>
</template>

<script>
import FastAdminEdit from '@/components/FastAdmin/edit'
import { resourceIndex } from '@/api/rest'
import config from './config.js'

export default {
  name: 'ManagerEdit',
  components: {
    FastAdminEdit
  },
  data() {
    return {
      module: 'user',
      basePath: '/user-management/',
      resourceId: this.$route.params && this.$route.params.id,
      attributes: {}
    }
  },
  /*
  beforeUpdate() {
    console.log(this.$refs)
    if (this.$refs.form.roles.length === 0) {
      this.$refs.form.role = 4
    } else {
      this.$refs.form.role = this.$refs.form.roles[0]['id']
    }
  },
  */
  mounted() {
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
        // console.log(role)
        options.push({
          label: role.name + '[' + role.display_name + ']',
          value: role.id
        })
      })
      this.attributes.role.options = options
      console.log(this.$refs.editForm.$data.form.roles)
      if (this.$refs.editForm.$data.form.roles.length === 0) {
        this.$refs.editForm.$data.form.role = 4
      } else {
        this.$refs.editForm.$data.form.role = this.$refs.editForm.$data.form.roles[0]['id']
      }
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
