const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost/blog", { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
    if (err) throw err;

    let dbase = db.db("blog");

    // 插入文档
    let insData = [
        { name: "南之城", url: "nanzc.com", rank: "3" },
        { name: "百度", url: "baidu.com", rank: "5" },
        { name: "南之城", url: "nanzc.com", rank: "1" },
        { name: "谷歌", url: "google.com", rank: "4" },
        { name: "谷歌", url: "google.com", rank: "2" }
    ];

    // 操作不存在集合时，集合将会隐式创建
    dbase.collection("filing").insertMany(insData, (err, res) => {
        // insertOne()插入一条，insertMany()插入多条。
        if (err) throw err;

        console.log("插入的文档数量为: ", res.insertedCount);

        db.close();
    })

})

