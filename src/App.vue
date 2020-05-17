<template>
  <div id="app">
    <Menu />
    <router-view />
    <div class="background"></div>
  </div>
</template>

<script>
import Menu from "./components/Menu";

export default {
  components: { Menu }
};
</script>

<style lang="scss">
// variables
html {
  --font-first: "Lato";
  --font-second: "Josefin Sans";
  --font-first: "Audiowide";
  --color-first: #fafafa;
  --first: #a825c9;
  --bg-first: #0d0d0d;
  --bg-second: #08000a;
  --text-shadow: 2px 2px 2px var(--first);
  --box-shadow: 0 0 15px var(--first);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

button {
  border: none;
  background: transparent;
  color: currentColor;
}

#app {
  font-family: "Lato", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--color-first);
  min-height: 100vh;
  min-height: -webkit-fill-available;

  .background {
    background: url("./assets/images/bg.webp") center top;
    background-size: cover;
    filter: brightness(20%);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -10;
  }
}
</style>
