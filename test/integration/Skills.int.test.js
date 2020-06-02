import { mount } from '@vue/test-utils';

import Skills from '../../src/views/Skills';
import CardsSlider from '../../src/components/Cards-slider';
import CardSkill from '../../src/components/Card-skill';
import { getters } from '../../src/misc/store';

describe('/views/Skills.vue', () => {
  it('should comprise Cards-slider component', () => {
    const wrapper = mount(Skills);
    const slider = wrapper.findComponent(CardsSlider);

    expect(slider.exists()).toBe(true);
  });

  it('should comprise proper amount of Card-skill components', () => {
    const wrapper = mount(Skills);
    const cards = wrapper.findAllComponents(CardSkill);

    expect(cards.length).toBe(getters.skillsKnowledge().length);
  });
});
