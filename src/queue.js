const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor () {
    this.start = null;
    this.end = null;
  }

  getUnderlyingList() {
    return this.start;
  }

  enqueue(value) {
    let list = new ListNode(value);
    if (this.start === null) {
      this.start = list;
    } else this.end.next = list;
    this.end = list;
  }

  dequeue() {
    let removeItem = this.start;
    if (this.start === this.end) this.end = null;
    this.start = this.start.next;
    return removeItem.value;
  }
}

module.exports = {
  Queue
};
