import { shallowMount } from '@vue/test-utils';

import Intro from '../../../src/views/Intro';

describe('/views/Intro.vue', () => {
  it('should comprise image, h1, h2 & h3', () => {
    const wrapper = shallowMount(Intro);
    const img = wrapper.find('img');
    const h1 = wrapper.find('h1');
    const h2 = wrapper.find('h2');
    const h3 = wrapper.find('h3');

    expect(img.exists()).toBe(true);
    expect(h1.exists()).toBe(true);
    expect(h2.exists()).toBe(true);
    expect(h3.exists()).toBe(true);
  });
});
