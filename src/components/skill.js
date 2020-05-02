class Skill extends HTMLElement {
  constructor() {
    super();
    this.src = '';
    this.alt = 'No image';
    this.caption = 'No caption';
    // this.attachShadow({ mode: 'open' });
    this.figureEl = document.createElement('figure');
    this.imgEl = document.createElement('img');
    this.figcaptionEl = document.createElement('figcaption');
    // this.shadowRoot.innerHTML = ``
  }

  connectedCallback() {
    if (this.hasAttribute('img-src')) this.src = this.getAttribute('img-src');
    if (this.hasAttribute('img-alt')) this.alt = this.getAttribute('img-alt');
    if (this.hasAttribute('img-caption')) this.caption = this.getAttribute('img-caption');

    this.figureEl.classList.add('skills-tile__skill');
    this.imgEl.classList.add('skills-tile__image');
    this.imgEl.setAttribute('src', this.src);
    this.imgEl.setAttribute('alt', this.alt);
    this.figcaptionEl.classList.add('skills-tile__caption');
    this.figcaptionEl.textContent = this.caption;

    this.figureEl.append(this.imgEl);
    this.figureEl.append(this.figcaptionEl);
    this.append(this.figureEl);
  }
}

customElements.define('skill-tile', Skill);
