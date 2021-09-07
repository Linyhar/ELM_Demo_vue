<!--  -->
<template>
  <div class="">
    <!-- 顶部标题部分 -->
    <header>
      <h1>注册</h1>
    </header>
    
    <div style="height:10vw"></div>
    
    <ul class="register_container">
      <li class="rgst-infmbox">
        <div class="rgst-infmlable">昵称:</div>
        <div class="rgst-inputbox">
          <input
            v-model="user_nickname"
            class="messginput"
            type="text"
            maxlength="20"
            placeholder="昵称最多20个字符"
          />
        </div>
      </li>
      <li class="rgst-infmbox">
        <div class="rgst-infmlable">手机号:</div>
        <div class="rgst-inputbox">
          <input v-model="user_phone" class="messginput" type="text" />
        </div>
      </li>
      <li class="rgst-infmbox">
        <div class="rgst-infmlable">密码:</div>
        <div class="rgst-inputbox">
          <input v-model="user_passwd" class="messginput" type="password" />
        </div>
      </li>
      <li class="rgst-infmbox">
        <div class="rgst-infmlable">确认密码:</div>
        <div class="rgst-inputbox">
          <input v-model="user_surepaswd" class="messginput" type="password" />
        </div>
      </li>
      <li class="rgst-infmbox">
        <div class="rgst-infmlable">性别：</div>
        <div class="rgst-sexinputbox">
          <div class="sexbox">
            <input
              v-model="user_sex"
              class="messginput"
              type="radio"
              name="sex"
              value="男"
            />
            <span>男</span>
          </div>
          <div class="sexbox">
            <input v-model="user_sex" class="messginput" type="radio" name="sex" value="女" />
            <span>女</span>
          </div>
        </div>
      </li>
    </ul>

    <!-- 验证码部分 -->
    <div class="vrft_codebox">
      <label class="acnt_pswdlable">验证码</label>
      <div class="vrft_code_inputbox">
        <input v-model="codepswd" class="messginput" type="text" maxlength="4" />
      </div>
      <div class="vrft_code_imgbox">
        <img id="code_img" :src="code_img" />
        <a
          href="javascript:;"
          @click="changeCodeImg()"
          style="color:#3c6cf3 ;font-size: 3vw"
          >换一张</a
        >
      </div>
    </div>

    <ul class="button_box">
      <li class="button_item">
        <input type="button" value="立即注册" @click="checkRegister()" />
      </li>
      <li class="button_item">
        <input
          type="button"
          value="前往登录"
          @click="toLogin()"
        />
      </li>
    </ul>

    <!-- 提示框 -->
    <div v-show="showtip" class="tippanel-back">
      <div id="tips">
        <h3 id="tip-text">{{ tipstr }}</h3>
        <button id="close_bt" @click="closeTip()">好的</button>
      </div>
    </div>
    

    <div style="width: 100%; height: 10vw"></div>
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
      allusers:[],
      user_nickname:"",
      user_phone:"",
      user_passwd:"", 
      user_surepaswd:"",
      user_sex:"男",
      codepswd:"",

      showtip:false,
      tipstr:"",

      code_img:"/img/code01.png",
      imgpass:[
        {id:"01",pswd:"7364"},
        {id:"02",pswd:"7482"},
        {id:"03",pswd:"uwv6"},
        {id:"04",pswd:"smwm"},
      ],
    };
  },
  props: {},
  computed: {
    newUser(){
      let userobj = {
        nickname:this.user_nickname,
        phone:this.user_phone,
        passwd:this.user_passwd, 
        sex:this.user_sex,
      }
      return userobj
    }
  },
  methods: {
    checkRegister(){
      if(this.user_nickname!=""&&this.user_phone!=""&&this.user_passwd!=""&&this.user_surepaswd!=""){
        if (this.user_surepaswd != this.user_passwd) {
          this.showtip = true
          this.tipstr = "两次密码不一致"
          return
        }

        let code_correct = false
        for (const k in this.imgpass) {
          if (this.imgpass[k].pswd == this.codepswd) {
            code_correct = true
          }
        }
        if(!code_correct) {
          this.showtip = true
          this.tipstr = "验证码错误"
          return
        }

        let hasthisuser = false
        for (const k in this.allusers) {
          if (this.allusers[k].phone == this.user_phone) {
            hasthisuser = true
          }
        }
        if(hasthisuser) {
          this.showtip = true
          this.tipstr = "该用户已经存在"
          return
        }
        this.allusers.push(this.newUser)
        this.$cookies.set("allusers",JSON.stringify(this.allusers))
        
        this.showtip = true
        this.tipstr = "注册成功!"

        this.user_nickname=""
        this.user_phone=""
        this.user_passwd="" 
        this.user_surepaswd=""
        this.user_sex="男"
        this.codepswd=""
        
        this.allusers.push(this.newUser())
        this.$cookies.set("allusers")
      }else{
        this.showtip = true
        this.tipstr = "别留空"
      }
    },

    closeTip(){
      this.showtip = false
      this.tipstr = ""
    },

    changeCodeImg(){
      let old = this.code_img.substr(9,2)
      let imgid = "";
      for (let i = 0; ; i++) {
        imgid = Math.floor(Math.random()*4 + 1)
        if(old != imgid){
          this.code_img = "/img/code0"+imgid+".png";
          return
        }
      }
    },

    toLogin(){
      this.$router.push("login")
    },


  },
  //监控data中的数据变化
  watch: {},

  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    if(this.$cookies.get("allusers") != null){
      this.allusers = JSON.parse(this.$cookies.get("allusers"));
    }

    let imgid = Math.floor(Math.random()*4 + 1)
    this.code_img = "/img/code0"+imgid+".png"

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
.register_container {
  margin: 3vw 0 0 2vw;
}
.register_container li {
  display: flex;
  width: 100%;
  height: 15vw;
}

