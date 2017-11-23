<template>
  <div class="header">     
      <div class="headerInner w">
        <div class="headerItem">
            <router-link to="home" class="xiaoMi">小米招聘</router-link>
        </div>
        <!-- 搜索框 -->
        <form class="headerItem news">
            <span><input type="text" class="news-l"></span>
            <!-- <span><input type="submit" class="news-r"></span> -->
        </form>
        <div class="headerItem">
            <router-link to="resume" class="jianLi">简历</router-link>
        </div>
        <div class="headerItem">
            <router-link to="information" class="xinXi">信息</router-link>
        </div>
      </div>
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
        background: rgba(7,17,27,0.3);
        text-align: center;
    }
        .headerInner{
            margin: 0 10px;
        }
            .headerItem{
                float: left;
                margin-top: 15px;
                line-height: 30px;
                font-size: 16px;
            }
                .xiaoMi{
                    display: inline-block;
                    margin-right: 10px;
                    width: 65px;
                    height: 30px;                 
                }
            .news{               
                height: 30px;
            }
                .news-l{
                    height: 30px;
                    width: 180px;
                    vertical-align: top;
                }
                .jianLi{
                    display: inline-block;
                    padding: 0 10px 0 5px ;
                    width: 38px;
                    height: 30px;
                    border-right: 1px solid #999;
                }
                .xinXi{
                    display: inline-block;
                    margin-left: 5px;
                    height: 30px;
                    width: 38px;
                }
</style>
