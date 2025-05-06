# Button 按钮

## 基础用法

<div class="flex gap-3 mt-5">
  <i-button>默认按钮</i-button>
  <i-button type="primary">Primary</i-button>
  <i-button type="success">Success</i-button>
  <i-button type="warning">Warning</i-button>
  <i-button type="danger">Danger</i-button>
  <i-button type="info">Info</i-button>
</div>

<div class="flex gap-3 mt-5">
  <i-button plain>默认按钮</i-button>
  <i-button plain type="primary">Primary</i-button>
  <i-button plain type="success">Success</i-button>
  <i-button plain type="warning">Warning</i-button>
  <i-button plain type="danger">Danger</i-button>
  <i-button plain type="info">Info</i-button>
</div>

<div class="flex gap-3 mt-5">
  <i-button raund>默认按钮</i-button>
  <i-button raund type="primary">Primary</i-button>
  <i-button raund type="success">Success</i-button>
  <i-button raund type="warning">Warning</i-button>
  <i-button raund type="danger">Danger</i-button>
  <i-button raund type="info">Info</i-button>
</div>

<div class="flex gap-3 mt-5">
  <i-button icon="search" circle></i-button>
  <i-button icon="edit" circle type="primary"></i-button>
  <i-button icon="checkmark" circle type="success"></i-button>
  <i-button icon="star" circle type="warning"></i-button>
  <i-button icon="star" circle type="danger"></i-button>
  <i-button icon="mail" circle type="info"></i-button>
</div>

:::demo 使用`type`、`plain`属性来定义 Button 的样式。

```vue
<template>
  <div class="flex gap-3 mt-5">
    <i-button>默认按钮</i-button>
    <i-button type="primary">Primary</i-button>
    <i-button type="success">Success</i-button>
    <i-button type="warning">Warning</i-button>
    <i-button type="danger">Danger</i-button>
    <i-button type="info">Info</i-button>
  </div>

  <div class="flex gap-3 mt-5">
    <i-button plain>默认按钮</i-button>
    <i-button plain type="primary">Primary</i-button>
    <i-button plain type="success">Success</i-button>
    <i-button plain type="warning">Warning</i-button>
    <i-button plain type="danger">Danger</i-button>
    <i-button plain type="info">Info</i-button>
  </div>

  <div class="flex gap-3 mt-5">
    <i-button raund>默认按钮</i-button>
    <i-button raund type="primary">Primary</i-button>
    <i-button raund type="success">Success</i-button>
    <i-button raund type="warning">Warning</i-button>
    <i-button raund type="danger">Danger</i-button>
    <i-button raund type="info">Info</i-button>
  </div>

  <div class="flex gap-3 mt-5">
    <i-button icon="search" circle></i-button>
    <i-button icon="edit" circle type="primary"></i-button>
    <i-button icon="checkmark" circle type="success"></i-button>
    <i-button icon="star" circle type="warning"></i-button>
    <i-button icon="star" circle type="danger"></i-button>
    <i-button icon="mail" circle type="info"></i-button>
  </div>
</template>
```

:::

## 禁用状态

<div class="flex gap-3 mt-5">
  <i-button disabled>默认按钮</i-button>
  <i-button disabled type="primary">Primary</i-button>
  <i-button disabled type="success">Success</i-button>
  <i-button disabled type="warning">Warning</i-button>
  <i-button disabled type="danger">Danger</i-button>
  <i-button disabled type="info">Info</i-button>
</div>

<div class="flex gap-3 mt-5">
  <i-button disabled plain>默认按钮</i-button>
  <i-button disabled plain type="primary">Primary</i-button>
  <i-button disabled plain type="success">Success</i-button>
  <i-button disabled plain type="warning">Warning</i-button>
  <i-button disabled plain type="danger">Danger</i-button>
  <i-button disabled plain type="info">Info</i-button>
</div>

