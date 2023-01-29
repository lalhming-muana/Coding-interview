/*

https://leetcode.com/problems/move-zeroes/description/

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1

*/

var moveZeroes = function(nums) {
    let end = nums.length -1;
    
    let first =0 
    let second =1
    
    while(second<= end){
        if(nums[first] === 0 && nums[second] != 0){
            nums[first] = nums[second];
            nums[second] =0;
            
        }
        
        if(nums[first] === 0 && nums[second]===0){
            while(nums[second] ===0 && second!= end){ // consider case [0,0] i.e all remaining elements are zeroes
                second++;
            }
            nums[first] = nums[second];
            nums[second] =0;
            
            
        }
        first++;second++;
        
        
    }
    return nums;   
    };


