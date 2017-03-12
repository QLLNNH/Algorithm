'use strict';

/**
 * 选择排序
 *
 * 对于任意数组
 *  比较：N * N / 2
 *  交换：N
 */
function Selection(compare_fn) {
    if (typeof compare_fn === 'function')
        this.less = compare_fn;
}

/**
 * 排序由内外两层循环组成
 *
 * 外循环遍历数组（用i表示索引位置）
 *
 * 内循环从i+1开始遍历直到N-1，从中最小元素，并与索引i的元素交换
 */
Selection.prototype.sort = function (arr) {
    const N = arr.length;
    for (let i = 0; i < N; i += 1) {
        let min = i;
        for (let j = i + 1; j < N; j += 1) {
            if (this.less(arr[j], arr[min])) {
                min = j;
            }
        }
        this.exch(arr, i, min);
    }
    return arr;
}

Selection.prototype.less = function (a, b) {
    return a < b;
}

Selection.prototype.exch = function (arr, i, j) {
    const t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}

module.exports = Selection;