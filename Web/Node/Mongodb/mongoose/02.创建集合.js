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
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    isPublished: Boolean
});

// 使用规则创建集合
// 1.集合名称
// 2.集合规则
const Course = mongoose.model("Course", courseSchema); // courses

// 验证集合是否创建成功，创建文档验证
const course = new Course({
    name: "node.js",
    author: "City",
    isPublished: true
});

// 将文档插入数据库中
course.save();
