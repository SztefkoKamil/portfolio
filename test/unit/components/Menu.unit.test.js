import { shallowMount } from '@vue/test-utils';

import Menu from '../../../src/components/Menu';

describe('/components/Menu.vue', () => {
  it('should comprise toggle-menu-btn', () => {
    const wrapper = shallowMount(Menu, { stubs: ['router-link'] });
    const toggleBtn = wrapper.find('.toggle-menu-btn');

    expect(toggleBtn.exists()).toBe(true);
  });

  it('click on toggle-menu-btn should add class=menu-open to it & show nav-container', async () => {
    const wrapper = shallowMount(Menu, { stubs: ['router-link'] });
    const toggleBtn = wrapper.find('.toggle-menu-btn');

    expect(toggleBtn.classes('menu-open')).toBe(false);
    expect(wrapper.find('.nav-container').exists()).toBe(false);

    toggleBtn.trigger('click');
    await wrapper.vm.$nextTick();

    expect(toggleBtn.classes('menu-open')).toBe(true);
    expect(wrapper.find('.nav-container').exists()).toBe(true);
  });

  it('nav-container should comprise nav & nav-btns', async () => {
    const wrapper = shallowMount(Menu, { stubs: ['router-link'] });
    const toggleBtn = wrapper.find('.toggle-menu-btn');
    toggleBtn.trigger('click');
    await wrapper.vm.$nextTick();
    const navContainer = wrapper.find('.nav-container');
    const nav = navContainer.find('nav');
    const navBtns = nav.findAll('.nav-btn');

    expect(nav.exists()).toBe(true);
    expect(navBtns.length).toBe(5);
  });

  it('nav-btn click should hide nav-container', async () => {
    const wrapper = shallowMount(Menu, {
      stubs: ['router-link'],
      data: () => ({ isOpen: true })
    });
    const navBtn = wrapper.find('.nav-btn');
    navBtn.trigger('click');
    await wrapper.vm.$nextTick();
    const navContainer = wrapper.find('.nav-container');

    expect(navContainer.exists()).toBe(false);
  });
});
