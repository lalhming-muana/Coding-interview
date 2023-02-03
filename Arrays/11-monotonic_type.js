
/*
https://leetcode.com/problems/count-hills-and-valleys-in-an-array/submissions/890595058/
*/



function checkHillOrValley(left,middle,right){
    let answer=false;
    if((middle>left) &&(middle>right)) answer = true;
    if((middle<left)&&(middle<right)) answer= true;
    
    return answer;
}

var countHillValley = function(nums) {
    let count =0;
    for(let i=1;i<=nums.length-2; i++){
    let leftPointer = i-1;
    let rightPointer =i+1;
    
    let left= -Infinity;
    let right= Infinity;

    if(nums[i] === nums[i-1]) continue;
    
    // go left find non equal number 
    while(leftPointer >=0 ){
        if((nums[leftPointer] > nums[i]) || (nums[leftPointer]<nums[i]))
        {
            left = nums[leftPointer];
            break;
        }
        leftPointer--;
    }
    
    //go right and find non equal number
    while(rightPointer <= nums.length-1 ){
        if((nums[rightPointer] > nums[i]) || (nums[rightPointer]<nums[i]))
        {
            right = nums[rightPointer];
            //console.log('right assigned ',right)
            break;
        }
        rightPointer++;}
        
        // write a function to check whether it is a hill or a valley
        
        if((left!=-Infinity) &&(right!=Infinity)){
            let result = checkHillOrValley(left, nums[i],right);
            if(result === true) count++;
        }
        
    }
    // write a function to check whether it is a hill or a valley
return count;
    
};