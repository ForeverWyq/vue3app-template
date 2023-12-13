<template>
  <div class="navbar">
    <el-icon class="theme-icon" size="20" @click="store.changeTheme">
      <ep-moon v-if="store.theme === 'dark'" />
      <ep-sunny v-else />
    </el-icon>
    <el-dropdown>
      <div class="user">
        <el-avatar class="avatar" :size="20" />
        <span>用户名</span>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { themeStore } from '@/stores/theme'
const store = themeStore()
</script>

<style lang="scss" scoped>
.navbar {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .theme-icon {
    margin-right: 10px;
    cursor: pointer;
    &:hover {
      color: var(--el-color-primary);
    }
  }
  .user {
    outline: none;
    display: flex;
    align-items: center;
    user-select: none;
    .avatar {
      margin-right: 5px;
    }
  }
}
</style>
