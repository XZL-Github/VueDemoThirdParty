<template>
  <div id="main">
    <mavon-editor v-model="value" />
  </div>
</template>


<!--
需要注意的地方是一般使用富文本的都是管理端，客户端拿到MarkDown格式的数据需要使用maked组件转成html格式的数据来展示。客户端还需要引用一个样式如下
<link href="https://cdn.bootcss.com/github-markdown-css/2.10.0/github-markdown.min.css" rel="stylesheet">
还需要在展示数据的容器上加上一个class，如：
<div class="markdown-body" v-html="Article.Content">{{ Article.Content }}</div>
-->
<script>
export default {
  data() {
    return {
      value: ""
    };
  }
};
</script>

<style scoped>
</style>