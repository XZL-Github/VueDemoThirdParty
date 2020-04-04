<template>
    <div>
        <div ref="editor" style="text-align:left"></div>
        <button v-on:click="getContent">查看内容</button>
    </div>
</template>

<script>
    import E from 'wangeditor'
    export default {
      name: 'editor',
      data () {
        return {
          editorContent: ''
        }
      },
      methods: {
        getContent: function () {
            alert(this.editorContent)
        }
      },
      mounted() {
        var editor = new E(this.$refs.editor)
        editor.customConfig.onchange = (html) => {
          this.editorContent = html
        }
        editor.customConfig.uploadImgServer = '/api/UploadImg' // 上传图片到服务器
        editor.customConfig.uploadFileName = 'Content' //后端使用这个字段获取图片信息
        editor.customConfig.uploadImgMaxLength = 1  // 限制一次最多上传 1 张图片
        editor.create()
      }
    }
</script>

<style scoped>
</style>