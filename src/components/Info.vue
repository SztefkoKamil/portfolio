<template>
  <div id="info-container">
    <transition name="show-info">
      <div class="info" v-if="isOpen">
        <ul>
          <h6>Switch views by:</h6>
          <li>arrows keys left & right</li>
          <li>scroll up & down</li>
          <li>bottom arrow buttons</li>
          <li>slide right & left in bottom arrows area</li>
        </ul>
        <ul>
          <h6>Switch cards by:</h6>
          <li>control key + arrows keys left & right</li>
          <li>cards arrow buttons</li>
          <li>slide right & left in card area</li>
        </ul>
      </div>
    </transition>
    <button id="toggle-info" @click="isOpen = !isOpen">INFO</button>
  </div>
</template>

<script>
export default {
  data() {
    return { isOpen: false };
  }
};
</script>

<style lang="scss">
#info-container {
  position: relative;
  margin: 50px 0 0;

  button {
    font-size: 20px;
    padding: 6px 20px 8px;
    line-height: 100%;
    letter-spacing: 1px;
  }

  .info {
    position: absolute;
    bottom: 50px;
    left: -40px;
    width: 300px;
    padding: 10px 20px 30px;
    background: var(--bg-second);
    border: 1px solid var(--first);
    box-shadow: var(--box-shadow);
    text-align: left;

    h6 {
      font-size: 20px;
      font-weight: 400;
      margin: 10px 0;
    }

    ul {
      margin: 20px 0 0;
      list-style-type: disc;
    }

    li {
      margin: 0 0 10px 20px;
      font-size: 14px;
    }
  }

  @media screen and (min-width: 1024px) {
    .info {
      width: 340px;
      left: -60px;
      padding: 25px 20px 45px;

      h6 {
        font-size: 24px;
      }
      li {
        font-size: 16px;
      }
    }
  }

  .show-info-enter-active {
    animation: show-info 0.1s 1 ease-in;
  }
  @keyframes show-info {
    0% {
      transform: translateY(50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  .show-info-leave-active {
    animation: hide-info 0.1s 1 ease-in;
  }
  @keyframes hide-info {
    0% {
      transform: translateY(0px);
      opacity: 1;
    }
    100% {
      transform: translateY(50px);
      opacity: 0;
    }
  }
}
</style>
