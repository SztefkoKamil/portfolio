import { shallowMount } from '@vue/test-utils';

import About from '../../../src/views/About';
import { getters } from '../../../src/misc/store';

describe('/components/About.vue', () => {
  it('should comprise h1', () => {
    const wrapper = shallowMount(About);
    const h1 = wrapper.find('h1');

    expect(h1.exists()).toBe(true);
  });

  it('should proper amount of paragraphs', () => {
    const wrapper = shallowMount(About);
    const paragraphs = wrapper.findAll('p');

    expect(paragraphs.length).toBe(getters.aboutParagraphs().length);
  });
});
