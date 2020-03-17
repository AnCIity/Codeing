var data = [
    {
        xPosition: 1,
        yPosition: 1,
        Erica: 1
    },
    {
        xPosition: 3,
        yPosition: 7,
        Erica: 2
    },
    {
        xPosition: 4,
        yPosition: 5,
        Erica: 1
    }
];

// 检测已点击数组中是否存在棋子

function isWritten(xPosition, yPosition) {
    return data.some(function(value) {
        if (value.xPosition == xPosition && value.yPosition == yPosition) {
            return true;
        }
    });
}

console.log(isWritten(4, 5));
