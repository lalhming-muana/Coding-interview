/**
 * 
 * Similar problem on leetcode
 * https://leetcode.com/problems/candy/
 * 
 * 
 * You have a non-sorted list of student test scores. You have to give them rewards based
 * on the following criteria
 * 
 * 1. All students must recieve at least one reward
 * 2. Any student must strictly recieve more reward than an adjacent student with a lower score
 *    and a student with a lower score must recieve less reward than an adjacent student with a
 *    higher score.    
 * 
 * Explanation of the solution: https://markeggensperger.medium.com/beating-algoexpert-min-rewards-93648a3880dd
 * 
 * This uses the idea of local max and local min
 * 
 */

function minRewards(scores) {
   
  
  let result=new Array(scores.length);
  let sum=0;
  
  // Initilize all elements to 1 because of condition 1.
  for(let i=0; i<scores.length; i++) result[i]=1;
  
  
  /**
   * go through the scores array starting at index 1 and and increase the corresponding index in the rewards array by one if the score to the left is lower.
   */
  for(let i=1; i<scores.length;i++){
      
      if(scores[i]> scores[i-1]){
          result[i]=1+result[i-1];
      }
      else{
          result[i]+=0;
      }
  }
  
  
  /**
   * go through the array backwards starting at one less than the last index and increase the corresponding index in the rewards array by one if the score to the right is lower.
   */

  for(let i=scores.length-1; i>=0;i--){
      if(scores[i]>scores[i+1]) {
          result[i]=arrayh.max(result[i], result[i+1]+1);
          
      }
      
  }
  
  result.forEach(x => {
          sum += x;
      });
  
    return sum
  
  }