import { defineComponent, provide, computed } from 'vue';
import 'uno.css';

export default defineComponent({
  name: 'IRow',
  props: {
    gutter: {
      type: Number,
      default: 0,
    },
    justify: {
      type: String,
      default: 'start',
    },
  },
  setup(props, { slots }) {
    const gutter = computed(() => props.gutter);
    provide('gutter', gutter);

    return () => (
      <div
        style={{
          marginLeft: `-${props.gutter / 2}px`,
          marginRight: `-${props.gutter / 2}px`,
          justifyContent: props.justify,
        }}
        class="i-row flex"
      >
        {slots.default?.()}
      </div>
    );
  },
});
