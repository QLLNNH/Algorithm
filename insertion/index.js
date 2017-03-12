'use strict';

function Insertion(compare_fn) {
    if (typeof compare_fn === 'function')
        this.less = compare_fn;
}

/**
 *
 * 插入排序
 *
 * 排序由内外两层循环组成
 *
 * 外循环由索引 1 开始向后遍历到索引 N-1，（用i表示索引位置）
 *
 * 内循环由索引 i 开始向前遍历到索引 0，（用j表示索引位置）
 *  当满足this.less(arr[j], arr[j - 1])时交换索引j与j-1的元素。
 *  否则终止内循环，因为插入排序中，j左侧的元素是有序的。
 *
 */
Insertion.prototype.sort = function (arr) {
    const N = arr.length;
    for (let i = 1; i < N; i += 1) {
        for (let j = i; j > 0 && this.less(arr[j], arr[j - 1]); j -= 1) {
            this.exch(arr, j, j - 1);
        }
    }
    return arr;
}

Insertion.prototype.less = function (a, b) {
    return a < b;
}

Insertion.prototype.exch = function (arr, i, j) {
    const t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}

module.exports = Insertion;