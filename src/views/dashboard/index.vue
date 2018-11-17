<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name:{{username}}</div>
    <div class="dashboard-text">role:{{role}}</span></div>
    <div class="dashboard-text">cans:<div class="dashboard-can-container"><el-tag v-for='can in cans' :key='can'>{{can}}</el-tag></div></div>
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
    font-size: 30px;
    line-height: 46px;
  }
  &-can-container {
    .el-tag {
      margin-right: 5px;
    }
  }
}
</style>
