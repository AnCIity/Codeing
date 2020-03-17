// 1、使用ES5的做法解决for循环打印i问题

var a = [];

for (var i = 0; i < 10; i++) {
    a[i] = (function (i) {
        return function () {
            console.log(i);
        };
    })(i);
}

a[6](); // 6



// 2、对比以下两种做法的优劣

// 方法一：
// 形参默认值{}，避免为 undefined
// 解构赋值内默认值，防止对应参数为 undefined
function move({ x = 0, y = 0 } = {}) {
    return [x, y];
}

move({ x: 3, y: 8 }); // [3, 8]
move({ x: 3 }); // [3, 0]
move({}); // [0, 0]
move(); // [0, 0]

// 方法二
// 形参默认值{ x: 0, y: 0 }，形参为 undefined 时使用形参默认值
// 解构赋值内不存在默认值，未定义时为 undefined
function move({ x, y } = { x: 0, y: 0 }) {
    return [x, y];
}

move({ x: 3, y: 8 }); // [3, 8]
move({ x: 3 }); // [3, undefined]
move({}); // [undefined, undefined]
move(); // [0, 0]



// 3、解构下面内容中的 title、reason 和 data

let data = {
    reason: "成功的返回",
    result: {
        stat: "1",
        data: [
            {
                uniquekey: "6c4caa0c3ba6e05e2a272892af43c00e",
                title: "杨幂的发际线再也回不去了么？网友吐槽像半秃",
                date: "2017-01-05 11:03",
                category: "yule",
                author_name: "腾讯娱乐",
                url:
                    "http://mini.eastday.com/mobile/170105110355287.html?qid=juheshuju",
                thumbnail_pic_s:
                    "http://03.imgmini.eastday.com/mobile/20170105/20170105110355_806f4ed3fe71d04fa452783d6736a02b_1_mwpm_03200403.jpeg",
                thumbnail_pic_s02:
                    "http://03.imgmini.eastday.com/mobile/20170105/20170105110355_806f4ed3fe71d04fa452783d6736a02b_2_mwpm_03200403.jpeg",
                thumbnail_pic_s03:
                    "http://03.imgmini.eastday.com/mobile/20170105/20170105110355_806f4ed3fe71d04fa452783d6736a02b_3_mwpm_03200403.jpeg"
            }
        ]
    }
};

let { reason, result: { data: info }, result: { data: [{ title }] } } = data

title
reason
info
