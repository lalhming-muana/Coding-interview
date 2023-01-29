
/*
Given an array of positive integers and a number move all occurences of that number to the end


eg array = [1,2,4,5,6,3,2]
number = 2

final array: [1,4,5,6,3,2,2] 


*/


function moveElementToEnd(array, toMove) {
    let end = array.length-1;
   array.sort((a,b)=> a-b);
   for(let i=0; i<array.length; i++)
   {
       
      if(array[i] === toMove){
          temp = array[i];
          array[i] = array[end];
          array[end] = temp;
          end--;
          
         
      }
      if( i>=end){break;}
     
      
   }
     return array;
     
   }