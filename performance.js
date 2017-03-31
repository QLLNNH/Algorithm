'use strict';
const ShellSort = require('./shell-sort/shell-sort');
const InsertionSort = require('./insertion-sort/insertion-sort-right-move');
const HeapSort = require('./heap-sort/heap-sort');
const QuickSort = require('./quick-sort/quick-sort');
const QuickSortOpt = require('./quick-sort/quick-sort-optimizing');
const MergeSort = require('./merge-sort-up-down/index');

const shellSort = new ShellSort();
const insertionSort = new InsertionSort();
const heapSort = new HeapSort((a, b) => b < a);
const quickSort = new QuickSort((a, b) => a < b);
const quickSortOpt = new QuickSortOpt((a, b) => a < b);
const mergeSort = new MergeSort((a, b) => a < b);

const list = [];
for (let i = 0; i < 10000000; i += 1) {
    list.push(Math.floor(Math.random() * 100000000));
}

// console.time('shell        ');
// shellSort.sort(list.slice(0));
// console.timeEnd('shell        ');

// console.time('insertion    ');
// insertionSort.sort(list.slice(0));
// console.timeEnd('insertion    ');

// console.time('heapsort     ');
// heapSort.sort(list.slice(0));
// console.timeEnd('heapsort     ');

// console.time('merge        ');
// mergeSort.sort(list.slice(0));
// console.timeEnd('merge        ');

console.time('quick        ');
quickSort.sort(list.slice(0));
console.timeEnd('quick        ');

console.time('quickOpt     ');
quickSortOpt.sort(list.slice(0));
console.timeEnd('quickOpt     ');

console.time('v8           ');
list.sort();
console.timeEnd('v8           ');