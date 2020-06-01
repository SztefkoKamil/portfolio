import { shallowMount } from '@vue/test-utils';

import Info from '../../../src/components/Info';

describe('components/Info.vue', () => {
  it('should comprise button id=toggle-info', () => {
    const wrapper = shallowMount(Info);
    const toggleInfoBtn = wrapper.find('button#toggle-info');

    expect(toggleInfoBtn.exists()).toBe(true);
  });

  it('div class=info should be hidden when component has been mounted', () => {
    const wrapper = shallowMount(Info);
    const info = wrapper.find('div.info');

    expect(info.exists()).toBe(false);
  });

  it('should show div class=info on toggle-info button click & hide on next click', async () => {
    const wrapper = shallowMount(Info);
    const toggleInfoBtn = wrapper.find('button#toggle-info');

    toggleInfoBtn.trigger('click');
    await wrapper.vm.$nextTick();
    let info = wrapper.find('div.info');
    expect(info.exists()).toBe(true);

    toggleInfoBtn.trigger('click');
    await wrapper.vm.$nextTick();
    info = wrapper.find('div.info');
    expect(info.exists()).toBe(false);
  });
});
