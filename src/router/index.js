import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Gallery from '@/components/Gallery'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/gallery/:galleryName',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/',
      name: 'Homepage',
      component: HomePage
    }
  ]
})
