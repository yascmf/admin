# admin

> 本项目处于WIP开发进行中，代码特性未稳定，请勿下载使用。前端基于 [`vueAdmin-template`](https://github.com/PanJiaChen/vueAdmin-template) 开发的业务管理系统，`API` 后端使用 `Laravel/Lumen` 框架，仓库地址 [yascmf/api](https://github.com/yascmf/api)。

### 安装与使用

```bash
git clone https://github.com/yascmf/admin.git
cd admin
npm install
cp .env.example .env
vim .env
// 修改BASE_API 为 API 后端基地址
npm run dev
```

### 二次开发

需要开发者有一定的 `Vue` 与 `ElementUI` 的开发能力。

参考资源：

- [Vue](https://cn.vuejs.org/index.html)
- [ElementUI](http://element-cn.eleme.io/#/zh-CN)
- [Vue-Router](https://router.vuejs.org/zh/)
- [VueElementAdmin](https://panjiachen.github.io/vue-element-admin-site/zh/)
