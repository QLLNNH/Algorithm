'use strict';
const HeapSort = require('../heap-sort');
const heapSort = new HeapSort();

const list = [];

for (let i = 0; i < 10; i += 1) {
    list.push(Math.random() * 100);
}

console.log(heapSort.sort(list));