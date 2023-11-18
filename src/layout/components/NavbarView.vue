<template>
  <div class="navbar">
    <el-dropdown>
      <el-icon style="margin-right: 8px; margin-top: 1px">
        <ep-setting />
      </el-icon>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>View</el-dropdown-item>
          <el-dropdown-item>Add</el-dropdown-item>
          <el-dropdown-item>Delete</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <span>Tom</span>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.navbar {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
