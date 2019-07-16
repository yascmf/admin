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
            <el-select v-if="form[key]" v-model="form[key]" :placeholder="attribute.placeholder">
              <el-option v-for="option in attribute.options" :key="option.label" :label="option.label" :value="option.value"></el-option>
            </el-select>
          </el-form-item>
        </template>
        <template v-else-if="attribute.displayAs === 'checkbox'">
          <el-form-item :label="attribute.label">
            <el-checkbox-group v-if="form[key]" v-model="form[key]">
              <el-checkbox v-for="option in attribute.options" :key="option.label" :label="option.label" :name="key">{{option.value}}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </template>
        <template v-else-if="attribute.displayAs === 'radio'">
          <el-form-item :label="attribute.label">
            <el-radio-group v-if="form[key]" v-model="form[key]">
              <el-radio v-for="option in attribute.options" :key="option.label" :label="option.label">{{option.value}}</el-radio>
            </el-radio-group>
          </el-form-item>
        </template>
        <template v-else-if="attribute.displayAs === 'markdownEditor'">
          <el-form-item :label="attribute.label">
            <div class="editor-container">
              <markdown-editor id="contentEditor" v-model="form[key]" :height="300" :z-index="20"/>
            </div>
          </el-form-item>
        </template>
        <template v-else-if="attribute.displayAs === 'richEditor'">
          <el-form-item :label="attribute.label">
            <tinymce ref="editor" :height="300" v-model="form[key]"/>
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
import MarkdownEditor from '@/components/MarkdownEditor'
import Tinymce from '@/components/Tinymce'

export default {
  name: 'FastAdminEdit',
  components: {
    MarkdownEditor,
    Tinymce
  },
  props: {
    module: String,
    basePath: String,
    labels: Object,
    attributes: Object,
    resourceId: null,
    addons: Object
  },
  data() {
    return {
      loading: false,
      form: {}
    }
  },
  created() {
    this.loading = true
    // setTimeout(function() { console.log('wait a moment!') }, 3000)
    resourceShow(this.module, this.resourceId).then(response => {
      this.form = response
      this.loading = false
      this.$emit('sync-perms', this.form.perms ? this.form.perms : [])
    }).catch(() => {
      this.loading = false
    })
  },
  methods: {
    handleUpdateResource() {
      const postForm = {}
      console.log(this.form)
      console.log(this.addons)
      Object.assign(postForm, this.form, this.addons)
      console.log(postForm)
      this.loading = true
      resourceUpdate(this.module, this.resourceId, postForm).then(response => {
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
