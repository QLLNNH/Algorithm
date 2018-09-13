'use strict';
const QuickSort = require('../quick-sort-median');

const quickSort = new QuickSort((a, b) => {
    if (a - b < 0) return true;
});
const arr = [6, 3, 41, 3, 65, 12, 33, 16, 21, 37, 4, 50, 71, 312, 1, 2, 5, 7, 32, 23];
const ret = quickSort.sort(arr);
console.log(ret);