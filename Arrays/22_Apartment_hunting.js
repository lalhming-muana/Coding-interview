/**
 *  Similar leetcode problem.
 *  https://www.tutorialspoint.com/shortest-distance-from-all-buildings-in-cplusplus
 * 
 * 
 * 
 * 
 */

blocks =[{
    "gym": true,
    "school": false,
    "store": true,
},
{
    "gym": false,
    "school": false,
    "store": true,
},

{
    "gym": false,
    "school": true,
    "store": false,
}, ]

reqs =["gym","school","store"]



/*

Here we have an array of objects, we first need to learn how to work with arrays of objects

https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/
    
}
*/

/*

let blocks = [
  {
    "gym": false,
    "office": true,
    "school": true,
    "store": false
  },
  {
    "gym": true,
    "office": false,
    "school": false,
    "store": false
  },
  {
    "gym": true,
    "office": false,
    "school": true,
    "store": false
  },
  {
    "gym": false,
    "office": false,
    "school": true,
    "store": false
  },
  {
    "gym": false,
    "office": false,
    "school": true,
    "store": true
  }
]
let reqs= ["gym", "office", "school", "store"]
*/



function calculateDistance(a,b){
  let r = Math.abs(a-b);
  return r;
}

function walkForward(blocks, reqs, i){
let result =[] 
let lastLocation = Infinity;   
for(let j=0; j<blocks.length; j++){
    
    let distance;
    let currentBlock = blocks[j][reqs[i]];
   
    if(currentBlock){
        result[j] = 0;
        lastLocation=j
    }
    if(!currentBlock){
        distance = calculateDistance(j,lastLocation);
        result[j] =distance;
    }
    
}
lastLocation = Infinity;
for(let j=blocks.length-1; j>=0; j--){
    
    currentBlock = blocks[j][reqs[i]]
    
    if(currentBlock){
        lastLocation =j;
    }
    
    if(!currentBlock){
        if(lastLocation != Infinity){
            distance = calculateDistance(j,lastLocation);
            result[j] =Math.min(result[j],distance);
        }
        
        if(lastLocation === Infinity) {
           continue;}
    }
}

return result
} 

function apartmentHunting(blocks, reqs) {
// Write your code here.

let temp=[];
for(let i=0; i<reqs.length; i++){
  let temp1 = walkForward(blocks, reqs,i)
  temp.push(temp1);
}

// find the index of the best apartment

let bestIndex;
let bestDistance = Infinity;

for(let i=0;i<temp[0].length; i++){
  let localBiggest=0;
  for(let j=0; j< temp.length; j++){
      if(temp[j][i] > localBiggest ){
          localBiggest =temp[j][i];
      }
      
  }
  
  if(bestDistance > localBiggest){
      bestDistance = localBiggest;
      bestIndex =i;
  }
  
}

return bestIndex;
}
