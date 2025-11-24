# 快速开始

本节将介绍如何在项目中使用 I-UI。

## 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```ts
import { createApp } from 'vue';
import App from './App.vue';
import IUI from 'mini-i-ui';
import 'mini-i-ui/style.css';

const app = createApp(App);
app.use(IUI);
app.mount('#app');
```

## 按需导入

### 自动按需导入

开发中...
