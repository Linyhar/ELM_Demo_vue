<!--  -->
<template>
    <div class=''>
        <!-- 横幅广告——品质套餐 -->
        <div class="set_meal-box">
            <div class="set_meal">
                <h3>品质套餐</h3>
                <p>搭配齐全吃得好</p>
                <a>立即抢购 &gt;</a>
            </div>
        </div>

        <!-- 横幅广告——超级会员 -->
        <div class="supermember">
            <div class="box-left">
                <img src="img/supermember.png">
                <h1>超级会员</h1>
                <p>&#8226; 每月享超值权益</p>
            </div>
            <div class="box-right">
                <p>立即开通 &gt;</p>
            </div>
        </div>
    </div>
</template>


<script>
//import '组件名称' from '组件路径';
//import '组件名称' from '@/assets/css/xxxx.css';

export default {
    name: 'Advertisement',
    data() {
        return {
            
        };
    },

}
</script>


<style scoped>
    /****************** 横幅广告部分 ******************/
    .set_meal{
        width: 95%;
        margin: 0 auto;
        height: 20vw;
        
        background-image: url(/img/index_banner.png);
        background-repeat: no-repeat;
        background-size: cover;
        
        box-sizing: border-box;
        padding: 2vw 6vw;
    }
    .set_meal h3{
        font-size: 4.2vw;
        margin-bottom: 1.2vw;
    }
    .set_meal p{
        font-size: 3.4vw;
        color: #666;
        margin-bottom: 2.4vw;
    }
    .set_meal a{
        font-size: 3vw;
        color: #C79060;
        font-weight: 700;
    }

    /****************** 超级会员部分 ******************/
    .supermember{
        width: 90%;
        margin: 0 auto;
        height: 10vw;
        background-color: #FEEDC1;
        margin-top: 1vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .supermember .box-left{
        display: flex;
        align-items: center;
        margin-left: 4vw;
        user-select: none;
    }
    .supermember .box-left img{
        width: 8vw;
        height: 8vw;
        margin-right: 2vw;
    }
    .supermember .box-left h1{
        font-size: 4vw;
    }
    .supermember .box-left p{
        font-size: 3vw;
    }
    .supermember .box-right p{
        font-size: 3vw;
        margin-right: 4vw;
    }
</style>