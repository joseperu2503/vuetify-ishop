// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/product/:productId',
        component: () => import('@/views/Product.vue'),
      },
      {
        path: '/cart',
        component: () => import('@/views/Cart.vue'),
      },
      {
        path: '/shipping',
        component: () => import('@/views/Shipping.vue'),
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
