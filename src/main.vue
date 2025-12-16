<template>
  <div class="common-layout">
    <i-button @click="info">默认按钮</i-button>
    <i-button @click="success">成功按钮</i-button>
    <i-button @click="warning">警告按钮</i-button>
    <i-button @click="danger">危险按钮</i-button>
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue';
import IButton from './basic/button/button.tsx';

// import IContainer from './basic/container/container.jsx';
// import IAside from './basic/container/aside.jsx';
// import IFooter from './basic/container/footer.jsx';
// import IHeader from './basic/container/header.jsx';
// import IMain from './basic/container/main.jsx';

// import IRow from './basic/layout/row.tsx';
// import ICol from './basic/layout/col.tsx';

// import IInput from './form/input/input.tsx';

// import { IRadio, IRadioButton, IRadioGroup } from './form/radio/index.ts';

// import { IAlert } from './feedback/alert/index.ts';
import { IMessage } from './feedback/message/index.ts';

const info = () => {
  // IMessage({ message: '这是一条信息', type: 'info' });
  IMessage('这是一条信息');
};
const success = () => {
  IMessage({ message: '这是一条成功信息', type: 'success' });
};
const warning = () => {
  IMessage({ message: '这是一条警告信息', type: 'warning' });
};
const danger = () => {
  IMessage({ message: '这是一条危险信息', type: 'danger' });
};
</script>

<style lang="scss" scoped></style>
