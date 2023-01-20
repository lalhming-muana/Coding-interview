/**
 * 
 * 
 * This solution runs in O(N)
 * 
 * 
 */

var findUnsortedSubarray = function(nums) {

    let start =-1;
    let end =-1;
    let len = nums.length-1;
    let currentMax = nums[0]
    let currentMin = nums[len]
    
    // FInd the smallest number which is out of order
    for(let i=1; i<=len; i++){
       
        // If current number is bigger than the previous update currentMax
        currentMax = Math.max(currentMax, nums[i]);
        
        if (nums[i]<currentMax) end =i;
       
          
    }
    
    // Find the largest number out of order
    
    for(let i=len-1; i>=0;i --){
        
        // If current number is smaller than previous update currentMin
        
        currentMin = Math.min(currentMin, nums[i])
        
        if(nums[i] > currentMin) start =i;
    }
    if(start === -1 || end === -1) return 0;
    
    return Math.max(0,end - start +1);
        
    };