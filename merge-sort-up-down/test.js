'use strict';
const MergeSortUp2Down = require('./index');

const mergeSortUp2Down = new MergeSortUp2Down((a, b) => {
    if (a - b < 0) return true;
});

const arr = [2, 3, 4, 8, 1, 2, 4, 6, 0, 9, 7, 12, 31, 53, 43, 9, 4, 2, 3, 7, 8, 1, 5, 6];
const ret = mergeSortUp2Down.sort(arr);
console.log(ret);