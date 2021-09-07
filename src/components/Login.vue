<!--  -->
<template>
  <div class="">
    <div class="wrapper">
      <!-- 顶部标题部分 -->
      <header>
        <h1>密码登录</h1>
      </header>

      <div style="height:30vw"></div>
      <!--  -->
      <ul class="acnt_pswd-container">
        <li class="acnt_pswdbox">
          <div class="acnt_pswdlable">账号</div>
          <div class="acnt_pswdinputbox">
            <input class="mesginputbox" type="text" v-model="nowuser" placeholder="手機/用户名" />
          </div>
        </li>
        <li class="acnt_pswdbox">
          <div class="acnt_pswdlable">密码</div>
          <div class="acnt_pswdinputbox">
            <input class="mesginputbox" v-model="passwd" type="password" placeholder="密码" />
          </div>
        </li>
      </ul>

      <!-- 按钮部分 -->
      <ul class="button_box">
        <li class="button_item">
          <input type="button" value="登录" @click="checkLogin()" />
        </li>
        <li class="button_item">
          <input type="button" value="去注册" @click="toRegister()"/>
        </li>
      </ul>
      <div style="margin-left: 5vw">
        <a
          style="font-size: 3vw"
          @click="opentip=true;tipstr='活该'"
          >忘记密码？</a
        >
      </div>

      <!-- 提示框 -->
      <div id="tips" v-show="opentip">
        <div
          id="tip-text"
          style="height: 55%; overflow: hidden；vertical-align"
        >
          {{tipstr}}
        </div>
        <div style="height: 45%">
          <button id="close_bt" @click="opentip=false;tipstr=''">好的</button>
        </div>
      </div>

      <div style="width: 100%; height: 10vw"></div>
    </div>
  </div>
</template>


<script>
//import '组件名称' from '组件路径';
//import '组件名称' from '@/assets/css/xxxx.css';

export default {
  name: "Login",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    return {
      nowuser:"",
      passwd:"",
      allusers:[],
      pagefrom:"",

      opentip:false,
      tipstr:""
    };
  },
  props: {},
  computed: {},
  methods: {

    checkLogin(){
      if(this.nowuser != "" && this.passwd != ""){
        let hasuser = false
        for (const key in this.allusers) {
          if (this.allusers[key].phone == this.nowuser && this.allusers[key].passwd == this.passwd) {
            this.$cookies.set("nowuser",this.nowuser)
            hasuser = true;
            if(this.pagefrom != ""){
              this.$router.push(this.pagefrom)
            }else this.$router.push("home")
          }
        }

        if(!hasuser){
          this.opentip = true
          this.tipstr='用户不存在'
        }
      }else {
        this.opentip = true
        this.tipstr='请输入完整'
      }
    },

    toRegister(){
      this.$router.push('register');
    }
  },

  //监控data中的数据变化
  watch: {

  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    if(this.$cookies.get("allusers") != null){
      this.allusers = JSON.parse(this.$cookies.get("allusers"));
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
.acnt_pswd-container li {
  margin: 10vw auto;
  display: flex;
  width: 100%;
  height: 7vw;
}

/* 账号与密码 */
.acnt_pswd-container .acnt_pswdbox .acnt_pswdlable {
  font-size: 6vw;
  width: 20vw;
  height: auto;
  font-weight: 500;
  color: #666;
  text-align: center;
}
.acnt_pswd-container .acnt_pswdbox .acnt_pswdinputbox input:focus {
  outline: none;
}
.acnt_pswd-container .acnt_pswdbox .acnt_pswdinputbox input {
  width: 70vw;
  height: 7vw;
  border: 0;
  border-bottom: solid 3px #ddd;
  font-size: 4vw;
}

/* 登录按钮设置 */
.button_box {
  margin-top: 10vw;
}
.button_box li {
  width: 90%;
  height: 10vw;
  margin: 7vw auto;
}
.button_box .button_item input {
  width: 100%;
  height: 100%;
  font-size: 4vw;
  border: 0;
  border-radius: 5px;
}
.button_box .button_item input[value="登录"] {
  background-color: #38ca73;
}
.button_box .button_item input[value="去注册"] {
  background-color: #efefef;
}

/* 提示框 */
#tips {
  position: absolute;
  width: 50vw;
  height: 30vw;
  left: 25vw;
  top: 30vw;

  border: 0.3vw solid black;
  background-color: #fcfcfc;
  border-radius: 5px;
  padding: 5vw 2vw;
  z-index: 1000;
  text-align: center;
}
#tips #tip-text {
  line-height: 4;
  font-size: 5vw;
  font-weight: 600;
  text-align: center;
}
#tips #close_bt {
  width: 35vw;
  height: 9vw;
  color: #fcfcfc;
  background-color: #0bcce6;
  border-radius: 5px;
  border: 0;
  font-size: 5vw;
  margin-top: 3vw;
}
</style>