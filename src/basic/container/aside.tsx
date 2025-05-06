import { defineComponent } from 'vue';
import 'uno.css';

export default defineComponent({
  name: 'IAside',
  props: {
    width: {
      type: String,
      default: '200px',
    },
  },
  setup(props, { slots }) {
    return () => (
      <aside style={{ width: props.width }} class="i-aside flex flex-shrink-0 overflow-auto box-border">
        {slots.default?.()}
      </aside>
    );
  },
});
