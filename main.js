import { Tree } from "./bst.js";
import { prettyPrint } from "./prettyPrint.js";

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(array);

tree.insert(2);
tree.insert(7453);
tree.insert(28);

tree.deleteItem(23);

prettyPrint(tree.root);