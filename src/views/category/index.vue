<template>
  <FastAdminIndex :labels="labels" :module="module"></FastAdminIndex>
</template>

<script>
import FastAdminIndex from '@/components/FastAdmin/index'

export default {
  name: 'CategoryList',
  components: {
    FastAdminIndex
  },
  data() {
    return {
      module: 'category',
      labels: {
        name: '名称',
        slug: '标识符',
        sort: '排序'
      }
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
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
