import { defineComponent } from 'vue';
import 'uno.css';
export default defineComponent({
  name: 'IRadioGroup',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue'],
  setup(props, { slots }) {
    return () => <div class="i-radio-group">{slots.default?.()}</div>;
  },
});
