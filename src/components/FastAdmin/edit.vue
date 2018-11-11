<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px" @submit.native.prevent>
      <div v-for="(attribute, key) in attributes" :key="key">
        <template v-if="attribute.displayAs === 'input'">
          <el-form-item :label="attribute.label" :prop="key">
            <el-input :type="attribute.type" v-model="form[key]" :placeholder="attribute.placeholder"></el-input>
          </el-form-item>
        </template>
        <template v-else-if="attribute.displayAs === 'select'">
          <el-form-item :label="attribute.label">
            <el-select v-model="form[key]" :placeholder="attribute.placeholder">
              <el-option v-for="option in attribute.options" :key="option.label" :label="option.label" :value="option.value"></el-option>
            </el-select>
          </el-form-item>
        </template>
        <template v-else-if="attribute.displayAs === 'checkbox'">
          <el-form-item :label="attribute.label">
            <el-checkbox-group v-model="form[key]">
              <el-checkbox v-for="option in attribute.options" :key="option.label" :label="option.label" :name="key"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </template>
        <template v-else-if="attribute.displayAs === 'radio'">
          <el-form-item :label="attribute.label">
            <el-radio-group v-model="form[key]">
              <el-radio v-for="option in attribute.options" :key="option.label" :label="option.label">{{option.value}}</el-radio>
            </el-radio-group>
          </el-form-item>
        </template>
        <template v-else>
          <span>{{form[key]}}</span>
        </template>
      </div>
      <slot name="fieldsSlot"></slot>
      <el-form-item>
        <el-button type="primary" :loading="loading" @click.native.prevent="handleUpdateResource">更新</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { resourceShow, resourceUpdate } from '@/api/rest'

export default {
  name: 'FastAdminEdit',
  props: {
    module: String,
    basePath: String,
    labels: Object,
    attributes: Object,
    resourceId: null
  },
  data() {
    return {
      loading: false,
      form: {}
    }
  },
  created() {
    this.loading = true
    resourceShow(this.module, this.resourceId).then(response => {
      this.form = response
      this.loading = false
    }).catch(() => {
      this.loading = false
    })
  },
  methods: {
    handleUpdateResource() {
      console.log(this.form)
      this.loading = true
      resourceUpdate(this.module, this.resourceId, this.form).then(response => {
        this.loading = false
        this.$router.push({ path: this.basePath + this.module })
      }).catch(() => {
        this.loading = false
      })
    }
  }
}
</script>

<style scoped>
.line {
  text-align: center;
}
</style>
