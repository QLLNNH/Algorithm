'use strict';
const InsertionSort = require('../insertion-sort-right-move');
const insertionSort = new InsertionSort((a, b) => {
    return a.key < b.key;
});

const list = [];

for (let i = 0; i < 10; i += 1) {
    list.push({ key: Math.floor(Math.random() * 5), i });
}

console.log(insertionSort.sort(list));