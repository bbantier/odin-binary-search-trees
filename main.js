import { Tree } from "./bst.js";
import { prettyPrint } from "./prettyPrint.js";

const randomArray = Array.from(
  { length: Math.floor(Math.random() * (30 - 5 + 1)) + 5 },
  (v, i) => Math.floor(Math.random() * 100) + 1
);

const tree = new Tree(randomArray);

prettyPrint(tree.root);
console.log(`The tree is ${tree.isBalanced() ? "" : "not "}balanced.`);

console.log("# Level Order:");
tree.levelOrder((node) => console.log(node.data));

console.log("# Pre Order:");
tree.preOrder((node) => console.log(node.data));

console.log("# Post Order:");
tree.postOrder((node) => console.log(node.data));

console.log("# In Order:");
tree.inOrder((node) => console.log(node.data));

tree.insert(101);
tree.insert(102);
tree.insert(103);
tree.insert(104);
tree.insert(105);

prettyPrint(tree.root);
console.log(`The tree is ${tree.isBalanced() ? "" : "not "}balanced.`);

tree.rebalance();

prettyPrint(tree.root);
console.log(`The tree is ${tree.isBalanced() ? "" : "not "}balanced.`);

console.log("# Level Order:");
tree.levelOrder((node) => console.log(node.data));

console.log("# Pre Order:");
tree.preOrder((node) => console.log(node.data));

console.log("# Post Order:");
tree.postOrder((node) => console.log(node.data));

console.log("# In Order:");
tree.inOrder((node) => console.log(node.data));