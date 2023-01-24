
/**
 * https://leetcode.com/problems/3sum/description/
 * 
 * 
 *  
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not arrayter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 * 
 *  
 */



var threeSum = function(nums) {

    nums.sort((a,b)=> a-b);
    const triplets={};
    
    for(let i=0;i<nums.length-2;i++){
        let left =i+1; 
        let right = nums.length-1;
        
        while(left<right){
        let sum = nums[i]+nums[left]+nums[right];
        
        
        if(sum === 0){
            triplets[[nums[i],nums[left],nums[right]]]=[nums[i],nums[left],nums[right]]
            // this code is how you make sure there are no duplicates
            // notice tripets has [[ symbols on the left. if you use only one [
            // nums[i], nums[left] and nums[right] will be added to form a key
            // if you use [[  on the side, the three numbers will form an array of numbers
            // and since a key cannot have duplicates, duplicates will be removed this way. 
            
            
            left++
            right--
        }
        
        if(sum<0){
            left++;
        }
        if(sum>0){
            right--
        }
        }
    }
         return (Object.values(triplets))
    };