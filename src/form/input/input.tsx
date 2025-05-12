import { defineComponent, ref, computed } from 'vue';
import 'uno.css';
export default defineComponent({
  name: 'IInput',
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
    rows: {
      type: Number,
      default: 2,
    },
    minlength: {
      type: [String, Number],
      default: 0,
    },
    maxlength: {
      type: [String, Number],
      default: 0,
    },
    showWordLimit: {
      type: Boolean,
      default: false,
    },
    // autoSize: {
    //   type: [Object, Boolean],
    //   default: () => ({}),
    // },
  },
  emits: ['update:modelValue'],
  setup(props, { slots, emit }) {
    const handleInput = (e: any) => {
      if (props.disabled) return;
      const target = e.target as any;
      emit('update:modelValue', target.value);
    };

    // clearable
    const isFocus = ref(false);
    const handleFocus = () => (isFocus.value = true);
    const handleBlur = () => (isFocus.value = false);
    const handleClearIcon = () => emit('update:modelValue', '');
    const handleClear = () => {
      if (props.disabled || !props.clearable) return;
      if (!isFocus.value || !props.modelValue) return;
      return (
        <span
          class={`flex absolute right-[12px] top-[50%] translate-y-[-50%]`}
          onClick={handleClearIcon}
          onMousedown={(e: any) => e.preventDefault()}
        >
          <i class={`i-ic-outline-cancel w-[14px] h-[14px] cursor-pointer text-#c0c4cc hover:text-#909399`}></i>
        </span>
      );
    };

    // 密码框
    const isPassword = ref(false);
    const handlePasswordIcon = () => {
      isPassword.value = !isPassword.value;
    };
    const handlePassword = () => {
      if (props.type !== 'password' || !props.modelValue) return;
      if (!props.showPassword) return;
      return (
        <span class={`flex absolute right-[12px] top-[50%] translate-y-[-50%]`} onClick={handlePasswordIcon}>
          <i
            class={`${isPassword.value ? 'i-line-md-watch' : 'i-line-md-watch-off'}
            w-[14px]
            h-[14px]
            cursor-pointer
            text-#c0c4cc
            hover:text-#909399`}
          ></i>
        </span>
      );
    };

    const inputType = computed(() => {
      if (props.type === 'password') {
        return isPassword.value ? 'text' : 'password';
      }
      return props.type;
    });

    const handleSuffix = () => {
      if (!slots.suffix) return;
      return <span class={`flex absolute right-[12px] top-[50%] translate-y-[-50%]`}>{slots.suffix()}</span>;
    };

    const handlePrefix = () => {
      if (!slots.prefix) return;
      return <span class={`flex absolute left-[12px] top-[50%] translate-y-[-50%]`}>{slots.prefix()}</span>;
    };

    const handleWordLimit = () => {
      if (!props.showWordLimit) return;
      const value = String(props.modelValue);
      return <span class={`absolute text-[12px] right-[12px] bottom-[4px]`}>{`${value.length} / ${props.maxlength}`}</span>;
    };

    // const handleAutoSize = computed(() => {});

    return () => (
      <div
        style={{ width: '220px' }}
        class={`
          i-input
          box-border
          relative
          border-1
          border-solid
          border-#dcdfe6
          hover:border-${props.disabled ? '#dcdfe6' : 'primary'}
          text-#606266
          rounded-[6px]
          focus-within:border-${props.disabled ? '#dcdfe6' : 'primary'}
          ${props.disabled ? 'bg-#f5f7fa' : ''}
          flex
          items-stretch
        `}
      >
        {props.type == 'textarea' ? (
          <textarea
            value={props.modelValue}
            onInput={handleInput}
            disabled={props.disabled}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={props.placeholder}
            rows={props.rows}
            maxlength={props.maxlength}
            style={{ resize: 'vertical' }}
            class={`
              i-input__inner
              box-border
              color-#000/88
              w-full
              h-full
              leading-normal
              px-[12px]
              py-[4px]
              m-0
              border-none
              text-[14px]
              outline-none
              rounded-[6px]
              ${props.disabled ? 'cursor-not-allowed' : ''}
            `}
          />
        ) : (
          <input
            type={inputType.value}
            value={props.modelValue}
            onInput={handleInput}
            disabled={props.disabled}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={props.placeholder}
            maxlength={props.maxlength}
            minlength={props.minlength}
            class={`
              i-input__inner
              box-border
              color-#000/88
              w-full
              h-[30px]
              ${slots.prefix ? 'pl-[28px]' : 'pl-[12px]'}
              ${slots.suffix || props.clearable || props.showPassword ? 'pr-[28px]' : 'pr-[12px]'}
              py-[4px]
              m-0
              border-none
              text-[14px]
              outline-none
              rounded-[6px]
              ${props.disabled ? 'cursor-not-allowed' : ''}
            `}
          />
        )}
        {handleClear()}
        {handlePassword()}
        {handleSuffix()}
        {handlePrefix()}
        {handleWordLimit()}
      </div>
    );
  },
});

// resize-none: 禁用 textarea 的拖拽调整大小功能
// resize-vertical: 允许垂直调整大小
// UnoCSS 中的行高预设值：
// leading-normal --> lineHeight: '1.5'
// leading-none --> lineHeight: '1'
// flex 和 items-stretch(align-items: stretch) 让子元素填充整个高度
