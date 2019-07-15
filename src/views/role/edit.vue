<template>
  <FastAdminEdit :module="module" :attributes="attributes" :basePath="basePath" :resourceId="resourceId" :addons.sync="addons" ref="editForm">
      <template slot="fieldsSlot">
        <el-form-item label="权限(*)">
          <el-transfer :titles="['可选权限', '已选权限']" v-model="addons.permissions" :data="permissionOptions" style="text-align: left; display: inline-block; line-height: 16px">
          </el-transfer>
        </el-form-item>
      </template>
  </FastAdminEdit>
</template>

<script>
import FastAdminEdit from '@/components/FastAdmin/edit'
import { resourceIndex } from '@/api/rest'
import config from './config.js'

export default {
  name: 'RoleEdit',
  components: {
    FastAdminEdit
  },
  data() {
    return {
      module: 'role',
      basePath: '/user-management/',
      resourceId: this.$route.params && this.$route.params.id,
      attributes: {},
      permissionOptions: [],
      addons: {
        permissions: []
      }
    }
  },
  mounted() {
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
