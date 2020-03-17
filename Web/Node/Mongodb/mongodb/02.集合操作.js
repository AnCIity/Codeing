const MongoClient = require("mongodb").MongoClient;

// 如果数据库不存在，将会隐式创建
MongoClient.connect("mongodb://localhost/blog", { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
    if (err) throw err; // 如果发生错误，抛出错误

    // 选择数据库 blog
    let dbase = db.db("blog");

    // 主动创建集合，集合也会隐式创建
    dbase.createCollection("filing", (err, res) => {
        if (err) throw err;

        console.log("创建集合");

        db.close();
    })

    // collection()选择集合，drop()删除集合
    dbase.collection("filing").drop((err, delOK) => {
        if (err) throw err;

        if (delOK) console.log("集合已删除");

        db.close();
    })
})

