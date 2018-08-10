<template>
  <div class="app-container">
    <el-form ref="form" :model="form" :rules="rules" label-width="120px" @submit.native.prevent>
      <el-form-item label="货品名称" prop="name">
        <el-input v-model="form.name" placeholder="请输入货品名称"></el-input>
      </el-form-item>
      <el-form-item label="货品描述" prop="desc">
        <el-input v-model="form.desc" placeholder="请输入货品描述"></el-input>
      </el-form-item>
      <el-form-item label="货品资源地址" prop="src">
        <el-input v-model="form.desc" placeholder="请输入货品资源地址，可留空"></el-input>
      </el-form-item>
      <el-form-item label="资源类型" prop="type">
        <el-radio-group v-model="form.type">
          <el-radio label="1">图片资源</el-radio>
          <el-radio label="2">音频资源</el-radio>
          <el-radio label="3">文本资源</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="货品分类" prop="category">
        <el-select v-model="form.category" placeholder="请选择分类">
          <el-option label="分类一" value="1"></el-option>
          <el-option label="分类二" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="货品标签" prop="tags">
        <el-select
          v-model="form.tags"
          multiple
          :multiple-limit="5"
          filterable
          remote
          :remote-method="remoteMethod"
          :loading="loading"
          default-first-option
          placeholder="请搜索货品标签">
          <el-option
            v-for="item in stags"
            :key="item.id"
            :label="item.label"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="正文">
        <el-input type="textarea" v-model="form.content"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="loading" @click.native.prevent="handleCreateGood">创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { createTag } from '@/api/goods'
import { validateEmptyString } from '@/utils/validate'

export default {
  name: 'goodCreate',
  data() {
    const validateTagName = (rule, value, callback) => {
      if (validateEmptyString(value)) {
        callback(new Error('请输入正确货品名称，不允许空白字符出现'))
      } else {
        callback()
      }
    }
    return {
      loading: false,
      limit: 10,
      tags: [
        {
          id: '1',
          label: '玄幻'
        },
        {
          id: '2',
          label: '言情'
        }
      ],
      stags: [],
      list: [],
      form: {
        name: '',
        desc: '',
        type: '2',
        tags: []
      },
      rules: {
        name: [{ required: true, trigger: 'blur', validator: validateTagName }]
      }
    }
  },
  mounted() {
    this.list = this.tags.map(item => {
      return { id: item.id, label: item.label }
    })
  },
  methods: {
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.stags = this.list.filter(item => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
          })
        }, 200)
      } else {
        this.stags = []
      }
    },
    handleCreateGood() {
      console.log(this.form)
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true

          /*
          createTag(this.form.name, this.form.desc).then(response => {
            this.loading = false
            this.$router.push({ path: '/goods/tag' })
          }).catch(() => {
            this.loading = false
          })
          */
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

