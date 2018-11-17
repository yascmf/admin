<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="登录用户名">
        <span>{{profile.username}}</span>
      </el-form-item>
      <el-form-item label="电子邮箱地址">
        <span>{{profile.email}}</span>
      </el-form-item>
      <el-form-item label="昵称(*)">
        <el-input v-model="form.nickname" placeholder="请输入昵称"></el-input>
      </el-form-item>
      <el-form-item label="真实姓名(*)">
        <el-input v-model="form.realname" placeholder="请输入真实姓名"></el-input>
      </el-form-item>
      <el-form-item label="登录密码">
        <el-input v-model="form.password" placeholder="请输入登录密码，留空则不修改"></el-input>
      </el-form-item>
      <el-form-item label="确认登录密码">
        <el-input v-model="form.password_confirmation" placeholder="请再次确认登录密码"></el-input>
      </el-form-item>
      <el-form-item label="手机号码">
        <el-input v-model="form.phone" placeholder="请输入手机号码" maxlength="11"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">更新</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getProfile, updateProfile } from '@/api/me'

export default {
  name: 'Profile',
  data() {
    return {
      module: 'me',
      basePath: '/user-management/',
      loading: false,
      profile: {},
      form: {
        nickname: '',
        realname: '',
        password: '',
        password_confirmation: '',
        phone: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log(this.form)
      this.loading = true
      updateProfile(this.form).then(response => {
        this.loading = false
        this.$message({
          message: '更新成功',
          type: 'success'
        })
      }).catch(() => {
        this.loading = false
      })
    }
  },
  created() {
    getProfile().then(response => {
      this.profile = response
      this.form.nickname = response.nickname
      this.form.realname = response.realname
      this.form.phone = response.phone
    })
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
