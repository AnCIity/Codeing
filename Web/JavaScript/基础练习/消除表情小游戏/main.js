// 开始按钮
var oBtn = document.querySelector("input");

var grade = document.querySelectorAll("#fraction p");
// 得分
var getScore = grade[0];
// 失分
var lostScore = grade[1];

// 表情框
var qq = document.querySelector("#qq")

// 运动时钟
var Timer = undefined;
// 得分
var get = 0;
// 失分
var lost = 0;

// 开始事件
oBtn.onclick = function () {
    // 切换按钮状态
    oBtn.value = "游戏进行中......";
    oBtn.disabled = "disabled";

    // 开始游戏
    startGame()
}

/**
 * @author City
 * @method prevent - 阻止默认事件
 * @param {Event} ev - 事件对象
 */

function prevent(ev) {
    ev.preventDefault ? ev.preventDefault() : ev.returnValue = false;
}

qq.onclick = function (ev) {
    var ev = window.event || ev;
    var target = ev.target || ev.srcElement;
    if (target.tagName != "IMG") {
        return false
    }

    // 成功
    target.src = `./img/qq.png`
    clearInterval(Timer)
    get += 1;
    getScore.innerHTML = `得分：${get} 分`;
    setTimeout(() => {
        qq.removeChild(target);
        startGame()
    }, 500)
}

function startGame() {
    let img = addElement(qq, "img");
    img.src = `./img/${random(1, 11)}.png`;
    img.style.left = random(0, 776) + "px";
    img.ondragstart = function () { return false; };
    Timer = bufferMove(img, { "top": 1000 }, (200 - get * 5) < 20 ? 20 : (200 - get * 5), function (cur) {
        if (cur > 450) {
            clearInterval(img.timer);
            qq.removeChild(img);
            lost += 1;
            lostScore.innerHTML = `失分：${lost} 分`;
            if (parseInt(lostScore.innerHTML) >= 10) {
                stopGame()
            } else {
                startGame()
            }
        }
    })
}

function stopGame() {
    alert("失败了，重新开始吧！")
    // 切换按钮状态
    oBtn.value = "开始游戏";
    oBtn.disabled = "";
    get = 0;
    getScore.innerHTML = "得分：0 分";
    lost = 0;
    lostScore.innerHTML = "失分：0 分";
}

// 获取随机数 包括上限和下限值
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function bufferMove(elem, attrs, time, callback) {
    clearInterval(parseInt(elem.timer));
    elem.timer = setInterval(function () {
        var flag = true;

        for (const key in attrs) {
            // 获取当前值
            if (key === "opacity") {
                var cur = parseInt(getStyle(elem, key) * 100);
            } else {
                var cur = parseInt(getStyle(elem, key));
            }

            callback(cur)

            // 计算步长
            var speed = (attrs[key] - cur) / time;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

            // 清除定时器
            if (cur != attrs[key]) {
                flag = false;
            }

            // 让div移动
            if (key === "opacity") {
                elem.style[key] = (cur + speed) / 100;
                elem.style.filter = 'alpha(opacity=' + (cur + speed) + ')';
            } else {
                elem.style[key] = cur + speed + "px";
            }
        }

        if (flag) {
            console.log("Stop");

            clearInterval(parseInt(elem.timer));
        }

    }, 30);

}

/**
 * @author City
 * @method getStyle - 获取元素属性
 * @param {object} obj 元素对象
 * @param {String} attr 属性
 * @returns {String} - 获取到的属性值
 */

function getStyle(obj, attr) {
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr]
}

/**
 * @author City
 * @method addElement - 追加元素
 * @param {HTMLElement} obj - 父级对象
 * @param {String} element - 标签
 * @param {String} content - 添加内容
 * @returns {HTMLElement} - 创建元素对象
 */

function addElement(obj, element, content = "") {
    // 创建元素
    let createElement = document.createElement(element);
    // 添加元素innerHTML
    createElement.innerHTML = content;
    // 向父级追加新建元素
    obj.appendChild(createElement);
    // 返回当前新建元素对象
    return createElement
}