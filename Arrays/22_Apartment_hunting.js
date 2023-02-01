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



let i=0
let lastLocation = 0;   
    for(let j=0; j<blocks.length; j++){
        let count =0;
       
        let compare;
        let currentBlock = blocks[j][reqs[i]];
       // console.log('j=',j,' currentBlock=',currentBlock)
        if(currentBlock){
            gym[j] = count+0;
            lastLocation=j
        }
        if(!currentBlock){
            count++;
            compare = j - lastLocation;
            console.log('lastlocation',lastLocation,' j=',j,'compare',compare)
            gym[j] =Math.max(compare,count);
        }
        
    }
    
    


console.log(gym)