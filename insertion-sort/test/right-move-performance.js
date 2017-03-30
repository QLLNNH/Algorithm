'use strict';
const InsertionSort = require('../insertion-sort');
const InsertionSortRM = require('../insertion-sort-right-move');

const insertionSort = new InsertionSort();
const insertionSortRM = new InsertionSortRM();

const list = [];
for (let i = 0; i < 50000; i += 1) {
    list.push(Math.floor(Math.random() * 100));
}

console.time('insertion');
insertionSort.sort(list.slice(0));
console.timeEnd('insertion');

console.time('insertionRM');
insertionSortRM.sort(list.slice(0));
console.timeEnd('insertionRM');