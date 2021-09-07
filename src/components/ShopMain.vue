<!--  -->
<template>
  <div class="">
    <div class="wrapper">
      <!-- header部分 -->
      <header>
        <h1>商家信息</h1>
      </header>

      <!-- 商家logo部分 -->
      <div class="business-logo-content">
        <div class="business-messg-cont">
          <h2 style="font-size: 7vw">粥大福早餐</h2>
          <p>&#165;15起送 &#165;3配送</p>
          <p style="color: rgb(252, 144, 2)">
            {{shopinfo.voicemail}}
          </p>
        </div>
        <img :src="shopinfo.shopicon" />
      </div>

      <!-- 点餐、评价、信息是切换导航部分 -->
      <ul class="top-navigation">
        <li style="border-bottom: 2px solid rgb(3, 131, 250); background-color: rgb(232, 244, 255);">
          点餐
        </li>
        <li>评价</li>
        <li>商家故事</li>
      </ul>
      <hr />
      <!-- 商品信息列表 -->
      <ul class="commodity-list">
        <li v-for="comditem in commodity" :key="comditem.id">
          <img class="icon" :src="comditem.imgpath" />
          <div>
            <h4 class="ordername" style="font-size: 4vw">{{comditem.name}}</h4>
            <p style="font-size: 3vw">"{{comditem.introduce}}"</p>
            <p style="font-size: 3vw">月售{{comditem.monthsale}}好评率{{comditem.favorrate}}</p>
            <div class="price-box">
              <div class="price">￥<span class="thePrice">{{comditem.price}}</span></div>
              <div class="controlnums">
                <button :class="{add_sub_none:!quanlityzero(comditem.id)}" @click="subQuanlity(comditem.id)">-</button>
                <p class="buynum" style="font-size: 4vw">{{dishQuanlity(comditem.id)}}</p>
                <button class="add_sub" @click="addQuanlity(comditem)">+</button>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <!-- 未登录! 提示面板-->
      <transition name="notlogin">
        <div v-show="shownotlogin" class="nologintip-back"> 
          <div class="nologintip-box">
            <div>
              <h3>您还未登录</h3>
            </div>
            <p style="font-size: 1vw;color: rgb(55 55 55 / 59%);">
              要立即前往登录吗?
            </p>
            <button class="caneltologin" @click="closeNotLoginTip()">取消</button>
            <button @click="toLogin()">去登录</button>
          </div>
        </div>
      </transition>
      


      <!-- 购物车部分 -->
      <div class="cart">
        <div class="cart-left">
          <div class="cart-left-icon">
            <img src="" alt="" />
            <div id="total-quantity">{{toatalquanlity}}</div>
          </div>
          <div class="cart-left-info">
            <p>&#165;<span id="total_price">{{toatalprice}}</span></p>
            <p>配送费<span style="font-size:4vw"> &#165;{{shopinfo.peicost}} </span></p>
          </div>
        </div>
        <div class="cart-right">
          <div id="settlement" @click="tosetorder()" :class="{nomincost:true, overmin:overmincost}">
            {{cansetorder}}
          </div>
          <!-- <div id="settlement" class="cart-right-item">{{"￥15起送"}}</div> -->
        </div>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  data() {
    return {
      nowuser:"",//保存当前登录用户
      shownotlogin:false,
      shopinfo:{id:"sj001",shopicon:"/img/sj01.jpg",name:"粥大福早餐",score:"4.8",monthsale:"422",ship:"蓝骑士专送",mincost:15,peicost:3,voicemail:"皮蛋瘦肉粥，灌汤猪肉小笼包，养胃",distance:"752m",costtime:"23分钟"},
      commodity:[
        {id:"cmd001",imgpath:"/img/sj_cp2.jpg",name:"大油条",introduce:'金州区韭菜盒子第二名',monthsale:85,favorrate:"98%",price:4,oldprice:12},
        {id:"cmd002",imgpath:"/img/sj_cp1.jpg",name:"韭菜盒子",introduce:'金州区油条豆浆类飙升第8名',monthsale:85,favorrate:"98%",price:5,oldprice:12},
        {id:"cmd003",imgpath:"/img/sj_cp3.jpg",name:"奥尔良鸡肉包子",introduce:'本店好评第5名',monthsale:85,favorrate:"98%",price:8,oldprice:12},
        {id:"cmd004",imgpath:"/img/sj_cp4.jpg",name:"香辣小土豆",introduce:'近期50人给出好评',monthsale:85,favorrate:"98%",price:10,oldprice:12},
        {id:"cmd005",imgpath:"/img/sj_cp5.jpg",name:"经典牛肉饼",introduce:'本店销量低2名',monthsale:85,favorrate:"98%",price:3.4,oldprice:12},
        {id:"cmd006",imgpath:"/img/sj_cp6.jpg",name:"养胃小米粥",introduce:'近期20人给出好评',monthsale:85,favorrate:"98%",price:4.9,oldprice:12},
        {id:"cmd007",imgpath:"/img/sj_cp7.jpg",name:"豆浆油条",introduce:'本店好评第3名',monthsale:85,favorrate:"98%",price:6,oldprice:12},
        {id:"cmd008",imgpath:"/img/sj_cp8.jpg",name:"必点！皮蛋瘦肉粥",introduce:'原料：大米、皮蛋、肉松',monthsale:85,favorrate:"98%",price:8,oldprice:12},
        {id:"cmd009",imgpath:"/img/sj_cp9.jpg",name:"流油鸭蛋",introduce:'近期4人给出好评',monthsale:85,favorrate:"98%",price:3,oldprice:12},
      ],
      selected:[],
      overmincost:false,//是否达到最低起送
      // cansetorder:"",//是否显示去结算按钮
    };
  },
  props: {},
  computed: {
    dishQuanlity(){
      return(cmdid)=>{
        for (const k in this.selected) {
          if (this.selected[k].id == cmdid) {
            return this.selected[k].quanlity;
          }
        }
        return 0;
      }
    },
    quanlityzero(){
      return(cmdid)=>{
        for (const k in this.selected) {
          if (this.selected[k].id == cmdid && this.selected[k].quanlity > 0) {
            return true;
          }
        }
        return false;
      }
    },
    toatalquanlity(){
      let totalnum = 0;
      for (const k in this.selected) {
        totalnum += this.selected[k].quanlity;
      }
      return totalnum
    },
    toatalprice(){
      let totalprices = 0;
      for (const k in this.selected) {
        totalprices += this.selected[k].price * this.selected[k].quanlity;
      }
      return totalprices.toFixed(2)
    },
    needprice(){
      let needprice = this.shopinfo.mincost - this.shopinfo.peicost - this.toatalprice;
      return needprice.toFixed(2);
    },
    cansetorder(){
      if(this.overmincost){
        return "去结算"
      }
      return "还差"+this.needprice+"起送"
    }
  },

  methods: {

    addQuanlity(comditem){
      for (const k in this.selected) {
        if (this.selected[k].id == comditem.id && this.selected[k].quanlity < 200) {
          this.selected[k].quanlity++;
          return
        }
      }
      //如果selected找不到数据 ， 新增加一条;
      this.selected.push(
        {id: comditem.id, imgpath: comditem.imgpath, name: comditem.name,oldprice: comditem.oldprice,price: comditem.price,quanlity: 1,}
      )
    },

    subQuanlity(cmdid){
      for (const k in this.selected) {
        if (this.selected[k].id == cmdid && this.selected[k].quanlity > 0) {
          this.selected[k].quanlity--;
          if(this.selected[k].quanlity == 0) {
            this.selected.splice(k, 1);
          }
          return
        }
      }
    },

    tosetorder(){
      if(this.nowuser.trim() != ""){//判断是否登录
        if(this.overmincost){
          this.$cookies.set("shopinfo",JSON.stringify(this.shopinfo));
          this.$router.push('setorder');
        }
      }else{
        this.shownotlogin = true
      }
    },

    closeNotLoginTip(){
      this.shownotlogin = false
    },
    toLogin(){
      this.$router.push('login');
    } 

  },

  watch: {
    needprice:{
      deep: true,
      handler: function (newVal) {
        if(newVal <= 0) this.overmincost = true;
        else this.overmincost = false;
        this.$cookies.set("selected",JSON.stringify(this.selected));
      }
  }

  },

  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    if(this.$cookies.get("nowuser") != null){
      this.nowuser =  this.$cookies.get("nowuser");
    }
    if(this.$cookies.get("selected") != null){
      this.selected =  JSON.parse(this.$cookies.get("selected"));
    }
    this.$cookies.config('10d');//设置cookie过期时间 —— 10天
    // document.cookie("s","2021-08-20T11:15:53.000Z",12)
    // sessionStorage.setItem("ac","00001j");
    // sessionStorage.getItem("ac");

  },
};


