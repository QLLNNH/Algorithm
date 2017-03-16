'use strict';

/**
 * 二叉堆排序
 */
function Heapsort(compare_fn) {
    if (typeof compare_fn === 'function')
        this.less = compare_fn;
}

Heapsort.prototype.sort = function (arr) {
    let N = arr.length;
    arr.unshift(arr[0]);
    for (let k = Math.floor(N / 2); k >= 1; k -= 1) {
        this.sink(arr, k, N);
    }
    while (N > 1) {
        this.exec(arr, 1, N --);
        this.sink(arr, 1, N);
    }
    arr.shift(arr[0]);
    return arr;
}

Heapsort.prototype.sink = function (arr, k, N) {
    while (2 * k <= N) {
        let j = 2 * k;
        if (j < N && this.less(arr[j + 1], arr[j])) {
            j += 1;
        }
        if (this.less(arr[k], arr[j])) break;
        this.exec(arr, k, j);
        k = j;
    }
}

Heapsort.prototype.less = function (a, b) {
    return a < b;
}

Heapsort.prototype.exec = function (arr, a, b) {
    const t = arr[a];
    arr[a] = arr[b];
    arr[b] = t;
}

module.exports = Heapsort;