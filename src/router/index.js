import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
/* import Blog from '../views/Blog.vue'  */

const routes = [
  {
    path: '/',
    name: 'homeview',
    component: HomeView
  },
  {
    path: '/blog',
    name: 'Blog',
    // route level code-splitting
    // this generates a separate chunk (Blog.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Blog" */ '../views/Blog.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
