class Carousel {
    // 父级对象，轮换元素，{导航，按钮，定时器间隔}，回调函数{element{last, next},index{last, next}}
    constructor(obj, elements, oper, callback) {
        this.obj = obj;
        this.elements = elements;

        // oper
        this.navs = oper.navs || undefined;
        this.btns = oper.btns || [undefined, undefined];
        this.timing = oper.timing || undefined;

        this.callback = callback;
        this.length = elements.length;
        this.index = 0;
        this.Timer = 0;

        this.init();
    }

    init() {

        // 焦点处理
        this.obj == undefined ? null : this.focus();

        // 左右控制
        this.btns[0] == undefined ? null : this.toLeft();
        this.btns[1] == undefined ? null : this.toRight();

        // 导航控制
        this.navs == undefined ? null : this.toNav();

        // 自动切换
        this.timing == undefined ? null : this.auto();

    }

    // Cut Function
    cutCarousel(wantIndex) {
        if (wantIndex == this.index) {
            return false
        }
        if (wantIndex == this.length) {
            wantIndex = 0;
        }
        if (wantIndex < 0) {
            wantIndex = this.length - 1;
        }

        // navs cut
        if (this.navs) {
            this.navs[this.index].classList.remove("cut");
            this.navs[wantIndex].classList.add("cut");
        }

        // callback(element,index)
        this.callback({
            "last": this.elements[this.index],
            "next": this.elements[wantIndex]
        }, {
            "last": this.index,
            "next": wantIndex
        });

        this.index = wantIndex;
    }

    // oper onfocus
    focus() {
        this.bindEvent(this.obj, "mouseover", () => {
            clearInterval(this.Timer)
        })

        this.bindEvent(this.obj, "mouseout", () => {
            this.auto()
        })
    }

    // oper toLeft
    toLeft() {
        this.bindEvent(this.btns[0], "click", () => this.cutCarousel(this.index - 1))
    }

    // oper toRight
    toRight() {
        this.bindEvent(this.btns[1], "click", () => this.cutCarousel(this.index + 1))
    }

    // oper toNav
    toNav() {
        for (let i = 0; i < this.navs.length; i++) {
            const element = this.navs[i];
            element.index = i;
            this.bindEvent(element, "mouseover", () => this.cutCarousel(element.index))
        }
    }

    // oper auto
    auto() {
        this.Timer = setInterval(() => {
            this.cutCarousel(this.index + 1)
        }, this.timing);
    }

    // bind event
    bindEvent(obj, event, func, cat = false) {
        obj.addEventListener
            ? obj.addEventListener(event, func, cat)
            : obj.attachEvent("on" + event, func);
    }
}

$.get("./json/img.json", data => {
    // 根据获得数据生成 img nav
    data.forEach(value => {
        $(".img-list").append(`<img src="${value}">`)
        $(".nav-list").append("<li></li>")
    })

    // 初始 nav
    $("li:eq(0)").addClass("cut");

    // 创建轮播图控制对象
    new Carousel($(".box")[0], $("img"), {
        "navs": $("li"),
        "btns": $(".option i"),
        "timing": 4000
    }, element => {
        $(element.last).stop().css("opacity", "0")

        $(element.next).animate({
            "opacity": 1
        })
    })
})

