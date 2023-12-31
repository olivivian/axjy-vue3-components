import type { ExtractPropTypes } from 'vue'

export const props = {
  // 图标 class 前缀 vp-icon-
  iconPrefix: {
    type: String,
    default: '',
  },
  // 图标名，与前缀拼接起来就对应一个完整的 class
  icon: {
    type: String,
    required: true,
  },
  // 图标大小
  size: {
    type: Number,
  },
  // 图标颜色
  color: {
    type: String,
  },
}

export type VpIconFontProps = Partial<ExtractPropTypes<typeof props>>
