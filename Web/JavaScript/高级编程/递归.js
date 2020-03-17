var data = [
    {
        id: 1,
        name: '家电',
        goods: [
            {
                id: 11,
                name: '冰箱',
                goods: [
                    {
                        id: 111,
                        gname: '第三层'
                    }
                ]
            },
            {
                id: 12,
                name: '洗衣机',
                goods: [
                    {
                        id: 121,
                        gname: '第三层'
                    }
                ]
            }
        ]
    }, {
        id: 2,
        name: '服饰'
    }
]

function getById(id, data) {
    var result = false;

    data.forEach(element => {
        if (result) return;
        if (element.id == id) {
            result = element
        } else if (element.goods && element.goods.length > 0) {
            result = getById(id, element.goods)
        }
    })

    return result
}

console.log(getById(111, data));

