/*

This one works but it is almost the same thing. Some conditions on the interval are 

different in the leetcode website

*/

function mergeOverlappingIntervals(array) {
    array.sort((a, b) => a[0] - b[0]); 
    let result =[array[0]];
  
  
  for(let i=1;i<array.length;i++){
      
      //there is an interval
      if(result[result.length-1][1] >= array[i][0]){
          
          // if second interval first element is less than result first element 
          if(result[result.length-1][0]>array[i][0]){
              result[result.length-1][0] =array[i][0];
          }
          
          if(result[result.length-1][1]<array[i][1]){
          result[result.length-1][1] = array[i][1];
          }
          continue;
      }
      else{
          result.push(array[i])
      }
  } 
  
  return result
  }
  