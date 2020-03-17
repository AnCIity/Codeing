// let [a, b, c] = [1, 2]
// a
// b
// c

// let { age: agea, name, sex } = { name: "黎明", age: 23, sex: "nan" }
// agea
// name
// sex


// // ...在普通函数也有用
// function ac(...args) {
//     arguments
//     args
// }

// let ab = (...args) => {
//     // arguments 无法使用
//     args
// }

// ac(1, 2)
// ab(1, 2)

// 对象属性
const obj = {};
Object.defineProperty(obj, "name", {
    value: "City",
    writable: false,
    enumerable: true,
    configurable: true
});

obj

obj.name = 1

obj

