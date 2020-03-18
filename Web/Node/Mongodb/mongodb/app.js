const MongoClient = require("mongodb").MongoClient;

class Db {
    constructor(dbName) {
        this.url = "mongodb://127.0.0.1:27017";
        this.dbName = dbName;
    }

    // 连接
    connect() {
        return MongoClient.connect(this.url);
    }

    // 选择数据库
    async selectDb() {
        let [err, res] = await to(this.connect());
        if (err) throw err;
        let db = res.db(this.dbName);
        return db;
    }

    // 选择集合
    async selectCollection(coll) {
        let [err, res] = await to(selectDb());
        if (err) throw err;
        return res.collection(coll)
    }

    // 查找
    async find(coll,filter){
        let [err,collection]=await to(selectCollection(coll));
        if(err) throw err;
        throw collection.find(filter).toArray();
    }

    

}

function to(promise) {
    return promise.then(res => [null, res]).catch(err => [err]);
}

module.exports = Db;
let [err, db] = await to();
