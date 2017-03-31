'use strict';

function MergeSortUp2Down(compare_fn) {
    if (typeof compare_fn !== 'function') {
        throw 'need a compare function';
    }
    else {
        this.compare = compare_fn;
    }
}

MergeSortUp2Down.prototype.sort = function (arr) {
    const N = arr.length;
    this.aux = [];
    this.recursion(arr, 0, N - 1);
    return arr;
}

MergeSortUp2Down.prototype.recursion = function (arr, lo, hi) {
    if (hi <= lo) return;
    const min = lo + Math.floor((hi - lo) / 2);
    this.recursion(arr, lo, min);
    this.recursion(arr, min + 1, hi);
    this.merge(arr, lo, min, hi);
}

MergeSortUp2Down.prototype.merge = function (arr, lo, min, hi) {
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

MergeSortUp2Down.prototype.less = function (a, b) {
    return this.compare(a, b);
}

module.exports = MergeSortUp2Down;