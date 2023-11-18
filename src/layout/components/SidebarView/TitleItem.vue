<template>
  <div class="title-item">
    <svg-icon v-if="meta.icon" class="icon" :icon-class="meta.icon" />
    <div class="text" :title="showAllTitle">{{ title }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  meta: {
    type: Object,
    required: true,
    default: () => ({})
  }
})

const showAllTitle = computed(() => {
  const title = props.meta.title || ''
  return title.length > 10 ? title : ''
})

const title = computed(() => {
  return props.meta.title || '未知标题'
})
</script>

<style lang="scss" scoped>
.title-item {
  width: 100%;
  display: flex;
  align-items: center;
  user-select: none;
  .icon {
    margin-right: 5px;
    font-size: 18px;
  }
  .text {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
