import { shallowMount } from '@vue/test-utils';

import Skills from '../../../src/views/Skills';

describe('/components/Skills.vue', () => {
  it('should comprise h1', () => {
    const wrapper = shallowMount(Skills);
    const h1 = wrapper.find('h1');

    expect(h1.exists()).toBe(true);
  });

  it('should has skillsKnowledge property which returns Array', () => {
    const wrapper = shallowMount(Skills);
    const skills = wrapper.vm.skillsKnowledge;

    expect(skills).toEqual(expect.any(Array));
  });
});
