<template>
  <div class="common-layout">
    <!-- <i-row class="mb-[16px]">
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
    </i-row> -->

    <!-- <i-row :gutter="16">
      <i-col :span="6"><div class="grid-item bg-6"></div></i-col>
      <i-col :span="6"><div class="grid-item bg-6"></div></i-col>
      <i-col :span="6"><div class="grid-item bg-6"></div></i-col>
      <i-col :span="6"><div class="grid-item bg-6"></div></i-col>
    </i-row> -->

    <!-- <i-row :gutter="16" class="mb-[16px]">
      <i-col :span="16"><div class="grid-item bg-6"></div></i-col>
      <i-col :span="8"><div class="grid-item bg-6"></div></i-col>
    </i-row>
    <i-row :gutter="16" class="mb-[16px]">
      <i-col :span="8"><div class="grid-item bg-6"></div></i-col>
      <i-col :span="8"><div class="grid-item bg-6"></div></i-col>
      <i-col :span="4"><div class="grid-item bg-6"></div></i-col>
      <i-col :span="4"><div class="grid-item bg-6"></div></i-col>
    </i-row> -->

    <!-- <i-row :gutter="16" class="mb-[16px]">
      <i-col :span="6"><div class="grid-item bg-6"></div></i-col>
      <i-col :span="6" :offset="6"><div class="grid-item bg-6"></div></i-col>
    </i-row>
    <i-row :gutter="16" class="mb-[16px]">
      <i-col :span="6" :offset="6"><div class="grid-item bg-6"></div></i-col>
      <i-col :span="6" :offset="6"><div class="grid-item bg-6"></div></i-col>
    </i-row>
    <i-row :gutter="16" class="mb-[16px]">
      <i-col :span="12" :offset="6"><div class="grid-item bg-6"></div></i-col>
    </i-row> -->

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
    <i-row :gutter="16" class="mb-[16px]" justify="space-evenly">
      <i-col :span="6"><div class="grid-item bg-6"></div></i-col>
      <i-col :span="6"><div class="grid-item bg-4"></div></i-col>
      <i-col :span="6"><div class="grid-item bg-6"></div></i-col>
    </i-row>
  </div>
</template>

<script setup lang="ts">
// import IButton from './basic/button/Button.tsx';

// import IContainer from './basic/container/container.jsx';
// import IAside from './basic/container/aside.jsx';
// import IFooter from './basic/container/footer.jsx';
// import IHeader from './basic/container/header.jsx';
// import IMain from './basic/container/main.jsx';

import IRow from './basic/layout/row.tsx';
import ICol from './basic/layout/col.tsx';
</script>

<style lang="scss" scoped>
.grid-item {
  border-radius: 4px;
  min-height: 36px;
  width: 100%;
}
.bg-2 {
  background-color: var(--i-color-primary-2);
}
.bg-4 {
  background-color: var(--i-color-primary-4);
}
.bg-6 {
  background-color: var(--i-color-primary-6);
}
</style>
