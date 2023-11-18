<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup lang="ts">
const props = defineProps({
  iconClass: {
    type: String,
    default: ''
  },
  className: {
    type: String,
    default: ''
  }
})

const svgClass = computed(() => {
  const { className } = props
  if (className) {
    return `svg-icon ${className}`
  }
  return 'svg-icon'
})

const iconName = computed(() => {
  return `#icon-${props.iconClass}`
})
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
