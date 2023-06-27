<script setup lang="ts">
import { props } from './props'

defineProps(props)
</script>

<template>
  <i class="iconfont" :style="{ fontSize: `${size}px`, color }" :class="`${iconPrefix}${icon}`" />
</template>
