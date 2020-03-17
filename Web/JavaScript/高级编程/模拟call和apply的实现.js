Obj = {
    a: 1,
    b: 2
}

function c(x, y, z) {
    console.log(x);
    console.log(y);
    console.log(z);
    console.log(this.a + this.b);
}


// 传参  有一个接收参数的方法  
Function.prototype.newCall = function (obj, ...ages) { // 这里是...剩余参数
    obj.fn = this;

    // arguments 方法获取
    // console.log(arguments);
    // for (let i = 1; i < arguments.length; i++) {m
    //     const element = arguments[i];
    // }

    // ...展开运算符获取
    // eval：将字符串运行成javascript
    obj.fn(...ages) // 数组扩展运算符

    delete obj.fn;
}

c.newCall(Obj, 5, 6, 7)














































// 想要把c里的this指向Obj对吧嗯

// 这样就可以  然后需要方法去实现

// 首先第一个参数传入的是this指向  先不管其他参数
// Function.prototype.anCall = function (obj) {
//     // 首先我们需要把函数放入对象
//     // this 这是函数
//     // obj 这是需要this指向的对象
//     // 我们在obj中放入函数 定义fn属性  接收函数  随意命名 符合规范就行
//     obj.fn = this
//     // 然后我们去调用obj中的函数
//     obj.fn()
//     // 删除fn属性  当他没来过
//     delete obj.fn

//     // 等会再来修改传参问题
// }

// // 你来调用下
// // Obj.c????  call怎么调用的？？？
// // 谁要修改this  指向谁  就这样啊  然后改成我写的
// // 可以了对吧对 我不懂 
// c.anCall(Obj)

// // 然后呢  产