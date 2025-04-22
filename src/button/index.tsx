import { defineComponent, PropType } from "vue";
import "uno.css";

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
    },
    size: {
      type: String as PropType<'small' | 'default' | 'large' | ''>,
      default: 'default'
    }

  },
  setup(props, { slots }) {
    const renderIcon = () => {
      if(!props.icon) return null;
      return <i class={`i-fluent-${props.icon}-20-regular inline-block ${sizeClass.iconSize}`}></i>
    };

    const getSizeClass = () => {
      switch(props.size) {
        case 'small':
          return {
            padding: props.plain ? 'py-[5px] px-[11px]' : 'py-[6px] px-[12px]',
            fontSize: 'text-[12px]',
            circleSize: 'w-[24px] h-[24px] p-0',
            iconSize: 'text-[12px]'
          }
        case 'large':
          return {
            padding: props.plain ? 'py-[12px] px-[19px]' : 'py-[13px] px-[20px]',
            fontSize: 'text-[14px]',
            circleSize: 'w-[40px] h-[40px] p-0',
            iconSize: 'text-[18px]'
          }
        default:
          return {
            padding: props.plain ? 'py-[8px] px-[15px]' : 'py-[9px] px-[16px]',
            fontSize: 'text-[14px]',
            circleSize: 'w-[32px] h-[32px] p-0',
            iconSize: 'text-[14px]'
          }
      }
    }

    const sizeClass = getSizeClass();

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
          ? sizeClass.circleSize
          : sizeClass.padding
        }
        ${props.raund || props.circle ? 'rounded-full' : 'rounded-md'}
        ${props.type 
          ? (props.plain ? `text-${props.type} ${props.disabled ? '' : 'hover:text-white'}` : 'text-white') 
          : 'text-#606266'}
        bg-${props.type ? props.type : '#fff'}${props.plain ? '/30': ''}
        ${props.disabled
          ? ''
          : `hover:bg-${props.type ? props.type : '#fff'}${props.plain ? '': '/80'}`
        }
        ${props.plain
          ? `border-1 border-solid ${props.type ? `border-${props.type}` : 'border-[#dcdfe6]'}`
          : 'border-none'}
        cursor-pointer
        ${sizeClass.fontSize}
        ${props.disabled ? 'cursor-not-allowed opacity-60' : ''}
        transition-all
        duration-200
        inline-flex
        items-center
        justify-center
        gap-1
      `}>
        {renderIcon()}
        {slots.default ? slots.default() : ''}
      </button>
  }
});