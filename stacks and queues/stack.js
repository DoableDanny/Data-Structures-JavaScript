class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Note: push and pop are technically unshift and shift as that's the most efficient way to insert/remove in singlyLinkedLists.
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let oldFirst = this.first;
      this.first = newNode;
      this.first.next = oldFirst;
    }

    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

let stack = new Stack();
stack.push('item 2');
stack.push('item 1');
stack.push('item 0');

stack.pop();
stack.pop();
console.log(stack);
