import { mount } from '@vue/test-utils';

import Projects from '../../src/views/Projects';
import CardsSlider from '../../src/components/Cards-slider';
import CardProject from '../../src/components/Card-project';
import { getters } from '../../src/misc/store';

describe('/views/Projects.vue', () => {
  it('should comprise Cards-slider component', () => {
    const wrapper = mount(Projects);
    const slider = wrapper.findComponent(CardsSlider);

    expect(slider.exists()).toBe(true);
  });

  it('should comprise proper amount of Card-project components', () => {
    const wrapper = mount(Projects);
    const cards = wrapper.findAllComponents(CardProject);

    expect(cards.length).toBe(getters.projects().length);
  });
});
