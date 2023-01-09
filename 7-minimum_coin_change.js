/*
Given an array of positive integers representing coins. Write a function to 
return the minimum amount of change that you cannot create

eg coins=[1,2,5]
answer is 4

*/



function nonConstructibleChange(coins) {
  
  coins.sort((a, b) => a - b);  // sort the coins in ascending order
  let maxCreatableChange = 0;
  for (const coin of coins) {
    if (coin > maxCreatableChange + 1) {
      // if the current coin is greater than the maximum creatable change + 1,
      // then the minimum uncreatable change is found
      return maxCreatableChange + 1;
    } else {
      // otherwise, update the maximum creatable change
      maxCreatableChange += coin;
    }
  }
 
  return maxCreatableChange+1;
}
