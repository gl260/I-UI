<template>
  <div class="common-layout">
    <i-alert type="success" title="success" closable show-icon>
      成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案
    </i-alert>
    <i-alert
      type="warning"
      description="警告提示的文案警告提示的文案警告提示的文案警告提示的文案警告提示的文案警告提示的文案"
      closable
      show-icon
    ></i-alert>
    <i-alert type="danger" description="错误提示的文案" closable show-icon></i-alert>
    <i-alert type="danger" description="错误提示的文案" closable>
      <template #icon><i class="i-line-md-emoji-angry"></i></template>
    </i-alert>
    <i-alert type="info" description="信息提示的文案" closable show-icon></i-alert>
    <i-alert type="primary" title="primary" description="主要提示的文案" close-text="关闭">
      <template #icon><i class="i-line-md-emoji-smile"></i></template>
    </i-alert>
    <i-alert type="primary" title="primary" close-text="关闭">
      <template #icon><i class="i-line-md-emoji-smile"></i></template>
      <template #description>
        <span>
          这个群不是给你免费待着的，平常住小区都要交物业费呢，同理的，群里待着也要交钱的，今后<span style="color: red">每周四交50元</span
          >到我这里，别问为什么，我是群财务长，跟什么乱七八糟的疯狂星期四无关
        </span>
      </template>
    </i-alert>
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue';
// import IButton from './basic/button/Button.tsx';

// import IContainer from './basic/container/container.jsx';
// import IAside from './basic/container/aside.jsx';
// import IFooter from './basic/container/footer.jsx';
// import IHeader from './basic/container/header.jsx';
// import IMain from './basic/container/main.jsx';

// import IRow from './basic/layout/row.tsx';
// import ICol from './basic/layout/col.tsx';

// import IInput from './form/input/input.tsx';

// import { IRadio, IRadioButton, IRadioGroup } from './form/radio/index.ts';

import { IAlert } from './feedback/alert/index.ts';
</script>

<style lang="scss" scoped></style>
