import fs from "fs"
import path from "path"

function find(file, dir) {
    let result = false; // 结果

    let files = fs.readdirSync(dir); // 取目录下一级文件

    files.forEach(value => {
        if (result) return; // 已找到则返回

        let fp = path.join(dir, value) // 拼接路径

        if (fs.statSync(fp).isDirectory()) {
            // 为目录，则继续查找，保存返回结果
            result = find(file, fp)
        } else if (value == file) {
            // 文件名一致，保存结果为 true
            result = true;
        }
    })

    return result
}


console.log(find("c", "./text"));
