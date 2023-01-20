/*
Given an integer for examples
array = [1,11,3,0,15,5,2,4,10,7,12,6];

find the longest range of consecutive increasing intergers and return an array containting the start and end points

eg for the array above, the longest sequence is 0,1,2,3,4,5,6,7. All of these elements are 
contained in the original array.

so the answer should be [0,7]

similar questions to practice on leet-code

https://leetcode.com/problems/maximum-ascending-subarray-sum/

https://leetcode.com/problems/longest-increasing-subsequence/

https://leetcode.com/problems/number-of-longest-increasing-subsequence/

https://leetcode.com/problems/longest-continuous-increasing-subsequence/

https://leetcode.com/problems/longest-increasing-subsequence-ii/





*/


function largestRange(array) {
  
  let hashTable={};
  let interval = [-1,-1]
  let longestRange=0;
  

    // initialize the hashtable  
  for(let i=0;i<array.length;i++){
      
      let value=array[i];
      
      if(!(value in hashTable))  hashTable[value] = 'visited';
  
  }
  
  
  for(let i=0;i<array.length;i++){
      count=0;
      current = array[i] -1
      
      // Iterate backwards
     
     while(hashTable[current]){
         count++;
         current-=1;
     }
     
     if(count>=longestRange){
         longestRange = count;
         interval[0] = array[i]; 
        // Here we try to find the starting index for decreasing sequence
        // as we are going backwards. That is why it is array[i] and not
        // the index for the smaller number. We are just initializing the
        // starting index regardless of whether it is increasing or decreasing


         interval[1] = current+1;
     }
      
      count =0;
      current = array[i]+1
      
      
      //Interate forward
      while(hashTable[current]){
         count++;
         current+=1;
     }
     
     if(count>=longestRange){
         longestRange = count;
         interval[0] = array[i];
         interval[1] = current-1;
     }
     
     
      
  }
  
  // Here, the interval is sorted because, we have only included the start and end and not whether 
  // it is increasing or decreasing. But the answer should be given in increasing order.

  return interval.sort((a,b)=>a-b);
  }