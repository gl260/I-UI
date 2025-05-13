# Input 输入框

通过鼠标或键盘输入内容

## 基础用法

:::demo

```vue
<template>
  <i-input v-model="value" placeholder="Please input" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref<string>('');
</script>
```

:::

## 禁用状态

通过 `disabled` 属性指定是否禁用 input 组件

:::demo

```vue
<template>
  <i-input v-model="value" disabled placeholder="Please input" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref<string>('');
</script>
```

:::

## 一键清空

使用 `clearable` 属性即可得到一个可一键清空的输入框

:::demo

```vue
<template>
  <i-input v-model="value" clearable placeholder="Please input" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref<string>('');
</script>
```

:::

## 密码框

设置 type 为 `password` 可得到一个密码框

使用 `show-password` 属性即可得到一个可切换显示隐藏的密码框

:::demo

```vue
<template>
  <div class="flex gap-3 mt-5">
    <i-input v-model="value" type="password" placeholder="Please input" />
    <i-input v-model="value" type="password" show-password placeholder="Please input" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref<string>('123');
</script>
```

:::

## 带图标的输入框

在输入框上添加前缀或后缀图标。

:::demo

```vue
<template>
  <div class="flex flex-col gap-4">
    <i-input v-model="value" placeholder="Please input" style="width: 100%">
      <template #prefix>
        <i class="i-line-md-emoji-smile"></i>
      </template>
      <template #suffix>
        <i class="i-line-md-bell-loop"></i>
      </template>
    </i-input>

    <i-input v-model="value" placeholder="Please input" style="width: 100%">
      <template #prefix>
        <i class="i-line-md-sunny-outline-loop"></i>
      </template>
      <template #suffix>
        <i class="i-line-md-phone-call-loop"></i>
      </template>
    </i-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref<string>('');
</script>
```

:::

## 尺寸

使用 size 属性改变输入框大小。 除了默认大小外，还有另外两个选项：`small`，`large`。

:::demo

```vue
<template>
  <div class="flex flex-col gap-4">
    <i-input v-model="value" size="small" placeholder="Please input">
      <template #suffix>
        <i class="i-line-md-bell-loop"></i>
      </template>
    </i-input>
    <i-input v-model="value" placeholder="Please input" />
    <i-input v-model="value" size="large" placeholder="Please input">
      <template #suffix>
        <i class="i-line-md-bell-loop"></i>
      </template>
    </i-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref<string>('');
</script>
```

:::

## 文本域

用于多行输入。 添加 `type="textarea"` 属性来将 `input` 元素转换为原生的 ``textarea` 元素。

文本域高度可通过 `rows` 属性控制

:::demo

```vue
<template>
  <div class="flex flex-col gap-4">
    <i-input v-model="value" type="textarea" :rows="2" placeholder="Please input" />
    <i-input v-model="value" disabled type="textarea" :rows="2" placeholder="Please input" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref<string>('');
</script>
```

:::

## 输入长度限制

使用 `maxlength` , 来控制输入内容的最大字数。

允许你通过设置 show-word-limit 到 true 来显示剩余字数。

:::demo

```vue
<template>
  <div class="flex flex-col gap-4">
    <i-input v-model="value" maxlength="10" show-word-limit placeholder="Please input" />
    <i-input v-model="value" type="textarea" maxlength="10" show-word-limit placeholder="Please input" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref<string>('');
</script>
```

:::

## 自定义状态

使用 `status` 为 Input 添加状态，可选 `error` 或者 `warning`。

:::demo

```vue
<template>
  <div class="flex flex-col gap-4">
    <i-input v-model="value" status="error" placeholder="Error" style="width: 100%" />
    <i-input v-model="value" status="warning" placeholder="Warning" style="width: 100%" />
    <i-input v-model="value" status="error" placeholder="Error with prefix" style="width: 100%">
      <template #prefix>
        <i class="i-line-md-emoji-frown"></i>
      </template>
    </i-input>
    <i-input v-model="value" status="warning" placeholder="Warning with prefix" style="width: 100%">
      <template #prefix>
        <i class="i-line-md-emoji-neutral"></i>
      </template>
    </i-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref<string>('');
</script>
```

:::

## Input API

### Attributes

| 属性名                | 说明                                                           | 类型                         | 默认值  |
| --------------------- | -------------------------------------------------------------- | ---------------------------- | ------- |
| type                  | 类型                                                           | `text` `textarea` `password` | text    |
| model-value / v-model | 绑定值                                                         | `string` / `number`          | --      |
| minlength             | 原生属性，最小输入长度                                         | `string` / `number`          | --      |
| maxlength             | 原生属性，最大输入长度                                         | `string` / `number`          | --      |
| placeholder           | 输入框占位文本                                                 | `string`                     | --      |
| disabled              | 是否禁用                                                       | `boolean`                    | false   |
| clearable             | 是否显示清除按钮，只有当 type 不是 textarea时生效              | `boolean`                    | false   |
| size                  | 输入框尺寸，只在 type 不为 'textarea' 时有效                   | `small` `default` `large`    | default |
| show-password         | 是否显示切换密码图标                                           | `boolean`                    | false   |
| rows                  | 输入框行数，仅 type 为 'textarea' 时有效                       | `number`                     | 2       |
| show-word-limit       | 是否显示统计字数, 只在 type 为 'text' 或 'textarea' 的时候生效 | `boolean`                    | false   |
| autocomplete          | 原生 autocomplete 属性                                         | `string`                     | off     |
| name                  | 原生 name 属性                                                 | `string`                     | --      |
| min                   | 原生属性，设置最小值                                           | --                           | --      |
| max                   | 原生属性，设置最大值                                           | --                           | --      |
| step                  | 原生属性，设置输入字段的合法数字间隔                           | --                           | --      |
| readonly              | 原生属性，，是否只读                                           | `boolean`                    | false   |

### Events

| 事件名 | 说明                                                        | 类型     |
| ------ | ----------------------------------------------------------- | -------- |
| blur   | 当选择器的输入框失去焦点时触发                              | Function |
| focus  | 当选择器的输入框获得焦点时触发                              | Function |
| change | 仅当 modelValue 改变时，当输入框失去焦点或用户按Enter时触发 | Function |
| clear  | 在点击由 `clearable` 属性生成的清空按钮时触发               | Function |

## Slots

| 插槽名 | 说明                                          |
| ------ | --------------------------------------------- |
| prefix | 输入框头部内容，只对非 `type="textarea"` 有效 |
| suffix | 输入框尾部内容，只对非 `type="textarea"` 有效 |
