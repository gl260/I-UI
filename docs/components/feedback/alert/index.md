# Alert 提示

用于页面中展示重要的提示信息。

## 基础用法

Alert 组件不属于浮层元素，不会自动消失或关闭。
Alert 组件提供5种类型，由 type 属性指定，默认值为 info。

:::demo

```vue
<template>
  <div class="flex flex-col gap-4">
    <i-alert type="success" description="Success alert" closable></i-alert>
    <i-alert type="warning" description="Warning alert" closable></i-alert>
    <i-alert type="danger" description="Danger alert" closable></i-alert>
    <i-alert type="info" description="Info alert" closable></i-alert>
    <i-alert type="primary" description="Primary alert" closable></i-alert>
  </div>
</template>
```

:::

## 自定义关闭按钮

你可以设置 Alert 组件是否为可关闭状态， 关闭按钮的内容以及关闭时的回调函数同样可以定制。 closable 属性决定 Alert 组件是否可关闭， 该属性接受一个 Boolean，默认为 false。
你可以设置 close-text 属性来代替右侧的关闭图标， 需要注意的是 close-text 必须是一个字符串。 当 Alert 组件被关闭时会触发 close 事件。

:::demo

```vue
<template>
  <div class="flex flex-col gap-4">
    <i-alert type="success" description="Success alert" close-text="close~"></i-alert>
    <i-alert type="warning" title="Warning" description="warning alert" close-text="close" @close="onClose"></i-alert>
  </div>
</template>
<script setup lang="ts">
const onClose = () => {
  console.log('I was closed.');
};
</script>
```

:::

## 使用图标

:::demo

```vue
<template>
  <div class="flex flex-col gap-4">
    <i-alert type="success" description="Success Tips" closable show-icon></i-alert>
    <i-alert type="warning" description="Warning Tips" closable show-icon></i-alert>
    <i-alert type="danger" description="Danger Tips" closable show-icon></i-alert>
    <i-alert type="info" description="Info Tips" closable show-icon></i-alert>
    <i-alert type="success" title="Success" description="Success Tips" closable show-icon></i-alert>
    <i-alert type="warning" title="Warning" description="Warning Tips" closable show-icon></i-alert>
    <i-alert type="danger" title="Danger" description="Danger Tips" closable show-icon></i-alert>
    <i-alert type="info" title="Info" description="Info Tips" closable show-icon></i-alert>
  </div>
</template>
```

:::

## 自定义图标

:::demo

```vue
<template>
  <div class="flex flex-col gap-4">
    <i-alert type="primary" description="大大怪将军">
      <template #icon><i class="i-line-md-emoji-smile"></i></template>
    </i-alert>
    <i-alert type="primary" title="primary" description="小小怪下士">
      <template #icon><i class="i-line-md-emoji-smile"></i></template>
    </i-alert>
  </div>
</template>
```

:::

## 辅助性文字介绍的提示

:::demo

```vue
<template>
  <i-alert type="danger" title="Danger">
    <template #icon><i class="i-line-md-emoji-angry"></i></template>
    <template #description>
      <span>
        这个群不是给你免费待着的，平常住小区都要交物业费呢，同理的，群里待着也要交钱的，今后<span style="color: red">每周四交50元</span
        >到我这里，别问为什么，我是群财务长，跟什么乱七八糟的疯狂星期四无关
      </span>
    </template>
  </i-alert>
</template>
```

:::

## Input API

### Attributes

| 属性名      | 说明               | 类型                                               | 默认值 |
| ----------- | ------------------ | -------------------------------------------------- | ------ |
| title       | Alert 标题         | `string`                                           | --     |
| type        | Alert 类型。       | `success` / `warning` / `danger` /`info`/`primary` | info   |
| description | 描述性文本         | `string`                                           | --     |
| closable    | 是否可以关闭       | `boolean`                                          | false  |
| close-text  | 自定义关闭按钮文本 | `string`                                           | --     |
| show-icon   | 是否显示类型图标   | `boolean`                                          | false  |

### Event

| 名称  | 描述                    | 类型       |
| ----- | ----------------------- | ---------- |
| close | 关闭 Alert 时触发的事件 | `Function` |

### Slots

| 名称        | 描述           |
| ----------- | -------------- |
| default     | Alert 内容描述 |
| icon        | icon 的内容    |
| description | 描述性文本     |
