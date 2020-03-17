const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost/blog", { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
    if (err) throw err;

    let dbase = db.db("blog");

    // 查询文档
    // find()用来查询文档，返回匹配条件的所有文档。

    // 查询所有文档，不指定条件即可
    dbase.collection("filing").find({}).toArray((err, res) => {
        if (err) throw err;

        console.log("查询所有文档：", res);

    })

    // 查询指定条件文档
    dbase.collection("filing").find({ name: "南之城" }).toArray((err, res) => {
        if (err) throw err;

        console.log("指定条件文档：", res);

    })


})

