<script lang="ts" setup>
import { computed, ref } from 'vue'
import { debounce } from 'lodash-es'
import { Col as ACol, Row as ARow, Select as ASelect, SelectOption as ASelectOption } from 'ant-design-vue'
import IconFont from '../icon'

import { IconSelectProps } from './props'

const props = defineProps(IconSelectProps)

const emit = defineEmits<Emit>()

interface Emit {
  (ev: 'onSelect', params: string): void
}

const searchWd = ref('')
function handleFilter(value: string) {
  searchWd.value = value || ''
}
const triggerFilter = debounce(handleFilter, 300)
const wd = ref('')
const visibleIcons = computed(() => props.icons.filter(item => searchWd.value === '' || item.font_class.includes(searchWd.value)))
function onSelectIcon(icon: string) {
  emit('onSelect', icon)
}
</script>

<template>
  <section class="select-icon__wrapper">
    <div class="select-icon__search-wrapper">
      <ASelect
        v-model:value="wd"
        class="select-icon"
        allow-clear
        show-search
        placeholder="请输入图标名称搜索"
        @search="triggerFilter"
        @change="triggerFilter"
      >
        <ASelectOption v-for="item in icons" :key="item.icon_id" :value="item.font_class">
          {{ item.font_class }}
        </ASelectOption>
      </ASelect>
    </div>
    <ARow>
      <ACol v-for="item in visibleIcons" :key="item.icon_id" :span="4">
        <div class="select-icon__cell" :class="{ 'is-selected': item.font_class === value }" @click="onSelectIcon(icon)">
          <IconFont :icon="item.font_class" />
        </div>
      </ACol>
    </ARow>
  </section>
</template>
