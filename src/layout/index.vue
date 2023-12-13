<template>
  <el-container class="layout">
    <el-aside class="layout-aside" width="200px">
      <header-title class="app-title" />
      <el-scrollbar class="sidebar-scroll">
        <sidebar-view />
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header class="layout-header">
        <navbar-view />
      </el-header>

      <el-main class="app-main">
        <el-scrollbar>
          <app-main />
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import AppMain from './components/AppMain.vue'
import NavbarView from './components/NavbarView.vue'
import HeaderTitle from './components/HeaderTitle.vue'
import SidebarView from './components/SidebarView/index.vue'
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  --navbarHeader: 60px;
  --navbarBgColor: transparent;
  --navbarTextColor: var(--el-text-color-primary);
  .layout-aside {
    color: var(--el-text-color-primary);
    .sidebar-scroll {
      height: calc(100% - var(--navbarHeader));
      border-right: 1px solid #efefef;
    }
  }
  .app-title,
  .layout-header {
    background: var(--navbarBgColor);
    height: var(--navbarHeader);
    color: var(--navbarTextColor);
  }

  .app-main {
    padding: 0;
  }
}
</style>
