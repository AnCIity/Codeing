const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost/blog", { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
    if (err) throw err;

    let dbase = db.db("blog");

    // 删除文档

    // deleteOne(where, callback)：删除一条文档
    dbase.collection("site").deleteOne({ name: "谷歌" }, (err, obj) => {
        if (err) throw err;

        console.log("文档删除成功");
    });

    // deleteMany(where, callback)：删除多条文档
    dbase.collection("site").deleteMany({ name: "谷歌" }, (err, obj) => {
        if (err) throw err;

        console.log("符合条件的文档删除成功");
    });
})

