// 程序入口文件，加载各种公共组件

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Home from './components/home/home'
import router from './router'

//全局引入一些通用的stylus
// import './common/stylus/index.styl';

Vue.config.productionTip = false

// 单独配置一个规则，跳过这行代码的校验
/* eslint-disable no-new */
new Vue({
  // app组件挂载点
  el: '#app',
  router,
  template: '<home/>',
  components: { Home }
})
/* eslint-enable */