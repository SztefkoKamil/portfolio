import { shallowMount } from '@vue/test-utils';

import Contact from '../../../src/views/Contact';

describe('/components/Contact.vue', () => {
  it('should comprise h1 & h2', () => {
    const wrapper = shallowMount(Contact);
    const h1 = wrapper.find('h1');
    const h2 = wrapper.find('h2');

    expect(h1.exists()).toBe(true);
    expect(h2.exists()).toBe(true);
  });

  it('should comprise proper amount of divs class=info-bar', () => {
    const wrapper = shallowMount(Contact);
    const infoBars = wrapper.findAll('div.info-bar');

    expect(infoBars.length).toBe(4);
  });

  it('should comprise anchors to my github & linkedin', () => {
    const wrapper = shallowMount(Contact);
    const github = wrapper.find('a[href="https://github.com/sztefkokamil"]');
    const linkedin = wrapper.find(
      'a[href="https://www.linkedin.com/in/kamil-sztefko-483a09179/"]'
    );

    expect(github.exists()).toBe(true);
    expect(linkedin.exists()).toBe(true);
  });
});
