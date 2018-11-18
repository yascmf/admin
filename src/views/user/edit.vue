<template>
  <FastAdminEdit :module="module" :attributes="attributes" :basePath="basePath" :resourceId="resourceId" ref="editForm" :addons="addons">
    <template slot="fieldsSlot">
      <el-form-item label="角色">
        <el-select v-model="addons.role" placeholder="请选择角色">
          <el-option v-for="option in roleOptions" :key="option.label" :label="option.label" :value="option.value"></el-option>
        </el-select>
      </el-form-item>
    </template>
  </FastAdminEdit>
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
      attributes: {},
      roleOptions: [
        {
          label: '演示',
          value: '4'
        }
      ],
      addons: {
        role: 4
      }
    }
  },
  mounted() {
    delete config.attributes.role
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
      // this.attributes.role.options = options
      this.roleOptions = options
      console.log(this.$refs.editForm.$data.form.roles)
      if (this.$refs.editForm.$data.form.roles.length === 0) {
        this.addons.role = 4
      } else {
        this.addons.role = this.$refs.editForm.$data.form.roles[0]['id']
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