</script>


<style scoped>
/* 商家log部分 */
.business-logo-content {
  width: 95%;
  height: 20vw;
  display: flex;
  padding: 2vw 0;
  box-shadow: 10px 5px 5px #d3d3d3;
  margin: 2vw auto;
  border-left: 2px solid rgb(219, 219, 219);
}
.business-logo-content .business-messg-cont {
  width: 70vw;
  height: 20vw;
  margin-left: 2vw;
}
.business-logo-content .business-messg-cont p {
  font-size: 0.1vw;
  width: 100%;
  height: 6vw;
  overflow: hidden;
}
.business-logo-content img {
  width: 20vw;
  height: 20vw;
  border-radius: 10px;
}

/* 商家log下方的导航部分 */
.top-navigation {
  width: 100%;
  height: auto;
  display: flex;
  background-color: rgb(245, 245, 245);
  margin-top: 2vw;
}
.top-navigation li {
  width: 30%;
  height: 10vw;
  text-align: center;
  line-height: 10vw;
  font-size: 5vw;
}

/* 商品部分-菜品列表 */
.commodity-list {
  width: 100%;
  height: auto;
  background-color: rgb(245, 245, 245);
}
.commodity-list li {
  display: flex;
  background-color: #ffffff;
  margin: 2vw;
  border-bottom: 0.5vw solid #ddd;
}

