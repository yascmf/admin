<template>
  <div>
    <FastAdminCreate :module="module" :attributes="attributes" :form="form" :basePath="basePath">
      <template slot="fieldsSlot">
        <el-form-item label="权限(*)">
          <el-transfer style="text-align: left; display: inline-block;" :titles="['可选权限', '已选权限']" v-model="form.permissions" :data="permissionOptions">
          </el-transfer>
        </el-form-item>
      </template>
    </FastAdminCreate>
  </div>
</template>

<script>
import FastAdminCreate from '@/components/FastAdmin/create'
import { resourceIndex } from '@/api/rest'
import config from './config.js'

export default {
  name: 'RoleCreate',
  components: {
    FastAdminCreate
  },
  data() {
    return {
      module: 'role',
      basePath: '/user-management/',
      form: {
        name: '',
        display_name: '',
        description: '',
        permissions: []
      },
      permissionOptions: [],
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
    resourceIndex('permission', query).then(response => {
      console.log(response)
      const permissions = response.items
      const options = []
      permissions.forEach((permission, index) => {
        options.push({
          label: permission.name + '[' + permission.display_name + ']',
          key: permission.id
        })
      })
      this.permissionOptions = options
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
<style>
.el-transfer-panel {
  width: 350px;
}
</style>
