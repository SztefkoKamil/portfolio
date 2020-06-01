import { shallowMount } from '@vue/test-utils';

import CardSkill from '../../../src/components/Card-skill';

describe('/components/CardSkill.vue', () => {
  const content = {
    card: {
      title: 'card-title',
      skills: [
        {
          img: 'path/to/img.jpg',
          name: 'skill 1'
        },
        {
          img: 'path/to/img.jpg',
          name: 'skill 2'
        },
        {
          img: 'path/to/img.jpg',
          name: 'skill 3'
        }
      ]
    }
  };

  it('should comprise h4 with proper text', () => {
    const wrapper = shallowMount(CardSkill, { propsData: { content } });
    const h4 = wrapper.find('h4');

    expect(h4.exists()).toBe(true);
    expect(h4.text()).toBe(content.card.title);
  });

  it('should comprise proper amount of li elements', () => {
    const wrapper = shallowMount(CardSkill, { propsData: { content } });
    const li = wrapper.findAll('li');

    expect(li.length).toBe(3);
  });

  it('li should comprise text & image', () => {
    const wrapper = shallowMount(CardSkill, { propsData: { content } });
    const li = wrapper.find('li');
    const img = li.find('img');
    const p = li.find('p');

    expect(img.attributes().src).toBe(content.card.skills[0].img);
    expect(p.text()).toBe(content.card.skills[0].name);
  });
});
