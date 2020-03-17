var round = [],
    num = 80;

class Round_item {
    constructor(index, x, y) {
        this.index = index;
        this.x = x;
        this.y = y;
        this.r = Math.random() * 2 + 1;
        var alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2;
        this.color = `rgba(255, 255, 255, ${alpha})`;
    }

    // 绘制小球
    draw() {
        content.fillStyle = this.color;
        content.shadowBlur = this.r * 2;
        content.beginPath();
        content.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false)
        content.closePath();
        content.fill();
    }

    // 移动小球
    move() {
        this.y += 1;

        if (this.y >= HEIGHT + 10) {
            this.y = -10;
        }

        this.draw();
    }
}


// 初始化
function init() {

    for (let i = 0; i < num; i++) {
        round[i] = new Round_item(i, Math.random() * WIDTH, Math.random() * HEIGHT);
        round[i].draw();
    }

    // 调用动画
    animate()
}


// 动画
function animate() {
    // 清空屏幕
    content.clearRect(0, 0, WIDTH, HEIGHT);

    for (const iterator of round) {
        iterator.move();
    }

    // 在浏览器重绘前更新动画
    requestAnimationFrame(animate);
}


init()



