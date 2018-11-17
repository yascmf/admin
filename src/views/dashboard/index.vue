<template>
  <div class="dashboard-container">
    <div class="dashboard-text"><span>用户名: <code>{{username}}</code></span></div>
    <div class="dashboard-text"><span>角色: <code>{{role}}</code></span></div>
    <div class="dashboard-text"><span>当前用户所拥有的权限:</span>
      <div class="dashboard-can-container">
        <template v-for="can in cans">
          <div class="tag-can" v-if="can.indexOf('@') === 0"><el-tag type="success">{{can}}</el-tag></div>
          <div class="tag-can" v-else><el-tag type="info">{{can}}</el-tag></div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'dashboard',
  computed: {
    ...mapGetters([
      'username',
      'role',
      'cans'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 24px;
    line-height: 48px;
  }
  &-can-container {
    .el-tag {
      margin-right: 5px;
    }
    .tag-can {
      display: inline-block;
    }
  }
}
</style>
