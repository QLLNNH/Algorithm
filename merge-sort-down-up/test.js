'use strict';
const MergeSortDown2Up = require('./index');

const mergeSortDown2Up = new MergeSortDown2Up((a, b) => {
    if (a - b < 0) return true;
});

const arr = [2, 3, 4, 8, 1, 2, 4, 6, 0, 9, 7, 12, 31, 53, 43, 9, 4, 2, 3, 7, 8, 1, 5, 6];
const ret = mergeSortDown2Up.sort(arr);
console.log(ret);