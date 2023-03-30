export class Node {
  constructor(data) {
    this.prev = null;
    this.data = data;
    this.next = null;
  }
  getPrev() {
    return this.prev;
  }
  getData() {
    return this.data;
  }
  getNext() {
    return this.next;
  }
  setPrev(prev) {
    this.prev = prev;
  }
  setData(data) {
    this.data = data;
  }
  setNext(next) {
    this.next = next;
  }
}
export class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  push(data) {
    let newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.setNext(newNode);
      newNode.setPrev(this.tail);
      this.tail = newNode;
    }
    this.size++;
  }
  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.size === 1) {
      this.head = null;
    } else {
      this.tail = poppedNode.getPrev();
      // this.tail.setNext(null);
      poppedNode.setPrev(null);
    }
    this.size--;
    return poppedNode.getData();
  }
  shift() {
    if (this.length === 0) return undefined;
    let shiftedNode = this.head;
    if (this.size == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      // this.head.setPrev(null);
      shiftedNode.setNext(null);
    }
    this.size--;
    return shiftedNode.getData();
  }
  unshift(data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.tail = newNode;
    } else {
      this.head.setPrev(newNode);
      newNode.setNext(this.head);
    }
    this.head = newNode;
    this.size++;
  }
  count() {
    let current = this.head;
    let count = 0;
    while (current != null) {
      count++;
      current = current.getNext();
    }
    return count;
  }
  delete(data) {
    let current = this.head;
    while (current != null) {
      if (current.getData() === data) {
        if (current.getNext() != null) {
          current.next.prev = current.prev;
        } else {
          this.tail = current.prev;
        }
        if (current.prev != null) {
          current.prev.next = current.next;
        } else {
          this.head = current.next;
        }
        break;
      }
      current = current.next;
    }
  }
  print() {
    let current = this.head;
    if (this.head === null) console.log("Empty");
    while (current != null) {
      console.log(`Data-> ${current.getData()}`);
      current = current.getNext();
    }
  }
}
const list = new DoublyLinkedList();
list.push(71);
list.push(83);
list.push(79);
list.delete(83);
console.log(list.count());
console.log(list.pop());
console.log(list.pop());
// expect(list.count()).toBe(2);
// expect(list.pop()).toBe(79);
// expect(list.pop()).toBe(71);