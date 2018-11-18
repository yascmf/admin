<template>
  <div class="app-container">
    <div class="resource-operation" v-if="cans.indexOf(module + '-write') >= 0">
      <el-row>
        <el-button icon='el-icon-plus' type="primary" @click.prevent.stop="resourceCreateRouter">创建</el-button>
      </el-row>
    </div>
    <el-table :data="list" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="ID" width="100px">
        <template slot-scope="scope">
          <span>{{scope.row.id}}</span>
        </template>
      </el-table-column>
      <el-table-column v-for="(value, key) in labels" :key="key" align="center" :label="value" width="150px">
        <template slot-scope="scope">
          <template v-if="castAttributes.hasOwnProperty(key)">
            <div v-html="castAttributes[key](scope.row)" style="display:inline;"></div>
          </template>
          <template slot-scope="scope" v-else>
            <span>{{scope.row[key]}}</span>
          </template>
        </template>
      </el-table-column>
      <el-table-column width="180px" align="center" label="创建时间">
        <template slot-scope="scope">
          <span>{{scope.row.created_at | parseTime('{y}-{m}-{d} {h}:{i}')}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" width="120">
        <template slot-scope="scope">
          <router-link v-if="cans.indexOf(module + '-write') >=0 " :to="basePath + module + '/' + scope.row.id + '/edit'">
            <el-button type="primary" size="small" icon="el-icon-edit">编辑</el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>

    <div class="pagination-container">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="listQuery.page"
        :page-sizes="[10,20,30,50]" :page-size="listQuery.page_size" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>

  </div>
</template>

<script>
import { resourceIndex } from '@/api/rest'
import { mapGetters } from 'vuex'

export default {
  name: 'FastAdminIndex',
  props: {
    module: String,
    basePath: String,
    labels: Object,
    castAttributes: Object
  },
  computed: {
    ...mapGetters([
      'cans'
    ])
  },
  data() {
    return {
      list: [],
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        page_size: 15
      }
    }
  },
  created() {
    console.log(this.labels)
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      resourceIndex(this.module, this.listQuery).then(response => {
        console.log(response)
        this.list = response.items
        this.total = response.total
        this.listLoading = false
      })
    },
    handleSizeChange(val) {
      this.listQuery.page_size = val
      this.getList()
    },
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.getList()
    },
    resourceCreateRouter() {
      this.$router.push({ path: this.basePath + this.module + '/create' })
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
