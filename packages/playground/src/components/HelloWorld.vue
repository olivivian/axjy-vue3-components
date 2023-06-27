<script setup lang="ts">
import { ref } from 'vue'
import { Button, IconFont, SelectIcon } from 'axjy-vue3-components'
import 'axjy-vue3-components/src/button/style/index.less'
import 'axjy-vue3-components/src/select-icon/style/index.less'
import icons from '../assets/icons.json'

const selectedIcon = ref('')
function onSelectIcon(value: string) {
  selectedIcon.value = value
}

console.log('接收到的图标', icons)
</script>

<template>
  <div style="display: none;">
    <Button type="dashed">
      原版按钮
      <template #icon>
        <IconFont icon="icon-xiangqing2" :size="20" />
      </template>
    </Button>
    <Button type="primary" danger ico="icon-xiangqing2">
      新版按钮
    </Button>
  </div>

  <SelectIcon :icons="icons" :value="selectedIcon" @select="onSelectIcon" />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
