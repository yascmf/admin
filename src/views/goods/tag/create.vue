<template>
  <div class="app-container">
    <div class="createPost-container">
      <el-form class="form-container" ref="postForm">
        <el-button v-loading="loading" style="margin-left: 10px;" type="success" @click="submitForm">新增
        </el-button>
        <div class="createPost-main-container">
          <el-row>
            <el-col :span="24">
              <el-form-item style="margin-bottom: 40px;" prop="title">
                <el-input type="text" class="article-textarea" :rows="1" autosize placeholder="请输入标签名称" v-model="postForm.content_short">
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </div>
      </el-form>
    </div>
  </div>
</template>
