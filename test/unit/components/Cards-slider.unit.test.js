import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import sinon from 'sinon';

import CardsSlider from '../../../src/components/Cards-slider';
import eventBus from '../../../src/misc/eventBus';

describe('components/Cards-slider', () => {
  beforeEach(() => {
    sinon.stub(eventBus, '$on');
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should comprise default hidden button class=slider-btn-prev which visibility depends on data.showLeft', async () => {
    const wrapper = shallowMount(CardsSlider);

    let prevBtn = wrapper.find('button.slider-btn-prev');
    expect(prevBtn.exists()).toBe(false);

    wrapper.setData({ showLeft: true });
    await wrapper.vm.$nextTick();

    prevBtn = wrapper.find('button.slider-btn-prev');
    expect(prevBtn.exists()).toBe(true);
  });

  it('button class=slider-btn-prev should fire swiper.slidePrev() on click', () => {
    const swiper = {
      slidePrev: jest.fn()
    };
    const wrapper = shallowMount(CardsSlider, {
      data: () => ({ showLeft: true })
    });
    wrapper.setData({ swiper });
    const prevBtn = wrapper.find('button.slider-btn-prev');

    prevBtn.trigger('click');

    expect(swiper.slidePrev).toHaveBeenCalledTimes(1);
  });

  it('should comprise default visible button class=slider-btn-next which visibility depends on data.showRight', async () => {
    const wrapper = shallowMount(CardsSlider);

    let nextBtn = wrapper.find('button.slider-btn-next');
    expect(nextBtn.exists()).toBe(true);

    wrapper.setData({ showRight: false });
    await wrapper.vm.$nextTick();

    nextBtn = wrapper.find('button.slider-btn-next');
    expect(nextBtn.exists()).toBe(false);
  });

  it('button class=slider-btn-next should fire swiper.slideNext() on click', () => {
    const swiper = {
      slideNext: jest.fn()
    };
    const wrapper = shallowMount(CardsSlider);
    wrapper.setData({ swiper });
    const nextBtn = wrapper.find('button.slider-btn-next');

    nextBtn.trigger('click');

    expect(swiper.slideNext).toHaveBeenCalledTimes(1);
  });

  it('should call swiper.slidePrev() or swiper.slideNext() when switchCard has been emitted via evenyBus', () => {
    sinon.restore();
    const swiper = {
      slideNext: jest.fn(),
      slidePrev: jest.fn()
    };
    const wrapper = shallowMount(CardsSlider);
    wrapper.setData({ swiper });

    eventBus.$emit('switchCard', 'next');
    expect(swiper.slideNext).toHaveBeenCalledTimes(1);

    eventBus.$emit('switchCard', 'prev');
    expect(swiper.slidePrev).toHaveBeenCalledTimes(1);
  });
});
