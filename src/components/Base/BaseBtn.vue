<template>
  <button class="btn"><slot></slot></button>
</template>

<script>
export default {

}
</script>

<style scoped>
  .btn {
    box-sizing: border-box;
    padding: 8px;
    vertical-align: middle;
    color: #639EFF;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .btn-icon {
    width: 42px;
    height: 38px;
    margin-right: 12px;
    background-color: #282828;
    border: none;
    border-radius: 4px;
  }
</style>
