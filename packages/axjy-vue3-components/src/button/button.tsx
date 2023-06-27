import { defineComponent } from 'vue'
import { Button as AButton } from 'ant-design-vue'
import Iconfont from '../icon'
import { usePickedProps } from '../hooks/props'
import { props as buttonProps, innerKeys } from './props'

export default defineComponent({
  name: 'JButton',
  props: buttonProps,
  setup(props, { slots }) {
    // 把属于AButton的属性挑选出来，在绑定到AButton上
    const innerProps = usePickedProps(props, innerKeys)
    return () => (
        <AButton
            {...innerProps.value}
            class="j-button"
            style={{ backgroundColor: props.primaryColor, borderColor: props.primaryColor }}
            v-slots={{
              ...slots,
              default: () => (
                    <>
                        {props.ico && !props.loading ? <Iconfont icon={props.ico} size={props.icoSize} color={props.icoColor} /> : null}
                        {slots?.default?.()}
                    </>
              ),
            }}
        ></AButton>
    )
  },
})
