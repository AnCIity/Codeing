const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost/blog", { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
    if (err) throw err;

    let dbase = db.db("blog");

    // 更新文档
    // update参数需要包含原子操作符：https://www.runoob.com/mongodb/mongodb-atomic-operations.html（参考）

    // updateOne(where, update, callback)：只会更新一条文档
    dbase.collection("filing").updateOne({ name: "南之城" }, { $set: { url: "www.nanzc.com" } }, (err, res) => {
        if (err) throw err;

        console.log("文档更新成功");
    })

    // updateMany(where, update, callback)：更新符合条件的所有数据
    dbase.collection("filing").updateMany({ name: "谷歌" }, { $set: { url: "www.google.com" } }, (err, res) => {
        if (err) throw err;

        console.log(res.result.nModified + " 条文档被更新");
    });

})

