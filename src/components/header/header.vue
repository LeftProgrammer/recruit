<template>
  <div class="header">
      <!-- 搜索框 -->
      <form class="news">
          <span><input type="text" class="news-l"></span>
          <span><input type="submit" class="news-r"></span>
      </form>
  </div>
</template>

<script>
// 输出内容 export
export default {
  
};
</script>

<style>
    .header{
        height: 60px;
        width: 100%;
        background: red;
        text-align: center;
    }
    .news{
        margin-top: 15px;
        height: 30px;
    }
    .news-l{
        height: 30px;
        width: 250px;
        vertical-align: top;
    }
    .news-r{
        height: 30px;
        width: 50px;
    }

</style>
