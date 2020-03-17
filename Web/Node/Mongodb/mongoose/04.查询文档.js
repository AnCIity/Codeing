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

// 查询所有文档
// User.find().then(result => console.log(result));

// 查询符合条件文档
// User.find({ _id: "5c09f2d9aeb04b22f846096b" }).then(result =>
//     console.log(result)
// );

// 查询符合条件的第一条文档
// User.findOne().then(result => console.log(result));
// User.findOne({ name: "李四" }).then(result => console.log(result));

// 查询符合范围条件的文档
// User.find({ age: { $gt: 20, $lt: 40 } }).then(result => {
//     console.log(result);
// });

// 查询符合包含条件的文档
// User.find({ hobbies: { $in: ["足球"] } }).then(result => {
//     console.log(result);
// });

// 选择要查询的字段
// User.find()
//     .select("name email -_id")
//     .then(result => console.log(result));

// 根据字段升序排列
// User.find()
//     .sort("age")
//     .then(result => console.log(result));

// 根据字段降序排列
// User.find()
//     .sort("-age")
//     .then(result => console.log(result));

// skip 跳过多少条数据 limit限制查询数量
User.find()
    .skip(2)
    .limit(3)
    .then(result => console.log(result));
