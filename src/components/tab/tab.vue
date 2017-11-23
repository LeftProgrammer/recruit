//导航栏
<template>
  <div class="tab">
      <ul class="tabItem">
          <li class="tabList">
              <span>北京</span>
          </li>
          <li class="tabList">
              <span>司机</span>
          </li>
          <li class="tabList">
              <span>薪资福利</span>
          </li>
          <li class="tabList">
              <span>要求</span>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
    .tab{
        width: 100%;
        height: 50px;
    }
        .tabItem{
             display: flex;
             padding: 10px 0;
             margin: 0 10px;
             line-height: 30px;
             height: 30px;
             background: rgba(7,17,27,0.5);
        }
            .tabList{
                flex: 1;
                text-align: center;
            }

</style>

    