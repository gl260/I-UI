import Container from '../container';
import IAside from '../aside';
import IHeader from '../header';
import IMain from '../main';
import IFooter from '../footer';

import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import { h } from 'vue';

describe('Container', () => {
  test('When <i-container> a <i-header> or <i-footer>, it is called flex-col', () => {
    // shallowMount 默认只渲染一层，子组件（如 IHeader/IMain/IFooter）会被 stub 掉, 这里改用 mount 渲染
    const wrapper = mount(Container, {
      slots: {
        // default: '<i-aside>Aside</i-aside><i-main>Main</i-main><i-footer>Footer</i-footer>',
        default: [
          h(IHeader, {}, { default: () => 'Herder' }),
          h(IMain, {}, { default: () => 'Main' }),
          h(IFooter, {}, { default: () => 'Footer' }),
        ],
      },
    });
    expect(wrapper.classes()).toContain('flex-col');
  });

  test('When <i-header>/<i-footer> is not included, it is flex-row', () => {
    const wrapper = mount(Container, {
      slots: {
        default: [
          h(IAside, {}, { default: () => 'Aside' }),
          h(IMain, {}, { default: () => 'Main' }),
          h(IAside, {}, { default: () => 'Aside' }),
        ],
      },
    });
    expect(wrapper.classes()).toContain('flex-row');
  });
});

// wrapper.classes()，返回当前组件根节点的所有 class 名组成的数组
// toContain 用于判断数组中是否包含某个元素。
