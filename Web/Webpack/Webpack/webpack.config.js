const path = require("path");

// 导入生成预览页面插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 创建插件实例对象
const htmlPlugin = new HtmlWebpackPlugin({
    // 指定模板文件
    template: "./src/index.html",
    // 指定生成文件名，文件处于内存中，在目录不显示
    filename: "index.html"
});

module.exports = {
    // 编译模式
    // development 不会压缩不会混淆
    // production 压缩并混淆
    mode: "development",
    // 入口文件路径
    entry: path.join(__dirname, "./src/index.js"),
    // 输出
    output: {
        // 路径
        path: path.join(__dirname, "./dist"),
        // 文件名
        filename: "bundle.js"
    },
    // webpack打包期间用到的插件列表
    plugins: [htmlPlugin],
    // 所有第三方文件模块的匹配规则
    module: {
        rules: [
            {
                // 匹配的文件类型
                test: /\.css$/,
                // 表示对应要调用的 loader 顺序固定 从后向前调用
                use: ["style-loader", "css-loader", "postcss-loader"]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            // {
            //     test: /\.scss$/,
            //     use: ["style-loader", "css-loader", "sass-loader"]
            // },
            {
                test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
                use: "url-loader"
            },
            // exclude：排除
            { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ }
        ]
    }
};
