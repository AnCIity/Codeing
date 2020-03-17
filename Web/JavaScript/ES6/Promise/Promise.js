function getCity() {
    return new Promise((resolve, reject) => {
        ajax({
            url: "./1.json",
            type: "get",
            success: function(response) {
                resolve(response);
            },
            error: function(state, error) {
                reject(error);
            }
        });
    });
}

/**
 * @author City
 * @method ajax - 发送AJAX请求
 * @param {Object} res - 请求对象
 * {
 *     "url": "请求地址",
 *     "type": "请求类型",
 *     "data": "请求参数",
 *     "success": function (responseText) { },
 *     "error": function (state, responseText) { }
 * }
 */

function ajax(res) {
    let ajax = new XMLHttpRequest();

    if (res.type === "get") {
        res.url = res.data ? `${res.url}?${res.data}` : res.url;
    }

    ajax.open(res.type, res.url);

    if (res.type === "get") {
        ajax.send();
    } else {
        ajax.setRequestHeader(
            "Content-type",
            "application/x-www-form-urlencoded"
        );
        ajax.send(res.data);
    }

    ajax.onreadystatechange = function() {
        if (ajax.readyState === 4) {
            if (ajax.status === 200) {
                if (isJSON(ajax.responseText)) {
                    res.success(JSON.parse(ajax.responseText));
                } else {
                    res.success(ajax.responseText);
                }
            } else {
                res.error(ajax.state, ajax.responseText);
            }
        }
    };
}

/**
 * @author City
 * @method isJSON - 是否为 JSON
 * @param {String} str - 判断文本
 * @returns {Boolean} - 成功返回 True，失败返回 False
 */

function isJSON(str) {
    if (typeof str == "string") {
        try {
            var obj = JSON.parse(str);
            if (typeof obj == "object" && obj) {
                return true;
            } else {
                return false;
            }
        } catch (e) {
            return false;
        }
    }
}

function to(promise) {
    return promise.then(res => [null, res]).catch(err => err);
}

async function cityAsync() {
    let [err, res] = await to(getCity());
}

cityAsync();

// getCity();
// .then(res => {
//     let data = {};
//     for (const item of res.citys) {
//         if (data[item.city_pre.toUpperCase()] === undefined) {
//             data[item.city_pre.toUpperCase()] = [];
//         }
//         data[item.city_pre.toUpperCase()].push(item);
//     }
//     console.log(data);
// })
// .catch(err => {
//     console.log(err);
// });
