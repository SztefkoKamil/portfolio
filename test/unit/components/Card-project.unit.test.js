import { shallowMount } from '@vue/test-utils';

import CardProject from '../../../src/components/Card-project';

describe('/components/CardProject.vue', () => {
  const content = {
    card: {
      name: 'project-title',
      img: 'path-to-img.jpg',
      description: 'some test description',
      repo: 'path/to/repo',
      live: 'path/to/live'
    }
  };

  it('should comprise h4 with proper text', () => {
    const wrapper = shallowMount(CardProject, { propsData: { content } });
    const h4 = wrapper.find('h4');

    expect(h4.exists()).toBe(true);
    expect(h4.text()).toBe(content.card.name);
  });

  it('should comprise image with proper src & alt', () => {
    const wrapper = shallowMount(CardProject, { propsData: { content } });
    const img = wrapper.find('img');

    expect(img.attributes().src).toBe(content.card.img);
    expect(img.attributes().alt).toBe(
      `Preview of the ${content.card.name} project`
    );
  });

  it('should comprise paragraph with description', () => {
    const wrapper = shallowMount(CardProject, { propsData: { content } });
    const paragraph = wrapper.find('p');

    expect(paragraph.text()).toBe(content.card.description);
  });

  it('should comprise anchor to repository', () => {
    const wrapper = shallowMount(CardProject, { propsData: { content } });
    const anchors = wrapper.findAll('a');
    const [repoAnchor] = anchors.filter(
      (a) => a.text() === 'Repository'
    ).wrappers;

    expect(repoAnchor.attributes().href).toBe(content.card.repo);
    expect(repoAnchor.attributes().title).toBe(
      `Repository of the ${content.card.name} project`
    );
    expect(repoAnchor.attributes().target).toBe('_blank');
  });

  it('should comprise anchor to live preview of project', () => {
    const wrapper = shallowMount(CardProject, { propsData: { content } });
    const anchors = wrapper.findAll('a');
    const [repoAnchor] = anchors.filter((a) => a.text() === 'Live').wrappers;

    expect(repoAnchor.attributes().href).toBe(content.card.live);
    expect(repoAnchor.attributes().title).toBe(
      `Live preview of the ${content.card.name} project`
    );
    expect(repoAnchor.attributes().target).toBe('_blank');
  });

  it('should comprise disabled anchor when project has no repo', () => {
    content.card.repo = '';
    const wrapper = shallowMount(CardProject, { propsData: { content } });
    const anchors = wrapper.findAll('a');
    const [repoAnchor] = anchors.filter(
      (a) => a.text() === 'Repository'
    ).wrappers;

    expect(repoAnchor.attributes().href).toBe(undefined);
    expect(repoAnchor.attributes().title).toBe(undefined);
    expect(repoAnchor.attributes().target).toBe(undefined);
    expect(repoAnchor.classes().includes('disabled')).toBe(true);
  });

  it('should comprise disabled anchor when project has no live preview', () => {
    content.card.live = '';
    const wrapper = shallowMount(CardProject, { propsData: { content } });
    const anchors = wrapper.findAll('a');
    const [repoAnchor] = anchors.filter((a) => a.text() === 'Live').wrappers;

    expect(repoAnchor.attributes().href).toBe(undefined);
    expect(repoAnchor.attributes().title).toBe(undefined);
    expect(repoAnchor.attributes().target).toBe(undefined);
    expect(repoAnchor.classes().includes('disabled')).toBe(true);
  });
});
