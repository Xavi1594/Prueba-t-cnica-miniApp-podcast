import { mount } from '@vue/test-utils';
import HomeView from '.././views/HomeView';
import { test, expect } from 'vitest';
import { RouterView, RouterLink } from 'vue-router';
import CardComponent from '.././components/CardComponent';


test('Muestra "Cargando podcasts..." cuando no hay podcasts', async () => {
  const wrapper = mount(HomeView, {
    global: {
      stubs: ['RouterLink', 'CardComponent'],
    },
    props: {
      podcasts: [],
    },
  });

  expect(wrapper.text()).toContain('Cargando podcasts...');
});

test('Muestra lista de podcasts cuando hay podcasts', async () => {
  const samplePodcasts = [
    {
      'im:name': { label: 'Podcast 1' },
      'im:artist': { label: 'Artist 1' },
      'im:image': [{ label: 'image1.jpg' }],
    },
    {
      'im:name': { label: 'Podcast 2' },
      'im:artist': { label: 'Artist 2' },
      'im:image': [{ label: 'image2.jpg' }],
    },
    {
      'im:name': { label: 'Podcast 3' },
      'im:artist': { label: 'Artist 3' },
      'im:image': [{ label: 'image3.jpg' }],
    },
  ];

  const wrapper = mount(HomeView, {
    global: {
      stubs: ['RouterLink', 'CardComponent'],
    },
    props: {
      podcasts: samplePodcasts,
    },
  });

  expect(wrapper.findAll('.col-md-3.col-8').length).toBe(samplePodcasts.length);
});

