const MongoClient = require("mongodb").MongoClient;

// 如果数据库不存在，将会隐式创建
MongoClient.connect('mongodb://localhost/stu', { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
    if (err) throw err;

    console.log("连接成功");

    // 关闭数据库
    db.close();
})

