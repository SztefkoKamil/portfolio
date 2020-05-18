<template>
  <article class="intro-container">
    <div>
      <img src="../assets/images/me.webp" alt="photo of me" />
    </div>
    <div>
      <div class="title">
        <h1 class="">Kamil Sztefko</h1>
        <h2>Web Developer</h2>
        <h3>With passion to internet technologies</h3>
      </div>
    </div>
  </article>
</template>

<style lang="scss">
.intro-container {
  img {
    width: 220px;
    height: 220px;
    border-radius: 50%;
    border: 1px solid var(--first);
    box-shadow: var(--box-shadow);
  }

  .title {
    margin: 60px auto 0;
    width: 280px;
  }

  h1 {
    font-family: var(--font-third);
    font-size: 36px;
    text-shadow: var(--text-shadow);
    text-align: left;
  }

  h2 {
    font-size: 24px;
    font-weight: 400;
    text-shadow: var(--text-shadow);
    text-align: left;
    margin: 20px 0 10px;
  }

  h3 {
    font-size: 16px;
    font-weight: 400;
    text-shadow: var(--text-shadow);
    text-align: left;
  }

  @media screen and (min-width: 500px) {
    img {
      transform: translateX(-10vw);
    }

    .title {
      transform: translateX(10vw);
    }
  }

  @media screen and (min-width: 768px) {
    img {
      transform: translateX(-15vw);
      margin: 30px 0 0;
    }

    .title {
      transform: translateX(15vw);
    }
  }

  @media screen and (min-width: 1024px) {
    img {
      transform: translateX(-15vw);
      margin: 60px 0 0;
      width: 300px;
      height: 300px;
    }

    .title {
      transform: translateX(15vw);
      width: 370px;

      h1 {
        font-size: 46px;
      }

      h2 {
        font-size: 28px;
      }

      h3 {
        font-size: 18px;
      }
    }
  }

  @media screen and (min-width: 1280px) {
    img {
      transform: translateX(-200px);
      margin: 120px 0 0;
      // width: 300px;
      // height: 300px;
    }

    .title {
      transform: translateX(230px);
      width: 370px;
      margin: 0 auto;

      h1 {
        font-size: 46px;
      }

      h2 {
        font-size: 28px;
      }

      h3 {
        font-size: 18px;
      }
    }
  }
}
</style>