.commodity-list li img {
  width: 20vw;
  height: 18vw;
  margin-left: 3vw;
}

.commodity-list li .price-box {
  width: 100%;
  display: flex;
}
.commodity-list li .price-box .price {
  width: 40vw;
  display: flex;
  font-size: 4vw;
  color: #ff0000;
}

.commodity-list li .controlnums {
  display: flex;
}
.commodity-list li .controlnums button {
  width: 5vw;
  height: 5vw;
  border-radius: 50px;
  font-size: 5vw;
  line-height: 5vw;
  border: 0;
  color: #ffffff;
  background-color: #0097ff;
}
.commodity-list li .controlnums .add_sub_none {
  color: #ffffff;
  background-color: #ddd;
}
.commodity-list li .controlnums .buynum {
  width: 12vw;
}


/****************** 购物车部分 ******************/
.mychart {
  width: 100%;
  height: 20vw;
  display: flex;
  position: sticky;
  bottom: 0;
  background-color: #a07979;
}
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
.cart .cart-left .cart-left-icon {
  width: 16vw;
  height: 16vw;
  box-sizing: border-box;
  border: solid 1.6vw #444;
  border-radius: 8vw;
  background-color: #3190e8;
  font-size: 7vw;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: -4vw;
  margin-left: 3vw;

  position: relative;
}
.cart .cart-left #total-quantity {
  width: 5vw;
  height: 5vw;
  border-radius: 2.5vw;
  background-color: red;
  color: #fff;
  font-size: 3.6vw;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: -1.5vw;
  top: -1.5vw;
}
.cart .cart-left .cart-left-info p:first-child {
  font-size: 4.5vw;
  color: #fff;
  margin-top: 1vw;
}
.cart .cart-left .cart-left-info p:last-child {
  font-size: 2.8vw;
  color: #dbdbdb;
}

.cart .cart-right {
  flex: 1;
}
/*达到起送费时的样式*/
.cart .cart-right .nomincost {
  width: 100%;
  height: 100%;
  background-color: #aaa;
  color: #fff;
  font-size: 4.5vw;
  font-weight: 700;
  user-select: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
}
/*达到起送费时的样式*/
.cart .cart-right .overmin {
  background-color: #38CA73;
}


/******************************未登录提示面板*/
.notlogin-enter-active, .notlogin-leave-active {
  transition: opacity 0.5s;
}
.notlogin-enter, .notlogin-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.nologintip-back{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: #424242a6;
}
.nologintip-box{
  position: absolute;
  top: 25%;
  left: 20%;
  width: 60%;
  height: 20%;
  text-align: center;
  border-radius: 3%;
  background-color: #ffffff;
}
.nologintip-box div{
  height:17vw;
  line-height: 22vw;
  text-align: center;
}
.nologintip-box button{
  width: 32%;
  height: 28%;
  border: 0;
  margin: 0 2vw;
  color: #fff;
  border-radius: 10%;
  background-color: #008cffc4;
}
.nologintip-box button.caneltologin{
  color: rgb(240, 240, 240);
  background-color: #c2c2c2;
}
</style>