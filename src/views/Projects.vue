<template>
  <article class="projects-container">
    <h1 class="view-header">Projects</h1>
    <CardsSlider :cards="projects">
      <template v-slot="card">
        <CardProject :content="card" />
      </template>
    </CardsSlider>
  </article>
</template>

<script>
import CardsSlider from '../components/Cards-slider';
import CardProject from '../components/Card-project';

export default {
  components: { CardsSlider, CardProject },
  data() {
    return {
      projects: [
        {
          id: 'fq23wrfs32rfeae',
          name: 'Wood-Stairs',
          description:
            'Demo website. Użyte technologie: NuxtJS, SASS, Swiper, OpenStreetMap.',
          img: require('../assets/images/projects/wood-stairs.webp'),
          repo: 'https://github.com/SztefkoKamil/wood-stairs',
          live: 'https://wood-stairs.webkas.pl/'
        },
        {
          id: 'dh54yhwe45he',
          name: 'Supercars blog',
          description:
            'Demo blog. Użyte technologie: NuxtJS, Bootstrap, Strapi CMS.',
          img: require('../assets/images/projects/supercars-blog.webp'),
          repo: 'https://github.com/SztefkoKamil/supercars-blog',
          live: 'https://supercars.webkas.pl/'
        },
        {
          id: 'sdhhhhhhdfgsdfghf',
          name: 'Perstorage',
          description:
            'Aplikacja do przechowywania plików: obrazów, dokumentów i skompresowanych. Użyte technologie: Vue.js, VUEX, SASS, Swiper, Node.js, Express.js, MongoDB, REST API, multer, bcrypt.js, jsonwebtoken.',
          img: require('../assets/images/projects/perstorage.webp'),
          repo: 'https://github.com/SztefkoKamil/perstorage-frontend',
          live: 'https://perstorage.webkas.pl/'
        },
        {
          id: 'ghw54gserghw54',
          name: 'WordPress theme',
          description:
            "Customowy motyw WordPress'a z użyciem Bootstrapa - design oparty na darmowym Bootstrapowym motywie.",
          img: require('../assets/images/projects/wp-demo-blog.webp'),
          repo: 'https://github.com/SztefkoKamil/wp-demo-blog',
          live: 'https://wp-demo-blog.webkas.pl/'
        },
        {
          id: 'jktfhghffghdfyh5e4d',
          name: 'Portfolio',
          description:
            'Moje portfolio, które właśnie przeglądasz. Użyte technologie: HTML, SASS, JavaScript, Webpack.',
          img: require('../assets/images/projects/portfolio.webp'),
          repo: 'https://github.com/SztefkoKamil/portfolio',
          live: ''
        },
        {
          id: 'sdgsdf34egr5dfg',
          name: 'InnoThink',
          description:
            'Strona firmy, w której poprzednio pracowałem. Użyte technologie: WordPress, CSS, JavaScript, jQuery.',
          img: require('../assets/images/projects/innothink.webp'),
          repo: '',
          live: 'https://innothink.com.pl/'
        },
        {
          id: 'shdfgrfsgw34gt5r4',
          name: 'Pizzeria',
          description:
            'Demonstracyjna strona nieistniejącej pizzeri. Użyte technologie: Vue.js, SASS, Google Maps, Swiper.',
          img: require('../assets/images/projects/pizza.webp'),
          repo: 'https://github.com/SztefkoKamil/pizzeria',
          live: 'https://webkas.usermd.net/projects/demo-page-pizzeria/'
        },
        {
          id: 'srhgdrhfgw54t54',
          name: 'Pictures Storage',
          description:
            'Aplikacja do przechowywania obrazów w formatach jpeg, png na prywatnym koncie. Użyte technologie: HTML, CSS, JavaScript, PHP, MySQL.',
          img: require('../assets/images/projects/pictures-storage.webp'),
          repo: 'https://github.com/SztefkoKamil/pictures-storage.webp',
          live: 'https://webkas.usermd.net/projects/pictures-storage/'
        },
        {
          id: 'sdfghdfghghsdt4y',
          name: 'Demo website 2',
          description:
            'Średniej wielkości strona demonstracyjna typu one page wzorowana na szablonie znalezionym w sieci. Użyte technologie: HTML, CSS, JavaScript, jQuery.',
          img: require('../assets/images/projects/demo-page-02.webp'),
          repo: 'https://github.com/SztefkoKamil/demo-page-02',
          live: 'https://webkas.pl/projects/demo-page-02/'
        },
        {
          id: 'sghd5rthyed54h65',
          name: 'Demo website 1',
          description:
            'Mała strona demonstracyjna typu one page wzorowana na szablonie znalezionym w sieci. Użyte technologie: HTML, CSS, JavaScript, jQuery.',
          img: require('../assets/images/projects/demo-page-01.webp'),
          repo: 'https://github.com/SztefkoKamil/demo-page-01',
          live: 'https://webkas.pl/projects/demo-page-01/'
        },
        {
          id: 'sher54ysergtr',
          name: 'HDB Converter',
          description:
            'Converter liczb binarnych, decymalnych i hexadecymalnych. Użyte technologie: HTML, Bootstrap, JavaScript.',
          img: require('../assets/images/projects/hdb-converter.webp'),
          repo: 'https://github.com/SztefkoKamil/hdb-converter',
          live: 'https://webkas.pl/projects/hdb-converter/'
        }
      ]
    };
  }
};
</script>
