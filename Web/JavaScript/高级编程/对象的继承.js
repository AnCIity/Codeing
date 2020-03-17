// prototype：原型对象
// __proto__：指向对象的原型对象
// constructor：构造函数自身

// 父构造函数
function Father(name) {
    this.name = name
}

Father.prototype.sing = function () {
    console.log("singing");

}

// 子构造函数
function Son(name) {
    // 1. 调用父构造函数  将this指向子构造函数
    Father.call(this, name);
}

// 2. 将子构造函数的原型对象指向 实例化父构造函数
Son.prototype = new Father();

// 3. 将子构造函数原型对象的指向  指回子构造函数
Son.prototype.constructor = Son;
