<template>
  <article class="contact-container">
    <h1 class="view-header">Contact</h1>
    <h2>
      <span>Want to hire me?</span>
      <span>Feel free to contact!</span>
    </h2>
    <div>
      <div class="info-bar phone">
        <img class="white-background" src="../assets/images/phone.svg" alt />
        <a href="tel:+48531614625">+48 531 614 625</a>
      </div>
      <div class="info-bar email">
        <img class="white-background" src="../assets/images/email.svg" alt />
        <a href="mailto:contact@kamilsztefko.pl">contact@kamilsztefko.pl</a>
      </div>
      <div class="info-bar socials">
        <a href="https://github.com/sztefkokamil" title="My GitHub profile" target="_blank">
          <img src="../assets/images/github.svg" alt />
        </a>
        <a
          href="https://www.linkedin.com/in/kamil-sztefko-483a09179/"
          title="My LinkedIn profile"
          target="_blank"
        >
          <img src="../assets/images/linkedin-icon.png" alt />
        </a>
        <a
          href="https://assets.it-leaders.pl/moj-profil?id2=a3680c6e501817ba33a063289a47bd63&fbclid=IwAR0YTGDEhjcaKe4R6SfzWuMmYW2OS6gGZSWa46DyCXDXNLfpKCj6lFp0_UU"
          title="My IT-Leaders profile"
          target="_blank"
        >
          <img src="../assets/images/it-leaders-icon.png" alt />
        </a>
      </div>
      <div class="info-bar copy">
        <span>Kamil Sztefko {{ year }} &copy; All Rights Reserved</span>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>

<style lang="scss">
.contact-container {
  h2 {
    font-size: 22px;
    text-shadow: var(--text-shadow);
    line-height: 150%;
    margin: 30px 0;

    span {
      display: block;
    }
  }
  .info-bar {
    width: 260px;
    height: 60px;
    background-color: var(--bg-second);
    border: 1px solid var(--first);
    box-shadow: var(--box-shadow);
    margin: 25px auto;
    display: flex;
    align-items: center;

    .white-background {
      background-color: #fff;
      border-radius: 50%;
      width: 40px;
      padding: 3px;
      margin: 0 20px;
    }

    a {
      text-decoration: none;
      color: var(--color-first);
    }

    &.phone a {
      letter-spacing: 1px;
      font-weight: 700;
    }

    &.email a {
      font-size: 15px;
    }

    &.socials {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0 30px;

      img {
        height: 40px;
      }
    }

    &.copy {
      justify-content: center;
      font-size: 12px;
    }
  }
}
</style>
