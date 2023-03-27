import { mount } from '@vue/test-utils';
import CardComponent from '../components/CardComponent';

describe('CardComponent', () => {
  test('Muestra el nombre, artista e imagen del podcast', () => {
    const wrapper = mount(CardComponent, {
      props: {
        name: 'Podcast 1',
        artist: 'Artist 1',
        img: 'image1.jpg',
      },
    });

    expect(wrapper.find('.card-title').text()).toBe('Podcast 1');
    expect(wrapper.find('.card-text').text()).toBe('Artist 1');
    expect(wrapper.find('img').attributes('src')).toBe('image1.jpg');
  });
});
