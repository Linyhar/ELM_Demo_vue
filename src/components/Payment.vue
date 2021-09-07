<!--  -->
<template>
  <div class=''>
    <div class="wrapper">

      <!-- header部分 -->
      <header>
        <h1>在线支付</h1>
      </header>

      <br>
      <br>

      
      <!-- 支付方式部分 -->
      <p>
        请选择您的支付方式：
      </p>
      <ul class="payment-type">
        
        <li @click="pay_type='alipay'" :class="{usethetype:pay_type == 'alipay'}">
          <img src="/img/alipay.png">
          <div>支付宝</div>
          <input class="messginput" name="paytype" type="radio" v-model="pay_type" value="alipay">
        </li>
        <li @click="pay_type='wechart'" :class="{usethetype:pay_type == 'wechart'}">
          <img src="/img/wechat.png">
          <div>微信支付</div>
          <input class="messginput" name="paytype" type="radio" v-model="pay_type" value="wechart">
        </li>
      </ul>
      <div class="payment-button">
        <button @click="nowToPay()">确认支付</button>
      </div>

      <!-- 订单信息部分 -->
      <h3>订单信息：</h3>
      <div class="order-info">
        <div>
          粥大福早餐
        </div>
        <p>&#165; <span id="allprice">{{totalprice}}</span></p>
        <i :style="{display:openlist}"  @click="openlist='none'; closelist='block'" class="iconfont icon-zhankai"></i>
        <i :style="{display:closelist}"  @click="openlist='block'; closelist='none'" class="iconfont icon-shouqi"></i>
      </div>

      <!-- 订单明细部分 -->
      <div>
        <ul :style="{display:closelist}" class="order-detailet" id="detailetBox">
          <li>
            <div class='footname'>商品名称</div>
            <div class='footnum'>数量</div>
            <div class='footprice'>单价</div>
          </li>
          <hr>
          <li v-for="item in selected" :key="item.id">
            <div class='footname'>{{item.name}}</div>
            <div class='footnum'>x {{item.quanlity}}</div>
            <div class='footprice'>&#165; {{item.price}}</div>
          </li>
        </ul>
      </div>
      

      <!-- 支付成功! 提示面板-->
      <div v-show="showsuccess" class="paysuccess-back"> 
        <div class="paysuccess-box">
          <div>
            <h2>支付成功</h2>
          </div>
          <p style="font-size: 1vw;color: rgb(55 55 55 / 59%);">
            {{ countdowntime }}秒后自动关闭该页面.....
          </p>
          <button @click="closeSuccessPanel()">好的</button>
        </div>
      </div>
    </div>   
  </div>
</template>


<script>

export default {
  name: "Payment",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    return {
      countdowntime:5,
      showsuccess:false,
      successTimer:'',
      pay_type:"alipay",
      openlist:"block",
      closelist:"none",
      shopinfo:{},
      selected:[],
      totalprice:0,
    };
  },
  props: {},
  computed: {},
  methods: {

    changeCountdownTime(){
      if(this.countdowntime > 0){
        this.countdowntime--;
      }
    },

    closeSuccessPanel(){
      this.$cookies.remove("shopinfo")//清除cookie
      this.$cookies.remove("selected")
      this.$cookies.remove("toatalprice")

      clearInterval(this.successTimer)//清除定时器

      this.$router.push('allorder')
    },

    nowToPay(){
      this.showsuccess = !this.showsuccess
      this.successTimer = setInterval(this.changeCountdownTime,1000)
    }
  },
  //监控data中的数据变化
  watch: {
    countdowntime:{
      handler: function (newVal) {
        if(newVal == 0){
          this.closeSuccessPanel()
        }
      }
    }
  },

  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    if(this.$cookies.get("selected") != null){
      this.selected = JSON.parse(this.$cookies.get("selected"));
    }
    if(this.$cookies.get("shopinfo") != null){
      this.shopinfo = this.$cookies.get("shopinfo");
    }
    if(this.$cookies.get("toatalprice") != null){
      this.totalprice = JSON.parse(this.$cookies.get("toatalprice"));
    }
    
  },

  beforeDestroy(){
    this.$cookies.remove("shopinfo")
    this.$cookies.remove("selected")
    this.$cookies.remove("toatalprice")
    clearInterval(this.successTimer)
  }
};
</script>



<style scoped>

h3{
    font-size: 4vw;
    margin: 2vw;
}
.order-info{
    width: 90%;
    height: 5vw;
    margin: 3vw 0 0 4vw;
	font-size: 5vw;
	color: rgb(59, 59, 59);
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.order-info div{
    height: 8vw;

}
#info-icon{
    width: 10vw;
    height: 4vw;
    margin-top: 1vw;
}
.order-info p:last-child{
	color: orangered;
}

/****************** 订单明细部分 ******************/
.order-detailet{
	width: 90%;
  margin: 3vw 0 0 6vw;
}
.order-detailet li{
	width: 90%;
    height: 6vw;
	display: flex;
	justify-content: space-between;
}
.order-detailet li div{
	width: 20vw;
	font-size: 4vw;
	color: rgb(75, 75, 75);
	overflow: hidden;
}
.order-detailet li div:first-child{
	width: 60vw;
	overflow: hidden;
}

/****************** 支付方式部分 ******************/

.payment-type li{
	width: auto;
  margin: 4vw 6vw;
	display: flex;
  border-radius: 2vw;
	/* justify-content: space-between; */
	align-items: center;
	background-color: #f8f8f8;
}
.payment-type li.usethetype{
  background-color: #c3f4fa;
}
.payment-type li img{
  flex: 1;
	width: 12vw;
	height: 10vw;
}
.payment-type li div{
  flex: 5;
	width: 57vw;
	font-size: 4.5vw;
	margin-left: 5vw;
}
.payment-type li input{
  flex: 1;
	width: 5vw;
  height: 5vw;
  appearance:field;
  /* -webkit-appearance:normal; */
}
.payment-type li:hover input{
	background-color: #38CA73;
}
.payment-button{
	width: 85%;
    margin: 5vw auto;
}
.payment-button button{
	width: 100%;
	height: 10vw;
	border: none;
    font-size: 5vw;
	border-radius: 6px;
	background-color: #38CA73;
	color: #fff;
}

.paysuccess-back{
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: #424242a6;
}

.paysuccess-box{
  position: absolute;
  top: 25%;
  left: 25%;
  width: 50%;
  height: 20%;
  text-align: center;
  border-radius: 3%;
  background-color: #ffffff;
}
.paysuccess-box div{
  height:17vw;
  line-height: 17vw;
  text-align: center;
}
.paysuccess-box button{
  width: 45%;
  height: 28%;
  border: 0;
  color: #fff;
  border-radius: 10%;
  background-color: #008cffc4;
}
</style>