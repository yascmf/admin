<template>
  <FastAdminIndex :labels="labels" :module="module"></FastAdminIndex>
</template>

<script>
import FastAdminIndex from '@/components/FastAdmin/index'

export default {
  name: 'ArticleList',
  components: {
    FastAdminIndex
  },
  data() {
    return {
      module: 'article',
      labels: {
        flag: '推荐位',
        slug: '标识符',
        cid: '分类'
      },
      attributes: {
        flag: {
          displayAs: 'el-tag',
          cast: function (flag) {
            return ''
          }
        },
        cid: {
          displayAs: 'text',
          cast: "['category']['name']"
        },
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
