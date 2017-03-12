'use strict';
const Selection = require('../selection');
const selection = new Selection((a, b) => {
    return a.key < b.key;
});

const list = [];

for (let i = 0; i < 50; i += 1) {
    list.push({ key: Math.floor(Math.random() * 5), i });
}

console.log(selection.sort(list));