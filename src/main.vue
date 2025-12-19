<template>
  <div class="common-layout">
    <i-switch v-model="isChecked" active-text="是是是是是" inactive-text="否否否否否" />
    <i-switch v-model="isChecked" active-text="开" inactive-text="关" />
    <i-switch v-model="isChecked" disabled />
    <i-switch v-model="isActive" :active-value="'是'" :inactive-value="'否'" @change="handleChange" />
    <i-switch v-model="isChecked" loading />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// import IButton from './basic/button/button.tsx';

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
// import { IMessage } from './feedback/message/index.ts';

import { ISwitch } from './form/switch/index.ts';

const isChecked = ref(false);

const isActive = ref('是');
console.log('sssss', isActive.value);

const handleChange = () => {
  console.log('handleChange', isActive.value);
};
</script>

<style lang="scss" scoped></style>
