import type { ExtractPropTypes, PropType } from 'vue'

export const IconSelectProps = {
  value: {
    type: String,
    default: '123',
  },
  // 图标清单
  icons: {
    type: Array as PropType<string[]>,
    default() {
      return []
    },
  },
}

export type JIconSelectProps = Partial<ExtractPropTypes<typeof IconSelectProps>>
