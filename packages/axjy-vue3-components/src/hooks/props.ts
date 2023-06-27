import type { PlainObject } from '@axjy-vue3-components/types'

import { pick } from 'lodash-es'
import { computed } from 'vue'

// 基于lodash-es的pick方法进行属性挑选，然后用computed计算属性返回结果，这样才能保证得到的innerProps是具备响应式特性的
export const usePickedProps = (props: PlainObject, keys: string[]) => computed(() => pick(props, keys))