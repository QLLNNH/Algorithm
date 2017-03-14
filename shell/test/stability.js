'use strict';
const Shell = require('../shell');
const shell = new Shell((a, b) => {
    return a.key < b.key;
});

const list = [];

for (let i = 0; i < 50; i += 1) {
    list.push({ key: Math.floor(Math.random() * 5), i });
}

console.log(shell.sort(list));