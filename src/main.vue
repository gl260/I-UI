<template>
  <div class="common-layout">
    <!-- <i-container>
      <i-header>Header</i-header>
      <i-main>Main</i-main>
      <i-footer>Footer</i-footer>
    </i-container> -->

    <!-- <i-container>
      <i-aside>Aside</i-aside>
      <i-main>Main</i-main>
    </i-container> -->

    <!-- <i-container>
      <i-header>Header</i-header>
      <i-container>
        <i-aside>Aside</i-aside>
        <i-main>Main</i-main>
      </i-container>
    </i-container> -->

    <!-- <i-container>
      <i-header>Header</i-header>
      <i-container>
        <i-aside>Aside</i-aside>
        <i-container>
          <i-main>Main</i-main>
          <i-footer>Footer</i-footer>
        </i-container>
      </i-container>
    </i-container> -->

    <i-container>
      <i-aside>Aside</i-aside>
      <i-container>
        <i-header>Header</i-header>
        <i-main>Main</i-main>
        <i-footer>Footer</i-footer>
      </i-container>
    </i-container>
  </div>
</template>

<script setup lang="ts">
// import IButton from './basic/button/Button.tsx';
import IContainer from './basic/container/container.jsx';
import IAside from './basic/container/aside.jsx';
import IFooter from './basic/container/footer.jsx';
import IHeader from './basic/container/header.jsx';
import IMain from './basic/container/main.jsx';
</script>

<style lang="scss" scoped>
.common-layout {
  height: 300px;
  .i-header {
    background-color: var(--i-color-primary-7);
  }
  .i-main {
    background-color: var(--i-color-primary-3);
  }
  .i-footer {
    background-color: var(--i-color-primary-7);
  }
  .i-aside {
    background-color: var(--i-color-primary-5);
  }
  .i-aside,
  .i-header,
  .i-main,
  .i-footer,
  .i-main {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