/* 注册信息 */
.register_container .rgst-infmbox .rgst-infmlable {
  font-size: 5vw;
  width: 25vw;
  height: auto;
  font-weight: 500;
  color: #666;
  text-align: left;
}
.register_container .rgst-infmbox .rgst-inputbox input {
  width: 65vw;
  height: 7vw;
  border: 0;
  border-bottom: solid 3px #ddd;
  font-size: 4vw;
}
.register_container .rgst-infmbox .rgst-inputbox input:focus {
  outline: none;
}
/* ---性别 */
.register_container .rgst-infmbox .rgst-sexinputbox {
  font-size: 5vw;
  display: flex;
}
.register_container .rgst-infmbox .rgst-sexinputbox .sexbox {
  width: 20vw;
}
.register_container .rgst-infmbox .rgst-sexinputbox .sexbox input {
  width: 4vw;
  height: 4vw;
}

/* 验证码部分  */
.vrft_codebox {
  display: flex;
  height: 8vw;
}
.vrft_codebox label {
  width: 20vw;
  font-size: 5vw;
  color: #666;
  margin-left: 2vw;
}
.vrft_codebox .vrft_code_inputbox input {
  width: 20vw;
  height: 80%;
  border: 2px solid #ddd;
  font-size: 5vw;
  /* border-bottom: 2px solid #DDD; */
}
.vrft_codebox .vrft_code_inputbox input:focus {
  outline: none;
}
.vrft_codebox .vrft_code_imgbox img {
  margin-left: 2vw;
  width: 20vw;
  height: 100%;
}

/* 注册和区登录按钮设置 */
.button_box {
  margin-top: 10vw;
}
.button_box li {
  width: 90%;
  height: 10vw;
  margin: 3vw auto;
}
.button_box .button_item input {
  width: 100%;
  height: 100%;
  font-size: 4vw;
  border: 0;
  border-radius: 5px;
}
.button_box .button_item input[value="立即注册"] {
  background-color: #38ca73;
}
.button_box .button_item input[value="去登录"] {
  background-color: #efefef;
}

/* 提示框层设置 */
.tippanel-back{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height:100%;
  background-color: #00000096;
}
#tips {
  position: absolute;
  width: 50vw;
  height: 37vw;
  left: 25vw;
  top: 60vw;

  border: 0.3vw solid black;
  background-color: #fcfcfc;
  border-radius: 5px;
  padding: 5vw 2vw;
  z-index: 1000;
  text-align: center;
}
#tips h3 {
  font-size: 5vw;
  margin-top: 3vw;
}
#tips #close_bt {
  width: 35vw;
  height: 9vw;
  color: #fcfcfc;
  background-color: #0bcce6;
  border-radius: 5px;
  border: 0;
  font-size: 5vw;
  margin-top: 6vw;
}
</style>