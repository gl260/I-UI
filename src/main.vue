<template>
  <div class="common-layout">
    <!-- <i-input placeholder="Please input" />
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
    <i-input v-model="value" type="textarea" :rows="2" placeholder="Please input" />
    <i-input v-model="value" disabled type="textarea" :rows="2" placeholder="Please input" />
    <i-input v-model="value" type="textarea" maxlength="10" show-word-limit placeholder="Please input" />

    <i-input v-model="value" size="small" placeholder="Please input">
      <template #suffix>
        <i class="i-line-md-bell-loop"></i>
      </template>
    </i-input>
    <i-input v-model="value" placeholder="Please input" />
    <i-input v-model="value" size="large" placeholder="Please input">
      <template #suffix>
        <i class="i-line-md-bell-loop"></i>
      </template>
    </i-input>

    <i-input v-model="value" status="error" placeholder="Error" />
    <i-input v-model="value" status="warning" placeholder="Warning" />
    <i-input v-model="value" status="error" placeholder="Error">
      <template #prefix>
        <i class="i-line-md-emoji-frown"></i>
      </template>
    </i-input>
    <i-input v-model="value" status="warning" placeholder="Warning">
      <template #prefix>
        <i class="i-line-md-emoji-neutral"></i>
      </template>
    </i-input> -->

    <i-input
      v-model="value"
      clearable
      placeholder="Please input"
      @blur="handleBlur"
      @focus="handleFocus"
      @change="handleChange"
      @clear="handleClear"
    />
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

const value = ref<string>('22222');

const handleBlur = (e: any) => {
  console.log('去焦点时触发: blur', e);
};

const handleFocus = (e: any) => {
  console.log('获取焦点时触发: focus', e);
};

const handleChange = (e: any) => {
  console.log('输入框内容变化时触发: change', e);
};

const handleClear = () => {
  console.log('点击清除图标时触发: clear');
};
</script>

<style lang="scss" scoped></style>
