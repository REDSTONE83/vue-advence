import Vue from 'vue';
import VueRouter from 'vue-router';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import createListView from '../views/CreateListView';

import bus from '../utils/bus';
import { store } from '../store';

Vue.use(VueRouter);

const fetchListBeforeEnter = (to, from , next) => {
  bus.$emit('start:spinner');
  store.dispatch('FETCH_LIST', to.name)
      .then(next)
      .catch(error => console.log(error));
}

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      // path: url 주소
      path: '/news',
      // component: url 주소로 갔을 때 표시될 컴포넌트
      name: 'news',
      // component: NewsView,
      component: createListView('NewsView'),
      beforeEnter: fetchListBeforeEnter,
    },
    {
      path: '/ask',
      name: 'ask',
      component: createListView('AskView'),
      beforeEnter: fetchListBeforeEnter,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: createListView('JobsView'),
      beforeEnter: fetchListBeforeEnter,
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
    {
      path: '/user/:id',
      component: UserView,
    }
  ]
});