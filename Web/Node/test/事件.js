__dirname;
__filename;

// ES6
// import events from "events";
// ES5
// let events = require("events");

// 引入事件处理模块
// import { EventEmitter } from "events"; // ES6
// let EventEmitter = require("events").EventEmitter; // ES5
// // 实例化一个事件对象
// let event = new EventEmitter();
// // 注册监听事件 on 为 addListener 简写 once触发一次
// event.addListener("customEvent", function (event) {
//     console.log(event);
// })
// // 触发事件
// event.emit("customEvent")
let fs = require("fs")

// 读取文件
// fs.readFile("./file.js", "utf-8", (err, data) => {
//     console.log(data);
// })

// 写入文件
// fs.writeFile("./file.js", "小行家", err => {
//     if (err != null) {
//         console.log(err);
//     } else {
//         console.log("成功");
//     }
// })

// 打开文件
fs.open("./file.js", "r+", (err, fd) => {
    console.log(fd);
})