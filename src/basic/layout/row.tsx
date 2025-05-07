import { defineComponent, provide, computed } from 'vue';
import 'uno.css';

export default defineComponent({
  name: 'IRow',
  props: {
    gutter: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { slots }) {
    const gutter = computed(() => props.gutter);
    provide('gutter', gutter);

    return () => (
      <div style={{ marginLeft: `-${props.gutter / 2}px`, marginRight: `-${props.gutter / 2}px` }} class="i-row flex ">
        {slots.default?.()}
      </div>
    );
  },
});
