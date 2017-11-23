import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import home from '../components/home/home'
// import company from '../components/company/company.vue'
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
    // {
    //     path: 'company',
    //     component: company  
    // }
  ]
})
