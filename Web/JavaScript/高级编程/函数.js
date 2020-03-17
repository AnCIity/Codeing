function Person() {

    console.log(new.target);

}

console.dir(Person);


// 10 undefined
var name = 10;

function a() {
    // 他不会向上级去查找
    console.log(name); // 报错，当前name变量被let绑定在了块级作用域，处于暂时死区（TDZ）
    // 绑定当前作用域
    let name = 1;
}

a()
