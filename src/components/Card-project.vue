<template>
  <div class="project-card-container card-grab">
    <h4>{{ content.card.name }}</h4>
    <img
      :src="content.card.img"
      :alt="`Preview of the ${content.card.name} project`"
    />
    <p>{{ content.card.description }}</p>
    <div class="links">
      <a v-if="!content.card.repo" class="disabled">Repository</a>
      <a
        v-else
        :href="content.card.repo"
        :title="`Repository of the ${content.card.name} project`"
        target="_blank"
        rel="noopener noreferrer"
        >Repository</a
      >
      <a v-if="!content.card.live" class="disabled">Live</a>
      <a
        v-else
        :href="content.card.live"
        :title="`Live preview of the ${content.card.name} project`"
        target="_blank"
        rel="noopener noreferrer"
        >Live</a
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ['content']
};
</script>

<style lang="scss">
.project-card-container {
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;

  h4 {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 1px;
    text-shadow: var(--text-shadow);
  }

  img {
    height: 100px;
    background: var(--first);
    margin: 20px 0 15px;
  }

  p {
    max-height: 110px;
    overflow: hidden;
    padding: 0 10px;
    line-height: 130%;
    font-size: 14px;
  }

  .links {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    padding: 10px;

    a {
      text-decoration: none;
      color: var(--color-first);
      border-bottom: 1px solid var(--first);
      padding: 2px;

      &.disabled {
        color: gray;
        text-decoration: line-through;
        cursor: not-allowed;
        border-bottom-color: transparent;
      }
    }
  }
}
</style>
