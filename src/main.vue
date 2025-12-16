<template>
  <div class="common-layout">
    <i-button @click="info">默认按钮</i-button>
    <i-button @click="success">成功按钮</i-button>
    <i-button @click="warning">警告按钮</i-button>
    <i-button @click="danger">危险按钮</i-button>
    <i-button @click="top">top</i-button>
    <i-button @click="bottom">bottom</i-button>
    <i-button @click="topLeft">top-left</i-button>
    <i-button @click="topRight">top-right</i-button>
    <i-button @click="bottomLeft">bottom-left</i-button>
    <i-button @click="bottomRight">bottom-right</i-button>
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
  IMessage('this is info message');
};
const success = () => {
  IMessage({ message: 'this is success message', type: 'success' })
    .then(() => {
      return IMessage('this is info message');
    })
    .then(() => {
      return IMessage({ message: 'this is danger message', type: 'danger' });
    });
};
const warning = () => {
  IMessage({ message: 'this is warning message', type: 'warning' });
};
const danger = () => {
  IMessage({ message: 'this is danger message', type: 'danger' });
};
const top = () => {
  IMessage({ message: 'this is top message', type: 'warning', placement: 'top' });
};
const bottom = () => {
  IMessage({ message: 'this is bottom message', type: 'warning', placement: 'bottom' });
};
const topLeft = () => {
  IMessage({ message: 'this is top-left message', type: 'warning', placement: 'top-left' });
};
const topRight = () => {
  IMessage({ message: 'this is top-right message', type: 'warning', placement: 'top-right' });
};
const bottomLeft = () => {
  IMessage({ message: 'this is bottom-left message', type: 'warning', placement: 'bottom-left' });
};
const bottomRight = () => {
  IMessage({ message: 'this is bottom-right message', type: 'warning', placement: 'bottom-right' });
};
</script>

<style lang="scss" scoped></style>
