
/*


Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]

Here you need to know that in javascript the sort function is meant for characters not numbers.
So the correct way of using the sort for numbers is

array.sort(function(a,b) {return a-b});;


*/




function sortedSquaredArray(array) {
    // Write your code here.
  array.sort( function(a,b) { return a - b; } ); // sort like this for numbers.
  
  let result=[];
  
  for(let i=0; i<array.length; i++){
  result[i]=array[i]*array[i];    
  }
    result.sort( function(a,b) { return a - b; } );
    return result;
  }