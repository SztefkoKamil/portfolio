import Vue from 'vue';

const state = Vue.observable({
  aboutParagraphs: [
    "Hello, my name's Kamil and I'm passionate self tought Web Developer. My adventure with programming begins at the end of 2017 and quickly turned into a passion. I started learning intensively from free and paid courses, technical documentation, blogs and many other sources available in the web, thanks to few months later i got my first job as a Webmaster.",
    "Creating websites and web applications makes me tremendous pleasure, especially implementing software on the front-end and the back-end side through what work became for me not only enjoyment but also hobby. For a long time I'm interesting about personal development and the path of programmer it's constant self development through getting new skills and knowledge, but also works on yourself and self work flow, what resulting also in better life flow.",
    "In sake of I'm moving on wheelchair from beginning of my developer career I working 100% remotely thanks to which I'm disciplined, I can managed my time well, and approaches my duties very diligently. Above two years of remote work taught me of communicativity, patience, perseverance, self-reliance and determination in figuring out of encountered problems.",
    'As a ambitious person, most of my free time I allocate to self development binded to IT industry. During the work I emphasize on legibility, clarity and cleanliness of code I creating, I try to approach the tasks logically and eagerly accepts constructive criticism. My motto and goal is "every day try to be better than u was yesterday". To my other interests belong: health, spiritual and personal development, psychology, social engineering, metaphysics, esoterics and paranormal phenomena.',
    "I'm happy to take on interesting challenges and I'm open to various proposals so I encourage you to contact me regarding employment, participation in projects or individual orders."
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
        'Demo one page website built on self designed template. Used technologies: NuxtJS, SASS.',
      img: require('../assets/images/projects/wood-stairs.webp'),
      repo: 'https://github.com/SztefkoKamil/wood-stairs',
      live: 'https://wood-stairs.webkas.pl/'
    },
    {
      id: 'dh54yhwe45he',
      name: 'Supercars blog',
      description:
        'Demo blog built on self designed template. Used technologies: NuxtJS, Bootstrap, Strapi CMS.',
      img: require('../assets/images/projects/supercars-blog.webp'),
      repo: 'https://github.com/SztefkoKamil/supercars-blog',
      live: 'https://supercars.webkas.pl/'
    },
    {
      id: 'sdhhhhhhdfgsdfghf',
      name: 'Perstorage',
      description:
        'App for store files (docs, images & compressed) on personal account. Used technologies: Vue.js, SASS, Node.js, Express, MongoDB, REST API, jsonwebtoken, bcrypt.js.',
      img: require('../assets/images/projects/perstorage.webp'),
      repo: 'https://github.com/SztefkoKamil/perstorage-frontend',
      live: 'https://perstorage.webkas.pl/'
    },
    {
      id: 'jktfhghffghdfyh5e4d',
      name: 'Portfolio',
      description:
        'My portfolio, which You currently browsing. Used technologies: Vue.js, SASS.',
      img: require('../assets/images/projects/portfolio.webp'),
      repo: 'https://github.com/SztefkoKamil/portfolio',
      live: ''
    },
    {
      id: 'ghw54gserghw54',
      name: 'WordPress theme',
      description:
        'Custom WordPress blog theme build based on free template. Used technologies: WordPress, Bootstrap, JavaScript, jQuery.',
      img: require('../assets/images/projects/wp-demo-blog.webp'),
      repo: 'https://github.com/SztefkoKamil/wp-demo-blog',
      live: 'https://wp-demo-blog.webkas.pl/'
    },
    {
      id: 'sdgsdf34egr5dfg',
      name: 'InnoThink',
      description:
        'Website built for my former employer. Used technologies: WordPress, CSS, Javascript, jQuery.',
      img: require('../assets/images/projects/innothink.webp'),
      repo: '',
      live: 'https://innothink.com.pl/'
    },
    {
      id: 'shdfgrfsgw34gt5r4',
      name: 'Pizzeria',
      description:
        'Demo website built on self designed template. Used technologies: Vue.js, SASS.',
      img: require('../assets/images/projects/pizza.webp'),
      repo: 'https://github.com/SztefkoKamil/pizzeria',
      live: 'https://webkas.usermd.net/projects/demo-page-pizzeria/'
    },
    {
      id: 'srhgdrhfgw54t54',
      name: 'Pictures Storage',
      description:
        'Simple app for store images on personal account. Used technologies: HTML, CSS, JavaScript, PHP, MySQL.',
      img: require('../assets/images/projects/pictures-storage.webp'),
      repo: 'https://github.com/SztefkoKamil/pictures-storage.webp',
      live: 'https://webkas.usermd.net/projects/pictures-storage/'
    },
    {
      id: 'sdfghdfghghsdt4y',
      name: 'Demo website',
      description:
        'Medium size demo one page website built based on free template. Used technologies: HTML, CSS, Javascript, jQuery.',
      img: require('../assets/images/projects/demo-page-02.webp'),
      repo: 'https://github.com/SztefkoKamil/demo-page-02',
      live: 'https://webkas.pl/projects/demo-page-02/'
    },
    {
      id: 'sher54ysergtr',
      name: 'HDB Converter',
      description:
        'Converter for binary, decimal & hexadecimal numbers. Used technologies: HTML, Bootstrap, Javascript.',
      img: require('../assets/images/projects/hdb-converter.webp'),
      repo: 'https://github.com/SztefkoKamil/hdb-converter',
      live: 'https://webkas.pl/projects/hdb-converter/'
    },
    {
      id: 'sghd5rthyed54h65',
      name: 'Demo website',
      description:
        'Small demo one page website built based on free template. Used technologies: HTML, CSS, Javascript, jQuery.',
      img: require('../assets/images/projects/demo-page-01.webp'),
      repo: 'https://github.com/SztefkoKamil/demo-page-01',
      live: 'https://webkas.pl/projects/demo-page-01/'
    }
  ]
});

const getters = {
  aboutParagraphs: () => state.aboutParagraphs,
  skillsKnowledge: () => state.skillsKnowledge,
  projects: () => state.projects
};

export { getters };
