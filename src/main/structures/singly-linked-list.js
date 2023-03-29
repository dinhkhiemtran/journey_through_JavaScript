// https://www.raulmelo.dev/en/blog/data-structure-with-javascript-linked-list
export class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
  getData() {
    return this.data;
  }
  getNext() {
    return this.next;
  }
  setData(data) {
    this.data = data;
  }
  setNext(next) {
    this.next = next;
  }
}
export class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  indexOf(data) {
    let nodeIndex = 0;
    let currentNode = this.head;
    while (currentNode) {
      if (data === currentNode.getData()) {
        return nodeIndex;
      }
      nodeIndex++;
      currentNode = currentNode.getNext();
    }
    return -1;
  }
  add(data) {
    const newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.getNext() != null) {
        current = current.getNext();
      }
      current.setNext(newNode);
    }
    this.size++;
  }
  insertAt(data, index) {
    let newNode = new Node(data);
    let isPositionInTheRange = index > -1 && index <= this.size;
    if (!isPositionInTheRange) return false;
    let current = this.head;
    let isHeadPos = index === 0;
    if (isHeadPos) {
      newNode.setNext(current);
      this.head = newNode;
    } else {
      let previousNode = null;
      let indexPrev = 0;
      while (indexPrev++ < index) {
        previousNode = current;
        current = current.getNext();
      }
      previousNode.setNext(newNode);
      newNode.setNext(current);
    }
  }
  removeAt(position) {
    const isPositionInTheRange = position > -1 && position <= this.size;
    if (!isPositionInTheRange) {
      return null;
    }
    let currentNode = this.head;
    if (position === 0) {
      this.head = currentNode.getNext();
    } else {
      let index = 0;
      let previousNode = null;
      while (index++ < position) {
        previousNode = currentNode;
        currentNode = currentNode.getNext();
      }
      previousNode.setNext(currentNode.getNext());
    }
    this.size--;
    return currentNode.getData();
  }
  size() {
    let count = 0;
    let current = this.head;
    while (current != null) {
      count++;
      current = current.getNext();
    }
    return count;
  }
  clear() {
    this.head = null;
  }
  getLast() {
    let current = this.head;
    if (current) {
      while (current.getNext()) {
        current = current.getNext();
      }
    }
    return current;
  }
  print() {
    let current = this.head;
    if (this.head === null) return "Empty";
    while (current != null) {
      console.log(current,getData() + ",");
      current = current.getNext();
    }
  }
  remove(element) {
    const elementIndex = indexOf(element);
    return removeAt(elementIndex);
  }

  toString() {
    let result = "";
    let current = this.head;

    while (current) {
      result += `${current.data}${current.next ? ", " : ""}`;
      current = current.next;
    }

    return result;
  }
}
const list = new SinglyLinkedList();
list.add(1);
list.add(2);
list.add(4);
list.insertAt(3, 2);
list.removeAt(3);
console.log("Last" + JSON.stringify(list.getLast()));
console.log(list.indexOf(1));
list.print();
