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
import { getters } from '../misc/store';
import CardsSlider from '../components/Cards-slider';
import CardProject from '../components/Card-project';

export default {
  components: { CardsSlider, CardProject },
  computed: {
    ...getters // projects
  }
};
</script>
