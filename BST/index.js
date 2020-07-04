'use strict';

class Node {
    constructor(k, v, n) {
        this.k = k;
        this.v = v;
        this.n = n;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    size() {
        return this._size(this.root);
    }

    _size(node) {
        if (node === null) return 0;
        else return node.n;
    }

    get(k) {
        return this._get(this.root, k);
    }

    _get(node, k) {
        if (node === null) return null;

        if (node.k > k) return this._get(node.left, k);
        else if (node.k < k) return this._get(node.right, k);
        else return node.v;
    }

    set(k, v) {
        this.root = this._set(this.root, k, v);
    }

    _set(node, k, v) {
        if (node === null) return new Node(k, v, 1);

        if (node.k > k) node.left = this._set(node.left, k, v);
        else if (node.k < k) node.right = this._set(node.right, k, v);
        else node.v = v;

        node.n = this._size(node.left) + this._size(node.right) + 1;

        return node;
    }

    print() {
        this._print(this.root);
    }

    _print(node) {
        if (node === null) return;

        this._print(node.left);
        console.log(node.v);
        this._print(node.right);
    }

    min() {
        return this._min(this.root).k;
    }

    _min(node) {
        if (node === null) return null;

        if (node.left === null) return node;
        else return this._min(node.left);
    }

    max() {
        return this._max(this.root).k;
    }

    _max(node) {
        if (node === null) return null;

        if (node.right === null) return node;
        else return this._max(node.right);
    }

    delete_min() {
        this.root = this._delete_min(this.root);
    }

    _delete_min(node) {
        if (node === null) return null;

        if (node.left === null) return node.right;
        else node.left = this._delete_min(node.left);

        node.n = this._size(node.left) + this._size(node.right) + 1;
        return node;
    }

    delete_max() {
        this.root = this._delete_max(this.root);
    }

    _delete_max(node) {
        if (node === null) return null;

        if (node.right === null) return node.left;
        else node.right = this._delete_max(node.right);

        node.n = this._size(node.left) + this._size(node.right) + 1;
        return node;
    }

    delete(k) {
        this.root = this._delete(this.root, k);
    }

    _delete(node, k) {
        if (node === null) return null;

        if (node.k > k) node.left = this._delete(node.left, k);
        else if (node.k < k) node.right = this._delete(node.right, k);
        else {
            if (node.left === null) return node.right;
            else if (node.right === null) return node.left;
            else {
                const t = node;

                node = this._min(t.right);
                node.right = this._delete_min(t.right);
                node.left = t.left;
            }
        }

        node.n = this._size(node.left) + this._size(node.right) + 1;

        return node;
    }

    floor(k) {
        const t = this._floor(this.root, k);
        if (t !== null) return t.k;
        else return null;
    }

    _floor(node, k) {
        if (node === null) return null;

        if (node.k === k) return node;
        else if (node.k > k) return this._floor(node.left, k);
        else {
            const t = this._floor(node.right, k);
            if (t !== null) return t;
            else return node;
        }
    }

    ceil(k) {
        const t = this._ceil(this.root, k);
        if (t !== null) return t.k;
        else return null;
    }

    _ceil(node, k) {
        if (node === null) return null;

        if (node.k === k) return node;
        else if (node.k < k) return this._ceil(node.right, k);
        else {
            const t = this._ceil(node.left, k);
            if (t !== null) return t;
            else return node;
        }
    }

    rank(k) {
        return this._rank(this.root, k);
    }

    _rank(node, k) {
        if (node === null) return 0;

        if (node.k > k) return this._rank(node.left, k);
        else if (node.k < k) return this._size(node.left) + 1 + this._rank(node.right, k);
        else return this._size(node.left);
    }

    select(i) {
        const t = this._select(this.root, i);
        if (t === null) return null;
        else return t.k;
    }

    _select(node, i) {
        if (node === null) return null;

        const left_size = this._size(node.left);

        if (left_size > i) return this._select(node.left, i);
        else if (left_size === i) return node;
        else return this._select(node.right, i - left_size - 1);
    }

    keys(lo, hi) {
        const list = [];
        this._keys(this.root, lo, hi, list);
        return list;
    }

    _keys(node, lo, hi, list) {
        if (node === null) return null;

        if (node.k > lo) this._keys(node.left, lo, hi, list);
        if (node.k >= lo && node.k <= hi) list.push(node.k);
        if (node.k < hi) this._keys(node.right, lo, hi, list);
    }
}

module.exports = BST;