var arr = [1, 2, 3, 4]

// --- 开头 ---
// 插入元素
arr.unshift(0)
// 删除元素
arr.shift()

// --- 末尾 ---
// 插入元素
arr.push(5)
// 删除元素
arr.pop()

// --- 任意位置 ---
// 删除元素：从索引1开始删除两个元素
arr.splice(1, 2)
// 加入元素：从索引1开始删除0个元素，添加2, 3
arr.splice(1, 0, 2, 3)

// 合并数组
var concatArr = [0];
var concatArr1 = 5;
concatArr.concat(arr, concatArr1)

// 迭代函数
const isEven = x => x % 2 === 0;
// 迭代数组中每个元素，直到返回 false
arr.every(isEven);
// 迭代数组中每个元素，直到返回 true
arr.some(isEven);
// 迭代整个数组，与for相似
arr.forEach(x => x % 2 === 0)
// 迭代整个数组并返回整体结果
arr.map(isEven);
// 迭代整个数组并返回为true的新数组
arr.filter(isEven);
// 两两迭代，返回累加后结果
arr.reduce((previous, current) => previous + current)

// for...of循环迭代
// 迭代数组值
for (const n of arr) {
    n % 2 === 0 ? 'even' : 'odd'
}

// 迭代器
// 使用@@iterator对象
let iterator = arr[Symbol.iterator]();
// 使用next可依次得到 数组值 t'r，并从迭代器中删除
iterator.next().value;
// 迭代器可使用for...of迭代
for (const iter of iterator) {
    // document.write(iter)
}

// entries方法返回包含键值对的@@iterator
let aEntries = arr.entries();

// keys方法返回数组索引的@@iterator
const aKeys = arr.keys(); // 得到数组索引的迭代器

// values方法返回数组值的@@iterator
const aValues = arr.values(); // 得到数组值的迭代器

// Array.from方法：根据已有数组创建一个新数组
// （数组，筛选条件函数）
let arr2 = Array.from(arr);
// 复制数组并进行筛选
let evens = Array.from(arr, x => (x % 2 == 0));

// Array.of方法：根据传入参数创建新数组
Array.of(1); //[1]
Array.of(1, 2, 3, 4); //[1,2,3,4]
Array.of(...arr); //使用展开符达到复制数组的效果

// fill方法：填充数组值
arr.fill(0, 0, 0); // (填充值, 开始索引， 结束索引)

// copyWithin方法
arr.copyWithin(0, 0, 0); // (复制至位置，复制值开始位置，复制值结束位置)


// 排序元素
// reverse：反序
arr.reverse();

// sort：正序
arr.sort();

// 自定义反序
arr.sort((a, b) => - a - b);


// 搜索

// indexOf方法返回与参数匹配的第一个元素的索引
arr.indexOf(2);

// lastIndexOf方法返回与参数匹配的最后一个元素的索引
arr.lastIndexOf(2);

// find与findIndex：接收一个回调函数，搜索一个满足回调函数条件的值
// find：返回第一个满足条件的值
// arr.find();
// findIndex：返回第一个满足条件的值的索引
// arr.findIndex();

// includes：检测参数是否在数组中
arr.includes(2);


// 转换为字符串
arr.toString(); // 1,2,3,4
// join：自定义连接符连接数组
arr.join('-'); // 1-2-3-4
