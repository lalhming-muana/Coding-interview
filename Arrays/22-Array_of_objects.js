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


// Add a new object at the end of the array, use array.push

let car ={
    "gym": true,
    "school": true,
    "store": true,
}
blocks.push(car);

console.log(blocks[-1]);


/* Add a new object in the middle, array.splice. we can also remove items

Array.splice(
  {index where to start},
  {how many items to remove},
  {items to add}
);

to add to the third element we use
*/

let middle ={
    "gym": true,
    "school": false,
    "store": false,
}
blocks.splice(3,0,middle);

console.log(blocks[3])



// Find an object in an array by its values - Array.find

let temp = blocks.find(car => car.gym === true);

console.log('result',temp)




// find an object in array by using multiple values

let temp1 = blocks.find(car => car.gym === true && car.store === false);

console.log(' multiple result',temp1)



// find return one result, to use many use filter

let result = blocks.filter(block => block.gym === true)
console.log('result',result)



