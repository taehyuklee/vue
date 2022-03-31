import VueRouter from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import ProfilePage from '@/pages/ProfilePage.vue'

//@는 src기준이 된다.

const routes = [
  {path: '/', component: MainPage},
  {path: '/login', component: LoginPage },
  {path: '/profile',
    component: ProfilePage,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('token')) {
        next(); //만약 token이 있으면 그 다음단계로 넘어간다.
      } else {
        next('/login');
      }
    },
  },
];

const router = new VueRouter({
  routes
});

export default router; //보내준다