var str = "  Visit City  ";

// search()：用于检索字符串中指定的子字符串，并返回子串的起始位置
// 使用正则表达式
str.search(/City/i)
// 使用字符串
str.search("City")

// replace()：替换文本，并返回替换后文本
// 使用正则表达式
str.replace(/city/i, "Replace")
// 使用字符串
str.replace("City", "Replace")

// test()：检测字符串是否匹配某个模式，匹配则返回 true，否则返回 false
var patt = /i/
patt.test(str)

// exec()：检索字符串中正则表达式的匹配，找到返回数组，未找到返回 null
patt.exec(str)

// 文本方法match()通过正则返回匹配字符串
// str.match(/[0-9]/g)

var a = str.replace(/^(\s+)|(\s+)$/g, "")

console.log(a);

