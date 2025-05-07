# Layout 布局

通过基础的 24 分栏，迅速简便地创建布局。

## 基础布局

使用列创建基础网格布局。

通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。

:::demo

```vue
<template>
  <i-row class="mb-[16px]">
    <i-col :span="24"><div class="grid-item bg-6"></div></i-col>
  </i-row>
  <i-row class="mb-[16px]">
    <i-col :span="12"><div class="grid-item bg-2"></div></i-col>
    <i-col :span="12"><div class="grid-item bg-4"></div></i-col>
  </i-row>
  <i-row class="mb-[16px]">
    <i-col :span="8"><div class="grid-item bg-4"></div></i-col>
    <i-col :span="8"><div class="grid-item bg-2"></div></i-col>
    <i-col :span="8"><div class="grid-item bg-4"></div></i-col>
  </i-row>
  <i-row class="mb-[16px]">
    <i-col :span="6"><div class="grid-item bg-4"></div></i-col>
    <i-col :span="6"><div class="grid-item bg-2"></div></i-col>
    <i-col :span="6"><div class="grid-item bg-4"></div></i-col>
    <i-col :span="6"><div class="grid-item bg-2"></div></i-col>
  </i-row>
  <i-row class="mb-[16px]">
    <i-col :span="4"><div class="grid-item bg-4"></div></i-col>
    <i-col :span="4"><div class="grid-item bg-2"></div></i-col>
    <i-col :span="4"><div class="grid-item bg-4"></div></i-col>
    <i-col :span="4"><div class="grid-item bg-2"></div></i-col>
    <i-col :span="4"><div class="grid-item bg-4"></div></i-col>
    <i-col :span="4"><div class="grid-item bg-2"></div></i-col>
  </i-row>
</template>
```

:::

## 分栏间隔

支持列间距。

行提供 gutter 属性来指定列之间的间距，其默认值为0。

:::demo

```vue
<template>
  <i-row :gutter="16">
    <i-col :span="6"><div class="grid-item bg-6"></div></i-col>
    <i-col :span="6"><div class="grid-item bg-6"></div></i-col>
    <i-col :span="6"><div class="grid-item bg-6"></div></i-col>
    <i-col :span="6"><div class="grid-item bg-6"></div></i-col>
  </i-row>
</template>
```

:::

## 混合布局

通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

:::demo

```vue
<template>
  <i-row :gutter="16" class="mb-[16px]">
    <i-col :span="16"><div class="grid-item bg-6"></div></i-col>
    <i-col :span="8"><div class="grid-item bg-6"></div></i-col>
  </i-row>
  <i-row :gutter="16" class="mb-[16px]">
    <i-col :span="8"><div class="grid-item bg-6"></div></i-col>
    <i-col :span="8"><div class="grid-item bg-6"></div></i-col>
    <i-col :span="4"><div class="grid-item bg-6"></div></i-col>
    <i-col :span="4"><div class="grid-item bg-6"></div></i-col>
  </i-row>
  <i-row :gutter="16">
    <i-col :span="4"><div class="grid-item bg-6"></div></i-col>
    <i-col :span="16"><div class="grid-item bg-6"></div></i-col>
    <i-col :span="4"><div class="grid-item bg-6"></div></i-col>
  </i-row>
</template>
```

:::

## 列偏移

可以指定列偏移量。

通过制定 col 组件的 offset 属性可以指定分栏偏移的栏数。

:::demo

```vue
<template>
  <i-row :gutter="16" class="mb-[16px]">
    <i-col :span="6"><div class="grid-item bg-6"></div></i-col>
    <i-col :span="6" :offset="6"><div class="grid-item bg-6"></div></i-col>
  </i-row>
  <i-row :gutter="16" class="mb-[16px]">
    <i-col :span="6" :offset="6"><div class="grid-item bg-6"></div></i-col>
    <i-col :span="6" :offset="6"><div class="grid-item bg-6"></div></i-col>
  </i-row>
  <i-row :gutter="16">
    <i-col :span="12" :offset="6"><div class="grid-item bg-6"></div></i-col>
  </i-row>
</template>
```

:::

## 对齐方式

默认使用 flex 布局来对分栏进行灵活的对齐。

您可以通过justify 属性来定义子元素的排版方式，其取值为`start`、`center`、`end`、`space-between`、`space-around`或`space-evenly`。

:::demo

```vue
<template>
  <i-row :gutter="16" class="mb-[16px]">
    <i-col :span="6"><div class="grid-item bg-6"></div></i-col>
    <i-col :span="6"><div class="grid-item bg-4"></div></i-col>
    <i-col :span="6"><div class="grid-item bg-6"></div></i-col>
  </i-row>
  <i-row :gutter="16" class="mb-[16px]" justify="center">
    <i-col :span="6"><div class="grid-item bg-6"></div></i-col>
    <i-col :span="6"><div class="grid-item bg-4"></div></i-col>
    <i-col :span="6"><div class="grid-item bg-6"></div></i-col>
  </i-row>
  <i-row :gutter="16" class="mb-[16px]" justify="end">
    <i-col :span="6"><div class="grid-item bg-6"></div></i-col>
    <i-col :span="6"><div class="grid-item bg-4"></div></i-col>
    <i-col :span="6"><div class="grid-item bg-6"></div></i-col>
  </i-row>
  <i-row :gutter="16" class="mb-[16px]" justify="space-between">
    <i-col :span="6"><div class="grid-item bg-6"></div></i-col>
    <i-col :span="6"><div class="grid-item bg-4"></div></i-col>
    <i-col :span="6"><div class="grid-item bg-6"></div></i-col>
  </i-row>
  <i-row :gutter="16" class="mb-[16px]" justify="space-around">
    <i-col :span="6"><div class="grid-item bg-6"></div></i-col>
    <i-col :span="6"><div class="grid-item bg-4"></div></i-col>
    <i-col :span="6"><div class="grid-item bg-6"></div></i-col>
  </i-row>
  <i-row :gutter="16" justify="space-evenly">
    <i-col :span="6"><div class="grid-item bg-6"></div></i-col>
    <i-col :span="6"><div class="grid-item bg-4"></div></i-col>
    <i-col :span="6"><div class="grid-item bg-6"></div></i-col>
  </i-row>
</template>
```

:::

## Row API

### Row Slots

| 属性名  | 说明                      | 类型                                                                 | 默认值 |
| ------- | ------------------------- | -------------------------------------------------------------------- | ------ |
| gutter  | 栅格间隔                  | `number`                                                             | 0      |
| justify | flex 布局下的水平排列方式 | `start` `center` `end` `space-between` `space-around` `space-evenly` | start  |

### Row Slots

| 插槽名  | 说明           | 子标签 |
| ------- | -------------- | ------ |
| default | 自定义默认内容 | Col    |

## Col API​

### Col Attributes

| 属性名 | 说明               | 类型     | 默认值 |
| ------ | ------------------ | -------- | ------ |
| span   | 栅格占据的列数     | `number` | 24     |
| offset | 栅格左侧的间隔格数 | `number` | 0      |

### Col Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
