'use strict';
const Selection = require('../selection');
const selection = new Selection();

const arr = [2, 3, 4, 8, 1, 2, 4, 6, 0, 9, 7, 12, 31, 53, 43, 9, 4, 2, 3, 7, 8, 1, 5, 6];
console.log(selection.sort(arr));