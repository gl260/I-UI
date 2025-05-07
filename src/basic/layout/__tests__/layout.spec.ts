import IRow from '../row';
import ICol from '../col';

import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import { h } from 'vue';

describe('IRow', () => {
  test('测试 ICol 是否有正确的类名', () => {
    const wrapper = mount(IRow, {
      slots: {
        default: [
          h(ICol, { span: 8 }, { default: () => 'Col 1' }),
          h(ICol, { span: 8 }, { default: () => 'Col 2' }),
          h(ICol, { span: 8 }, { default: () => 'Col 2' }),
        ],
      },
    });

    // 获取所有 ICol 组件
    const cols = wrapper.findAllComponents(ICol);

    // 检查每个 ICol 组件是否都有正确的类名
    cols.forEach(col => {
      expect(col.classes()).toContain('i-col');
      expect(col.classes()).toContain('i-col-8');
    });
  });

  test('添加测试 gutter 属性的用例', () => {
    const wrapper = mount(IRow, {
      props: {
        gutter: 16, // 设置 gutter 属性
      },
      slots: {
        default: [
          h(ICol, { span: 8 }, { default: () => 'Col 1' }),
          h(ICol, { span: 8 }, { default: () => 'Col 2' }),
          h(ICol, { span: 8 }, { default: () => 'Col 2' }),
        ],
      },
    });

    expect(wrapper.attributes('style')).toContain('margin-left: -8px');
    expect(wrapper.attributes('style')).toContain('margin-right: -8px');

    const cols = wrapper.findAllComponents(ICol);

    cols.forEach(col => {
      expect(col.attributes('style')).toContain('padding-left: 8px');
      expect(col.attributes('style')).toContain('padding-right: 8px');
    });
  });
});

// toContain 用于判断数组中是否包含某个元素。
