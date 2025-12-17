# Message 消息提示

常用于主动操作后的反馈提示。

## 基础用法

默认情况下在顶部显示并在 3 秒后消失。

:::demo

```vue
<template>
  <i-button @click="info">Show message</i-button>
</template>
<script setup lang="ts">
import { IMessage } from 'mini-i-ui';

const info = () => {
  IMessage('this is info message');
};
</script>
```

:::

## 不同状态

用来显示「成功、警告、危险、消息」类的操作反馈。

当需要自定义更多属性时，Message 也可以接收一个对象为参数。 比如，设置 type 字段可以定义不同的状态，默认为info。

:::demo

```vue
<template>
  <div class="flex gap-3 mt-5">
    <i-button @click="success">success</i-button>
    <i-button @click="warning">warning</i-button>
    <i-button @click="danger">danger</i-button>
    <i-button @click="info">info</i-button>
  </div>
</template>
<script setup lang="ts">
import { IMessage } from 'mini-i-ui';

const success = () => {
  IMessage({
    message: 'this is success message',
    type: 'success',
  });
};
const warning = () => {
  IMessage.warning('this is warning message');
};
const danger = () => {
  IMessage.danger('this is danger message');
};
const info = () => {
  IMessage.info('this is info message');
};
</script>
```

:::

## 修改延时

自定义时长 10s，默认时长为 3s。

:::demo

```vue
<template>
  <i-button @click="success">10s 后消失</i-button>
</template>
<script setup lang="ts">
import { IMessage } from 'mini-i-ui';

const success = () => {
  IMessage.success('自定义10s', 10);
};
</script>
```

:::

## Placement

控制消息出现的位置。 消息可以显示在查看端口的顶部(默认) 或其他位置。

:::demo

```vue
<template>
  <div class="flex gap-3 mt-5">
    <i-button @click="top">top</i-button>
    <i-button @click="topLeft">top-left</i-button>
    <i-button @click="topRight">top-right</i-button>
    <i-button @click="bottom">bottom</i-button>
    <i-button @click="bottomLeft">bottom-left</i-button>
    <i-button @click="bottomRight">bottom-right</i-button>
  </div>
</template>
<script setup lang="ts">
import { IMessage } from 'mini-i-ui';

const top = () => {
  IMessage({ message: 'this is top message', type: 'warning', placement: 'top' });
};
const topLeft = () => {
  IMessage({ message: 'this is top-left message', type: 'warning', placement: 'top-left' });
};
const topRight = () => {
  IMessage({ message: 'this is top-right message', type: 'warning', placement: 'top-right' });
};
const bottom = () => {
  IMessage({ message: 'this is bottom message', type: 'warning', placement: 'bottom' });
};
const bottomLeft = () => {
  IMessage({ message: 'this is bottom-left message', type: 'warning', placement: 'bottom-left' });
};
const bottomRight = () => {
  IMessage({ message: 'this is bottom-right message', type: 'warning', placement: 'bottom-right' });
};
</script>
```

:::

## Promise 接口

可以通过 then 接口在关闭后运行 callback 。以上用例将在每个 message 将要结束时通过 then 显示新的 message 。

:::demo

```vue
<template>
  <i-button @click="success">Promise</i-button>
</template>
<script setup lang="ts">
import { IMessage } from 'mini-i-ui';

const success = () => {
  IMessage.success('success Loading...')
    .then(() => IMessage.warning('warning Loading...'))
    .then(() => IMessage.danger('danger Loading...'));
};
</script>
```

:::

## Message API

组件提供了一些静态方法，使用方式和参数如下：

- IMessage.success(content, [duration])
- IMessage.warning(content, [duration])
- IMessage.danger(content, [duration])
- IMessage.info(content, [duration])

| 参数     | 说明                                          | 类型                           | 默认值 |
| -------- | --------------------------------------------- | ------------------------------ | ------ |
| content  | 提示内容                                      | `string` `VNode` `() => VNode` | -      |
| duration | 自动关闭的延时，单位秒。设为 0 时不自动关闭。 | `number`                       | 3      |

组件同时提供 promise 接口

- message[Type](content, [duration]).then(afterClose)

其中message[Type] 是组件已经提供的静态方法。then 接口返回值是 Promise

也可以对象的形式传递参数：

- message.success(config)
- message.warning(config)
- message.danger(config)
- message.info(config)

`config`对象属性如下:

| 参数      | 说明                                          | 类型                           | 默认值 |
| --------- | --------------------------------------------- | ------------------------------ | ------ |
| message   | 提示内容                                      | `string` `VNode` `() => VNode` | -      |
| duration  | 自动关闭的延时，单位秒。设为 0 时不自动关闭。 | `number`                       | 3      |
| placement | 消息放置位置。                                | `string`                       | top    |
