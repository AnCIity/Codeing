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

function addElement(obj, element, content) {
    // 创建元素
    let createElement = document.createElement(element);
    // 添加元素innerHTML
    createElement.innerHTML = content;
    // 向父级追加新建元素
    obj.appendChild(createElement);
    // 返回当前新建元素对象
    return createElement
}



/**
 * @author City
 * @method bindEvent - 绑定事件
 * @param {HTMLElement} obj - html对象
 * @param {String} event - 事件，不加on
 * @param {Function} func - 事件处理函数
 * @param {Boolean} cat - 默认false：冒泡，true：捕获
 */

function bindEvent(obj, event, func, cat = false) {
    obj.addEventListener ? obj.addEventListener(event, func, cat) : obj.attachEvent("on" + event, func)
}



/**
 * @author City
 * @method cancelEvent - 取消事件
 * @param {HTMLElement} obj - html对象
 * @param {String} event - 事件，不加on
 * @param {Function} func - 事件处理函数
 */

function cancelEvent(obj, event, func) {
    obj.removeEventListener ? obj.removeEventListener(event, func) : obj.detachEvent("on" + event, func)
}



/**
 * @author City
 * @method stopPropagation - 阻止冒泡
 * @param {Event} ev - 事件对象
 */

function stopPropagation(ev) {
    ev.stopPropagation ? ev.stopPropagation() : ev.cancelBubble = true;
}



/**
 * @author City
 * @method prevent - 阻止默认事件
 * @param {Event} ev - 事件对象
 */

function prevent(ev) {
    ev.preventDefault ? ev.preventDefault() : ev.returnValue = false;
}



/**
 * @author City
 * @method mouseWheelDirection - 判断滚轮滚动方向
 * @param {Event} ev - 事件对象
 * @returns {Boolean} - 向上：true，向下：false
 */

function mouseWheelDirection(ev) {
    let key = ev.wheelDelta ? ev.wheelDelta : ev.detail;
    let top = Math.abs(key) == 120 ? 120 : -3;
    return key == top ? true : false;
}