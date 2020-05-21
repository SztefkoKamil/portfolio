import Vue from 'vue';

const state = Vue.observable({
  aboutParagraphs: [
    'Jestem web developerem samoukiem, uczę się z darmowych materiałów z sieci, płatnych video kursów i oczywiście dokumentacji technicznej. Dwuletnie doswiadczenie w zespołowej pracy 100% zdalnie pozwoliło mi wyrobić w sobie ogromną cierpliwość i komunikatywność ale również zdyscyplinowanie, dzięki któremu nie mam problemów z zarządzaniem swoim czasem.',
    'Za swoje najważniejsze cechy uważam dokładność oraz wytrwałość i samodzielność w rozwiązywaniu problemów co pozwala mi szybciej się rozwijać poprzez eliminację popełnianych błędów. Swój kod zawsze staram się tworzyć według znanych reguł KISS i DRY ale również przykładam dużą wagę do jego czystości i czytelności.',
    'Jako osoba ambitna, większość wolnego czasu przeznaczam na pogłębianie wiedzy i umiejętności związanych z branżą IT. Kierunkiem, w jakim chcę się rozwijać to tworzenie oprogramowania aplikacji webowych zarówno po stronie front-endu jak i back-endu, głównie w języku JavaScript.'
  ],
  skillsKnowledge: [
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
  ],
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
});

const getters = {
  aboutParagraphs: () => state.aboutParagraphs,
  skillsKnowledge: () => state.skillsKnowledge,
  projects: () => state.projects
};

export { getters };
