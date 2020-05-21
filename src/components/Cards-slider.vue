<template>
  <div class="card-slider-container">
    <button
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
      swiperOptions: {
        slidesPerView: 1,
        width: 260,
        loop: true,
        effect: 'slide',
        spaceBetween: 40
      },
      knowledge: [
        {
          title: 'Good knowledge',
          skills: [
            {
              name: 'HTML',
              img: require('../assets/images/skills/HTML5.svg')
            },
            {
              name: 'CSS',
              img: require('../assets/images/skills/css-icon.png')
            },
            {
              name: 'JavaScript',
              img: require('../assets/images/skills/js-icon.webp')
            },
            {
              name: 'Vue.js',
              img: require('../assets/images/skills/vue-icon.png')
            },
            {
              name: 'Bootstrap',
              img: require('../assets/images/skills/bootstrap-icon.png')
            }
          ]
        },
        {
          title: 'Medium knowledge',
          skills: [
            {
              name: 'SASS',
              img: require('../assets/images/skills/sass.svg')
            },
            {
              name: 'NuxtJS',
              img: require('../assets/images/skills/nuxt-icon.png')
            },
            {
              name: 'MongoDB',
              img: require('../assets/images/skills/mongodb-icon.png')
            },
            {
              name: 'Node.js',
              img: require('../assets/images/skills/node.svg')
            },
            {
              name: 'jQuery',
              img: require('../assets/images/skills/jQuery-icon.png')
            },
            {
              name: 'WordPress',
              img: require('../assets/images/skills/wordpress-icon.png')
            },
            {
              name: 'Webpack',
              img: require('../assets/images/skills/webpack.svg')
            },
            {
              name: 'Git',
              img: require('../assets/images/skills/git-icon.png')
            }
          ]
        },
        {
          title: 'Basic knowledge',
          skills: [
            {
              name: 'MySQL',
              img: require('../assets/images/skills/mysql-icon.png')
            },
            {
              name: 'PHP',
              img: require('../assets/images/skills/PHP-icon.png')
            },
            {
              name: 'Gulp',
              img: require('../assets/images/skills/gulp-icon.png')
            },
            {
              name: 'Web Components',
              img: require('../assets/images/skills/web-components.webp')
            }
          ]
        },
        {
          title: 'Tools',
          skills: [
            {
              name: 'VS Code',
              img: require('../assets/images/skills/VSC-icon.png')
            },
            {
              name: 'Postman',
              img: require('../assets/images/skills/postman-icon.png')
            },
            {
              name: 'GIMP',
              img: require('../assets/images/skills/GIMP-icon.png')
            },
            {
              name: 'Figma',
              img: require('../assets/images/skills/figma-icon.png')
            },
            {
              name: 'Adobe XD',
              img: require('../assets/images/skills/Adobe_XD.svg')
            }
          ]
        }
      ]
    };
  },
  methods: {
    prevSlide() {
      this.$refs.mySwiper.swiperInstance.slidePrev();
    },
    nextSlide() {
      this.$refs.mySwiper.swiperInstance.slideNext();
    },
    setSwiperSize() {
      const swiper = this.$refs.mySwiper.swiperInstance.params;
      const windowWidth = window.innerWidth;
      if (windowWidth >= 960 && swiper.width !== 860) {
        swiper.slidesPerView = 3;
        swiper.width = 860;
      } else if (windowWidth >= 680 && swiper.width !== 560) {
        swiper.slidesPerView = 2;
        swiper.width = 560;
      } else if (windowWidth < 640 && swiper.width !== 260) {
        swiper.slidesPerView = 1;
        swiper.width = 260;
      }
    }
  },
  mounted() {
    this.setSwiperSize();
    eventBus.$on('switchCard', (direction) => {
      if (direction === 'next') this.nextSlide();
      else if (direction === 'prev') this.prevSlide();
    });
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
    width: 40px;
    z-index: 10;
    padding: 10px;
  }
  .slider-btn-prev {
    left: -40px;
  }
  .slider-btn-next {
    right: -40px;
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
