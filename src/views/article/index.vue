<template>
  <FastAdminIndex :labels="labels" :module="module" :attributes="attributes" :basePath="basePath"></FastAdminIndex>
</template>

<script>
import FastAdminIndex from '@/components/FastAdmin/index'

export default {
  name: 'ArticleIndex',
  components: {
    FastAdminIndex
  },
  data() {
    return {
      module: 'article',
      basePath: '/content-management/',
      labels: {
        flag: '推荐位',
        slug: '标识符',
        cid: '分类'
      },
      attributes: {
        flag: function(row) {
          const flagArray = row.flag
          var displayStr = ''
          flagArray.forEach(function(value, key) {
            displayStr = displayStr + '<span class="el-tag" style="margin-right:5px">' + value + '</span>'
          })
          return displayStr
        },
        cid: function(row) {
          return row.category.name
        }
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
