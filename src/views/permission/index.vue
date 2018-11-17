<template>
  <div class="app-container">
    <el-alert
      title="特别说明"
      description="权限影响系统安全与稳定，错误或不合理的修改可能会影响系统业务与逻辑，故在此屏蔽掉权限 增、删、改 功能。
后续如果增加新的权限或者删改老的权限，可以使用SQL脚本来实现。"
      type="warning">
    </el-alert>

    <div class="permission-container">
      <template v-for="permission in permissions">
        <div class="tag-permission" v-if="permission.name.indexOf('@') === 0"><el-tag type="success">{{permission.name}}[{{permission.display_name}}]</el-tag></div>
        <div class="tag-permission" v-else><el-tag type="info">{{permission.name}}[{{permission.display_name}}]</el-tag></div>
      </template>
    </div>

  </div>
</template>

<script>
import { resourceIndex } from '@/api/rest'

export default {
  name: 'PermissionIndex',
  data() {
    return {
      module: 'permission',
      basePath: '/user-management/',
      permissions: []
    }
  },
  created() {
    const query = {
      page: 1,
      page_size: 150
    }
    resourceIndex('permission', query).then(response => {
      console.log(response)
      this.permissions = response.items
    })
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.permission {
  &-container {
    margin: 30px;
    .tag-permission {
      float: left;
      margin: 5px;
      display: inline;
    }
  }
  &-text {
    font-size: 16px;
    line-height: 40px;
  }
  .el-tag {
    margin-bottom: 5px;
  }


}
</style>
