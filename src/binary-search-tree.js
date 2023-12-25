const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.rootNode) {
      this.rootNode = newNode;
    } else this.insertNode(this.rootNode, newNode);
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left) {
        node.left = newNode;
      } else this.insertNode(node.left, newNode);
    } else {
      if (!node.right) {
        node.right = newNode;
      } else this.insertNode(node.right, newNode);
    }
  }

  has(data) {
    return !!this.findNode(this.rootNode, data);
  }

  find(data) {
    return this.findNode(this.rootNode, data);
  }

  findNode(node, data) {
    if (!node) return null;
    if (data < node.data) {
      return this.findNode(node.left, data);
    } else if (data > node.data) {
      return this.findNode(node.right, data);
    } else return node;
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, data) {
    if (!node) return null;
    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (!node.left && !node.right) return null;
      if (!node.left) {
        return node.right;
      } else if (!node.right) return node.left;
      node.data = this.minNode(node.right);
      node.right = this.removeNode(node.right, node.data);
      return node;
    }
  }

  min() {
    return this.minNode(this.rootNode);
  }

  minNode(node) {
    if (!node) return null;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    return this.maxNode(this.rootNode);
  }

  maxNode(node) {
    if (!node) return null;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};