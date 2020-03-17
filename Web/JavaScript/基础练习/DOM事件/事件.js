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
    ev.preventDefault ? ev.preventDefault() : ev.returnValue == false;
}