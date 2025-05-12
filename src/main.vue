<template>
  <div class="common-layout">
    <i-input placeholder="Please input" />
    <i-input disabled placeholder="Please input" />
    <i-input v-model="value" clearable placeholder="Please input" />
    <i-input v-model="value" type="password" placeholder="Please input" />
    <i-input v-model="value" type="password" show-password placeholder="Please input" />
    <i-input v-model="value" placeholder="Please input">
      <template #suffix>
        <i class="i-line-md-bell-loop"></i>
      </template>
      <template #prefix>
        <i class="i-line-md-emoji-smile"></i>
      </template>
    </i-input>
    <h2>{{ value }}</h2>
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

import IInput from './form/input/input.tsx';

const value = ref<string>('');
</script>

<style lang="scss" scoped></style>
