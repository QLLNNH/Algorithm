'use strict';
const Insertion = require('../insertion');
const InsertionRM = require('../insertion-right-move');

const insertion = new Insertion();
const insertionRM = new InsertionRM();

const list = [];
for (let i = 0; i < 10000; i += 1) {
    list.push(Math.floor(Math.random() * 100));
}

console.time('insertion');
insertion.sort(list.slice(0));
console.timeEnd('insertion');

console.time('insertionRM');
insertionRM.sort(list.slice(0));
console.timeEnd('insertionRM');