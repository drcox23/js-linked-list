/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  let head = null;
  let tail = null;

  const getHead = () => {
    return head;
  };

  const getTail = () => {
    return tail;
  };

  const add = value => {
    let node = {
      value: value,
      next: null
    }; //need to create a node.

    if (!head && !tail) {
      // if there is no head or tail, then there is no node.
      head = node;
      tail = node;
      return tail;
    } else {
      tail.next = node;
      tail = tail.next;
      // console.log("tail: ", tail);
      // console.log("head: ", head);
      // console.log("tailNext: ", tail.next);

      return tail;
    }
  };

  // console.log("tail: ", tail);

  const get = number => {
    let thisNode = head;
    let count = 0;
    if (number < 0 || !head) {
      return false;
    } else if (number === 0) {
      return head;
    } else {
      while (count < number) {
        if (thisNode.next !== null) {
          count++;
          // console.log("get: ", thisNode);
          thisNode = thisNode.next;
        } else {
          return false;
        }
      }
      return thisNode;
    }
  };

  const remove = number => {
    let prevNode = get(number - 1);
    let currentNode = get(number);

    if (number < 0 || !head || !currentNode) {
      return false;

      // what happens when there is no prev node
    } else if (!prevNode) {
      head = head.next;

      // what happens when theres no next node.
    } else if (!currentNode.next) {
      tail = prevNode;
      tail.next = null;

      // remove the node
    } else {
      prevNode.next = currentNode.next; //changing the previous node to link to the node after current.
    }
  };

  const insert = (value, number) => {
    // console.log("8");
    let insertNode = {
      value: value,
      next: null
    };
    let previousNode = get(number - 1);
    let currentNode = get(number);

    if (!currentNode) {
      return false;
      // } else if (!currentNode.next) {
      //   tail.next = insertNode;
      //   console.log("newtail: ", tail);
      //   console.log("insert1: ", insertNode);
    } else if (!previousNode) {
      console.log("previous: ", previousNode);
      insertNode.next = head;
      head = insertNode;
      console.log("insert**: ", insertNode);
    } else {
      console.log(previousNode.next);
      previousNode.next = insertNode;
      insertNode.next = currentNode;
      console.log("insert: ", insertNode);
    }
  };

  return {
    getHead,
    getTail,
    add,
    get,
    remove,
    insert
  };
}
