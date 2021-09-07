<!--  -->
<template>
  <div class="">
    <div class="wrapper">
      <div class="headtop">
        <div class="logininfo">
          <router-link to="/login">
            <img
              id="user-headicon"
              src="img/userimg/headicon.png"
              class="user-head"
            />
            <h3 id="userNickname" class="user-name">{{nowUsername}}</h3>
          </router-link>
        </div>

        <div class="top-right">
          <img src="img/userImg/set.png" class="set-infotmations" />
          <img src="img/userImg/news.png" class="set-infotmations" />
        </div>
      </div>
      <div class="my-wallet-box">
        <h3>我的钱包</h3>
        <div class="my-wallet-con">
          <div class="wallet-balance">
            <p id="banlance">总余额(元)</p>
            <h5 id="balance">0.00</h5>
          </div>
          <div class="wallet-recharge">
            <input type="button" value="充值" />
          </div>
        </div>
      </div>

      <div class="common_functions-box">
        <h3>常用功能</h3>
        <ul class="common_functions">
          <li class="common_funct_one">
            <img src="img/userImg/collection.png" alt="" />
            <p>店铺关注</p>
          </li>
          <li class="common_funct_one">
            <img src="img/userImg/ShopCart.png" alt="" />
            <p>购物车</p>
          </li>
          <li class="common_funct_one">
            <img src="img/userImg/evaluate.png" alt="" />
            <p>评价中心</p>
          </li>
          <li class="common_funct_one">
            <img src="img/userImg/address.png" alt="" />
            <p>我的地址</p>
          </li>
          <li class="common_funct_one">
            <img src="img/userImg/customer.png" alt="" />
            <p>我的客服</p>
          </li>
          <li class="common_funct_one">
            <img src="img/userImg/alarm.png" alt="" />
            <p>点餐提醒</p>
          </li>
          <li class="common_funct_one">
            <img src="img/userImg/alarm.png" alt="" />
            <p>企业订餐</p>
          </li>
          <li class="common_funct_one">
            <img src="img/userImg/save_card.png" alt="" />
            <p>省钱好券</p>
          </li>
          <li class="common_funct_one">
            <img src="img/userImg/brand.png" alt="" />
            <p>品牌会员</p>
          </li>
          <li class="common_funct_one">
            <img src="img/userImg/rider.png" alt="" />
            <p>骑手招募</p>
          </li>
          <li class="common_funct_one">
            <img src="img/userImg/cooperation.png" alt="" />
            <p>商务合作</p>
          </li>
          <li class="common_funct_one">
            <img src="img/userImg/public welfare.png" alt="" />
            <p>公益3小时</p>
          </li>
        </ul>
      </div>

      <div style="width: 100%; height: 10vw"></div>
    </div>
  </div>
</template>


<script>
//import '组件名称' from '组件路径';
//import '组件名称' from '@/assets/css/xxxx.css';

export default {
  name: "User",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    return {
      nowUser:"",
      nowUsername:"未登录",
      allusers:[],
      showfootnav: true,
    };
  },
  props: {},
  computed: {},
  methods: {},

  //监控data中的数据变化
  watch: { },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    if(this.$cookies.isKey("nowuser")){
      this.nowUser = this.$cookies.get("nowuser")
    }
    if(this.$cookies.isKey("allusers")){
      this.allusers = JSON.parse(this.$cookies.get("allusers"))
    }
    console.log('nowuser',this.nowUser);
    console.log('allusers',this.allusers)
      
    if(this.nowUser != "" && this.allusers.length != 0){
      
      for(let k=0; k<=this.allusers.length; k++){
        if(this.allusers[k].phone == this.nowUser){
          this.nowUsername = this.allusers[k].nickname
          console.log("---",this.allusers[k].nickname)
          return
        }
      }
    }
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>


<style scoped>
.wrapper {
  padding: 3vw;
}
.wrapper .headtop {
  height: 10vw;
  display: flex;
  align-items: center;
  align-content: center;
}
.wrapper .headtop .user-head {
  display: inline-block;
  width: 10vw;
  height: 10vw;
  border-radius: 50px;
}
.wrapper .headtop h3 {
  display: inline-block;
  width: 50vw;
  height: 10vw;
  font-size: 6vw;
}
.wrapper .headtop .top-right img {
  width: 10vw;
  height: 10vw;
  margin-left: 4vw;
}

/* 我的钱包 */
.wrapper .my-wallet-box {
  width: 100%;
  height: 25vw;
  background-color: #0097ff;
  margin-top: 4vw;
  border-radius: 8px;
  padding-top: 2vw;
}
.wrapper .my-wallet-box h3 {
  font-size: 4vw;
  margin-left: 3vw;
}

.wrapper .my-wallet-box .my-wallet-con {
  width: 100%;
  height: auto;
  display: flex;
  /* background-color: #b6d3e6; */
  /* border-radius: 10px; */
}

.wrapper .my-wallet-box .my-wallet-con div {
  width: 50%;
  height: vw;
  color: #ffffff;
  padding-left: 8vw;
}

.wrapper .my-wallet-box .my-wallet-con .wallet-balance p {
  width: 50%;
  height: vw;
  color: #ffffff;
  font-size: 4vw;
}
.wrapper .my-wallet-box .my-wallet-con .wallet-balance h5 {
  width: 40%;
  color: #ffffff;
  font-size: 8vw;
}
.wrapper .my-wallet-box .my-wallet-con input {
  width: 20vw;
  height: 10vw;
  text-align: center;
  border-radius: 50px;
  font-size: 5vw;
  color: #0097ff;
  background-color: #ffffff;
  border: 0;
  margin-left: 10vw;
}

/* 常用功能 */
.wrapper .common_functions-box {
  width: 100%;
  height: auto;
  background-color: #ffffff;
  margin-top: 4vw;
  border-radius: 8px;
  padding-top: 2vw;
}
.wrapper .common_functions-box h3 {
  font-size: 4vw;
  margin-left: 3vw;
}
.wrapper .common_functions-box .common_functions {
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  justify-content: space-around;

  align-content: center;
}

.wrapper .common_functions-box .common_functions li {
  width: 25%;
  margin-top: 3vw;
  text-align: center;
}
.wrapper .common_functions-box .common_functions li img {
  width: 40%;
  height: 55%;
}
.wrapper .common_functions-box .common_functions .common_funct_one p {
  font-size: 2.5vw;
}
</style>