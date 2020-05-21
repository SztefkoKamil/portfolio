<template>
  <article class="skills-container">
    <h1 class="view-header">Skills</h1>
    <CardsSlider :cards="skillsKnowledge">
      <template v-slot="card">
        <CardSkill :content="card" />
      </template>
    </CardsSlider>
  </article>
</template>

<script>
import { getters } from '../misc/store';
import CardsSlider from '../components/Cards-slider';
import CardSkill from '../components/Card-skill';

export default {
  components: { CardsSlider, CardSkill },
  computed: {
    ...getters // skillsKnowledge
  }
};
</script>
