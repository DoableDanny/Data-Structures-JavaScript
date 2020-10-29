class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// We'll use push and shift. Much better than unshift and pop (requires traversal to 2nd to last element) for SinglyLinkedLists.
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeu() {
    if (!this.first) return null;
    let oldFirst = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = oldFirst.next;
    this.size--;
    return oldFirst.val;
  }
}

let q = new Queue();
q.enqueue('First');
q.enqueue('Second');

q.dequeu();
q.dequeu();

console.log(q);
