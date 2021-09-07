<!--  -->
<template>
    <div class='business-mian'>
        <!-- 推荐 -->
        <div class="recommend">
            <div class="recommend-line"></div>
            <p>推荐商家</p>
            <div class="recommend-line"></div>
        </div>

        <ul class="business">
           
      
            <li v-for="listitem in shoplist" :key="listitem.id" >
              <router-link to="/shopmain">
                <img :src="listitem.shopicon" />
                <div class="business-info">
                  <div class="business-info-h">
                    <h3>{{ listitem.name }}</h3>
                  </div>
                  <div class="business-info-star">
                    <div class="business-info-star-left">
                      <span class="score">{{ listitem.score }}分</span
                      >&nbsp;&nbsp;&nbsp;月售{{ listitem.monthsale }}单
                    </div>
                    <div class="business-info-star-right">
                      {{ listitem.ship }}
                    </div>
                  </div>
                  <div class="business-info-delivery">
                    <p>
                      &#165;{{ listitem.mincost }}起送 | &#165;{{
                        listitem.nampeicoste
                      }}配送
                    </p>
                    <p>{{ listitem.distance }} | {{ listitem.costtime }}</p>
                  </div>
                  <div class="business-info-explain">
                    <div>{{ listitem.voicemail }}</div>
                  </div>
                  <div class="business-info-promotion">
                    <div class="business-info-promotion-left">
                      <div class="business-info-promotion-left-incon">新</div>
                      <p>饿了么新用户首单立减9元</p>
                    </div>
                    <div class="business-info-promotion-right">
                      <p>2个活动</p>
                    </div>
                  </div>
                  <div class="business-info-promotion">
                    <div class="business-info-promotion-left">
                      <div class="business-info-promotion-left-incon">特</div>
                      <p>特价商品5元起</p>
                    </div>
                  </div>
                </div>
              </router-link>
            </li>

          
        </ul>
    </div>
</template>


<script>
//导入其他文件例如：import 《组件名称》 from '《组件路径》';

export default {
    //import引入的组件需要注入到对象中才能使用
    name:'RecomShop',
    components: {},
    data() {
      return {
        shoplist:[
          {id:"sj001",shopicon:"/img/sj01.jpg",name:"粥大福早餐",score:"4.8",monthsale:"422",ship:"蓝骑士专送",mincost:15,peicost:3,voicemail:"皮蛋瘦肉粥，灌汤猪肉小笼包，养胃",distance:"752m",costtime:"23分钟"},
          {id:"sj002",shopicon:"/img/sj02.jpg",name:"麦草家小馆",score:"4.7",monthsale:"322",ship:"蓝骑士专送",mincost:12,peicost:3,voicemail:"皮蛋瘦肉粥，灌汤猪肉小笼包，养胃",distance:"932km",costtime:"25分钟"},
          {id:"sj003",shopicon:"/img/sj03.jpg",name:"Kiss混沌水饺粥饼店",score:"4.9",monthsale:"322",ship:"蓝骑士专送",mincost:13,peicost:3,voicemail:"皮蛋瘦肉粥，灌汤猪肉小笼包，养胃",distance:"1.40km",costtime:"35分钟"},
          {id:"sj004",shopicon:"/img/sj04.jpg",name:"鲁班米线",score:"4.2",monthsale:"212",ship:"蓝骑士专送",mincost:15,peicost:3,voicemail:"皮蛋瘦肉粥，灌汤猪肉小笼包，养胃",distance:"1.55km",costtime:"30分钟"},
          {id:"sj005",shopicon:"/img/sj05.jpg",name:"粥大福早餐",score:"4.2",monthsale:"170",ship:"蓝骑士专送",mincost:16,peicost:3,voicemail:"皮蛋瘦肉粥，灌汤猪肉小笼包，养胃",distance:"1.9km",costtime:"32分钟"},
          {id:"sj006",shopicon:"/img/sj06.jpg",name:"粥大福早餐",score:"4.5",monthsale:"209",ship:"蓝骑士专送",mincost:10,peicost:3,voicemail:"皮蛋瘦肉粥，灌汤猪肉小笼包，养胃",distance:"2.35km",costtime:"40分钟"},
        ]
      };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化 
    watch: {},
    //方法集合
    methods: {
        
    },
}
</script>


<style scoped>
    .recommend{
        width: 100%;
        height: 8vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .recommend .recommend-line{
        width: 6vw;
        height: 0.2vw;
        background-color: #888;
    }
    .recommend p{
        font-size: 4vw;
        margin: 0 4vw;
    }

    .recommendtype{
        width: 100%;
        height: 5vw;
        margin-bottom: 5vw;
        
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .recommendtype li{
        font-size: 3.5vw;
        color: #555;
    }



    .business{
        width: 100%;
        margin-bottom: 14vw;
    }
    .business li>a{
        width: 100%;
        box-sizing: border-box;
        padding: 2.5vw;
        margin: 2vw 0;
        user-select: none;
        border-bottom: solid 1px #DDD;
        border-radius: 2%;
        background-color: #fff;
        display: flex;
    }
    .business li img{
        width: 18vw;
        height: 18vw;
    }
    .business-info{
        width: 100%;
        box-sizing: border-box;
        padding-left: 3vw;
    }
    .business-info .business-info-h{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1vw;
    }
    .business-info .business-info-h h3{
        font-size: 4vw;
        color: #333;
    }
    .business-info .business-info-h .business-info-like{
        width: 1.6vw;
        height: 3.4vw;
        background-color: #666;
        color: #fff;
        font-size: 4vw;
        margin-right: 4vw;
        
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .business-info .business-info-star{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0vw;
        font-size: 3.1vw;
    }
    .business-info .business-info-star .business-info-star-left{
        display: flex;
        align-items: center;
    }
    .business-info .business-info-star .business-info-star-left .fa-star{
        color: #FEC80E;
        margin-right: 0.5vw;
    }
    .business-info .business-info-star .business-info-star-left .score{
        color: rgb(255, 94, 0);
        font-size: 4vw;
    }
    .business-info .business-info-star .business-info-star-right{
        /* background-color: #0097FF; */
        border: 0.1vw solid #8dd0fca4;
        color: #0097FF;
        font-size: 2.4vw;
        border-radius: 2px;
        padding: 0 0.6vw;
    }
    .business-info .business-info-delivery{
        display: flex;
        justify-content: space-between;
        align-items: center;       
        color: #666;
        font-size: 1.1vw;
    }
    .business-info .business-info-explain{
        display: flex;
        
        align-items: center;
        margin-bottom: 1vw;
    }
    .business-info .business-info-explain div{
        font-size: 2.8vw;
        color: rgb(255, 102, 0);
        background-color: #fff5ec;
        border-radius: 3px;
        padding: 0 0.1vw ;
    }
    .business-info .business-info-promotion{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1vw;
    }
    .business-info .business-info-promotion .business-info-promotion-left{
        display: flex;
        align-items: center;
    }
    .business-info .business-info-promotion .business-info-promotion-left .business-info-promotion-left-incon{
        width: 4vw;
        height: 4vw;
        background-color: #70BC46;
        border-radius: 3px;
        font-size: 3vw;
        color: #fff;
        
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .business-info .business-info-promotion .business-info-promotion-left p{
        color: #666;
        font-size: 3vw;
        margin-left: 2vw;
    }
    .business-info .business-info-promotion .business-info-promotion-right{
        display: flex;
        align-items: center;
        font-size: 2.5vw;
        color: #999;
    }
    .business-info .business-info-promotion .business-info-promotion-right p{
        margin-right: 2vw;
    }
</style>