import Button from '../Button';

import { shallowMount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import type { HTMLElement } from 'happy-dom';

// 测试分组
describe('Button', () => {
  // test("mount  @vue/test-utils", () => {
  //   const wrapper = shallowMount(Button, {
  //     slots: {
  //       default: 'Button'
  //     }
  //   })
  //   // 断言
  //   expect(wrapper.text()).toBe('Button') // 断言按钮文本是否为Button
  // })

  test('type primary', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'primary按钮',
      },
      props: {
        type: 'primary',
      },
    });
    expect(wrapper.text()).toBe('primary按钮');

    const el = wrapper.element as HTMLElement;
    expect(el.classList.contains('bg-primary')).toBe(true);
    expect(el.classList.contains('hover:bg-primary/80')).toBe(true);
  });

  test('type success plain', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'success按钮',
      },
      props: {
        type: 'success',
        plain: true,
      },
    });
    expect(wrapper.text()).toBe('success按钮');

    const el = wrapper.element as HTMLElement;
    // plain模式下文本颜色应该是主题色
    expect(el.className).toContain('text-success');
    // plain模式下背景色应该有透明度
    expect(el.className).toContain('bg-success/30');
    // plain模式下应该有边框
    expect(el.className).toContain('border-success');
  });
});
