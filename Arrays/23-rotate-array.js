/*https://leetcode.com/problems/rotate-array/description/


To add an element to the beginning of an array

let arr =[1,2,3,4,5]

arr.unshift(0) // adds 0 to the beginning

arr.pop() remove last element 

This code runs out of time. check why it is meaning check time complexity of pop and unshift

Similar question = https://leetcode.com/problems/rotate-list/

*/


/**
 * every element is shifted by 2 for example
 * 
 * that means 1 goes to index 2 i+2
 * 
 * 2 goes to index 3 i+2
 * 
 * 3 goes to index 4 i+2
 * 
 * BUT for  4  i+2 = 5 but if we use %5 we get 0 which is the correct position
 * 
 * for 5 i+2 = 6 and 6%5=1 which is the correct index 
 * 
 */

var rotate = function(nums, k) {
    let temp = Array(nums.length).fill(0);
    
    for(let i=0; i<nums.length; i++){
        let index = (i+k)%nums.length;
        
        temp[index] = nums[i]
        
    }
    
    for(let i=0; i<nums.length; i++){
        
        nums[i]= temp[i];
    }
        
    };