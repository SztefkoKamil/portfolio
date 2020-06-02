import { shallowMount } from '@vue/test-utils';

import Projects from '../../../src/views/Projects';

describe('/views/Projects.vue', () => {
  it('should comprise h1', () => {
    const wrapper = shallowMount(Projects);
    const h1 = wrapper.find('h1');

    expect(h1.exists()).toBe(true);
  });

  it('should has projects property which returns Array', () => {
    const wrapper = shallowMount(Projects);
    const { projects } = wrapper.vm;

    expect(projects).toEqual(expect.any(Array));
  });
});
