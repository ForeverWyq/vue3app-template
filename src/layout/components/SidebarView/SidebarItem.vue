<template>
  <template v-if="!isHidden">
    <el-menu-item v-if="!hasChild" :index="path">
      <title-item :meta="item.meta || {}" />
    </el-menu-item>
    <el-sub-menu v-else :index="path">
      <template #title>
        <title-item :meta="item.meta || {}" />
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :base-path="path"
      />
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts">
import TitleItem from './TitleItem.vue'

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  basePath: {
    type: String,
    default: '/'
  }
})

const isHidden = ref(props.item?.meta?.hidden)

const hasChild = computed(() => {
  const children = props.item.children || []
  return children.length > 0
})

const path = computed(() => {
  return resolvePath(props.item.path)
})

function resolvePath(routePath: string) {
  if (!routePath) {
    return ''
  }
  if (routePath[0] === '/') {
    return routePath
  }
  return `${props.basePath}/${routePath}`
}
</script>
