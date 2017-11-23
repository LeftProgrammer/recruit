//内容区域

<template>
  <div class="content">
    <div class="contentInner">
      <router-link to="company">       
            <div class="contentItem">
                <div class="content-l">
                    <h1 class="contentTratment">给领导开丰田司机月六千包住</h1>
                    <span class="contentSalary">5500-8000元/月</span>
                    <span class="contentCompany">德邦物流股份有限公司</span>
                    <ul class="contentSubsidy">
                        <li>五险一金</li>
                        <li>包吃住</li>
                        <li>周末双休</li>
                        <li>饭补</li>
                    </ul>
                </div>
                <div class="content-r">
                    <button class="contentApply">申请</button>
                    <span class="contentPlace">北京朝阳</span>
            </div>        
            </div>
      </router-link>
    </div>    
    <div class="contentInner">
      <router-link to="company">       
            <div class="contentItem">
                <div class="content-l">
                    <h1 class="contentTratment">给领导开丰田司机月六千包住</h1>
                    <span class="contentSalary">5500-8000元/月</span>
                    <span class="contentCompany">德邦物流股份有限公司</span>
                    <ul class="contentSubsidy">
                        <li>五险一金</li>
                        <li>包吃住</li>
                        <li>周末双休</li>
                        <li>饭补</li>
                    </ul>
                </div>
                <div class="content-r">
                    <button class="contentApply">申请</button>
                    <span class="contentPlace">北京朝阳</span>
            </div>        
            </div>
      </router-link>
    </div>
    <div class="contentInner">
      <router-link to="company">       
            <div class="contentItem">
                <div class="content-l">
                    <h1 class="contentTratment">给领导开丰田司机月六千包住</h1>
                    <span class="contentSalary">5500-8000元/月</span>
                    <span class="contentCompany">德邦物流股份有限公司</span>
                    <ul class="contentSubsidy">
                        <li>五险一金</li>
                        <li>包吃住</li>
                        <li>周末双休</li>
                        <li>饭补</li>
                    </ul>
                </div>
                <div class="content-r">
                    <button class="contentApply">申请</button>
                    <span class="contentPlace">北京朝阳</span>
            </div>        
            </div>
      </router-link>
    </div>                
  </div>
</template>

<script>
import company from '../company/company.vue'

export default {
  components: {
      'company': company
    }
}
</script>

<style>
    .content{
        width: 100%;
    }
        .contentInner{
            margin: 0 10px;
        }
            .contentItem{
                margin-top: 20px;
                height: 140px;
                overflow: hidden;
            }
                .content-l{
                    float: left;
                }
                    .contentTratment{
                        font-size: 16px;
                        font-weight: 700;
                    }
                    .contentSalary{
                        display: block;
                        margin: 8px 0;
                        font-size: 14px;
                        color: yellow;
                    }
                    .contentCompany{
                        font-size: 16px;
                        color: #999;
                    }
                    .contentSubsidy{
                        margin-top: 20px;
                        font-size: 14px;
                    }
                    .contentSubsidy li{
                        float: left;
                        width: 60px;
                        text-align: center;
                    }
                .content-r{
                    float: right;
                    margin-top: 10px;
                    text-align: center;
                    width: 70px;
                    height: 80px;
                }
                    .contentApply{
                        display: inline-block;
                        width: 100%;
                        height: 30px;
                        font-size: 16px;
                        font-weight: 700;
                        border-radius: 6px;
                        color: #fff;
                        background: #000;                 
                    }
                    .contentPlace{
                        display: inline-block;
                        margin-top: 10px;
                        width: 100%;
                        font-size: 14px;
                        color: #999;
                    }

</style>
