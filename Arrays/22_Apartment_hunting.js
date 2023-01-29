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

console.log(blocks[1]["gym"])

/*


for(let i=0; i <Object.keys(blocks).length; i++){
    
console.log("Element of a hashtable " +Object.keys(blocks)[i]);
console.log(blocks[Object.keys(blocks)[i]])

    
}
*/