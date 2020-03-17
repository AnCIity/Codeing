var c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function isPrime(arr) {
    return arr.filter(
        function (x) {

            for (let i = 2; i <= x - 1; i++) {
                if (x % i === 0) {
                    return false;
                }
            }
            return true;

        }
    )
}

console.log(isPrime(c));