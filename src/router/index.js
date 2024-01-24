import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MainView from '@/views/MainView.vue'
import ReservationView from '@/views/ReservationView.vue'
import NotFoundView from "@/views/NotFoundView.vue";
import ContactsView from '@/views/ContactsView.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView
    },

    {
      path: '/reserv',
      name: 'reserv',
      component: ReservationView
    },
    {
      path: "/:pathMatch(.)",
      component: NotFoundView,
      meta: { title: "Page not found" },
    },
    {
      path: "/contacts",
      name: 'contacts',
      component: ContactsView,


    }
  ]
})

export default router
