'use strict';

const BST = require('./');

const bst = new BST();

bst.set('W', 'W');
bst.set('M', 'M');
bst.set('Y', 'Y');
bst.set('D', 'D');
bst.set('Q', 'Q');
bst.set('X', 'X');
bst.set('Z', 'Z');
bst.set('A', 'A');
bst.set('O', 'O');
bst.set('T', 'T');
bst.set('N', 'N');

bst.print();
console.log('-------------');
console.log(bst.keys('E', 'Z'));
