import { defineComponent, inject } from 'vue';
import 'uno.css';

export default defineComponent({
  name: 'IRadioButton',
  props: {
    value: {
      type: [String, Number, Boolean],
      default: undefined,
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

    return () => (
      <label class={`i-radio-button flex items-center${props.disabled ? 'cursor-not-allowed' : ''}`}>
        <div class={`i-radio-wrapper`}>
          <input
            class="i-radio-input w-[14px] h-[14px] opacity-0 absolute z-[-1]"
            type="radio"
            checked={isChecked()}
            onChange={handleChange}
          />
          <span
            class={`
              i-radio-button_inner
              cursor-pointer
              box-border
              inline-block
              line-height-[1]
              px-[15px] py-[8px]
              border-1 border-solid border-#d9d9d9
              ${isChecked() ? 'text-white bg-primary' : 'text-#303133 hover:text-primary'}
            `}
          >
            {slots.default?.()}
          </span>
        </div>
      </label>
    );
  },
});
