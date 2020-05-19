<template>
  <article class="skills-container">
    <h1 class="view-header">Skills</h1>
    <CardsSlider :cards="knowledge">
      <template v-slot="card">
        <CardSkill :content="card" />
      </template>
    </CardsSlider>
  </article>
</template>

<script>
import CardsSlider from '../components/Cards-slider';
import CardSkill from '../components/Card-skill';

export default {
  components: {
    CardsSlider,
    CardSkill
  },
  data() {
    return {
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
  }
};
</script>
