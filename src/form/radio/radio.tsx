import { defineComponent, inject } from 'vue';
import 'uno.css';
export default defineComponent({
  name: 'IRadio',
  props: {
    value: {
      type: [String, Number, Boolean],
      default: undefined,
    },
    modelValue: {
      type: [String, Number, Boolean],
      default: undefined,
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

    console.log('radio radioGroupValue', radioGroupValue, props.value);

    const handleChange = () => {
      if (radioGroupChange) {
        radioGroupChange(props.value);
      } else {
        emit('update:modelValue', props.value);
      }
    };

    return () => (
      <label class="i-radio">
        <span class="i-radio-wrapper">
          <input class="i-radio-input" type="radio" checked={isChecked()} onChange={handleChange} />
          <span class="i-radio-inner"></span>
        </span>
        <span class="i-radio-label">{slots.default?.()}</span>
      </label>
    );
  },
});
