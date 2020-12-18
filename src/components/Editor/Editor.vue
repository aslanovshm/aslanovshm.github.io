<template>
  <div class="editor">
    <div class="editor-menu">
      <EditorMenu />
      <base-btn @click="copyCode">Скопировать HTML</base-btn>
    </div>
    <div class="editor-content" ref="editor" contenteditable="true" spellcheck="false" autofocus></div>
  </div>
</template>

<script>
import EditorMenu from "@/components/Editor/EditorMenu";
export default {
  components: {
    EditorMenu
  },
  methods: {
    copyCode() {
      const copyCode = this.$refs.editor.innerHTML;
      navigator.clipboard.writeText(copyCode)
    }
  }
}
</script>

<style scoped>
.editor {
  width: 740px;
  margin: auto;
  padding-top: 77px;
}

.editor-menu {
  margin-bottom: 31px;
}

.editor-content {
  font-size: 15px;
  line-height: 23px;
  height: 100vh;
}
</style>
