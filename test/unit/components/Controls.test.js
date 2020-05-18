import { shallowMount } from '@vue/test-utils';

import Controls from '../../../src/components/Controls';

describe('/components/Controls.vue', () => {
  it('should comprise 2 buttons', () => {
    const wrapper = shallowMount(Controls);
    const btns = wrapper.findAll('button');

    expect(btns.length).toBe(2);
  });

  it('should comprise 3 buttons when showDown=true', () => {
    const wrapper = shallowMount(Controls, {
      data() {
        return { showDown: true };
      }
    });
    const btns = wrapper.findAll('button');

    expect(btns.length).toBe(3);
  });
});
