'use strict';

function QuickSort(compare_fn) {
    if (typeof compare_fn === 'function')
        this.less = compare_fn;
}

QuickSort.prototype.sort = function (arr) {
    this._sort(arr, 0, arr.length - 1);
    return arr;
}

QuickSort.prototype._sort = function (arr, lo, hi) {
    if (lo >= hi) return;
    const j = this.partition(arr, lo, hi);
    this._sort(arr, lo, j - 1);
    this._sort(arr, j + 1, hi);
}

QuickSort.prototype.partition = function (arr, lo, hi) {
    let i = lo - 1;
    let j = hi;
    const v = arr[hi];
    while (true) {
        while (this.less(arr[++ i], v)) ;
        while (this.less(v, arr[-- j])) if (j === lo) break;
        if (i >= j) break;
        this.exch(arr, i, j);
    }
    this.exch(arr, hi, i);
    return i;
}

QuickSort.prototype.less = function (a, b) {
    return a < b;
}

QuickSort.prototype.exch = function (arr, i, j) {
    const t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}

module.exports = QuickSort;