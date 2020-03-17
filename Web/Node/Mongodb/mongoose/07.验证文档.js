const mongoose = require("mongoose");

// 数据库连接
mongoose
    .connect("mongodb://localhost/mongoose", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    // 连接成功
    .then(() => console.log("数据库连接成功"))
    // 连接失败
    .catch(err => console.log(err, "数据库连接失败"));

// 创建集合规则
const postSchema = new mongoose.Schema({
    title: {
        // 类型
        type: String,
        // 必选字段
        required: [true, "请传入文章标题"],
        // 字符串最小长度
        minlength: [2, "文章长度不能小于2"],
        // 字符串最大长度
        maxlength: [5, "文章长度最大不能超过5"],
        // 去首尾空
        trim: true
    },
    age: {
        type: Number,
        // 数值最小值
        min: 18,
        // 数值最大值
        max: 100
    },
    publishDate: {
        type: Date,
        // 默认值
        default: Date.now
    },
    category: {
        type: String,
        // 枚举 列举出当前字段可以拥有的值
        enum: {
            values: ["html", "css", "javascript", "node.js"],
            message: "分类信息要在指定范围内"
        }
    },
    author: {
        type: String,
        validate: {
            validator: v => {
                // 返回一个布尔值
                // true 验证成功
                // false 验证失败
                // v 要验证的值
                return v && v.length > 4;
            },
            // 自定义错误信息
            message: "传入的值不符合验证规则"
        }
    }
});

// 使用规则创建集合
const Post = mongoose.model("Post", postSchema);

Post.create({ title: "aa", age: 60, category: "java", author: "bd" })
    .then(result => console.log(result))
    .catch(error => {
        // 获取错误信息对象
        const err = error.errors;
        // 循环错误信息对象
        for (let attr in err) {
            // 将错误信息打印到控制台中
            console.log(err[attr]["message"]);
        }
    });
