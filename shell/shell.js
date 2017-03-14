'use strict';

/**
 * 希尔排序
 */
function Shell(compare_fn) {
    if (typeof compare_fn === 'function')
        this.less = compare_fn;
}

Shell.prototype.sort = function (arr) {
    const N = arr.length;
    let h = 1;
    while (h < N / 3) h = 3 * h + 1;
    while (h >= 1) {
        for (let i = h; i < N; i += 1) {
            for (let j = i; j >= h && this.less(arr[j], arr[j - h]); j -= h) {
                this.exch(arr, j, j - h);
            }
        }
        h = Math.floor(h / 3);
    }
    return arr;
}

Shell.prototype.less = function (a, b) {
    return a < b;
}

Shell.prototype.exch = function (arr, i, j) {
    const t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}

module.exports = Shell;