'use strict';

/**
 * 插入排序
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
function InsertionSort(compare_fn) {
    if (typeof compare_fn === 'function')
        this.less = compare_fn;
}

/**
 *
 * 排序由内外两层循环组成
 *
 * 外循环由索引 1 开始向后遍历到索引 N-1，（用i表示索引位置）
 *
 * 内循环由索引 i 开始向前遍历到索引 1，（用j表示索引位置）
 *  当满足this.less(arr[j], arr[j - 1])时交换索引 j 与 j-1 的元素。
 *  否则终止内循环，因为插入排序中，j左侧的元素是有序的。
 *
 */
InsertionSort.prototype.sort = function (arr) {
    const N = arr.length;
    for (let i = 1; i < N; i += 1) {
        const v = arr[i];
        for (let j = i; j > 0 && this.less(v, arr[j - 1]); j -= 1) {
            this.exch(arr, j, j - 1);
        }
    }
    return arr;
}

InsertionSort.prototype.less = function (a, b) {
    return a < b;
}

InsertionSort.prototype.exch = function (arr, i, j) {
    const t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}

module.exports = InsertionSort;