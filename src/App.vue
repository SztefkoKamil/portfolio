<template>
  <div id="app">
    <Menu />
    <transition :name="transitionDirection">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
    <Controls />
    <div class="background"></div>
  </div>
</template>

<script>
import eventBus from './misc/eventBus';
import Menu from './components/Menu';
import Controls from './components/Controls';

export default {
  components: { Menu, Controls },
  data() {
    return {
      transitionDirection: 'next-view'
    };
  },
  created() {
    eventBus.$on('nextRoute', () => (this.transitionDirection = 'next-view'));
    eventBus.$on('prevRoute', () => (this.transitionDirection = 'prev-view'));
  }
};
</script>

<style lang="scss">
@import './misc/global-styles.scss';

#app {
  height: 100vh;
  max-height: -webkit-fill-available;
  max-width: 960px;
  overflow: hidden;
  position: relative;
  margin: 0 auto;

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

// view switch animation
#app {
  //animation timers
  --switch-time: 0.3s;
  --switch-delay: 0.2s;

  // next-view animations
  .next-view-enter-active {
    animation: next-show var(--switch-time) var(--switch-delay) 1 ease-in-out
      backwards;
  }
  @keyframes next-show {
    0% {
      transform: translateX(120vw);
    }
    100% {
      transform: translateX(0);
    }
  }

  .next-view-leave-active {
    animation: next-hide var(--switch-time) var(--switch-delay) 1 ease-in-out;
  }
  @keyframes next-hide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-120vw);
    }
  }

  // prev-view animations
  .prev-view-enter-active {
    animation: prev-show var(--switch-time) var(--switch-delay) 1 ease-in-out
      backwards;
  }
  @keyframes prev-show {
    0% {
      transform: translateX(-120vw);
    }
    100% {
      transform: translateX(0);
    }
  }

  .prev-view-leave-active {
    animation: prev-hide var(--switch-time) var(--switch-delay) 1 ease-in-out;
  }
  @keyframes prev-hide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(120vw);
    }
  }
}
</style>
