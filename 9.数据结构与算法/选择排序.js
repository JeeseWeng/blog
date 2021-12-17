function selectSort(arr) {
    var len = arr.length;
    for(let i = 0 ;i < len - 1; i++) { // n-1
        for(let j = i + 1; j<len; j++) { // n-1
            if(arr[j] < arr[i]) {
                [arr[i],arr[j]] = [arr[j],arr[i]];
            }
            console.log(i, j, arr[i], arr[j], arr) // (n-1)*(n-1)=(n-1)^2 => n^2 => O(n^2)
        }
    }
    return arr
}

const arr = [7, 4, 9, 8, 2]

console.log(selectSort(arr))

/*
选择排序过程
0 1 4 7 [ 4, 7, 9, 8, 2 ]
0 2 4 9 [ 4, 7, 9, 8, 2 ]
0 3 4 8 [ 4, 7, 9, 8, 2 ]
0 4 2 4 [ 2, 7, 9, 8, 4 ]
1 2 7 9 [ 2, 7, 9, 8, 4 ]
1 3 7 8 [ 2, 7, 9, 8, 4 ]
1 4 4 7 [ 2, 4, 9, 8, 7 ]
2 3 8 9 [ 2, 4, 8, 9, 7 ]
2 4 7 8 [ 2, 4, 7, 9, 8 ]
3 4 8 9 [ 2, 4, 7, 8, 9 ]
[ 2, 4, 7, 8, 9 ]
算法复杂度：O(n^2)
*/