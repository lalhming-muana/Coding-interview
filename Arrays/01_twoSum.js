/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

link: https://leetcode.com/problems/two-sum/


*/

const twoSum = function(nums, target){
    
    const numsMap = {}; // create a hash_table
    
    for(let p=0; p<nums.length ; p++){
        let currentMapVal = numsMap[nums[p]]; //if there is an entry with a key numsMap[nums[p]]
        
        if(currentMapVal >=0) // if it is defined
            {   // the next four lines returns the answer in ascending order
                if (nums[currentMapVal]< nums[p])
                    return [nums[currentMapVal],nums[p]];
                else
                    return [nums[p],nums[currentMapVal]];
            }
        else{
            const numsTofind = target - nums[p]; // the value for the given key
            numsMap[numsTofind] = p; // add the key-value pair to the hash table
        }
    }
    
    return [];
}

/*
practice with hash_tables


const map = {
    1: 10,
    2: 9,
    3: 8
}

console.log(map[1]);
map[4]= 7; 

console.log(map[4]);

if(map[2]>=0) // search if there is a key value 2
 console.log("found number "+ map[2])


*/