<!--  -->
<template>
  <div class="">
    <ul class="classify-box">
      <li v-for="item in classifyitems" class="foodtype-one" :key="item.id">
        <router-link to="shoplists">
          <img :src="item.imgpath" />
          <!-- <img :src="`${publicPath}img/ft01.jpg`" > -->
          <p>{{ item.typename }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "Classify",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    return {
      // publicPath: process.env.BASE_URL,
      // im:require('../../assets/img/ft01.jpg'),
      classifyitems: [
        { id: "001", typename: "美食外卖", imgpath: "/img/ft01.jpg" },
        { id: "002", typename: "美食团购", imgpath: "/img/ft02.jpg" },
        { id: "003", typename: "跑腿代购", imgpath: "/img/ft03.jpg" },
        { id: "004", typename: "酒水饮品", imgpath: "/img/ft04.jpg" },
        { id: "005", typename: "超市便利", imgpath: "/img/ft05.jpg" },
        { id: "006", typename: "甜品饮品", imgpath: "/img/ft06.jpg" },
        { id: "007", typename: "休闲玩乐", imgpath: "/img/ft07.jpg" },
        { id: "008", typename: "送药上门", imgpath: "/img/ft08.jpg" },
        { id: "009", typename: "电影票", imgpath: "/img/ft09.jpg" },
        { id: "010", typename: "水果", imgpath: "/img/ft10.jpg" },
      ],
    };
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
/****************** 点餐分类部分 ******************/
.classify-box {
  width: 100%;
  height: 48vw;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  align-content: center;
}
.classify-box li {
  width: 18vw;
  height: 20vw;

  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  user-select: none;
  cursor: pointer;
}
.classify-box li img {
  width: 12vw;
  height: 10.8vw;
}
.classify-box li p {
  font-size: 4vw;
  color: #000000;
}
</style>