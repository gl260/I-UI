import { defineComponent } from 'vue';
import 'uno.css';

export default defineComponent({
  name: 'IHeader',
  props: {
    height: {
      type: String,
      default: '60px',
    },
  },
  setup(props, { slots }) {
    return () => (
      <header style={{ height: props.height }} class={`i-header w-full flex-shrink-0 box-border px-[16px]`}>
        {slots.default?.()}
      </header>
    );
  },
});
