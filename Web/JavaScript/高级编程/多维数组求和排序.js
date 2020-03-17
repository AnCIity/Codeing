function calc(arr) {
    // return [学号, 数学, 物理, 化学, 总分（倒序）]

    arr.forEach(value => {
        value.push(value.slice(1, 4).reduce((a, b) => a + b));
    });

    return arr.sort((a, b) => b[4] - a[4]);
}

let data = [
    // [学号, 数学, 物理, 化学]
    [1, 60, 30, 55],
    [2, 90, 64, 86],
    [3, 99, 88, 77],
    [4, 44, 80, 66]
];

let c = calc(data);
