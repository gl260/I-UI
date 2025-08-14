import { defineComponent, inject } from 'vue';
import 'uno.css';
export default defineComponent({
  name: 'IRadio',
  props: {
    value: {
      type: [String, Number, Boolean],
      default: undefined,
    },
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number, Boolean],
      default: undefined,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { slots, emit }) {
    const radioGroupValue = inject('radioGroupValue', null);
    const radioGroupChange = inject('radioGroupchange', null);

    const isChecked = () => {
      if (radioGroupValue) {
        return radioGroupValue.value === props.value;
      }
      return props.modelValue === props.value;
    };

    const handleChange = () => {
      if (radioGroupChange) {
        radioGroupChange(props.value);
      } else {
        emit('update:modelValue', props.value);
      }
    };

    console.log();

    return () => (
      <label class={`i-radio flex items-center mr-[8px] ${props.disabled ? 'cursor-not-allowed' : ''}`}>
        <div class={`i-radio-wrapper w-[14px] h-[14px] `}>
          <input
            class="i-radio-input w-[14px] h-[14px] opacity-0 absolute z-[-1] m-0 p-0"
            type="radio"
            disabled={props.disabled}
            checked={isChecked()}
            onChange={handleChange}
          />
          <span
            class={`
              i-radio-inner
              box-border
              inline-block
              w-[14px] h-[14px]
              absolute
              border-1 border-solid border-#d9d9d9 rounded-full
              after:content-['']
              after:absolute
              after:top-[50%]
              after:left-[50%]
              after:translate-x-[-50%]
              after:translate-y-[-50%]
              after:w-[6px]
              after:h-[6px]
              after:bg-white
              after:rounded-full
              after:duration-200
              after:opacity-0
              ${isChecked() ? 'border-primary bg-primary after:opacity-100' : ''}
              ${props.disabled ? 'cursor-not-allowed !bg-#f5f7fa !border-#e4e7ed !after:bg-#a8abb2' : 'hover:border-primary cursor-pointer'}
            `}
          ></span>
        </div>
        <span
          class={`
          i-radio-label
          pl-[8px] pr-[8px]
          ${isChecked() ? 'text-primary' : ''}
          ${props.disabled ? '!text-#c0c4cc' : ''}`}
        >
          {props.label || slots.default?.()}
        </span>
      </label>
    );
  },
});
