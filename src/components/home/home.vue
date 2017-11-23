// 页面入口文件

<template>
  <div id="home">
    <v-header></v-header>
    <div class="middle">
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <router-link to="/content">go</router-link>
    </div>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
  //引入创建的组件 import
  import header from '../header/header';
  import footer from '../footer/footer';

  export default {
    //注册组件
    components: {
      'v-header': header,
      'v-footer': footer
    }
  }

</script>

<style>
    #home {
        background: #000  
    }   
</style>
