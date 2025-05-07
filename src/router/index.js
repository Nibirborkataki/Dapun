import { createRouter, createWebHistory } from "vue-router";

import Home from '../pages/HomePage.vue';
import About from '../pages/AboutPage.vue';
import Contact from '../pages/ContactPage.vue';
import Suggestion from '../pages/SuggesstionPage.vue';
import Subscribe from '../pages/SubscribePage.vue';
import ProfilePage from '../pages/ProfilePage.vue';
import Login from '../pages/AuthPage.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/suggestion', name: 'Suggestion', component: Suggestion },
  { path: '/contact', name: 'Contact', component: Contact },
  {path:'/subscribe', name: 'Subscribe', component: Subscribe},
  {path:'/profile', name: 'ProfilePage', component: ProfilePage},
  {path:'/login', name:'Login', component: Login},
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
