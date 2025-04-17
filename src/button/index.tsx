import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "IButton",
  props: {
    type: {
      type: String as PropType<'primary' | 'success' | 'warning' | 'danger' | 'info' | ''>,
      default: ''
    },
    plain: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { slots }) {
    return () => 
      <button
      style={{ 
        lineHeight: '1',
        fontFamily: 'Arial, "Microsoft YaHei", sans-serif', // 统一字体
      }}
      class={`
        ${props.plain ? 'py-[7px] px-[15px]' : 'py-2 px-4'}
        font-semibold
        rounded-lg
        shadow-md
        ${props.type ? (props.plain ? `text-${props.type}` : 'text-white') : 'text-#606266'}
        ${props.plain
          ? `bg-${props.type ? props.type : '#fff'}/30`
          : `bg-${props.type ? props.type : '#fff'}`}
        hover:bg-${props.type ? props.type : '#fff'}/70
        ${props.plain
          ? `border-1 border-solid ${props.type ? `border-${props.type}` : 'border-[#dcdfe6]'}`
          : 'border-none'}
        cursor-pointer
        text-[14px]
      `}>
        {slots.default ? slots.default() : ''}
      </button>
  }
});