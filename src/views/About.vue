<template>
  <article class="about-container">
    <h1 class="view-header">About Me</h1>
    <div class="text" ref="text" :style="'height:' + textHeight">
      <p v-for="(text, i) in paragraphs" :key="i">{{ text }}</p>
    </div>
  </article>
</template>

<script>
import eventBus from '../misc/eventBus';

export default {
  data() {
    return {
      paragraphs: [
        'Jestem web developerem samoukiem, uczę się z darmowych materiałów z sieci, płatnych video kursów i oczywiście dokumentacji technicznej. Dwuletnie doswiadczenie w zespołowej pracy 100% zdalnie pozwoliło mi wyrobić w sobie ogromną cierpliwość i komunikatywność ale również zdyscyplinowanie, dzięki któremu nie mam problemów z zarządzaniem swoim czasem.',
        'Za swoje najważniejsze cechy uważam dokładność oraz wytrwałość i samodzielność w rozwiązywaniu problemów co pozwala mi szybciej się rozwijać poprzez eliminację popełnianych błędów. Swój kod zawsze staram się tworzyć według znanych reguł KISS i DRY ale również przykładam dużą wagę do jego czystości i czytelności.',
        'Jako osoba ambitna, większość wolnego czasu przeznaczam na pogłębianie wiedzy i umiejętności związanych z branżą IT. Kierunkiem, w jakim chcę się rozwijać to tworzenie oprogramowania aplikacji webowych zarówno po stronie front-endu jak i back-endu, głównie w języku JavaScript.'
      ],
      textHeight: 'auto'
    };
  },
  methods: {
    runListeners() {
      const { text } = this.$refs;
      this.textHeight = this.cropTextBox(text);
      window.addEventListener('resize', () => {
        this.textHeight = 'auto';
        this.$nextTick(() => (this.textHeight = this.cropTextBox(text)));
      });

      eventBus.$on('scrollDown', () => this.scrollText(text, this.textHeight));
    },
    cropTextBox(textRef) {
      const marginBottom = 155;
      const { clientHeight } = textRef;
      const { offsetTop } = textRef;
      const windowHeight = window.innerHeight;
      const maxTextHeight = windowHeight - offsetTop - marginBottom;
      console.log(clientHeight, maxTextHeight);
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
    scrollText(text, textHeight) {
      textHeight = textHeight.replace('px', '');
      text.scrollBy({
        top: textHeight - 50,
        left: 0,
        behavior: 'smooth'
      });
    }
  },
  mounted() {
    this.runListeners();
  },
  activated() {
    console.log('activated');
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
  }

  p {
    margin: 0 0 20px;
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
