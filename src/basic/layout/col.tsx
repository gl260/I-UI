import { defineComponent, inject } from 'vue';
import 'uno.css';

export default defineComponent({
  name: 'ICol',
  props: {
    span: {
      type: Number,
      default: 24,
    },
  },
  setup(props, { slots }) {
    // 注入 gutter 值
    const gutter = inject<any>('gutter', 0);

    return () => (
      <div
        style={{
          width: `${(props.span * 100) / 24}%`,
          paddingLeft: `${gutter.value / 2}px`,
          paddingRight: `${gutter.value / 2}px`,
        }}
        class={`i-col  i-col-${props.span} ${gutter.value ? 'is-gutter' : ''} box-border`}
      >
        {slots.default?.()}
      </div>
    );
  },
});
