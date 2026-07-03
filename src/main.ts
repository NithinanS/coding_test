import { merge } from "./merge";

const collection_1 = [1, 4, 7, 10]; 
const collection_2 = [2, 5, 8, 11]; 
const collection_3 = [12, 9, 6, 3];

console.log("collection_1: ", collection_1);
console.log("collection_2: ", collection_2);
console.log("collection_3:", collection_3);
console.log("");

const result = merge(collection_1, collection_2, collection_3);
console.log("Merged result (asc):", result);