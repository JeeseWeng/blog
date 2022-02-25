# <center>dp 算法</center>

## 目录

1. 爬楼梯
2. 打家劫舍
3. 最大正方形
4. 零钱兑换
5. 不同路径
6. 股票题状态机
7. 如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润
8. 买卖股票的最佳时机 II

## 思想

像时高中数列的思想，给出首项，以及一个递推式子，让你求任意项的值。

基本步骤是： 寻找状态转移方程 => 建立合适的数据结构表 => 填表

斐波那契数列

## 一、爬楼梯

假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

1. 数组方法

```
dp[0] = 0 dp[1] = 1 dp[2] = 2
dp[n] = dp[n-1] + dp[n-2]   // 到达第n阶楼梯有从n-1阶走一步和从第n-2阶走两步两种情况
var climbStairs = function(n) {
    let dp = [];
    dp[0] = 0,dp[1] = 1,dp[2] = 2;
    for(let i = 3;i <= n;i++){
        dp[i] = dp[i-2] + dp[i-1];
    }
    return dp[n];
};
```

2. 递归方法

```
var climbStairs = function(n) {
    if (n === 0) {
        return 0
    }
    if (n === 1) {
        return 1
    }
    if (n === 2) {
        return 2
    }
    return climbStairs(n-1) + climbStairs(n-2)
}
var climbStairs = function(n) {
    switch(n) {
        case 0:
         return 0;
        case 1:
        return 1;
        case 2:
        return 2;
        default:
        return climbStairs(n-1) + climbStairs(n-2)
    }
}
```

注：js 最大递归值：1475，值为 1.3069892237633987e+308，1476 以上为：Infinity。堆栈会溢出，要注意。

## 二、打家劫舍

前提：你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。  
问题：给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额

动态规划方程：dp[n] = num + Max(dp[n-1])

由于不可以在相邻的房屋闯入，所以在当前位置 n 房屋可盗窃的最大值，要么就是 n-1 房屋可盗窃的最大值，要么就是 n-2 房屋可盗窃的最大值加上当前房屋的值，二者之间取最大值

举例来说：1 号房间可盗窃最大值为 33 即为 dp[1]=3，2 号房间可盗窃最大值为 44 即为 dp[2]=4，3 号房间自身的值为 22 即为 num=2，那么 dp[3] = MAX( dp[2], dp[1] + num ) = MAX(4, 3+2) = 5，3 号房间可盗窃最大值为 55

注：可以把现实场景转化为数组方式去思考，相当于数组中有一列数，需要间隔取出相加最大的

1. 数组方法

```
rob([1,2,30,4,5,10])
var rob = function(nums) {
    if(nums.length === 0) return 0; // 如果数组为0，则是[]，获取0
    if(nums.length === 1) return nums[0]; // 如果数组为1，则是[1]，获取第一个 1
    if(nums.length === 2) return Math.max(nums[0],nums[1]); // 如果数组为2，则是[1,2]，获取较大的一个数
    let dp = [nums[0],Math.max(nums[0],nums[1])]; // 设置dp等于数组第一个，数组第一个第二个较大的 数组
    // dp = [1,Math.max(1,2)]
    // 循环数组，获取相加较大值
    for(let i = 2;i < nums.length;i++){
        dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i]);
        // dp[2] = Math.max(dp[1],dp[0]+nums[2]) = Math.max(2,1+30) = 31
        // dp[3] = Math.max(dp[2],dp[1]+nums[3]) = Math.max(31,2+4) = 31
        // dp[4] = Math.max(dp[3],dp[2]+nums[4]) = Math.max(31,31+5) = 36
        // dp[5] = Math.max(dp[4],dp[3]+nums[5]) = Math.max(36,31+10) = 41
    }
    // Math.max(dp[6-1],dp[6-2]) = Math.max(dp[5],dp[4]) = Math.max(36, 41)
    return Math.max(dp[nums.length-1],dp[nums.length-2]);
};
```

2. 递归方法

```

```

## 三、最大正方形

在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积

```
const maximalSquare = (matrix) => {
  if (!matrix.length) return 0

  let maxsqlen = 0
  let rowLength = matrix.length, colLength = matrix[0].length
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      if (matrix[row][col] === '1') {
        matrix[row][col] = Number(matrix[row][col])
        if (row != 0 && col != 0) {
          matrix[row][col] = Math.min(matrix[row-1][col], matrix[row-1][col-1], matrix[row][col-1]) + 1
        }
        maxsqlen = Math.max(maxsqlen, matrix[row][col])
      }
    }
  }
  return maxsqlen**2
}
```

## 四、零钱兑换

## 五、不同路径

## 六、股票题状态机

## 七、如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润

## 八、买卖股票的最佳时机 II
