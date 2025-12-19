import { defineComponent, ref, computed } from 'vue';
import 'uno.css';

export default defineComponent({
  name: 'main',
  props: {
    modelValue: {
      type: [Boolean, String, Number],
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    activeText: {
      type: String,
      default: '',
    },
    inactiveText: {
      type: String,
      default: '',
    },
    activeValue: {
      type: [String, Number, Boolean],
      default: true,
    },
    inactiveValue: {
      type: [String, Number, Boolean],
      default: false,
    },
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { slots, emit }) {
    const isDown = ref(false);

    const handleMouseDown = (e: any) => {
      if (props.disabled) return;
      e.preventDefault();
      isDown.value = true;
    };

    const handleMouseUp = (e: any) => {
      if (props.disabled) return;
      e.preventDefault();
      isDown.value && (isDown.value = false);
    };

    const handleMouseLeave = () => {
      isDown.value && (isDown.value = false);
    };

    const handlePositionClass = () => {
      const width = isDown.value ? 'before:w-[20px]' : 'before:w-[16px]';
      const leftValue = isDown.value
        ? isActive.value
          ? 'before:left-[calc(100%-22px)]'
          : 'before:left-[2px]'
        : isActive.value
          ? 'before:left-[calc(100%-18px)]'
          : 'before:left-[2px]';

      return `${width} ${leftValue} ${isActive ? 'before:origin-right' : 'before:origin-left'}`.trim();
    };

    const isActive = computed(() => props.modelValue === props.activeValue);
    const handleChange = (e: any) => {
      if (props.disabled) return;
      const newValue = isActive.value ? props.inactiveValue : props.activeValue;
      emit('update:modelValue', newValue);
      emit('change', newValue);
    };

    const disabledClass = () => {
      const cursor = props.disabled ? 'cursor-not-allowed' : 'cursor-pointer';
      const bgColor = isActive.value ? 'bg-primary' : 'bg-[rgba(0,0,0,0.25)]';
      const opacity = props.disabled ? 'opacity-60' : '';
      const hover = props.disabled ? '' : isActive.value ? 'hover:bg-primary/80' : 'hover:bg-#8c8c8c';

      return `${cursor} ${bgColor} ${opacity} ${hover}`.trim();
    };

    return () => (
      <div
        role="switch"
        aria-checked={isActive.value}
        onClick={handleChange}
        onMousedown={handleMouseDown}
        onMouseup={handleMouseUp}
        onMouseleave={handleMouseLeave}
        disabled={props.disabled}
        class={`
          i-switch
          box-border inline-block relative 
          min-w-[40px] h-[20px] border-0 rounded-full
          ${disabledClass()} duration-300
          select-none
          overflow-hidden
        `}
      >
        <div
          class={`
            i-switch-handle
            before:content-['']
            before:absolute before:z-11
            before:h-[16px] before:rounded-full before:bg-white before:top-[50%] before:translate-y-[-50%]
            ${handlePositionClass()}
            before:duration-300
            before:ease-out
          `}
        ></div>
        <div
          class={`
            i-switch-inne
            h-[20px] text-[12px]
            flex items-center justify-center
            relative z-10 ${isActive.value ? 'right-[0px] pr-[20px] pl-[6px]' : 'left-[0px] pr-[6px] pl-[20px]'}
            ${isDown.value && isActive.value && 'translate-x-[-4px]'}
            ${isDown.value && !isActive.value && 'translate-x-[4px]'}
            overflow-hidden
            duration-300
            text-#fff
          `}
        >
          <span aria-hidden={isActive.value} class={`text-align-center`}>
            {isActive.value ? props.activeText : props.inactiveText}
          </span>
        </div>
      </div>
    );
  },
});

/**
 * duration-300: transition: all 300ms;
 * select-none: user-select: none; // 禁止用户选择文本
 * translate-x-[4px] = transform: translateX(4px);
 * inset-0 = top: 0; right: 0; bottom: 0; left: 0;
 */
