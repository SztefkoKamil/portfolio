<template>
  <div class="menu-container">
    <button
      class="toggle-menu-btn"
      :class="{ 'menu-open': isOpen }"
      @click="isOpen = !isOpen"
      aria-label="toggle navigation menu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div class="nav-wrapper" ref="wrapper">
      <transition name="toggle-nav">
        <div class="nav-container" v-if="isOpen">
          <span class="nav-title">Kamil Sztefko</span>
          <nav>
            <ul>
              <li @click="closeNav">
                <router-link class="nav-btn" to="/" tag="button" exact
                  >Intro</router-link
                >
              </li>
              <li @click="closeNav">
                <router-link class="nav-btn" to="/about" tag="button" exact
                  >About</router-link
                >
              </li>
              <li @click="closeNav">
                <router-link class="nav-btn" to="/skills" tag="button" exact
                  >Skills</router-link
                >
              </li>
              <li @click="closeNav">
                <router-link class="nav-btn" to="/projects" tag="button" exact
                  >Projects</router-link
                >
              </li>
              <li @click="closeNav">
                <router-link class="nav-btn" to="/contact" tag="button" exact
                  >Contact</router-link
                >
              </li>
            </ul>
          </nav>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  watch: {
    isOpen(value) {
      const wrapperClass = this.$refs.wrapper.classList;
      if (value) {
        wrapperClass.add('menu-open');
        setTimeout(() => {
          wrapperClass.add('overflow-auto');
        }, 400);
      } else {
        wrapperClass.remove('overflow-auto');
        setTimeout(() => {
          wrapperClass.remove('menu-open');
        }, 300);
      }
    }
  },

  methods: {
    closeNav() {
      this.isOpen = false;
    }
  }
};
</script>

<style lang="scss">
.menu-container {
  position: relative;
  z-index: 100;

  .toggle-menu-btn {
    width: 80px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--bg-first);
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 20;

    span {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      border: 5px solid var(--first);
      transition: border-width 0.3s ease-in, transform 0.3s ease-in;

      &:nth-child(2) {
        margin: 0 4px;
      }
    }

    &.menu-open {
      span {
        border-width: 2px;
        transform: scale(1.3);
      }
    }
  }

  .nav-wrapper {
    perspective: 500px;
    perspective-origin: 50% 42%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 0;
    overflow-x: hidden;
    overflow-y: hidden;

    &.menu-open {
      height: 100vh;
    }

    &.overflow-auto {
      overflow-y: auto;
    }
  }

  .nav-container {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    background-color: hsla(0, 0%, 0%, 0.9);
    padding: 80px 0 30px;
    min-height: 100vh;

    .nav-title {
      font-family: var(--font-third);
      font-size: 30px;
      text-align: center;
      text-shadow: var(--text-shadow);
    }

    ul {
      list-style: none;
      margin: 50px 0 0;
    }

    li {
      margin: 0 0 20px;
    }

    .nav-btn {
      font-size: 30px;
      text-shadow: var(--text-shadow);
      text-align: center;
      line-height: 100%;
      width: 220px;
      padding: 5px 0 8px;
      border: 1px solid transparent;
      transition: border-color 0.1s ease-in;

      &:hover,
      &.router-link-active {
        border-color: var(--first);
      }
    }

    @media screen and (min-width: 1024px) {
      & {
        padding-top: 50px;
      }

      .nav-title {
        font-size: 40px;
        letter-spacing: 2px;
      }

      .nav-btn {
        font-size: 40px;
        letter-spacing: 2px;
      }
    }
  }

  .toggle-nav-enter-active {
    animation: show-nav 0.3s 1 ease-in forwards;
  }
  @keyframes show-nav {
    0% {
      transform: translateZ(400px) scale(0.5);
      opacity: 0;
    }
    100% {
      transform: translateZ(0px) scale(1);
      opacity: 1;
    }
  }
  .toggle-nav-leave-active {
    animation: hide-nav 0.3s 1 ease-in forwards;
  }
  @keyframes hide-nav {
    0% {
      transform: translateZ(0px) scale(1);
      opacity: 1;
    }
    100% {
      transform: translateZ(400px) scale(0.5);
      opacity: 0;
    }
  }
}
</style>
