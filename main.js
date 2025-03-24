import { Tree } from "./bst.js";
import { prettyPrint } from "./prettyPrint.js";

// Example with an array that short and already sorted
const simpleArray = [1, 2, 3, 4, 5, 6, 7];
const simpleTree = new Tree(simpleArray)

simpleTree.insert(9);
simpleTree.insert(10);

prettyPrint(simpleTree.root);


// Example with an array that has duplicates and is unsorted
const complexArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const complexTree = new Tree(complexArray);

complexTree.insert(2);
complexTree.insert(7453);
complexTree.insert(28);

prettyPrint(complexTree.root);

complexTree.deleteItem(23);

prettyPrint(complexTree.root);