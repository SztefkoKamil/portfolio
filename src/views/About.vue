<template>
  <article class="about-container">
    <h1 class="view-header">About Me</h1>
    <div class="text" ref="textBox" :style="'height:' + textHeight">
      <p
        :class="{ grab: showDown }"
        v-for="(text, i) in aboutParagraphs"
        :key="i"
      >
        {{ text }}
      </p>
    </div>
  </article>
</template>

<script>
import eventBus from '../misc/eventBus';
import { getters } from '../misc/store';

export default {
  data() {
    return {
      showDown: false,
      textHeight: 'auto'
    };
  },
  computed: {
    ...getters // aboutParagraphs
  },
  methods: {
    setTextBoxHeight(textBox) {
      this.textHeight = 'auto';
      this.$nextTick(() => (this.textHeight = this.cropTextBox(textBox)));
    },
    cropTextBox(textBox) {
      const marginBottom = 105;
      const { clientHeight } = textBox;
      const { offsetTop } = textBox;
      const windowHeight = window.innerHeight;
      const maxTextHeight = windowHeight - offsetTop - marginBottom;

      if (clientHeight > maxTextHeight) {
        setTimeout(() => {
          // listeners: Controls.vue
          eventBus.$emit('showDown');
        }, 500);
        // listeners: Controls.vue
        eventBus.$emit('hideDown');
        this.showDown = true;
        return `${maxTextHeight}px`;
      }

      this.showDown = false;
      return this.textHeight;
    },
    listenMouseScroll(textBox) {
      let grabbed = false;
      textBox.addEventListener('mousedown', () => {
        grabbed = true;
      });
      textBox.addEventListener('mouseup', () => {
        grabbed = false;
      });
      textBox.addEventListener('mousemove', (e) => {
        if (this.showDown && grabbed) {
          let move = 0;
          // set move distance
          if (e.movementY > 0) move = 0 - e.movementY;
          else move = Math.abs(e.movementY);

          // block scroll if it's top or bottom
          const isTop = textBox.scrollTop === 0;
          const isBottom =
            textBox.scrollTop === textBox.scrollHeight - textBox.clientHeight;
          if (move < 0 && isTop) return null;
          if (move > 0 && isBottom) return null;

          textBox.scrollBy({
            top: move,
            left: 0
          });
        }
      });
    },
    listenTouchScroll(textBox) {
      let grabbed = false;
      let oldY = null;
      textBox.addEventListener('touchstart', () => {
        grabbed = true;
      });
      textBox.addEventListener('touchend', () => {
        grabbed = false;
        oldY = null;
      });
      textBox.addEventListener('touchmove', (e) => {
        if (this.showDown && grabbed) {
          e.preventDefault();
          if (!oldY) {
            oldY = e.targetTouches[0].screenY;
            return null;
          }

          const newY = e.targetTouches[0].screenY;
          let move = 0;
          // set move distance
          move = newY - oldY;
          if (move > 0) move = 0 - move;
          else move = Math.abs(move);

          // block scroll if it's top or bottom
          const isTop = textBox.scrollTop === 0;
          const isBottom =
            textBox.scrollTop === textBox.scrollHeight - textBox.clientHeight;
          if (move < 0 && isTop) return null;
          else if (move > 0 && isBottom) return null;

          textBox.scrollBy({
            top: move,
            left: 0
          });
          oldY = newY;
        }
      });
    },
    scrollDown(textBox) {
      textBox.scrollBy({
        top: textBox.clientHeight * 0.8,
        left: 0,
        behavior: 'smooth'
      });
    }
  },
  mounted() {
    const { textBox } = this.$refs;
    window.addEventListener('resize', () => this.setTextBoxHeight(textBox));
    eventBus.$on('scrollDown', () => this.scrollDown(textBox));
    this.listenMouseScroll(textBox);
    this.listenTouchScroll(textBox);
  },
  activated() {
    this.setTextBoxHeight(this.$refs.textBox);
  }
};
</script>

<style lang="scss">
.about-container {
  .text {
    margin: 30px auto;
    padding: 0 50px;
    overflow-y: auto;
    max-width: 800px;
    overflow: hidden;
  }

  p {
    padding: 0 0 20px;
    line-height: 130%;

    &.grab {
      cursor: grab;
      user-select: none;

      &:active {
        cursor: grabbing;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .text {
      margin-top: 50px;
    }

    p {
      font-size: 18px;
    }
  }

  @media screen and (min-width: 1024px) {
    p {
      font-size: 20px;
    }
  }
}
</style>
