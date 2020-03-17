
// 获取屏幕宽高
var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

// 获取画布对象
var oCanvas = document.getElementById("canvas");

// 设置画布宽高占满屏幕
var cx = oCanvas.width = w;
var cy = oCanvas.height = h;

// 获取画布上下文
var context = oCanvas.getContext("2d");

// 路径属性
// 阴影模糊尺寸
// context.shadowBlur = 20;
// 阴影颜色
// context.shadowColor = 'blue';

// 创建线性渐变
// var grd = context.createLinearGradient(100, 100, 100, 200);
// grd.addColorStop(0, 'rgb(255, 0, 0)');
// grd.addColorStop(0.2, 'rgb(255, 165, 0)');
// grd.addColorStop(0.3, 'rgb(255, 255, 0)');
// grd.addColorStop(0.5, 'rgb(0, 255, 0)');
// grd.addColorStop(0.7, 'rgb(0, 127, 255)');
// grd.addColorStop(0.9, 'rgb(0, 0, 255)');
// grd.addColorStop(1, 'rgb(139, 0, 255)');

// 开始路径
// context.beginPath()
// 画圆
// context.arc(100, 100, 50, 0, Math.PI * .5, false)
// 关闭路径
// context.closePath()

// 画笔
// 移动路径到指定点，不创建线条
// context.moveTo(50, 50)
// 添加一个新点，然后创建从该点到最后指定点的线条
// context.lineTo(200, 200)
// context.moveTo(50, 50)
// context.lineTo(200, 400)
// context.moveTo(50, 50)
// context.lineTo(400, 400)

// 描边
// context.strokeStyle = "white"
// context.stroke()
// 画矩形 strokeRect(x,y,width,height)
// context.strokeRect(10, 10, 100, 100)

// 填充
// context.fillStyle = grd;
// context.fill();
// 画矩形 fillRect(x,y,width,height)
// context.fillRect(0, 0, 200, 200);

