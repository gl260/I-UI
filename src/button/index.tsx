import { defineComponent, PropType, computed } from "vue";

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
    },
    raund: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String as PropType<'search' | 'edit' | 'checkmark' | 'star' | 'mail' | ''>,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    } 

  },
  setup(props, { slots }) {
    const renderIcon = () => {
      if(!props.icon) return null;
      return <i class={`i-fluent-${props.icon}-20-regular inline-block`}></i>
    };

    return () => 
      <button
      style={{ 
        lineHeight: '1',
        fontFamily: 'Arial, "Microsoft YaHei", sans-serif', // 统一字体
      }}
      class={`
        font-semibold
        shadow-md
        ${props.circle
          ? 'w-8 h-8 p-0'
          : props.plain ? 'py-[8px] px-[15px]' : 'py-[9px] px-4'
        }
        ${props.raund || props.circle ? 'rounded-full' : 'rounded-md'}
        ${props.type ? (props.plain ? `text-${props.type}` : 'text-white') : 'text-#606266'}
        ${props.plain
          ? `bg-${props.type ? props.type : '#fff'}/30`
          : `bg-${props.type ? props.type : '#fff'}`}
        hover:bg-${props.type ? props.type : '#fff'}/80
        ${props.plain
          ? `border-1 border-solid ${props.type ? `border-${props.type}` : 'border-[#dcdfe6]'}`
          : 'border-none'}
        cursor-pointer
        text-[14px]
        ${props.disabled ? 'cursor-not-allowed opacity-60' : ''}
      `}>
        {renderIcon()}
        {slots.default ? slots.default() : ''}
      </button>
  }
});