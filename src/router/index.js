import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import home from '../components/home/home'
import content from '../components/content/content'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: 'home',
      component: home
    },
    {
        path: 'connent',
        component: content  
    }
  ]
})
