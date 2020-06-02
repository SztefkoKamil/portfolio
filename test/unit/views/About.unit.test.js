import { shallowMount } from '@vue/test-utils';

import About from '../../../src/views/About';
import { getters } from '../../../src/misc/store';

describe('/views/About.vue', () => {
  it('should comprise h1', () => {
    const wrapper = shallowMount(About);
    const h1 = wrapper.find('h1');

    expect(h1.exists()).toBe(true);
  });

  it('should has aboutParagraphs property which returns Array', () => {
    const wrapper = shallowMount(About);
    const paragraphs = wrapper.vm.aboutParagraphs;

    expect(paragraphs).toEqual(expect.any(Array));
  });

  it('should comprise proper amount of paragraphs', () => {
    const wrapper = shallowMount(About);
    const paragraphs = wrapper.findAll('p');

    expect(paragraphs.length).toBe(getters.aboutParagraphs().length);
  });
});
