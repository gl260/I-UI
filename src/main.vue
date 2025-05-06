<template>
  <i-button>默认按钮</i-button>
  <i-button type="primary">Primary</i-button>
  <i-button type="success">Success</i-button>
  <i-button type="warning">Warning</i-button>
  <i-button type="danger">Danger</i-button>
  <i-button type="info">Info</i-button>

  <div style="height: 30px"></div>
  <i-button plain>默认按钮</i-button>
  <i-button plain type="primary">Primary</i-button>
  <i-button plain type="success">Success</i-button>
  <i-button plain type="warning">Warning</i-button>
  <i-button plain type="danger">Danger</i-button>
  <i-button plain type="info">Info</i-button>

  <div style="height: 30px"></div>
  <i-button raund>默认按钮</i-button>
  <i-button raund type="primary">Primary</i-button>
  <i-button raund type="success">Success</i-button>
  <i-button raund type="warning">Warning</i-button>
  <i-button raund type="danger">Danger</i-button>
  <i-button raund type="info">Info</i-button>

  <div style="height: 30px"></div>
  <i-button icon="search" circle></i-button>
  <i-button icon="edit" circle type="primary"></i-button>
  <i-button icon="checkmark" circle type="success"></i-button>
  <i-button icon="star" type="warning">warning</i-button>
  <i-button icon="star" type="danger">danger</i-button>
  <i-button icon="mail" type="info">info</i-button>

  <div style="height: 30px"></div>
  <i-button disabled>默认按钮</i-button>
  <i-button disabled type="primary">Primary</i-button>
  <i-button disabled type="success">Success</i-button>
  <i-button disabled type="warning">Warning</i-button>
  <i-button disabled type="danger">Danger</i-button>
  <i-button disabled type="info">Info</i-button>

  <div style="height: 30px"></div>
  <i-button disabled plain>默认按钮</i-button>
  <i-button disabled plain type="primary">Primary</i-button>
  <i-button disabled plain type="success">Success</i-button>
  <i-button disabled plain type="warning">Warning</i-button>
  <i-button disabled plain type="danger">Danger</i-button>
  <i-button disabled plain type="info">Info</i-button>

  <div style="height: 30px"></div>
  <i-button type="primary" size="small">Small</i-button>
  <i-button type="primary">Default</i-button>
  <i-button type="primary" size="large">Large</i-button>
  <i-button plain type="primary" size="small">Small</i-button>
  <i-button plain type="primary">Default</i-button>
  <i-button plain type="primary" size="large">Large</i-button>
  <i-button icon="search" type="success" circle size="small"></i-button>
  <i-button icon="search" type="success" circle></i-button>
  <i-button icon="search" type="success" circle size="large"></i-button>
  <i-button plain icon="search" type="success" circle size="small"></i-button>
  <i-button plain icon="search" type="success" circle></i-button>
  <i-button plain icon="search" type="success" circle size="large"></i-button>

  <div style="height: 30px"></div>
  <i-button type="primary" loading>搜索</i-button>
  <i-button type="primary" loading>
    <template #loading>
      <i class="i-tabler-loader-3 animate-spin inline-block"></i>
    </template>
    自定义搜索
  </i-button>
</template>

<script setup lang="ts">
import IButton from './basic/button/Button.tsx';
</script>

<style>
.custom-loading .circular .path {
  animation: loading-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke: #fff;
  stroke-linecap: round;
}
</style>
