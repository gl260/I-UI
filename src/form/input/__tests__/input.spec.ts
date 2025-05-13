import IInput from '../input';

import { shallowMount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import { h } from 'vue';

describe('IInput', () => {
  test('When <i-input> is disabled, it should have a disabled class', () => {
    const wrapper = shallowMount(IInput, {
      props: {
        disabled: true,
      },
    });
    const input = wrapper.find('input');
    expect(input.classes()).toContain('cursor-not-allowed');
  });

  test('When <i-input> is type password, it should have a password type', () => {
    const wrapper = shallowMount(IInput, {
      props: {
        type: 'password',
      },
    });
    const input = wrapper.find('input');
    expect(input.attributes('type')).toBe('password');
  });

  test('When<i-input>has a prefix and suffix, it should have corresponding padding', () => {
    const wrapper = shallowMount(IInput, {
      slots: {
        prefix: () => h('span', {}, 'prefix'),
        suffix: () => h('span', {}, 'suffix'),
      },
    });

    const input = wrapper.find('input');
    expect(input.classes()).toContain('pl-[28px]'); // 前缀的padding
    expect(input.classes()).toContain('pr-[28px]'); // 后缀的padding
  });

  test('When the type of<i-input>is textarea, it should have a rows attribute that defaults to 2', () => {
    const wrapper = shallowMount(IInput, {
      props: {
        type: 'textarea',
      },
    });

    const input = wrapper.find('textarea');
    expect(input.attributes('rows')).toBe('2');
  });
});
