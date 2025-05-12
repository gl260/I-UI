import { defineComponent, ref } from 'vue';
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
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const handleInput = (e: any) => {
      if (props.disabled) return;
      const target = e.target as any;
      emit('update:modelValue', target.value);
    };

    const isFocus = ref(false);
    const handleFocus = () => (isFocus.value = true);
    const handleBlur = () => (isFocus.value = false);
    const handleClearBtn = () => emit('update:modelValue', '');
    const handleClear = () => {
      if (props.disabled || !props.clearable) return;
      if (!isFocus.value || !props.modelValue) return;
      return (
        <span
          class={`flex absolute right-[12px] top-[50%] translate-y-[-50%]`}
          onClick={handleClearBtn}
          onMousedown={(e: any) => e.preventDefault()}
        >
          <i class={`i-ic-outline-cancel w-[14px] h-[14px] cursor-pointer text-#c0c4cc hover:text-#909399`}></i>
        </span>
      );
    };

    return () => (
      <div
        style={{ width: '200px' }}
        class={`
          i-input
          h-[32px]
          box-border
          relative
          border-1
          border-solid
          border-#dcdfe6
          hover:border-${props.disabled ? '#dcdfe6' : 'primary'}
          text-#606266
          rounded-[6px]
          focus-within:border-${props.disabled ? '#dcdfe6' : 'primary'}
          ${props.disabled ? 'bg-#f5f7fa' : ''}`}
      >
        <input
          type="text"
          value={props.modelValue}
          onInput={handleInput}
          disabled={props.disabled}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={props.placeholder}
          class={`
            i-input__inner
            box-border
            color-#000/88
            w-full
            h-full
            px-[12px]
            py-[4px]
            m-0
            border-none
            text-[14px]
            outline-none
            rounded-[6px]
            ${props.disabled ? 'cursor-not-allowed' : ''}`}
        />
        {handleClear()}
      </div>
    );
  },
});
