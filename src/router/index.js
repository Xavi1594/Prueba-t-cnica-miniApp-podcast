import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
     {
       path: '/details',
       name: 'details',
       
       component: () => import('../views/DetailsView.vue')
 },
 {
  path: '/chapter',
  name: 'chapterdetails',
  
  component: () => import('../views/ChapterDetailsView.vue')
},
{
  path: '/details/:podcastId',
  name: 'details',
  component: () => import('../views/DetailsView.vue')
},

 
  ]
})

export default router