:::demo 你可以使用 disabled 属性来定义按钮是否被禁用。

```vue
<template>
  <div class="flex gap-3 mt-5">
    <i-button disabled>默认按钮</i-button>
    <i-button disabled type="primary">Primary</i-button>
    <i-button disabled type="success">Success</i-button>
    <i-button disabled type="warning">Warning</i-button>
    <i-button disabled type="danger">Danger</i-button>
    <i-button disabled type="info">Info</i-button>
  </div>

  <div class="flex gap-3 mt-5">
    <i-button disabled plain>默认按钮</i-button>
    <i-button disabled plain type="primary">Primary</i-button>
    <i-button disabled plain type="success">Success</i-button>
    <i-button disabled plain type="warning">Warning</i-button>
    <i-button disabled plain type="danger">Danger</i-button>
    <i-button disabled plain type="info">Info</i-button>
  </div>
</template>
```

:::

## 图标按钮

<div class="flex gap-3 mt-5">
  <i-button icon="search" circle></i-button>
  <i-button icon="edit" circle type="primary"></i-button>
  <i-button icon="checkmark" circle type="success"></i-button>
  <i-button icon="star" type="warning">warning</i-button>
  <i-button icon="star" type="danger">danger</i-button>
  <i-button icon="mail" type="info">info</i-button>
</div>

:::demo 使用 icon 属性来为按钮添加图标

```vue
<template>
  <div class="flex gap-3 mt-5">
    <i-button icon="search" circle></i-button>
    <i-button icon="edit" circle type="primary"></i-button>
    <i-button icon="checkmark" circle type="success"></i-button>
    <i-button icon="star" type="warning">warning</i-button>
    <i-button icon="star" type="danger">danger</i-button>
    <i-button icon="mail" type="info">info</i-button>
  </div>
</template>
```

:::

## 按钮尺寸

<div class="flex items-center gap-3 mt-5">
  <i-button type="primary" size="small">Small</i-button>
  <i-button type="primary">Default</i-button>
  <i-button type="primary" size="large">Large</i-button>
</div>
<div class="flex items-center gap-3 mt-5">
  <i-button plain icon="search" type="success" circle size="small"></i-button>
  <i-button plain icon="search" type="success" circle></i-button>
  <i-button plain icon="search" type="success" circle size="large"></i-button>
</div>

:::demo 使用 size 属性额外配置尺寸，可使用 small 和 large 两种值

```vue
<template>
  <div class="flex items-center gap-3 mt-5">
    <i-button type="primary" size="small">Small</i-button>
    <i-button type="primary">Default</i-button>
    <i-button type="primary" size="large">Large</i-button>
  </div>
  <div class="flex items-center gap-3 mt-5">
    <i-button plain icon="search" type="success" circle size="small"></i-button>
    <i-button plain icon="search" type="success" circle></i-button>
    <i-button plain icon="search" type="success" circle size="large"></i-button>
  </div>
</template>
```

:::

## 加载状态按钮

<div class="flex items-center gap-3 mt-5">
  <i-button type="primary" loading>搜索</i-button>
    <i-button type="primary" raund loading>搜索</i-button>
    <i-button type="primary" loading>
      <template #loading>
        <i class="i-tabler-loader-3 animate-spin inline-block"></i>
      </template>
      自定义搜索
    </i-button>
</div>

::: tip
可以使用 loading 插槽自定义loading图标
ps: loading 插槽优先级高于loading属性
:::

:::demo 通过设置 loading 属性为 true 来显示加载中状态

```vue
<template>
  <div class="flex items-center gap-3 mt-5">
    <i-button type="primary" loading>搜索</i-button>
    <i-button type="primary" raund loading>搜索</i-button>
    <i-button type="primary" loading>
      <template #loading>
        <i class="i-tabler-loader-3 animate-spin inline-block"></i>
      </template>
      自定义搜索
    </i-button>
  </div>
</template>
```

:::
