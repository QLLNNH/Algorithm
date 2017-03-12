'use strict';

/**
 * 插入排序（右移）
 *
 * 适合小数组或者大部分有序的数组
 * 排序具有稳定性
 *
 * 对于随机数组
 *  比较：N * N / 4
 *  交换：N * N / 4
 *
 * 最坏情况（逆序）
 *  比较：N * N / 2
 *  交换：N * N / 2
 *
 * 最好情况（有序，或主键重复）
 *  比较：N - 1
 *  交换：0
 */
function Insertion(compare_fn) {
    if (typeof compare_fn === 'function')
        this.less = compare_fn;
}

/**
 *
 * 排序由内外两层循环组成
 *
 * 外循环由索引1开始向后遍历到索引N-1，（用i表示索引位置）
 *
 * 内循环由索引i - 1开始向前遍历到索引0，（用j表示索引位置）
 *  创建两个变量：v等于内循环开始时元素的值，empty初始为索引i。
 *  如果满足this.less(v, arr[j])时，将比较大的元素右移一个位置，并将empty等于j。
 *  否则终止内循环，并且使移动造成的空位索引（empty）的元素等于内循环开始的元素。
 */
Insertion.prototype.sort = function (arr) {
    const N = arr.length;
    for (let i = 1; i < N; i += 1) {
        let empty = i, v = arr[i];
        for (let j = i - 1; j > - 1 && this.less(v, arr[j]); j -= 1) {
            empty = j;
            this.rightMove(arr, j);
        }
        arr[empty] = v;
    }
    return arr;
}

Insertion.prototype.less = function (a, b) {
    return a < b;
}

Insertion.prototype.rightMove = function (arr, low) {
    arr[low + 1] = arr[low];
}

module.exports = Insertion;