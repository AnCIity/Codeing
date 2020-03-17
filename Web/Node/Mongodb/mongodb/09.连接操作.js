const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost/blog", { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
    if (err) throw err;

    let dbase = db.db("blog");

    // 操作左集合
    dbase.collection('orders').aggregate([
        {
            $lookup:
            {
                from: 'products',            // 右集合：连接集合名
                localField: 'product_id',    // 左集合 join 字段：自身字段
                foreignField: '_id',         // 右集合 join 字段：连接字段
                as: 'orderdetails'           // 新生成字段（类型array）：保存数据字段
            }
        }
    ]).toArray(function (err, res) {
        if (err) throw err;

        console.log(JSON.stringify(res));
        // [{"_id":1,"product_id":154,"status":1,"orderdetails":[{"_id":154,"name":"笔记本电脑"}]}]

        db.close();
    });

})

