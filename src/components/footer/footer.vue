//底部区域

<template>
  <div class="footer">     
      <div class="footerInner">
          <div class="footer-l">
            <span class="perviousPage">
              <i>1</i>
            </span>
          </div>
          <div class="footer-r">
            <span class="voice">
              <i>2</i>
            </span>
            <span class="refresh">
                <i>3</i>
            </span>
            <span class="logo">
                <i>4</i>
            </span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
    /* @import "../../common/stylus/mixin.styl"; */

    .footer{
        position: fixed;
        left: 0;
        bottom: 0;
        height: 50px;
        width: 100%;
    }
    .footerInner{
        display: flex;
        background: #fff;
        border-top: 1px solid #999;
    }
    .footer-l{
        flex: 1
    }
    .footer-r{
        flex: 0 0 50%;
        width: 50%;
        height: 50px;
    }
    
    
</style>

