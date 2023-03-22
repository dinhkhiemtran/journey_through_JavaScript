class Node {
  /**
   * @param {any} value
   */
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
export class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(value) {
    let node = new Node(value);
    if (this.tail) {
      this.tail.next = node;
    }
    node.prev = this.tail;
    this.tail = node;
    if (++this.length === 1) {
      this.head = node;
    }
  }
  pop() {
    this.length--;
    let node = this.tail;
    this.tail = this.tail.prev;
    return node.value;
  }
  shift() {
    this.length--;
    let node = this.head;
    this.head = this.head.next;
    return node.value;
  }
  unshift(value) {
    let node = new Node(value);
    if (this.head) {
      this.head.prev = node;
    }
    node.next = this.head;
    this.head = node;
    if (++this.length === 1) {
      this.tail = node;
    }
  }
  delete(value) {
    let node = this.head;
    while (node !== null) {
      if (node.value === value) {
        if (node.prev) {
          node.prev.next = node.next;
        }
        if (node.next) {
          node.next.prev = node.prev;
        }
        this.length--;
        if (this.head === node) {
          this.head = node.next;
        }
        if (this.tail === node) {
          this.tail = node.prev;
        }
        break;
      } else {
        node = node.next;
      }
    }
  }
  count() {
    return this.length;
  }
}

