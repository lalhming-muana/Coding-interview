/**
 * THis is another version for the same question
 *  
 * 
 * Time complexity = O(N)
 * Space complexity = O(1)
 * 
 * 
 */

function moveElementToEnd(array, toMove) {
    // Write your code here.
 let length = array.length -1;
 let j =length;
 let i =0;
  
  while(i<j){
          
      while(i< j && array[j]=== toMove) j--;
              
      if(array[i] === toMove){
          let temp = array[j];
          array[j] =toMove;
          array[i] = temp;
          
       
      }
     i++;   
      
  }
    return array;
  }