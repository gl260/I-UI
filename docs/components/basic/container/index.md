# Container 布局容器

用于布局的容器组件，方便快速搭建页面的基本结构：

`<i-container>`：外层容器。 当子元素中包含 `<i-header>` 或 `<i-footer>` 时，全部子元素会垂直上下排列， 否则会水平左右排列。

`<i-header>`：顶栏容器。

`<i-aside>`：侧边栏容器。

`<i-main>`：主要区域容器。

`<i-footer>`：底栏容器。

::: tip
以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。 此外， `<el-container>`的直接子元素必须是后四个组件中的一个或多个。 后四个组件的父元素必须是一个 `<el-container>`
:::

## 常见页面布局

:::demo

```vue
<template>
  <div class="common-layout" style="height:210px">
    <i-container>
      <i-header>Header</i-header>
      <i-main>Main</i-main>
    </i-container>
  </div>
</template>
```

:::

:::demo

```vue
<template>
  <div class="common-layout" style="height:270px">
    <i-container>
      <i-header>Header</i-header>
      <i-main>Main</i-main>
      <i-footer>Footer</i-footer>
    </i-container>
  </div>
</template>
```

:::

:::demo

```vue
<template>
  <div class="common-layout" style="height: 150px">
    <i-container>
      <i-aside>Aside</i-aside>
      <i-main>Main</i-main>
    </i-container>
  </div>
</template>
```

:::

:::demo

```vue
<template>
  <div class="common-layout" style="height:210px">
    <i-container>
      <i-header>Header</i-header>
      <i-container>
        <i-aside>Aside</i-aside>
        <i-main>Main</i-main>
      </i-container>
    </i-container>
  </div>
</template>
```

:::

:::demo

```vue
<template>
  <div class="common-layout" style="height:270px">
    <i-container>
      <i-header>Header</i-header>
      <i-container>
        <i-aside>Aside</i-aside>
        <i-container>
          <i-main>Main</i-main>
          <i-footer>Footer</i-footer>
        </i-container>
      </i-container>
    </i-container>
  </div>
</template>
```

:::

:::demo

```vue
<template>
  <div class="common-layout" style="height:270px">
    <i-container>
      <i-aside>Aside</i-aside>
      <i-container>
        <i-header>Header</i-header>
        <i-main>Main</i-main>
        <i-footer>Footer</i-footer>
      </i-container>
    </i-container>
  </div>
</template>
```

:::

## Container API

### Container Slots

| 插槽名  | 说明           | 子标签                                     |
| ------- | -------------- | ------------------------------------------ |
| default | 自定义默认内容 | Container / Header / Aside / Main / Footer |

## Header API

### Header Attributes

| 属性名 | 说明     | 类型     | 默认值 |
| ------ | -------- | -------- | ------ |
| height | 顶栏高度 | `string` | 60px   |

### Header Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## Aside API

### Aside Attributes

| 属性名 | 说明       | 类型     | 默认值 |
| ------ | ---------- | -------- | ------ |
| width  | 侧边栏宽度 | `string` | 200px  |

### Aside Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## Main API

### Main Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## Footer API

### Footer Attributes

| 属性名 | 说明     | 类型     | 默认值 |
| ------ | -------- | -------- | ------ |
| height | 底栏高度 | `string` | 60px   |

### Footer Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
