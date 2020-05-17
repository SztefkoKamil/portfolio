<template>
  <div class="menu-container">
    <button>MENU</button>
    <div>
      <span>Kamil Sztefko</span>
      <nav>
        <ul>
          <li>
            <router-link to="/">Intro</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/skills">Skills</router-link>
          </li>
          <li>
            <router-link to="/projects">Projects</router-link>
          </li>
          <li>
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss">
.menu-container {
  padding: 10px;

  button,
  span {
    display: none;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
}
</style>
