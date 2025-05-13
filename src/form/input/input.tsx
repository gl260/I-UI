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
    size: {
      type: String,
      default: 'default',
    },
    status: {
      type: String,
      default: '',
    },
    autocomplete: {
      type: String,
      default: 'off',
    },
    name: {
      type: String,
      default: '',
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    min: {
      type: [String, Number],
      default: 0,
    },
    max: {
      type: [String, Number],
      default: 0,
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    step: {
      type: [String, Number],
      default: 0,
    },
  },
  emits: ['update:modelValue', 'blur', 'focus', 'change'],
  setup(props, { slots, emit }) {
    const isFocus = ref(false);

    const handleInput = (e: any) => {
      if (props.disabled) return;
      const target = e.target as any;
      emit('update:modelValue', target.value);
    };

    const handleChange = (e: any) => {
      if (props.disabled) return;
      const target = e.target as any;
      emit('change', target.value);
    };

    const handleBlur = (e: any) => {
      isFocus.value = false;
      emit('blur', e);
    };

    const handleFocus = (e: any) => {
      isFocus.value = true;
      emit('focus', e);
    };
    const handleClearIcon = () => emit('update:modelValue', '');
    const handleClear = () => {
      if (props.disabled || !props.clearable) return;
      if (!isFocus.value || !props.modelValue) return;
      return (
        <span
          class={`flex absolute right-[12px] top-[50%] translate-y-[-50%] ${sizeClass.fontSize}`}
          onClick={handleClearIcon}
          onMousedown={(e: any) => e.preventDefault()}
        >
          <i class={`i-ic-outline-cancel w-[14px] h-[14px] cursor-pointer text-#c0c4cc hover:text-#909399`}></i>
        </span>
      );
    };

    const isPassword = ref(false);
    const handlePasswordIcon = () => {
      isPassword.value = !isPassword.value;
    };
    const handlePassword = () => {
      if (props.type !== 'password' || !props.modelValue) return;
      if (!props.showPassword) return;
      return (
        <span class={`flex absolute right-[12px] top-[50%] translate-y-[-50%] ${sizeClass.fontSize}`} onClick={handlePasswordIcon}>
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
      return (
        <span class={`flex absolute right-[10px] top-[50%] translate-y-[-50%] ${sizeClass.fontSize} ${statusClass.color}`}>
          {slots.suffix()}
        </span>
      );
    };

    const handlePrefix = () => {
      if (!slots.prefix) return;
      return (
        <span class={`flex absolute left-[10px] top-[50%] translate-y-[-50%] ${sizeClass.fontSize} ${statusClass.color}`}>
          {slots.prefix()}
        </span>
      );
    };

    const handleWordLimit = () => {
      if (!props.showWordLimit) return;
      const value = String(props.modelValue);
      return <span class={`absolute text-[12px] right-[12px] bottom-[4px]`}>{`${value.length} / ${props.maxlength}`}</span>;
    };

    // const handleAutoSize = computed(() => {});

    const getSizeClass = () => {
      switch (props.size) {
        case 'small':
          return {
            height: 'h-[24px]',
            fontSize: 'text-[12px]',
            paddingRight: 'pr-[26px]',
            paddingLeft: 'pl-[26px]',
          };
        case 'large':
          return {
            height: 'h-[40px]',
            fontSize: 'text-[18px]',
            paddingRight: 'pr-[32px]',
            paddingLeft: 'pl-[32px]',
          };
        default:
          return {
            height: 'h-[32px]',
            fontSize: 'text-[14px]',
            paddingRight: 'pr-[28px]',
            paddingLeft: 'pl-[28px]',
          };
      }
    };
    const sizeClass = getSizeClass();

    const getStatusClass = () => {
      switch (props.status) {
        case 'error':
          return {
            borderColor: 'border-danger',
            hoverBorderColor: 'danger',
            color: 'text-danger',
          };
        case 'warning':
          return {
            borderColor: 'border-warning',
            hoverBorderColor: 'warning',
            color: 'text-warning',
          };
        default:
          return {
            borderColor: 'border-#dcdfe6',
            hoverBorderColor: 'primary',
            color: 'text-#606266',
          };
      }
    };
    const statusClass = getStatusClass();

    return () => (
      <div
        style={{ width: '220px' }}
        class={`
          i-input
          box-border
          relative
          border-1
          border-solid
          ${statusClass.borderColor}
          hover:border-${props.disabled ? '#dcdfe6' : statusClass.hoverBorderColor}
          text-#606266
          rounded-[6px]
          focus-within:border-${props.disabled ? '#dcdfe6' : statusClass.hoverBorderColor}
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
            {...(props.maxlength ? { maxlength: props.maxlength } : {})}
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
            onChange={handleChange}
            placeholder={props.placeholder}
            {...(props.minlength ? { minlength: props.minlength } : {})}
            {...(props.maxlength ? { maxlength: props.maxlength } : {})}
            autocomplete={props.autocomplete}
            {...(props.name ? { name: props.name } : {})}
            {...(props.readonly ? { readonly: props.readonly } : {})}
            {...(props.min ? { min: props.min } : {})}
            {...(props.max ? { max: props.max } : {})}
            {...(props.autofocus ? { autofocus: props.autofocus } : {})}
            {...(props.step ? { step: props.step } : {})}
            class={`
              i-input__inner
              box-border
              color-#000/88
              w-full
              ${sizeClass.height}
              ${sizeClass.fontSize}
              ${slots.prefix ? sizeClass.paddingLeft : 'pl-[12px]'}
              ${slots.suffix || props.clearable || props.showPassword ? sizeClass.paddingRight : 'pr-[12px]'}
              py-[4px]
              m-0
              border-none
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
