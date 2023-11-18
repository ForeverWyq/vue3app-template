<template>
  <div class="header-title">
    <svg-icon icon-class="template"></svg-icon>
    {{ appTitle }}
  </div>
</template>

<script setup lang="ts">
const appTitle = ref(import.meta.env.VITE_APP_NAME)
</script>

<style lang="scss" scoped>
.header-title {
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 20px;
  user-select: none;
}
</style>
