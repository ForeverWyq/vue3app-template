<template>
  <router-view v-slot="{ Component }">
    <transition name="fade-transform" mode="out-in">
      <component :is="Component" :key="key" />
    </transition>
  </router-view>
</template>

<script lang="ts">
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>
