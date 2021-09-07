function add(elment) {
    // console.log(elment);console.log(elment.nextElementSibling);
    var buynumNode = elment.previousElementSibling;//上一个兄弟结点
    buynumNode.textContent = parseInt(buynumNode.textContent) + 1;
    if (buynumNode.textContent != "0") {
        elment.previousElementSibling.previousElementSibling.className = "add_sub";
    }
    totalPrice();
}
function sub(elment) {
    var buynum = elment.nextElementSibling;//下一个兄弟结点
    if (parseInt(buynum.textContent) > 0) {
        buynum.textContent = parseInt(buynum.textContent) - 1;
        if (buynum.textContent == "0") {
            elment.className = "add_sub_none";
        }
        totalPrice();
    }
}
//计算总价格
function totalPrice() {
    var total_priceNode = document.getElementById("total_price");//购物车总价节点
    var total_quantityNode = document.getElementById("total-quantity");//购物车已点数量节点
    var priceNodes = document.getElementsByClassName("thePrice");//菜品单价节点集
    var buynumNodes = document.getElementsByClassName("buynum");//菜品数量节点集

    var totalprice = 0, totalquantity = 0;
    for (len = priceNodes.length, i = 0; i < len; i++) {
        if (parseInt(buynumNodes[i].innerText) == 0) {
            continue;
        }
        totalprice += priceNodes[i].innerText * parseInt(buynumNodes[i].innerText);
        totalquantity += parseInt(buynumNodes[i].innerText);
    }
    total_priceNode.textContent = totalprice.toFixed(2);
    total_quantityNode.innerText = totalquantity;
    settlement(totalprice);
}

// 调整“去结算”的样式
function settlement(totalprice) {
    var startingFee = 15;
    var node = document.getElementById("settlement");
    if (totalprice >= startingFee) {
        node.style.background = "#38CA73";
        node.innerText = "去结算";
        node.onclick = goSettlement;//绑定点击事件
    } else {
        node.style.background = "";
        node.innerText = "差" + (startingFee - totalprice).toFixed(2) + "起送";
        node.onclick = "";	//去除点击事件绑定	
    }
}

// 跳转至支付页面
function goSettlement() {
    var total_priceNode = document.getElementById("total_price");//购物车总价节点
    var priceNodes = document.getElementsByClassName("thePrice");//菜品单价节点集
    var numNodes = document.getElementsByClassName("buynum");//菜品数量节点集 
    var names = document.getElementsByClassName("ordername");//菜品名称节点集 
    var icons = document.getElementsByClassName("icon");
    let nowUser = sessionStorage.getItem("nowUser");

    if (nowUser) {
        nowUser = JSON.parse(nowUser);
        var orderAll = [];  //全部已点菜品列表
        for (len = names.length, i = 0; i < len; i++) {
            if (numNodes[i].innerText == "0") {
                continue;
            }
            let one = { //单个菜品的信息，价格，已点数量
                names: names[i].innerText,
                price: priceNodes[i].innerText,
                num: numNodes[i].innerText,
                icons: icons[i].src.split("img/")[1]
            };
            orderAll.push(one);         
        } 
        let newOrder = {    //本次点单的用户ID,菜单列表，总价
            userphone: nowUser,
            thisOrder: orderAll,
            thisPrice: total_priceNode.innerText
        }  
        sessionStorage.setItem('userOrder', JSON.stringify(newOrder));
    }else console.log("未登录");
    window.location.href = "order.html";
}

