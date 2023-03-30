import { shallowMount } from '@vue/test-utils'
import CardComponent from '.././components/CardComponent'
import { it, describe } from 'vitest'

describe('CardComponent', () => {
  it('renders props correctly', () => {
    const name = 'Podcast Name'
    const artist = 'Podcast Artist'
    const img = 'https://example.com/image.png'
    const wrapper = shallowMount(CardComponent, {
      props: { name, artist, img }
    })
    expect(wrapper.find('.card-title').text()).toMatch(name)
    expect(wrapper.find('.card-author').text()).toMatch(artist)
    expect(wrapper.find('.card-image img').attributes('src')).toMatch(img)
  })
})