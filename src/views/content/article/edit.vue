<template>
  <div class="app-container">
    <el-form ref="form" :model="form" :rules="rules" label-width="120px" @submit.prevent>
      <el-form-item label="标签名称" prop="name">
        <el-input v-model="form.name" placeholder="请输入标签名称"></el-input>
      </el-form-item>
      <el-form-item label="标签描述" prop="desc">
        <el-input v-model="form.desc" placeholder="请输入标签描述，可留空"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="loading" @click.native.prevent="handleCreateTag">创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { createTag } from '@/api/content'
import { validateEmptyString } from '@/utils/validate'

export default {
  name: 'tagCreate',
  data() {
    const validateTagName = (rule, value, callback) => {
      if (validateEmptyString(value)) {
        callback(new Error('请输入正确的标签名，不允许空白字符出现'))
      } else {
        callback()
      }
    }
    return {
      loading: false,
      form: {
        name: '',
        desc: ''
      },
      rules: {
        name: [{ required: true, trigger: 'blur', validator: validateTagName }]
      }
    }
  },
  methods: {
    handleCreateTag() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true
          createTag(this.form.name, this.form.desc).then(response => {
            this.loading = false
            this.$router.push({ path: '/goods/tag' })
          }).catch(() => {
            this.loading = false
          })
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

