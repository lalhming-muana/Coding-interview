/*
Given an array of positive intergers and an integer containing a target sum,
find three numbers that add up to the sum

array=[12,3,1,2,-6,5,-8,6];
targetSum=0

answer is:

[ -8, 2, 6 ]
[ -8, 3, 5 ]
[ -6, 1, 5 ]

This is a brute force method of solving it 

*/


function threeNumberSum(array, targetSum) {
  
    let triplets=[];
   
   for (let i = 0; i < array.length - 2; i++) {
       for (let j = i + 1; j < array.length - 1; j++) {
         for (let k = j + 1; k < array.length; k++) {
           if (array[i] + array[j] + array[k] === targetSum) {
             triplets.push([array[i], array[j], array[k]]);
           }
         }
       }
     }
     return triplets;
   }