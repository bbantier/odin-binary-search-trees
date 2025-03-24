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
