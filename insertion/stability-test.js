'use strict';
const Insertion = require('./index');
const insertion = new Insertion((a, b) => {
    return a.key < b.key;
});

(async function test() {
    const list = [];

    // 生成时间有序队列
    for (let i = 0; i < 100; i += 1) {
        list.push({ key: Math.floor(Math.random() * 5), date: await getDate() });
    }

    console.log(insertion.sort(list));

    function getDate() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(new Date()), 100);
        });
    }
})();