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
          name: 'project 1',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce maximus erat sit amet arcu pharetra, volutpat laoreet ligula ullamcorper. Fusce maximus erat sit amet arcu pharetra, volutpat laoreet ligula ullamcorper.',
          img: 'path/to/img',
          repo: 'path/to/repo',
          live: 'path/to/live'
        },
        {
          id: 'saehfsdfhsdfg',
          name: 'project 2',
          description: 'some text',
          img: 'path/to/img',
          repo: '',
          live: ''
        },
        {
          id: 'djsrth54yws54er',
          name: 'project 3',
          description: 'some text',
          img: 'path/to/img',
          repo: 'path/to/repo',
          live: 'path/to/live'
        }
      ]
    };
  }
};
</script>
