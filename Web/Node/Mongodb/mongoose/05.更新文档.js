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
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
    hobbies: [String]
});

// 使用规则创建集合
const User = mongoose.model("User", userSchema);

// User.updateOne({查询条件},{要修改的值}).then(result=> {})：更新单个
// User.updateOne({ name: "李四" }, { name: "李狗蛋" }).then(result =>
//     console.log(result)
// );

// User.updateMany({查询条件},{要修改的值, ...}).then(result=> {})：更新多个
User.updateMany({}, { age: 56 }).then(result => console.log(result));
