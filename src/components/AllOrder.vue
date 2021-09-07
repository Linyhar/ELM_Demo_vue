<!--  -->
<template>
    <div class=''>
        <div class="wrapper">
			
			<!-- header部分 -->
			<header>
				<h1>我的订单</h1>
			</header>
			
			<!-- 订单列表部分 -->
			<h3 id="unpaid">未支付订单信息：</h3>
			<ul class="order">
				<li>
					<div class="order-info" onclick="change(this)">
						<p>
							小锅饭豆腐馆（全运店）
							<img src="img/open.png" id="info-icon" />
						</p>
						<div class="order-info-right">
							<p>&#165;55</p>
							<div class="order-info-right-icon" onclick="location.href='payment.html'">去支付</div>
						</div>
					</div>
					<ul class="order-detailet">
						<li>
							<p>纯肉鲜肉（水饺） x 2</p>
							<p>&#165;15</p>
						</li>
						<li>
							<p>玉米鲜肉（水饺） x 1</p>
							<p>&#165;16</p>
						</li>
						<li>
							<p>配送费</p>
							<p>&#165;3</p>
						</li>
					</ul>
				</li>
			</ul>
			
			<h3 id="paid">已支付订单信息：</h3>
			<ul class="order">
				<li>
					<div class="order-info" onclick="change(this)">
						<p>
							万家饺子（软件园E18店）
							<img src="img/open.png" id="info-icon" />
						</p>
						<div class="order-info-right">
							<p>&#165;49</p>
						</div>
					</div>
					<ul class="order-detailet">
						<li>
							<p>纯肉鲜肉（水饺） x 2</p>
							<p>&#165;15</p>
						</li>
						<li>
							<p>玉米鲜肉（水饺） x 1</p>
							<p>&#165;16</p>
						</li>
						<li>
							<p>配送费</p>
							<p>&#165;3</p>
						</li>
					</ul>
				</li>
			</ul>
			

		</div>	
        <FooterNav v-if="showfootnav"/>
    </div>
</template>


<script>
//import '组件名称' from '组件路径';
//import '组件名称' from '@/assets/css/xxxx.css';
import FooterNav from "./FooterNav"

export default {
    name: 'Order',
    //import引入的组件需要注入到对象中才能使用
    components: {
        FooterNav
    },
    data() {
        return {
            showfootnav:true,
        };
    },
    props: {},
    computed: {},
    methods: {
        change(elment){
            var detailNode = elment.nextElementSibling;
            if(detailNode.style.display == null || detailNode.style.display == "none"){
                detailNode.style.display = "block";
            }else{
                detailNode.style.display = "none";
            }
        }
    },
    //监控data中的数据变化
    watch: {},

    //生命周期 - 创建完成（可以访问当前this实例）
    created() {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        
    },
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
    header{
        font-size: 4vw;  
        background-color: #0097FF;
        color: #ffffff;
        width: 100%;
        height: 12vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    /****************** 历史订单列表部分 ******************/
    h3{
        padding: 4vw 0 4vw 4vw;
        font-size: 4vw;
        font-weight: 600;
    }
    #unpaid{
        color: rgb(218, 69, 0);
    }
    #paid{
        color: rgb(128, 128, 128);
    }
    .order{
        width: 100%;
    }
    .order li{
        width: 100%;
    }
    .order li .order-info{
        box-sizing: border-box;
        padding: 2vw 4vw;
        font-size: 4vw;
        color: #666;
        display: flex;
        justify-content: space-between;
    }
    .order li .order-info #info-icon{
        width: 10vw;
        height: 4vw;
        margin-top: 1vw;
    }

    .order li .order-info .order-info-right{
        display: flex;
    }
    .order li .order-info .order-info-right .order-info-right-icon{
        background-color: #f90;
        color: #fff;
        border-radius: 3px;
        margin-left: 2vw;
        user-select: none;
        cursor: pointer;
    }

    .order li .order-detailet{
        width: 100%;
    }
    .order li .order-detailet li{
        width: 80%;
        height: 5vw;
        margin-left: 8vw;
        color: #666;
        font-size: 3vw;
        display: flex;
        justify-content: space-between;
    }
</style>