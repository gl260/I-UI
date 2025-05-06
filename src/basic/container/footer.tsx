import { defineComponent } from 'vue';
import 'uno.css';

export default defineComponent({
  name: 'IFooter',
  props: {
    height: {
      type: String,
      default: '60px',
    },
  },
  setup(props, { slots }) {
    return () => (
      <footer style={{ height: props.height }} class="i-footer w-full flex-shrink-0 box-border px-[16px]">
        {slots.default?.()}
      </footer>
    );
  },
});
