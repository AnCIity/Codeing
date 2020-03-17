// 字符串数组皆可用
// function getPureNumber(text, isArray = false) {
//     arr = text.split("").filter(x => isNaN(x) == false)
//     return isArray ? arr : arr.join("")
// }



/**
 * @author City
 * @method toArray - 字符串转换为数组
 * @this String - 待处理字符串
 * @returns {String} - 转换后的数组
 */

String.prototype.toArray = function () {
    return this.split("")
}



/**
 * @author City
 * @method toStr - 数组转换为字符串
 * @this Array - 待处理数组
 * @returns {String} - 转换后的字符串
 */

Array.prototype.toStr = function () {
    return this.join("")
}



/**
 * @author City
 * @method delGiven - 删除数组指定索引元素，改变原始数组
 * @this Array - 待处理数组
 * @param {Number} index - 删除索引
 * @returns {Array} - 被删除的元素数组
 */

Array.prototype.delGiven = function (index) {
    return this.splice(index, 1)
}



/**
 * @author City
 * @method getPureNumber - 取纯数字
 * @param {String} text - 处理字符串
 * @param {Boolean} [isArray=false] - 返回类型是否为数组
 * @returns {String/Array} - 默认返回字符串，isArray=true 返回数组
 */

function getPureNumber(text, isArray = false) {
    return isArray ? text.match(/[0-9]/g) : text.match(/[0-9]/g).join("")
}



/**
 * @author City
 * @method getPureLetter - 取纯字母
 * @param {String} text - 处理字符串
 * @param {Boolean} [isArray=false] - 返回类型是否为数组
 * @returns {String/Array} - 默认返回字符串，isArray=true 返回数组
 */

function getPureLetter(text, isArray = false) {
    return isArray ? text.match(/[a-z]/gi) : text.match(/[a-z]/gi).join("")
}



/**
 * @author City
 * @method noRepeat - 去除重复
 * @param {String/Array} data - 处理字符串
 * @param {Boolean} [isArray=false] - 返回类型是否为数组
 * @returns {String/Array} - 默认返回字符串，isArray=true 返回数组
 */

function noRepeat(data, isArray = false) {
    let arr = Array.isArray(data) ? data : data.split("");

    arr = arr.filter(function (currentValue, index) {
        return arr.indexOf(currentValue) == index
    });
    return isArray ? arr : arr.join("")
}



/**
 * @author City
 * @method replaceText - 字符串替换
 * @param {String} text - 处理字符串
 * @param {String} span - 被替换字符串
 * @param {String} reSpan - 替换字符串
 * @param {Boolean} [isAll=false] - 是否批量替换
 * @returns {String} - 替换后字符串
 */

function replaceText(text, span, reSpan, isAll = false) {
    return isAll ? text.split(span).join(reSpan) : text.replace(span, reSpan)
}



/**
 * @author City
 * @method getTextLeft - 取字符串左边
 * @param {String} text - 处理字符串
 * @param {String} separa - 分隔符
 * @returns {String} - 取出字符串
 */

function getTextLeft(text, separa) {
    return text.split(separa)[0]
}



/**
 * @author City
 * @method getTextRight - 取字符串右边
 * @param {String} text - 处理字符串
 * @param {String} separa - 分隔符
 * @returns {String} - 取出字符串
 */

function getTextRight(text, separa) {
    return text.split(separa)[1]
}



/**
 * @author City
 * @method getTextMiddle - 取字符串中间
 * @param {String} text - 处理字符串
 * @param {String} front - 前分隔符、
 * @param {String} behind - 后分隔符
 * @returns {String} - 取出字符串
 */

function getTextMiddle(text, front, behind) {
    return text.split(front)[1].split(behind)[0]
}



/**
 * @author City
 * @method getTextTimes - 取字符在字符串中出现次数
 * @param {String} text - 处理字符串
 * @param {String} showText - 检测字符串
 * @returns {Number} - 字符出现次数
 */

function getTextTimes(text, showText) {
    return text.split(showText).length - 1
}



/**
 * @author City
 * @method getTextShowMax - 取字符串中出现次数最多的字符
 * @param {String} text - 处理字符串
 * @returns {String} - 出现次数最多字符
 */

function getTextShowMax(text) {
    let arr = text.split("");
    arr = arr.filter(function (currentValue, index) {
        return arr.indexOf(currentValue) == index
    });

    let times = arr.map(function (value) {
        return text.split(value).length - 1
    })

    let maxTimes = Array.from(times).sort((a, b) => b - a)[0]

    return arr[times.indexOf(maxTimes)]
}



function getTextShowMax1(text) {
    let arr = text.split("");
    let obj = {};

    arr.map(function (value) {
        if (obj[value]) {
            obj[value]++;
        } else {
            obj[value] = 1;
        }
    })

    let max = 0;
    let maxStr = "";
    for (const key in obj) {
        if (max < obj[key]) {
            max = obj[key];
            maxStr = key;
        }
    }
    return maxStr
}
