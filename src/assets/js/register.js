//**********1初始化随机加载一张验证码
window.onload = function () {
    let img = document.getElementById("code_img");
    let imgnum = Math.floor(Math.random() * (1 - 5) + 5).toString();
    if (imgnum.length == 1) {
        imgnum = "0" + imgnum;
    }
    img.src = "img/code" + imgnum + ".png";
}

//**********2随机更换验证码
function changeImg() {
    let img = document.getElementById("code_img");
    //因为验证码图片的命名为code+两位数字，要更换与当前不一样的验证码图片
    let order_num = img.src.slice(-6, -4);          //获取当前的验证码图片序号
    let imgnum = order_num;
    
    while (imgnum == order_num) {                     //如果验证码图片序号和随机生成的序号一样就继续以下
        imgnum = Math.floor(Math.random() * (1 - 5) + 5).toString();
        if (imgnum.length == 1) {
            imgnum = "0" + imgnum;
        }
        
    }
    img.src = "img/code" + imgnum + ".png";
}


//**********3检测输入的验证码是否正确
//定义常量，假设每张验证码图片对应的验证码分别为....
const codes = { "01": "7364", "02": "7482", "03": "uwv6", "04": "smwm" };
function checkCode(imginput) {
    var img = document.getElementById("code_img");
    var order_num = img.src.slice(-6, -4);          //获取当前验证码图片的序号
    var imgpswd;
    for (let key in codes) {           //遍历obj以取得对应图片的正确验证码    
        if (key == order_num) {
            imgpswd = codes[key];     //取对应图片的正确验证码                                           
            break;
        }
    }
    if (imgpswd == imginput) {
        return true;
    } else return false;
}

//**********4检测输入是否空
function checkEmpty(messginput) {
    for (len = messginput.length, i = 0; i < len; i++) {
        if (messginput[i].value == "" || messginput[i].value == null) return false;
    }
    return true;
}

//**********5注册
function register() {
    let messginput = document.getElementsByClassName("messginput");
    let phonetest = /^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[8])\d{8}$/;
    if (checkEmpty(messginput)) {       //检查有无空项
        if (messginput[2].value == messginput[3].value) {     //检查密码与确认密码
            if (!phonetest.test(messginput[1].value)){
                // console.log("手机号错误")
                openTip('手机号错误');
                return;
            }
            // console.log(messginput[1].value)
            if (checkCode(messginput[6].value)) {//检查验证码
                let theSex = messginput[4].value, theHeadicon = "headboy.png";
                if (messginput[5].checked) {
                    theSex = messginput[5].value;
                    theHeadicon = "headgirl.png";
                }

                let userInfo = {
                    phone: messginput[1].value,
                    password: messginput[2].value,
                    sex: theSex,
                    nickname: messginput[0].value,
                    headicon: theHeadicon,
                    balance: "550"
                };

                let localusers = localStorage.getItem("usersData"); //读取已存储在本地的用户信息

                if (localusers) {
                    localusers = JSON.parse(localusers)	//JSON.parse()可以把JSON规则的字符串转换为JSONObject，
                    let s = false;
                    for (let j = 0, len = localusers.length; j < len; j++) {
                        if (localusers[j].phone == userInfo.phone) {
                            s = true;
                            break;
                        }
                    }
                    if (s) openTip("该手机号已存在,请重新注册！");
                    else {
                        localusers.push(userInfo);					//向对象数组添加值。
                        localStorage.setItem('usersData', JSON.stringify(localusers));	//把对象数组添加到本地存储。
                        openTip('注册成功');
                    }
                } else {
                    let arr = [];
                    arr.push(userInfo);
                    localStorage.setItem('usersData', JSON.stringify(arr));//对象数组添加到本地存储并命名。
                    openTip('注册成功');
                }
            }else openTip("验证码错误！");
        } else openTip("两次密码不一致！");
    } else openTip("请输入完整！");

}

function closeTip() {
    document.getElementById("tips").style.display = "none";
}
function openTip(str) {
    let tip_text = document.getElementById("tip-text");
    tip_text.innerHTML = str;
    document.getElementById("tips").style.display = "block";
}


