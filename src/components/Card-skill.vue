<template>
  <div class="skill-card-container">
    <h4>{{ content.card.title }}</h4>
    <ul>
      <li v-for="skill in content.card.skills" :key="skill.name">
        <img class="img" :src="skill.img" :alt="`Icon of the ${skill.name}`" />
        <p>{{ skill.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['content']
};
</script>

<style lang="scss">
.skill-card-container {
  h4 {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 1px;
    text-shadow: var(--text-shadow);
  }

  ul {
    list-style: none;
    margin: 15px 0 0;
  }

  li {
    display: grid;
    grid-template-columns: 70px 1fr;
    margin: 0 0 10px;

    .img {
      justify-self: end;
      height: 24px;
    }

    p {
      text-align: left;
      justify-self: start;
      font-size: 18px;
      font-weight: 700;
      padding-left: 15px;
    }
  }
}
</style>
