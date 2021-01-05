import MainView from '../views/MainView.vue'
import TodoView from '../views/TodoView.vue'
import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path:'/',
      redirect: '/calendar',
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: MainView,
    },
    {
      path: '/todo/:dateStr',
      name: 'dailyTodo',
      component: TodoView,
      props: true,
    }
  ]
})