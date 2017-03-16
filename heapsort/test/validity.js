'use strict';
const Heapsort = require('../heapsort');
const heapsort = new Heapsort();

const list = [];

for (let i = 0; i < 10; i += 1) {
    list.push(Math.random() * 100);
}

console.log(heapsort.sort(list));