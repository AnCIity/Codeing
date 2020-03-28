const express = require("express");

const app = express();

app.all("*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.get("/fetch", (req, res) => {
    res.send("Get 请求成功");
});

app.post("/fetch", (req, res) => {
    res.send("Post 请求成功");
});

app.get("/axios", (req, res) => {
    res.send("Get 请求成功");
});

app.listen(3000);
