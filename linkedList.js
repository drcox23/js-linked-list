/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  let head = null;
  let tail = null;

  getHead = () => {
    return head;
  };

  getTail = () => {
    return tail;
  };

  add = value => {
    let newNode = {
      value: value,
      next: null,
      previous: null
    };

    if (!head && !tail) {
      head = newNode;
      tail = newNode;
      return tail;
    } else {
      newNode.previous = tail.value;
      tail.next = newNode;
      tail = tail.next;
      // console.log("tail: ", tail);
      return tail;
    }
  };

  get = number => {
    let thisNode = head;
    let count = 0;

    if (!head || number < 0) {
      return false;
    } else if (thisNode.next === null) {
      return head;
    } else {
      while (count < number) {
        if (thisNode.next !== null) {
          count++;
          thisNode = thisNode.next;
        } else {
          return false;
        }
      }
    }
    return thisNode;
  };

  remove = number => {
    let previousNode = get(number - 1);
    let currentNode = get(number);

    // console.log("prev: ", previousNode);
    // console.log("current: ", currentNode);

    if (number < 0 || !head || !currentNode) {
      return false;
    } else if (!previousNode) {
      head = head.next;
    } else if (!currentNode.next) {
      tail = previousNode;
      tail.next = null;
    } else {
      console.log("***", previousNode);
      console.log("current: ", currentNode);
      console.log("next: ", currentNode.next);
      previousNode.next = currentNode.next;
      currentNode.next.next = previousNode;
      console.log("newPrev: ", previousNode);
    }
  };

  insert = (value, number) => {};

  return {
    getHead,
    getTail,
    add,
    get,
    remove,
    insert
  };
}
