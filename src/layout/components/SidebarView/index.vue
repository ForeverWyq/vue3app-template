<template>
  <el-menu class="menu" :default-active="activeMenu" mode="vertical" router>
    <sidebar-item v-for="item in menu" :key="item.path" :item="item" />
  </el-menu>
</template>

<script setup lang="ts">
import menu from '@/router/layoutMenu'
import SidebarItem from './SidebarItem.vue'

const route = useRoute()

const activeMenu = computed(() => {
  return route.path
})
</script>

<style lang="scss" scoped>
.menu {
  border-right: none;
}
</style>
