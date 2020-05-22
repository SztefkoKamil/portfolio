import { shallowMount } from '@vue/test-utils';

import About from '../../../src/views/About';

describe('/components/About.vue', () => {
  it('should comprise h1', () => {
    const wrapper = shallowMount(About);
    const h1 = wrapper.find('h1');

    expect(h1.exists()).toBe(true);
  });

  it('should number of p tags equal to data.paragraphs.length', () => {
    const wrapper = shallowMount(About, {
      data() {
        return { paragraphs: ['1', '2', '3', '4', '5'] };
      }
    });
    const pTags = wrapper.findAll('p');

    expect(pTags.length).toBe(5);
  });
});
