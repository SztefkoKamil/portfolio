<template>
  <div class="card-slider-container">
    <button
      v-if="showLeft"
      class="slider-btn-prev slider-btn"
      @click="prevSlide"
      aria-label="previous card"
    >
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
    <button
      v-if="showRight"
      class="slider-btn-next slider-btn"
      @click="nextSlide"
      aria-label="next card"
    >
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
    <swiper ref="mySwiper" :options="swiperOptions" @resize="setSwiperSize">
      <swiper-slide v-for="(card, i) in cards" :key="i">
        <slot :card="card"></slot>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import eventBus from '../misc/eventBus';

export default {
  props: ['cards'],
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      showLeft: false,
      showRight: true,
      swiper: null,
      swiperOptions: {
        effect: 'slide',
        spaceBetween: 40,
        on: {
          slideChange: () => {
            if (this.swiper.isBeginning) {
              this.showLeft = false;
              this.showRight = true;
            } else if (this.swiper.isEnd) {
              this.showRight = false;
              this.showLeft = true;
            } else {
              this.showLeft = true;
              this.showRight = true;
            }
          }
        }
      }
    };
  },
  methods: {
    prevSlide() {
      this.swiper.slidePrev();
    },
    nextSlide() {
      this.swiper.slideNext();
    },
    setSwiperSize() {
      const swiper = this.swiper.params;
      const windowWidth = window.innerWidth;
      if (windowWidth >= 960) {
        swiper.slidesPerView = 3;
        swiper.width = 860;
      } else if (windowWidth >= 680) {
        swiper.slidesPerView = 2;
        swiper.width = 560;
      } else if (windowWidth < 640) {
        swiper.slidesPerView = 1;
        swiper.width = 260;
      }
    }
  },
  mounted() {
    this.swiper = this.$refs.mySwiper.swiperInstance;
    eventBus.$on('switchCard', (direction) => {
      if (direction === 'next') this.nextSlide();
      else if (direction === 'prev') this.prevSlide();
    });
  },
  activated() {
    this.setSwiperSize();
  }
};
</script>

<style lang="scss">
.card-slider-container {
  width: 280px;
  position: relative;
  margin: 40px auto;

  .slider-btn {
    position: absolute;
    top: 50px;
    height: 46px;
    width: 30px;
    z-index: 10;
    padding: 2px;
    cursor: pointer;
  }
  .slider-btn-prev {
    left: -35px;
  }
  .slider-btn-next {
    right: -35px;
  }

  @media screen and (min-width: 680px) {
    & {
      width: 580px;
    }
  }

  @media screen and (min-width: 960px) {
    & {
      width: 880px;
    }
  }

  .swiper-container {
    margin: 0 auto;

    .swiper-wrapper {
      padding: 10px;
    }

    .swiper-slide {
      height: 340px;
      background-color: var(--bg-second);
      border: 1px solid var(--first);
      box-shadow: var(--box-shadow);
      padding: 10px;
    }
  }
}
</style>
