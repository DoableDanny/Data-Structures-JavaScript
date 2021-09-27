class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (val === current.val) return undefined;
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(val) {
    if (!this.root) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  // Breadth-first Search
  BFS() {
    let node = this.root,
      data = [],
      queue = [];

    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  // Depth-first Search - PreOrder
  DFSPreorder() {
    let data = [];

    // recursive helper function
    function traverse(node) {
      data.push(node.val);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return data;
  }

  DFSPostOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      data.push(node.val);
    }

    traverse(this.root);

    return data;
  }

  DFSInOrder() {
    let data = [];

    function traverse(node) {
      node.left && traverse(node.left);
      data.push(node.val);
      node.right && traverse(node.right);
    }

    traverse(this.root);
    return data;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(15);
tree.insert(8);
tree.insert(20);
//       10
//     6   15
//   3  8    20

console.log(tree.BFS()); // [10, 6, 15, 3, 8, 20]
console.log(tree.DFSPreorder()); // [10, 6, 3, 8, 15, 20]
console.log(tree.DFSPostOrder()); // [3, 8, 6, 20, 15, 10]
console.log(tree.DFSInOrder()); // [3, 6, 8, 10, 15, 20]
