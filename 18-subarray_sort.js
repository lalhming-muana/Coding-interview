/*
O(NlogN)

Given an integer array nums, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order.

Return the shortest such subarray and output its length.

 

Example 1:

Input: nums = [2,6,4,8,10,9,15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
Example 2:

Input: nums = [1,2,3,4]
Output: 0
Example 3:

Input: nums = [1]
Output: 0


A good approach would be to use two pointers to check the start and end of the 
sub array to sort
*/

var findUnsortedSubarray = function(nums) {

    let b =[...nums]
    b.sort((a,b)=>a-b);
    console.log(nums);
    console.log(b);
    
    let first = -1;
    let second = -1;
    
    if(nums.length ===1) return 0;
    
    for(let i=0;i<b.length;i++){
        
        if((b[i] != nums[i]) && first === -1 && second === -1)
        first =i;
        
        if(b[i] != nums[i] && first != -1){
            if (second <= i) second =i;
        }
        
    }
    
    if(first === -1 && second === -1)return 0;
    result=nums.slice(first,second+1)
    
    
    
    return result.length;
        
    };