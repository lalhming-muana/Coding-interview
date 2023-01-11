/**
 * Various ways of removing an element from an array
 *
 * 
 * 1. Using the splice method
 *    array.splice(a,b)  
 *    a= index to start deleting
 *    b= number of elements to delete  
 *  
 */

let array =[1,2,3,4,5,6,7];

array.splice(2,1);
console.log('USing splice '+ array);


/**
 * 2. Using the filter() method: This method creates a new array with all items that pass the test implemented by the provided function. To remove an item, you can create a function that returns true for items you want to keep, and false for the item you want to remove.
 * 
 */
let array1 =[1,2,3,4,5,6,7];

let arrfilter = array1.filter(item => item!=3);
console.log('using filter '+arrfilter);


/**
 * 3. Using the indexOf() and splice() method together: This method uses the indexOf() method to find the index of the item you want to remove, and then uses the splice() method to remove the item.

 * 
 */

let array2 =[1,2,3,4,5,6,7];

let index = array2.indexOf(3)
if(index>-1)
array2.splice(index,1);

console.log('Using indexOf and Splice '+array2);

/**
 * 
 * THe previous method changes the original array. TO keep a copy opf the original array
 * use slice
 * 
 */

let array3 =[1,2,3,4,5,6,7];
let copy = array3.slice();
array3.splice(2,1);
console.log('The original copy is: '+copy);
console.log('THe altered array is: '+array3); 
