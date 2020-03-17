// 作业：
// 1、ES6模板字符串拼串完成循环遍历li标签节点
let arr = [1, 2, 3, 4];
let str = arr.map(element => {
    return `<li>${element}</li>`
}).join("")


// 2、自行查询子类，学习i18n国际化

// 3、想让name走默认值，然后只给age赋值，是否能做到？
function fn(name = "zhangsan", age = 18) {
    console.log(name, age); // zhangsan 1
}

fn(undefined, 1) // 使用 undefined

// 4、下面代码箭头函数中的语法怎么解释？
// 此代码块运行时发生错误
// let fn = () => {
//     // 代码块
//     {   // 代码块
//         name: "zhagnsan"; // 标记语句
//         age: 22; // 标记语句
//     }
// };

// 5、了解运算符优先级和结合性（关联性）参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// 6、选做：使用symbol类型来让const修饰的对象属性不可覆盖
const obj = {};
// symbol 方法使用 age 变量照样可修改，没有实际意义 
let age = Symbol("年龄");
obj[age] = 21;
console.log(obj[age]);
obj[age] = 1;
console.log(obj[age]);
obj[Symbol("年龄")] = 10
console.log(obj[age]);

// defineProperty 方法   推荐
Object.defineProperty(obj, "name", {
    value: "City",
    writable: false,
    enumerable: true,
    configurable: true
});



// 7、使用对象的做法清除数组中的重复数据（不使用set）
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

// 8、使用spread运算符复制的数组或对象，是深拷贝还是浅拷贝？
// 浅拷贝