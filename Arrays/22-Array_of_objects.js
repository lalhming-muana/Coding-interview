let blocks =[{
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


// To add an object at the first position, use Array.unshift.

let bl = {
    "gym": true,
    "school": true,
    "store": false,
  }
blocks.unshift(bl);

console.log(blocks[0])