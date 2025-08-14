# Radio 单选框

在一组备选项中进行单选

## 基础用法

:::demo

```vue
<template>
  <i-radio-group v-model="value">
    <i-radio value="1">大大怪将军</i-radio>
    <i-radio value="2">小小怪下士</i-radio>
    <i-radio value="3">尼根</i-radio>
  </i-radio-group>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref<string>('1');
</script>
```

:::

## 禁用状态

`disabled` 属性可以用来控制单选框的禁用状态。

你只需要为单选框设置 `disabled` 属性就能控制其禁用状态。

:::demo

```vue
<template>
  <i-radio-group v-model="value">
    <i-radio value="1" disabled>大大怪将军</i-radio>
    <i-radio value="2" disabled>小小怪下士</i-radio>
    <i-radio value="3" disabled>尼根</i-radio>
  </i-radio-group>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref<string>('1');
</script>
```

:::

## 按钮样式

只需要把 `el-radio` 元素换成 `el-radio-button` 元素即可

:::demo

```vue
<template>
  <i-radio-group v-model="value">
    <i-radio-button value="1" disabled>大大怪将军</i-radio-button>
    <i-radio-button value="2" disabled>小小怪下士</i-radio-button>
    <i-radio-button value="3" disabled>尼根</i-radio-button>
  </i-radio-group>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref<string>('1');
</script>
```

:::

## Radio API

### Radio Attributes

| 属性名  | 说明         | 类型                            | 默认值 |
| ------- | ------------ | ------------------------------- | ------ |
| v-model | 选中项绑定值 | `string` / `number` / `boolean` | --     |

### Radio Events

| 事件名 | 说明                   | 类型     |
| ------ | ---------------------- | -------- |
| change | 绑定值变化时触发的事件 | Function |

## RadioGroup API

### RadioGroup Attributes

| 属性名   | 说明                                                 | 类型                            | 默认值 |
| -------- | ---------------------------------------------------- | ------------------------------- | ------ |
| value    | 单选框的值                                           | `string` / `number` / `boolean` | --     |
| label    | 单选框的 label 如果没有 value， label则作为value使用 | `string` / `number` / `boolean` | --     |
| disabled | 是否禁用单选框                                       | `boolean`                       | false  |
| name     | 原生 name 属性                                       | `string`                        | --     |

### RadioGroup Events

| 事件名 | 说明                   | 类型     |
| ------ | ---------------------- | -------- |
| change | 绑定值变化时触发的事件 | Function |

## RadioButton API

### RadioButton Attributes

| 属性名   | 说明                                                 | 类型                            | 默认值 |
| -------- | ---------------------------------------------------- | ------------------------------- | ------ |
| value    | 单选框的值                                           | `string` / `number` / `boolean` | --     |
| label    | 单选框的 label 如果没有 value， label则作为value使用 | `string` / `number` / `boolean` | --     |
| disabled | 是否禁用单选框                                       | `boolean`                       | false  |
| name     | 原生 name 属性                                       | `string`                        | --     |
