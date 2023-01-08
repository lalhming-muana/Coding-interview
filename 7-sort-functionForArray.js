
const coins = [5,7,1,1,2,3,22];

console.log(coins.sort());

/*
The code above will give the result [
  1, 1, 2, 22,
  3, 5, 7
]


We can solve this problem by using the 
code below.
*/



coins.sort((a,b)=>a-b);


console.log("Ascending order" +coins);


coins.sort((a,b)=> b-a)
console.log("Descending order" +coins);

/*
Explanation

The sort() method is a built-in JavaScript function that can be used to sort the elements of an array. By default, the sort() method sorts the elements of an array in lexicographic (alphabetical) order. However, you can pass a sorting function to the sort() method to specify a different sort order.

The sorting function used in the code you provided is (a, b) => a - b, which specifies that the elements should be sorted in ascending numerical order. The a and b parameters represent the elements being compared, and the function returns a negative value if a should come before b, a positive value if a should come after b, and 0 if a and b are equal.

For example, if the coins array is [5, 3, 1], the sort() method will call the sorting function with the following pairs of elements:

(5, 3): The function returns a positive value, so 5 comes after 3.
(3, 1): The function returns a positive value, so 3 comes after 1.
After these comparisons, the coins array will be sorted in ascending order as [1, 3, 5].


*/