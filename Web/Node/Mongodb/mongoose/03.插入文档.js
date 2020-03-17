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
// 1.集合名称
// 2.集合规则
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    isPublished: Boolean
});

// 使用规则创建集合
const Course = mongoose.model("Course", courseSchema); // courses

// create({ })：向集合中插入文档

// Course.create(
//     { name: "Mongodb", author: "City", isPublished: true },
//     (err, result) => {
//         console.log(err);
//         console.log(result);
//     }
// );

Course.create({ name: "Mongodb", author: "City", isPublished: true })
    .then(result => console.log(result))
    .catch(err => console.log(err));
