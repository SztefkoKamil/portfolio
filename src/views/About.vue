<template>
  <article class="about-container">
    <h1 class="view-header">About Me</h1>
    <div
      class="text"
      id="about-scroll-parent"
      ref="text"
      :style="'height:' + textHeight"
    >
      <p class="scroll-child" v-for="(text, i) in aboutParagraphs" :key="i">
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
      textHeight: 'auto'
    };
  },
  computed: {
    ...getters // aboutParagraphs
  },
  methods: {
    runListeners() {
      const { text } = this.$refs;
      this.textHeight = this.cropTextBox(text);
      window.addEventListener('resize', () => {
        this.textHeight = 'auto';
        this.$nextTick(() => (this.textHeight = this.cropTextBox(text)));
      });

      eventBus.$on('scrollDown', () => this.scrollText(text, 'down'));
      eventBus.$on('scrollUp', () => this.scrollText(text, 'up'));
    },
    cropTextBox(textRef) {
      const marginBottom = 105;
      const { clientHeight } = textRef;
      const { offsetTop } = textRef;
      const windowHeight = window.innerHeight;
      const maxTextHeight = windowHeight - offsetTop - marginBottom;
      if (clientHeight > maxTextHeight) {
        setTimeout(() => {
          // listeners: Controls.vue
          eventBus.$emit('showDown');
        }, 500);
        return `${maxTextHeight}px`;
      }
      // listeners: Controls.vue
      eventBus.$emit('hideDown');
      return this.textHeight;
    },
    scrollText(text, direction) {
      if (direction === 'up') {
        text.scrollBy({
          top: -200,
          left: 0,
          behavior: 'smooth'
        });
      } else if (direction === 'down') {
        text.scrollBy({
          top: 200,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  },
  mounted() {
    this.runListeners();
  },
  activated() {
    const { text } = this.$refs;
    this.textHeight = 'auto';
    this.$nextTick(() => (this.textHeight = this.cropTextBox(text)));
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
  }

  @media screen and (min-width: 768px) {
    .text {
      margin-top: 50px;
    }

    p {
      font-size: 18px;
    }
  }
}
</style>
