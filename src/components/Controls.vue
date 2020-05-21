<template>
  <nav class="controls-container" ref="controlsContainer">
    <button class="left" @click="prevRoute">
      <svg
        aria-hidden="true"
        focusable="false"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
      >
        <path
          fill="currentColor"
          d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
        />
      </svg>
    </button>
    <button class="right" @click="nextRoute">
      <svg
        aria-hidden="true"
        focusable="false"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
      >
        <path
          fill="currentColor"
          d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
        />
      </svg>
    </button>
    <button v-if="showDown" @click="scrollDown" class="down">
      <svg
        aria-hidden="true"
        focusable="false"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
        />
      </svg>
    </button>
  </nav>
</template>

<script>
import eventBus from '../misc/eventBus';

export default {
  data() {
    return {
      showDown: false,
      spamClickBlocker: false,
      scrollingNow: false,
      scrollChild: false
    };
  },
  mounted() {
    this.checkTouch();
    this.listenToScroll();
    eventBus.$on('showDown', () => (this.showDown = true));
    eventBus.$on('hideDown', () => {
      this.scrollChild = false;
      setTimeout(() => (this.showDown = false), 250);
    });
  },
  methods: {
    prevRoute() {
      if (this.spamClickBlocker) return null;
      this.spamClickBlocker = true;
      // listeners: /router/logic.js
      eventBus.$emit('controlClick');
      // listeners: App.vue
      eventBus.$emit('prevRoute');
      this.$router.prevRoute();
      setTimeout(() => (this.spamClickBlocker = false), 700);
    },
    nextRoute() {
      if (this.spamClickBlocker) return null;
      this.spamClickBlocker = true;
      // listeners: /router/logic.js
      eventBus.$emit('controlClick');
      // listeners: App.vue
      eventBus.$emit('nextRoute');
      this.$router.nextRoute();
      setTimeout(() => (this.spamClickBlocker = false), 700);
    },
    scrollDown() {
      // listeners: About.vue
      eventBus.$emit('scrollDown');
    },
    checkTouch() {
      try {
        document.createEvent('touchevent');
        this.listenTouchViewSwitch();
        this.listenTouchScroll();
      } catch (e) {
        return false;
      }
    },
    listenTouchViewSwitch() {
      const controlPanelHeight = 120;
      const moveMin = 50;
      let start = null;
      this.$refs.controlsContainer.addEventListener('touchstart', (event) => {
        start = event.targetTouches[0];
      });
      this.$refs.controlsContainer.addEventListener('touchend', (event) => {
        const windowHeight = window.innerHeight;
        const end = event.changedTouches[0];
        const startHeight =
          windowHeight - start.pageY < controlPanelHeight ? true : false;
        const endHeight =
          windowHeight - end.pageY < controlPanelHeight ? true : false;
        if (startHeight && endHeight && start.pageX - moveMin > end.pageX)
          this.nextRoute();
        else if (startHeight && endHeight && start.pageX + moveMin < end.pageX)
          this.prevRoute();
      });
    },
    listenTouchScroll() {
      let start = false;
      window.addEventListener('touchstart', (e) => {
        if (e.target.classList.contains('scroll-child')) start = e.touches[0];
        else start = false;
      });
      window.addEventListener('touchend', (e) => {
        if (!start) return null;

        const xSpan = 50;
        const ySpan = 20;
        const end = e.changedTouches[0];

        if (end.pageX < start.pageX - xSpan || end.pageX > start.pageX + xSpan)
          return null;

        if (end.pageY - ySpan > start.pageY) this.scrollParentElement('up');
        else if (end.pageY + ySpan < start.pageY)
          this.scrollParentElement('down');
      });
    },
    listenToScroll() {
      window.addEventListener('mousemove', (e) => {
        if (this.showDown)
          this.scrollChild = e.toElement.classList.contains('scroll-child');
      });
      window.addEventListener('wheel', (e) => {
        if (this.scrollingNow) return null;
        this.scrollingNow = true;

        let direction = 'down';
        if (e.deltaY < 0) direction = 'up';

        if (this.showDown && this.scrollChild)
          this.scrollParentElement(direction);
        else this.scrollViewSwitch(direction);

        setTimeout(() => (this.scrollingNow = false), 500);
      });
    },
    scrollParentElement(direction) {
      if (direction === 'up') {
        // listeners: About.vue
        eventBus.$emit('scrollUp');
      } else {
        // listeners: About.vue
        eventBus.$emit('scrollDown');
      }
    },
    scrollViewSwitch(direction) {
      if (direction === 'up') this.prevRoute();
      else this.nextRoute();
    }
  }
};
</script>

<style lang="scss">
.controls-container {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 120px;
  width: 100vw;
  max-width: 960px;
  z-index: 80;
  display: flex;
  justify-content: space-between;

  button {
    width: 50px;
    height: 50px;
    color: var(--first);
    will-change: color;
    animation: glow 1s alternate infinite ease-in-out;
    @keyframes glow {
      0% {
        filter: brightness(100%);
      }
      100% {
        filter: brightness(160%);
      }
    }

    svg {
      height: 100%;
    }
  }

  .down {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
