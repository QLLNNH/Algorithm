'use strict';
const PriorityQueue = require('../priority-queue');
const minPQ = new PriorityQueue([]);

for (let i = 0; i < 100; i += 1) {
    minPQ.insert(Math.floor(Math.random() * 100));
}

for (let i = 100; i > 0; i -= 1) {
    console.log(minPQ.delTop());
}