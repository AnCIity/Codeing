import $ from "jquery";
import "./css/1.css";
import "./css/1.less";

$(function() {
    $("li:odd").css("backgroundColor", "red");
    $("li:even").css("backgroundColor", "blue");
});

class Person {
    static info = "aaa";
}

console.log(Person.info);

// ------------------------------------------------------------
// 1.导入 Vue 构造函数
import Vue from "vue";

// 2.导入单文件组件
import App from "./components/App.vue";

const vm = new Vue({
    // 3. 指定 vm 实例要控制的页面区域
    el: "#app",
    // 4. 通过 render 函数，把指定的组件渲染到 el 区域中
    render: h => h(App)
});
