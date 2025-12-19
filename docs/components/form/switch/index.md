# Switch 开关

开关选择器。

## 基础用法

绑定 v-model 到一个 Boolean 类型的变量。

:::demo

```vue
<template>
  <i-switch v-model="isChecked" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const isChecked = ref(true);
</script>
```

:::

## 文字描述

使用active-text属性与inactive-text属性来设置开关的文字描述。

:::demo

```vue
<template>
  <div class="flex gap-3 mt-5">
    <i-switch v-model="isChecked1" active-text="大大怪将军" inactive-text="小小怪下士" />
    <i-switch v-model="isChecked2" active-text="是" inactive-text="否" />
    <i-switch v-model="isChecked3" active-text="Y" inactive-text="N" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const isChecked1 = ref(true);
const isChecked2 = ref(true);
const isChecked3 = ref(true);
</script>
```

:::

## 拓展的 value 类型

你可以设置 active-value 和 inactive-value 属性， 它们接受 Boolean、String 或 Number 类型的值。

:::demo

```vue
<template>
  <i-switch v-model="isChecked" :active-value="'开'" :inactive-value="'关'" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const isChecked = ref('开');
</script>
```

:::

## 禁用状态

设置disabled属性，接受一个Boolean，设置true即可禁用。

:::demo

```vue
<template>
  <div class="flex gap-3 mt-5">
    <i-switch v-model="isChecked" disabled />
    <i-switch v-model="isChecked" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const isChecked = ref(true);
</script>
```

:::

## 加载状态

:::demo

```vue
<template>
  <div class="flex gap-3 mt-5">
    <i-switch v-model="isChecked1" loading />
    <i-switch v-model="isChecked2" loading />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const isChecked1 = ref(true);
const isChecked2 = ref(false);
</script>
```

:::

## Switch API

### Attributes

| 属性名                | 说明                           | 类型                            | 默认值 |
| --------------------- | ------------------------------ | ------------------------------- | ------ |
| model-value / v-model | 绑定值                         | `boolean` / `string` / `number` | false  |
| disabled              | 是否禁用                       | `boolean`                       | false  |
| loading               | 是否显示加载中                 | `boolean`                       | false  |
| active-text           | switch 状态为 on 时的文字描述  | `string`                        | ''     |
| inactive-text         | switch 状态为 off 时的文字描述 | `string`                        | ''     |
| active-value          | switch 状态为 on 时的值        | `boolean` / `string` / `number` | true   |
| inactive-value        | switch 状态为 off 时的值       | `boolean` / `string` / `number` | false  |

### Events

| 事件名 | 说明                            | 类型     |
| ------ | ------------------------------- | -------- |
| change | switch 状态发生变化时的回调函数 | Function |
