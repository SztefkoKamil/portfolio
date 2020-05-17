<template>
  <div id="app">
    <Menu />
    <router-view />
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
}
</style>
