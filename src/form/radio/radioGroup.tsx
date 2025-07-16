import { defineComponent, provide, ref, watch } from 'vue';
import 'uno.css';
import './radioButton.scss';
export default defineComponent({
  name: 'IRadioGroup',
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: undefined,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { slots, emit }) {
    const radioGroupValue = ref(props.modelValue);
    provide('radioGroupValue', radioGroupValue);
    provide('radioGroupchange', (v: string | number | boolean) => {
      radioGroupValue.value = v;
      emit('update:modelValue', v);
    });

    // 侦听外部值的变化
    watch(
      () => props.modelValue,
      newVal => {
        radioGroupValue.value = newVal;
      },
    );

    return () => <div class="i-radio-group flex">{slots.default?.()}</div>;
  },
});
