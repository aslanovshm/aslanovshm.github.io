<template>
  <div id="app">
    <Editor />
  </div>
</template>

<script>
import Editor from "@/components/Editor/Editor";

export default {
  name: 'App',
  components: {
    Editor
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    background-color: #1e1e1e;
    color: #eaeaea;
  }
</style>
