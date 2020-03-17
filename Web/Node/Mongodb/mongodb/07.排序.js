const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost/blog", { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
    if (err) throw err;

    let dbase = db.db("blog");

    // 排序

    // sort()：接受一个参数，规定是升序(1)还是降序(-1)。
    // { rank: 1 }  // 按 rank 字段升序
    // { rank: -1 } // 按 rank 字段降序
    dbase.collection("filing").find().sort({ rank: 1 }).toArray((err, result) => {
        if (err) throw err;

        console.log(result);

        db.close();
    })

})

