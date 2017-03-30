'use strict';

/**
 * 基于完美二叉堆的优先队列
 */
function PriorityQueue(compare_fn) {
    if (typeof compare_fn === 'function')
        this.less = compare_fn;
    this.pq = [];
    this.N = 0;
}

PriorityQueue.prototype.size = function () {
    return this.N;
}

PriorityQueue.prototype.isEmpty = function () {
    return this.N === 0;
}

PriorityQueue.prototype.less = function (a, b) {
    return a < b;
}

PriorityQueue.prototype.exec = function (a, b) {
    const t = this.pq[a];
    this.pq[a] = this.pq[b];
    this.pq[b] = t;
}

PriorityQueue.prototype.swim = function (k) {
    while (k > 1) {
        const parent = Math.floor(k / 2);
        if (this.less(this.pq[parent], this.pq[k])) break;
        this.exec(parent, k);
        k = parent;
    }
}

PriorityQueue.prototype.sink = function (k) {
    while (2 * k <= this.N) {
        let j = 2 * k;
        if (j < this.N && this.less(this.pq[j + 1], this.pq[j])) j += 1;
        if (this.less(this.pq[k], this.pq[j])) break;
        this.exec(k, j);
        k = j;
    }
}

PriorityQueue.prototype.insert = function (item) {
    this.pq[++ this.N] = item;
    this.swim(this.N);
}

PriorityQueue.prototype.delTop = function () {
    const top = this.pq[1];
    this.pq[1] = this.pq[this.N];
    this.pq.length = this.N --;
    this.sink(1);
    return top;
}

module.exports = PriorityQueue;