// 页面入口文件

<template>
  <div id="home">
    <v-header></v-header>
    <v-tab></v-tab>
    <v-content></v-content>
  </div>
</template>

<script>
  //引入创建的组件 import
  import header from '../header/header';
  import tab from '../tab/tab.vue';
  import content from '../content/content.vue';

  export default {
    //注册组件
    components: {
      'v-header': header,
      'v-tab': tab,
      'v-content': content
    }
  }

</script>

<style>
    #home {
        background: rgba(7,17,27,0.1);  
    }   
</style>
