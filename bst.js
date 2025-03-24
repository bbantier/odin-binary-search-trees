class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export class Tree {
  constructor(arr) {
    this.root = buildTree(arr);
  }

  insert(value, node = this.root) {
    if (!node) return new Node(value);

    if (value < node.data) {
      node.left = this.insert(value, node.left);
    } else {
      node.right = this.insert(value, node.right);
    }

    return node;
  }

  deleteItem(value, node = this.root) {
    if (!node) return null;

    if (value < node.data) {
      node.left = this.deleteItem(value, node.left);
    } else if (value > node.data) {
      node.right = this.deleteItem(value, node.right);
    } else {
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      let minNode = node.right;
      while (minNode.left) minNode = minNode.left;
      node.data = minNode.data;
      node.right = this.deleteItem(value, node.right);
    }

    return node;
  }

  find(value, node = this.root) {
    if (!node) return null;

    if (node.data > value) {
      return this.find(value, node.left);
    } else if (node.data < value) {
      return this.find(value, node.right);
    } else {
      return node;
    }
  }
}

const buildTree = (arr) => {
  const array = cleanArray(arr);
  return arrayToBST(array, 0, array.length - 1);
};

const arrayToBST = (arr, start, end) => {
  if (start > end) return null;

  const mid = Math.floor((start + end) / 2);
  const root = new Node(arr[mid]);

  root.left = arrayToBST(arr, start, mid - 1);
  root.right = arrayToBST(arr, mid + 1, end);

  return root;
};

const cleanArray = (arr) => {
  return [...new Set(arr)].sort((a, b) => a - b);
};
