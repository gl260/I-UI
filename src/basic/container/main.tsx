import { defineComponent } from 'vue';
import 'uno.css';

export default defineComponent({
  name: 'IMain',
  props: {},
  setup(props, { slots }) {
    return () => <main class="i-main flex-1 flex-basis-auto overflow-auto box-border px-[16px] py-[16px]">{slots.default?.()}</main>;
  },
});
