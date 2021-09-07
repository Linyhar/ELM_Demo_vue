//**********1.3检测输入是否空
function checkEmpty(messginput) {
    if (messginput[0].value !== "" && messginput[1].value !== "") {   //判断验证码是否空
        return false;
    } else return true;
}


//**********1.5登录
function login() {
    var messginput = document.getElementsByClassName("mesginputbox");//获取手机号输入框、密码框、验证码框的对象
    if (!checkEmpty(messginput)) {        //判断输入是否有空值          
        let localusers = localStorage.getItem("usersData");
        if (localusers) {
            localusers = JSON.parse(localusers)	//JSON.parse()可以把JSON规则的字符串转换为JSONObject，
            var s = false;
            for (var j = 0, len = localusers.length; j < len; j++) {
                if (localusers[j].phone == messginput[0].value && localusers[j].password == messginput[1].value) {
                    s = true;
                    break;
                }
            }
            if (s) {
                Success(messginput[0].value);
            } else openTip("手机号或密码错误！");     
        }
    } else openTip("请正确输入！");
}

//**********1.6关闭提示框
function closeTip() {
    document.getElementById("tips").style.display = "none";
}

//**********1.7打开提示框
function openTip(str) {
    var tip_h3 = document.getElementById("tip-text");
    tip_h3.innerText = str;
    document.getElementById("tips").style.display = "block";
}

function Success(nowUser_phone) {
    sessionStorage.setItem('nowUser', JSON.stringify(nowUser_phone));	//把对象数组添加到本地存储。
    window.location.href = "index.html";
}

