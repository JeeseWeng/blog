function bubleSort(arr) {
    var len = arr.length;
    for (let outer = len; outer >= 2; outer--) {
        for (let inner = 0; inner <= outer - 1; inner++) {
            console.log(outer, inner, arr[inner], arr[inner + 1])
            if (arr[inner] > arr[inner + 1]) {
                [arr[inner], arr[inner + 1]] = [arr[inner + 1], arr[inner]]
            }
        }
    }
    return arr;
}

const arr = [7, 4, 9, 8, 2]

console.log(bubleSort(arr))

// 执行顺序，两两比较
/*
5 0 7 4
5 1 7 9
5 2 9 8
5 3 9 2
5 4 9 undefined     
4 0 4 7
4 1 7 8
4 2 8 2
4 3 8 9
3 0 4 7
3 1 7 2
3 2 7 8
2 0 4 2
2 1 4 7
[ 2, 4, 7, 8, 9 ]
*/