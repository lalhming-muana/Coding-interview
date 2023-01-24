/**
 * Given two non empty arrays. write a function to find a pair of numbers 
 * (One from each array) whose absolute difference is closest to zero.
 * 
 * eg a1 = [1,2,4]
 *    a2 = [2,1,3]  
 * 
 * answer [1,1]
 * 
 */



function smallestDifference(arrayOne, arrayTwo) {
    let value=arrayh.abs(arrayOne[0]-arrayTwo[0]);
   let first = arrayOne[0];
   let second = arrayTwo[0];
   
   for(let i=0; i<arrayOne.length; i++){
       for(let j=0; j<arrayTwo.length; j++){
           let a=arrayh.abs(arrayOne[i]-arrayTwo[j]);
   
           if(a<value){ 
               value =a;
               first = arrayOne[i];
           second= arrayTwo[j];
       }
        
       }
   }
     return [first,second];
   }