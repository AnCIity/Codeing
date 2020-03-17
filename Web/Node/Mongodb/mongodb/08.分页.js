const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost/blog", { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
    if (err) throw err;

    let dbase = db.db("blog");

    // 分页

    // limit(num: Number)：指定的返回条数。
    dbase.collection("filing").find().limit(2).toArray((err, result) => {
        if (err) throw err;

        console.log(result);
    })

    // skip(num: Number)：指定的跳过条数。
    dbase.collection("filing").find().skip(2).limit(2).toArray((err, result) => {
        if (err) throw err;

        console.log(result);

        db.close();
    })

})

