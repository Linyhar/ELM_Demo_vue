<template>
  <div>
    <ul class="footer">
      <li>
        <router-link active-class="active" to="/home">
          <i class="iconfont icon-elment"></i>
          <p>首页</p>
        </router-link>
      </li>
      <li>
        <router-link active-class="active" to="/discover">
          <i class="iconfont icon-faxian"></i>
          <p>发现</p>
        </router-link>
      </li>
      <li>
        <router-link active-class="active" to="/allorder">
          <i class="iconfont icon-dingdan"></i>
          <p>订单</p>
        </router-link>
      </li>
      <li>
        <router-link active-class="active" to="/usercentral">
          <i class="iconfont icon-wode"></i>
          <p>我的</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "FooterNav",
};
</script>


<style scoped>
.active {
  color: #0099ff;
}
.active i {
  font-size: 8vw;
}
.footer {
  z-index: 1000;
  width: 100%;
  height: 12vw;
  border-top: solid 1px #cfcfcf;
  background-color: #fdfdfd;
  color: #8a8a8a;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
}
.footer li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
}
.footer li p {
  font-size: 1vw;
}
.footer li i {
  font-size: 6vw;
}
</style>
