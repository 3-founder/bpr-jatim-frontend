import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Berita from '@/views/Berita'
import Profile from '@/views/tentang/Profile'
import Transparansi from '@/views/tentang/Transparansi'
import Login from '../views/auth/Login.vue';
import Register from '../views/auth/Register.vue';
import PersonalData from '../views/Personal-data.vue';
import Scoring from '../views/Scoring.vue';
import PinjamanCepat from '../views/PinjamanCepat.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/berita',
    name: 'Berita',
    component: Berita
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/transparansi',
    name: 'Transparansi',
    component: Transparansi
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/data-diri',
    component: PersonalData,
  },
  {
    path: '/scoring',
    component: Scoring,
  },
  {
    path: '/pinjaman-cepat',
    component: PinjamanCepat,
  },
]

const router = new VueRouter({
  routes
})

export default router
