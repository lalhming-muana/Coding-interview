/**
 * https://leetcode.com/problems/diagonal-traverse/
 * 
 * Given an m x n arrayrix array, return an array of all the elements of the array in a diagonal order.
 * 
 
Input: array = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,4,7,5,3,6,8,9]
Example 2:

Input: array = [[1,2],[3,4]]
Output: [1,2,3,4]
 

Constraints:

m == array.length
n == array[i].length
1 <= m, n <= 104
1 <= m * n <= 104
-105 <= array[i][j] <= 105

OR another version is. start at the top left corner . Go down one element and proceed in a zig zag fashion

* 
*/

function zigzagTraverse(array) {
    // Write your code here.
  let result =[];
  
  let row=1;
  let col=0;
  let total = array[0].length*array.length;
  let lastToplement = array[0].length -1;
  let lastBottomElement = array.length -1;
  let count =1;
  if(array.length === 1 || array[0].length ===1) {
    for (let i = 0; i < array.length; i++) {
   
          // Printing all elements in ith 1-D array
          for (let j = 0; j < array[0].length; j++) {
   
              // Printing jth element of ith row
             result.push(array[i][j])
          }
          
      }
    return result;
  }
  
  
  result.push(array[0][0]);
  
  
  
  while(count<= total){
      
      // go up
      
      
      // did you hit the top row - move right
      while(row >= 0){
      
      
      if(row === 0 && col === lastToplement){
          // move down
          result.push(array[row][col]);count++;
          col = lastToplement;
          row = row+1;
          result.push(array[row][col]);count++;
          break;
      }
      
      
      if(row === 0){
          
          result.push(array[row][col]);count++;
          col++;
          result.push(array[row][col]);count++;
          break;
      }
      
      // did you hit the last element from the top row - move down
      if( col === lastToplement){
          // move down
          result.push(array[row][col]);count++;
          row = row+1;
          result.push(array[row][col]);count++;
          break;
      }
      
    
      result.push(array[row][col]);count++;
      row --; col++
      
      }
      //go down
      
      
      row++; col--;
      
      
      
      if(count === total) break;
      
      while(col>=0){
      
      
      //  you hit the last element of first column - move right
      if(col ===0 && row === lastBottomElement){
          result.push(array[row][col]);count++;
          col=col+1;
          result.push(array[row][col]);count++;
          break;
      }
      
      // you hit the first column - go down
      if(col === 0){
          
          result.push(array[row][col]);count++;
          row++;
          result.push(array[row][col]);count++;
          break;
      }
      
      
      // you hit last row - move right
      if( row ===lastBottomElement ){
          result.push(array[row][col]);count++;
          col++;
          result.push(array[row][col]);count++;
          break;
      }
      
      
      result.push(array[row][col]);count++;
      row++;
      col--;
      }
      
      
      //reset the variable;
      row--;col++;
    if(count === total) break;
      
      
  }
    return result;
  
  }