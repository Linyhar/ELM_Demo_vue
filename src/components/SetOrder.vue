<!--  -->
<template>
  <div class="">
    <div class="wrapper">
      <header>
        <h1>确认订单</h1>
      </header>
      <div class="top-tips">温馨提示：请适量点餐、避免浪费</div>
      <div class="address-messge-box">
        <div style="font-size: 4vw">配送至:</div>
        <div class="messge">
          <div class="address">
            大连市金州区龙潭街大连民族大学金石滩校区......
          </div>
          <div class="change-address" style="font-weight: 600; font-size: 8vw">
            &gt;
          </div>
        </div>
        <div style="font-size: 3.5vw; font-weight: 600">
          李(先生)15269666999
        </div>
      </div>
      <div class="orderContent">
        <h3 style="border-bottom: 2px solid #ddd">{{shopinfo.name}}</h3>
        <ul id="orderList">
          <li v-for="seitem in selected" :key="seitem.id">
            <img :src="seitem.imgpath">
            <div class='footname'>{{seitem.name}}</div>
            <div class='footnum'>x {{seitem.quanlity}}</div>
            <div class='footprice'>￥{{seitem.price}}</div>
          </li>
          <hr>
          <li>
            <div class="footname">配送费</div>
            <div class="footprice">￥{{shopinfo.peicost}}</div>
          </li>
                        
        </ul>
      </div>

      <!-- 购物车部分 -->
      <div class="cart">
        <div class="cart-left">
          <div class="cart-left-info">
            <p>&#165;<span id="allprice"> {{toatalprice}} </span></p>
          </div>
        </div>
        <div class="cart-right">
          <div class="cart-right-item" @click="toPay()">去支付</div>
        </div>
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
    return {
      shopinfo:{id:"-",shopicon:"-",name:"-",score:"-",monthsale:"-",ship:"-",mincost:0,peicost:0,voicemail:"-",distance:"-",costtime:"-"},
      selected:[],
    };
  },
  props: {},
  computed: {
    toatalprice(){
      let totalprices = this.shopinfo.peicost;
      for (const k in this.selected) {
        totalprices += this.selected[k].price * this.selected[k].quanlity;
      }
      return totalprices.toFixed(2)
    },
  },
  methods: {
    toPay(){
      this.$cookies.set("toatalprice",JSON.stringify(this.toatalprice));
      this.$router.push('payment');
    }
  },
  //监控data中的数据变化
  watch: {},

  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    
    if(this.$cookies.get("selected") != null){
      this.selected = JSON.parse(this.$cookies.get("selected"));
    }
    if(this.$cookies.get("shopinfo") != null){
      this.shopinfo = this.$cookies.get("shopinfo");
   }
  },
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

.top-tips {
  width: 97%;
  font-size: 0.1vw;
  background-color: rgb(255, 234, 206);
  text-align: center;
  color: rgb(255, 137, 59);
  border-radius: 5px;
  margin: 1vw auto;
}

.address-messge-box {
  width: 92%;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  border-radius: 5px;
  margin: 1vw auto;
  padding: 2vw 0 2vw 3vw;
  background-image: linear-gradient(
    to bottom right,
    rgb(128, 225, 255),
    rgb(236, 236, 236)
  );
}
.address-messge-box .messge {
  height: 13vw;
  display: flex;
}
.address-messge-box .messge .address {
  width: 95%;
  font-size: 5vw;
  font-weight: 600;
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  /* white-space:nowrap; */
}

.orderContent {
  width: 92%;
  background-color: rgb(255, 255, 255);
  /* text-align: center; */
  color: rgb(0, 0, 0);
  border-radius: 5px;
  margin: 1vw auto;
  padding: 2vw 0 2vw 2vw;
}
#orderList li {
  height: 10vw;
  margin: 2vw auto;
  color: rgb(71, 71, 71);
  display: flex;
  justify-content: space-between;
}
#orderList li img {
  width: 15%;
  height: 10vw;
}
#orderList li .footname {
  /* flex-grow:1; */
  width: 48vw;
  height: 10vw;
  line-height: 10vw;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 5vw;
}
#orderList li .footnum {
  width: 12vw;
  height: 10vw;
  line-height: 10vw;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 4.5vw;
}
#orderList li .footprice {
  width: 15vw;
  height: 10vw;
  line-height: 10vw;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 4.5vw;
}

/****************** 购物车部分 ******************/
.cart {
  width: 100%;
  height: 14vw;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
}
.cart .cart-left {
  flex: 2;
  background-color: #505051;
  display: flex;
}

.cart .cart-left .cart-left-info p:first-child {
  font-size: 4.5vw;
  color: #fff;
  margin-top: 1vw;
  margin-left: 5vw;
}
.cart .cart-left .cart-left-info p {
  font-size: 2.8vw;
  color: #aaa;
}

.cart .cart-right .cart-right-item {
  width: 30vw;
  height: 100%;
  background-color: #38ca73;
  color: #fff;
  font-size: 4.5vw;
  font-weight: 700;
  user-select: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>