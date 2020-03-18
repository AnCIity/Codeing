import $ from "jquery";
import "./css/1.css";
import "./css/1.less";
// import "./css/1.scss";

$(function() {
    $("li:odd").css("backgroundColor", "red");
    $("li:even").css("backgroundColor", "blue");
});

class Person {
    static info = "aaa";
}

console.log(Person.info);
