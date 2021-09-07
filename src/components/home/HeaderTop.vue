<template>
  <header>
    <div class="topbar">
      <div class="icon-location-box">
        <div class="icon-location"></div>
      </div>
      <div class="location-text-box">
        <strong>龙潭街大连民族大学(金石滩校区)</strong>
      </div>
      <div class="icon-headerright-box">
        <div class="icon-card_infotm-box">
          <img src="../../assets/img/myCart.png">
        </div>
        <div class="icon-card_infotm-box">
          <img src="../../assets/img/information.png">
        </div>
      </div>
    </div>
    
    <!-- 搜索框 -->
    <div class="searchview">
      <input type="text" placeholder="◎搜索饿了么商家、商品">
    </div>
  </header> 
</template>


<script>
  export default {
    name: 'HeaderTop',
  }
</script>


<style scoped>

  header .topbar{
    width: 100%;
    height: 6vw;
    display: flex;
    background-color: #0097FF;
    justify-content: center;
    align-items: center;	
  }
  .topbar .icon-location {
    position: relative;
    width: 2vw;                   
    height: 2vw;
    margin-left:1vw;
    border: 0.6vw solid #FFFFFF;
    border-radius: 50% 50% 0% 50%;  
    transform: rotate(45deg);       
  }
  .topbar .icon-location::after {        
    content: '';
    width: 50%;
    height: 50%;
    margin: 25% 0 0 25%;
    background-color: #FFFFFF;
    position: absolute;
    border-radius: 50%;
  }
  .topbar .location-text-box{
    font-size: 4vw;
    width: 40vw;
    color: #FFFFFF;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis; 
  }
  .topbar .icon-headerright-box{
    margin-left: 28vw;
    display: flex;
  }
  .topbar .icon-card_infotm-box{
    width: 6vw;
    height: 6vw;
    margin-right: 4vw;
  }
  .topbar .icon-card_infotm-box img{
    position: relative;
    width: 100%;
    height: 100%;
  }

  /****************** search ******************/
  .searchview{
    width: 100%;
    height: 10vw;
    position: sticky;
    top: 0px;
    background-color: #0097FF;
    text-align: center;	
  }
  .searchview input{
    width: 90vw;
    height: 8vw;
    border-radius: 5px;
    justify-content: center;
    margin: 1vw;
    text-align: center;
    font-size: 3.5vw;
    font-family: "宋体";
  }
</style>
