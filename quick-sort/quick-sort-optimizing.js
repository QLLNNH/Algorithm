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
    if (lo + 3 >= hi) {
        this.insertion(arr, lo, hi + 1);
        return;
    }
    const j = this.partition(arr, lo, hi);
    this._sort(arr, lo, j - 1);
    this._sort(arr, j + 1, hi);
}

QuickSort.prototype.insertion = function (arr, lo, hi) {
    for (let i = lo + 1; i < hi; i += 1) {
        const v = arr[i];
        for (let j = i; j > lo && this.less(v, arr[j - 1]); j -= 1) {
            this.exch(arr, j, j - 1);
        }
    }
}

QuickSort.prototype.partition = function (arr, lo, hi) {
    let i = lo;
    let j = hi + 1;
    const v = arr[lo];
    while (true) {
        while (this.less(arr[++ i], v)) if (i === hi) break;
        while (this.less(v, arr[-- j])) if (j === lo) break;
        if (i >= j) break;
        this.exch(arr, i, j);
    }
    this.exch(arr, lo, j);
    return j;
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