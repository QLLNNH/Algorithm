'use strict';

function MergeSortDown2Up(compare_fn) {
    if (typeof compare_fn !== 'function') {
        throw 'need a compare function';
    }
    else {
        this.compare = compare_fn;
    }
}

MergeSortDown2Up.prototype.sort = function (arr) {
    const N = arr.length;
    this.aux = [];
    for (let sz = 1; sz < N; sz = sz + sz) {
        for (let lo = 0; lo < N; lo += sz + sz) {
            this.merge(arr, lo, lo + sz - 1, Math.min(lo + sz + sz - 1, N - 1));
        }
    }
    return arr;
}

MergeSortDown2Up.prototype.merge = function (arr, lo, min, hi) {
    for (let k = lo; k <= hi; k += 1) {
        this.aux[k] = arr[k];
    }
    let i = lo;
    let j = min + 1;
    for (let k = lo; k <= hi; k += 1) {
        if (i > min) {
            arr[k] = this.aux[j ++];
        }
        else if (j > hi) {
            arr[k] = this.aux[i ++];
        }
        else if (this.less(this.aux[j], this.aux[i])) {
            arr[k] = this.aux[j ++];
        }
        else {
            arr[k] = this.aux[i ++];
        }
    }
}

MergeSortDown2Up.prototype.less = function (a, b) {
    return this.compare(a, b);
}

module.exports = MergeSortDown2Up;