"use strict";

function BST(value) {
    this.value = value;
    this.left = null;
    this.right = null
}

BST.prototype.insert = function (value) {
    if (value <= this.value) {
        // checking for the existence of left node
        if (!this.left) {
            this.left = new BST(value);
            console.log("left : ", this.left);
        }
        // if left node exist, then insert to the left node 
        else {
            console.log(value);
            this.left.insert(value);
        }
    }
    else {
        // checking for the existence of right node
        if (!this.right) {
            this.right = new BST(value);
        }
        // if right node exist, then insert to the right node 
        else {
            this.right.insert(value);
        }
    }
}

BST.prototype.contains = function (value) {
    if (value === this.value) {
        return true
    }
    else if (value < this.value) {
        if (!this.left) {
            return false
        }
        else {
            return this.left.contains(value)
        }
    }
    else if (value > this.value) {
        if (!this.right) {
            return false
        }
        else {
            return this.right.contains(value)
        }
    }
}

let tree = new BST(25);
console.log(tree);
tree.insert(20)
tree.insert(36)
tree.insert(10)
tree.insert(22)
tree.insert(30)
tree.insert(40)
tree.insert(5)
console.log(JSON.stringify(tree));
console.log(tree.contains(5));


