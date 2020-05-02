class Project extends HTMLElement {
  constructor() {
    super();
    this.tileTitle = 'No title';
    this.imgSrc = '';
    this.imgAlt = 'No image';
    this.repoHref = '';
    this.repoTitle = '';
    this.liveHref = '';
    this.liveTitle = '';
    this.h5El = document.createElement('h5');
    this.imgEl = document.createElement('img');
    this.pEl = document.createElement('p');
    this.linksContainer = document.createElement('div');
    this.repoAnchor = document.createElement('a');
    this.liveAnchor = document.createElement('a');
  }

  connectedCallback() {
    this.classList.add('projects-body__tile');
    this.classList.add('projects-tile');

    if (this.hasAttribute('wc-title')) this.tileTitle = this.getAttribute('wc-title');
    this.h5El.classList.add('projects-tile__title');
    this.h5El.textContent = this.tileTitle;

    if (this.hasAttribute('img-src')) this.imgSrc = this.getAttribute('img-src');
    if (this.hasAttribute('img-alt')) this.imgAlt = this.getAttribute('img-alt');
    this.imgEl.classList.add('projects-tile__image');
    this.imgEl.setAttribute('src', this.imgSrc);
    this.imgEl.setAttribute('alt', this.imgAlt);

    this.pEl.classList.add('projects-tile__description');
    const content = this.textContent;
    this.textContent = '';
    this.pEl.append(content);

    if (this.hasAttribute('repo-title')) {
      this.repoTitle = this.getAttribute('repo-title');
      this.repoAnchor.setAttribute('title', this.repoTitle);
    }
    if (this.hasAttribute('repo-href')) {
      this.repoHref = this.getAttribute('repo-href');
      this.repoAnchor.setAttribute('target', '_blank');
      this.repoAnchor.setAttribute('href', this.repoHref);
    } else {
      this.repoAnchor.setAttribute('disabled', 'disabled');
      this.repoAnchor.setAttribute('rel', 'no-folow');
      this.repoAnchor.classList.add('projects-links__link--disabled');
    }
    this.repoAnchor.classList.add('projects-links__link');
    this.repoAnchor.textContent = 'Repozytorium';

    if (this.hasAttribute('live-title')) {
      this.liveTitle = this.getAttribute('live-title');
      this.liveAnchor.setAttribute('title', this.liveTitle);
    }
    if (this.hasAttribute('live-href')) {
      this.liveHref = this.getAttribute('live-href');
      this.liveAnchor.setAttribute('target', '_blank');
      this.liveAnchor.setAttribute('href', this.liveHref);
    } else {
      this.liveAnchor.setAttribute('disabled', 'disabled');
      this.liveAnchor.setAttribute('rel', 'no-folow');
      this.liveAnchor.classList.add('projects-links__link--disabled');
    }
    this.liveAnchor.classList.add('projects-links__link');
    this.liveAnchor.textContent = 'Podgląd';

    this.linksContainer.classList.add('projects-tile__links');
    this.linksContainer.classList.add('projects-links');
    this.linksContainer.append(this.repoAnchor);
    this.linksContainer.append(this.liveAnchor);

    this.append(this.h5El);
    this.append(this.imgEl);
    this.append(this.pEl);
    this.append(this.linksContainer);
  }
}

customElements.define('project-tile', Project);
