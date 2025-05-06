import { defineComponent } from 'vue';
import 'uno.css';

export default defineComponent({
  name: 'IContainer',
  props: {},
  setup(props, { slots }) {
    const children = slots.default?.() || [];

    const hasHeaderOrFooter = children.some(vnode => {
      // 兼容 tsx/jsx 组件的 name
      return (vnode.type as any).name === 'IHeader' || (vnode.type as any).name === 'IFooter';
    });

    const direction = hasHeaderOrFooter ? 'flex-col' : 'flex-row';

    return () => <section class={`i-container w-full h-full flex ${direction}`}>{slots.default?.()}</section>;
  },
});

// w-full 宽度占据父容器的100%
// h-full 高度占据父容器的100%
// flex 弹性布局
// flex-col 弹性布局，垂直方向
// flex-row 弹性布局，水平方向
