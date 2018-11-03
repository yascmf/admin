<template>
  <div class="app-container">

    <div class="resource-operation">
      <el-row>
          <el-button icon='el-icon-plus' type="primary" @click.prevent.stop="tagNew">新增标签</el-button>
      </el-row>
    </div>

    <el-table :data="list" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="ID" width="80">
        <template slot-scope="scope">
          <span>{{scope.row.id}}</span>
        </template>
      </el-table-column>

      <el-table-column width="180px" align="center" label="创建时间">
        <template slot-scope="scope">
          <span>{{scope.row.created_at | parseTime('{y}-{m}-{d} {h}:{i}')}}</span>
        </template>
      </el-table-column>

      <el-table-column width="120px" align="center" label="名称">
        <template slot-scope="scope">
          <span>{{scope.row.name}}</span>
        </template>
      </el-table-column>

      <el-table-column width="120px" align="center" label="描述">
        <template slot-scope="scope">
          <span>{{scope.row.desc}}</span>
        </template>
      </el-table-column>

      <el-table-column width="100px" label="使用次数">
        <template slot-scope="scope">
          <span>{{scope.row.using_count}}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="操作" width="120">
        <template slot-scope="scope">
            <el-button type="primary" size="small" icon="el-icon-edit" @click="handleEditTag(scope.row.id)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="pagination-container">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="listQuery.page"
        :page-sizes="[10,20,30,50]" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>

    <el-dialog title="编辑栏" :visible.sync="dialogFormVisible">
      <el-form ref="form" :model="form" :rules="rules" label-width="120px">
        <el-form-item label="标签名称" prop="name">
          <el-input v-model="form.name" placeholder="请输入标签名称"></el-input>
        </el-form-item>
        <el-form-item label="标签描述" prop="desc">
          <el-input v-model="form.desc" placeholder="请输入标签描述，可留空"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :loading="loading" @click.native.prevent="handleUpdateTag">更新</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { fetchTagList, updateTag, getTag } from '@/api/content'
import { validateEmptyString } from '@/utils/validate'

export default {
  name: 'tagList',
  data() {
    const validateTagName = (rule, value, callback) => {
      if (validateEmptyString(value)) {
        callback(new Error('请输入正确的标签名，不允许空白字符出现'))
      } else {
        callback()
      }
    }
    return {
      list: null,
      total: 0,
      listLoading: true,
      dialogFormVisible: false,
      listQuery: {
        page: 1,
        limit: 10
      },
      loading: false,
      form: {
        id: 0,
        name: '',
        desc: ''
      },
      rules: {
        name: [{ required: true, trigger: 'blur', validator: validateTagName }]
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
  },
  created() {
    this.getList()
  },
  methods: {
    handleEditTag(id) {
      this.dialogFormVisible = true
      getTag(id).then(response => {
        this.form.id = id
        this.form.name = response.data.name
        this.form.desc = response.data.desc
      }).catch(() => {
        console.log('getTag(' + id + ') error')
      })
    },
    handleUpdateTag() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true
          updateTag(this.form.id, this.form.name, this.form.desc).then(response => {
            this.loading = false
            this.dialogFormVisible = false
            this.getList()
          }).catch(() => {
            this.loading = false
            this.$message('发生异常!')
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getList() {
      this.listLoading = true
      fetchTagList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total
        this.listLoading = false
      })
    },
    handleSizeChange(val) {
      this.listQuery.limit = val
      this.getList()
    },
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.getList()
    },
    tagNew() {
      this.$router.push({ path: '/Goods/tag/create' })
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
