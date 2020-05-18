<template>
  <div id="app">
    <Menu />
    <transition name="switch-view">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
    <Controls />
    <div class="background"></div>
  </div>
</template>

<script>
import Menu from './components/Menu';
import Controls from './components/Controls';

export default {
  components: { Menu, Controls }
};
</script>

<style lang="scss">
@import './misc/global-styles.scss';

#app {
  min-height: 100vh;
  min-height: -webkit-fill-available;
  padding: 90px 0 0;

  .background {
    background: url('./assets/images/bg.webp') center top;
    background-size: cover;
    filter: brightness(20%);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -10;
  }
}
</style>
