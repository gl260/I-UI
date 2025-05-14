<template>
  <div class="common-layout">
    <i-radio-group v-model="value">
      <i-radio value="1">大大怪将军</i-radio>
      <i-radio value="2">小小怪下士</i-radio>
    </i-radio-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// import IButton from './basic/button/Button.tsx';

// import IContainer from './basic/container/container.jsx';
// import IAside from './basic/container/aside.jsx';
// import IFooter from './basic/container/footer.jsx';
// import IHeader from './basic/container/header.jsx';
// import IMain from './basic/container/main.jsx';

// import IRow from './basic/layout/row.tsx';
// import ICol from './basic/layout/col.tsx';

// import IInput from './form/input/input.tsx';

import { IRadio, IRadioGroup } from './form/radio/index.ts';

const value = ref<string>('1');
</script>

<style lang="scss" scoped></style>
