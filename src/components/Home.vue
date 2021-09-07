<!--  -->
<template>
    <div class='home'>
        <HeaderTop/>
        <Classify class="classify"/>
        <Advertisement/>
        <div class='recommendback'>
            <RecomShop class="recomshop"/>
        </div>
    </div>
</template>

<script>
//import '组件名称' from '组件路径';
//import '组件名称' from '@/assets/css/xxxx.css';
import Classify from "./home/Classify"
import HeaderTop from "./home/HeaderTop"
import RecomShop from "./home/RecomShop"
import Advertisement from "./home/Advertisement"

export default {
    name:'Home',
    //import引入的组件需要注入到对象中才能使用
    components: {
        HeaderTop,
        Classify,
        RecomShop,
        Advertisement,
        // FooterNav,
    },
    data() {
        return {
            showfootnav:true,
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
}
</script>


<style scoped>
    
    .classify{
        padding: 0 2vw;
    }
    .recommendback{
        background-color: rgb(248, 248, 248);
        padding: 0 2vw;
    }
    
</style>