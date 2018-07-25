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
      tail.next = newNode;
      newNode.previous = tail.value;
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

  remove = number => {};

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
