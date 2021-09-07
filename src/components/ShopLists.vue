<!--  -->
<template>
    <div class=''>
        <div class="wrapper">
            <!-- 顶部标题部分 -->
            <header>
                <h1>商家列表</h1>
            </header>

            <ul class="business-area">
                <li class="business-list" onclick="window.location.href='businessInfo.html'">
                    <div class="business-imgs-box">
                        <img src="img/sj01.jpg">
                    </div>
                    <div class="business-messg">
                        <h1>粥大福早餐</h1>
                        <p><span>4.7分</span>&nbsp;&nbsp;月售943&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;45分钟&nbsp;1.2km</p>
                        <p>￥15起送&nbsp;|&nbsp;￥3配送</p>
                        <p id="business-words" >"皮蛋瘦肉粥,灌汤猪肉小笼包,养胃"</p>
                    </div>
                </li>
                <li class="business-list" onclick="window.location.href='businessInfo.html'">
                    <div class="business-imgs-box">
                        <img src="img/sj02.jpg">
                    </div>
                    <div class="business-messg">
                        <h1>麦草家小馆</h1>
                        <p><span>4.7分</span>&nbsp;&nbsp;月售943&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;45分钟&nbsp;1.2km</p>
                        <p>￥15起送&nbsp;|&nbsp;￥3配送</p>
                        <p id="business-words" >★金州区汉堡 薯条飙升第2名</p>
                    </div>
                </li>
                <li class="business-list" onclick="window.location.href='businessInfo.html'">
                    <div class="business-imgs-box">
                        <img src="img/sj03.jpg">
                    </div>
                    <div class="business-messg">
                        <h1>鲁班米线</h1>
                        <p><span>4.7分</span>&nbsp;&nbsp;月售943&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;45分钟&nbsp;1.2km</p>
                        <p>￥15起送&nbsp;|&nbsp;￥3配送</p>
                        <p id="business-words" >“大赞鸡柳煎饼果子，推荐”</p>
                    </div>
                </li>
                <li class="business-list" onclick="window.location.href='businessInfo.html'">
                    <div class="business-imgs-box">
                        <img src="img/sj04.jpg">
                    </div>
                    <div class="business-messg">
                        <h1>Kiss混沌水饺粥饼店</h1>
                        <p><span>4.7分</span>&nbsp;&nbsp;月售943&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;45分钟&nbsp;1.2km</p>
                        <p>￥15起送&nbsp;|&nbsp;￥3配送</p>
                        <p id="business-words" >“羊杂汤很好喝羊杂非常多,推荐”</p>
                    </div>
                </li>
                <li class="business-list" onclick="window.location.href='businessInfo.html'">
                    <div class="business-imgs-box">
                        <img src="img/sj06.jpg">
                    </div>
                    <div class="business-messg">
                        <h1>麦当劳</h1>
                        <p><span>4.7分</span>&nbsp;&nbsp;月售943&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;45分钟&nbsp;1.2km</p>
                        <p>￥15起送&nbsp;|&nbsp;￥3配送</p>
                        <p id="business-words" >“羊杂汤很好喝羊杂非常多,推荐”</p>
                    </div>
                </li>
                <li class="business-list" onclick="window.location.href='businessInfo.html'">
                    <div class="business-imgs-box">
                        <img src="img/sj05.jpg">
                    </div>
                    <div class="business-messg">
                        <h1>必胜客宅急送</h1>
                        <p><span>4.7分</span>&nbsp;&nbsp;月售943&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;45分钟&nbsp;1.2km</p>
                        <p>￥15起送&nbsp;|&nbsp;￥3配送</p>
                        <p id="business-words" >“大赞鸡柳煎饼果子，推荐”</p>
                    </div>
                </li>
            </ul>

            

            <div style="width: 100%; height: 10vw;">
            </div>
            
        </div>
    </div>
</template>


<script>
//import '组件名称' from '组件路径';
//import '组件名称' from '@/assets/css/xxxx.css';

export default {
  name: "",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    return {};
  },
  props: {},
  computed: {},
  methods: {},
  //监控data中的数据变化
  watch: {},

  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>


<style scoped>
    body{
        background-color: rgba(228, 228, 228, 0.329);
    }
    .business-area{
        padding: 0 3vw;
    }
    .business-area li{
        margin-top: 2vw;
        padding: 1vw;
        border-radius: 5px;
        background-color: #fff;
        border-bottom: 0.2vw solid #DDD;
        display: flex;
    }
    .business-area .business-list .business-imgs-box{
        width: 28vw;
        height: 18vw;
    }
    .business-area .business-list .business-imgs-box img{
        width: 100%;
        height: 100%;
    }
    .business-area .business-list .business-messg{
        width: 100%;
        height: 100%;
        margin-left: 2vw;
    }
    .business-area .business-list .business-messg h1{
        font-size: 4vw;
    }
    .business-area .business-list .business-messg p{
        font-size: 2.7vw;
        margin-bottom: 0.5vw;
        color:#888;
    }
    .business-area .business-list .business-messg p span{
        color:rgb(255, 81, 0);
    }
    .business-area .business-list .business-messg p[id="business-words"]{
        width: 80%;
        border-radius: 3px;
        color:rgba(255, 81, 0, 0.979);
        background-color: bisque;
    }
</style>