/**

FOR THIS THE SOLUTION IS INTUITIVE BUT TIME LIMIT EXCEEDED


https://leetcode.com/problems/longest-mountain-in-array/


You may recall that an array arr is a mountain array if and only if:

arr.length >= 3
There exists some index i (0-indexed) with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
Given an integer array arr, return the length of the longest subarray, which is a mountain. Return 0 if there is no mountain subarray.

 

Example 1:

Input: arr = [2,1,4,7,3,2,5]
Output: 5
Explanation: The largest mountain is [1,4,7,3,2] which has length 5.
Example 2:

Input: arr = [2,2,2]
Output: 0
Explanation: There is no mountain.
 

Constraints:

1 <= arr.length <= 104
0 <= arr[i] <= 104

*/

var longestMountain = function(arr) {
    let n = arr.length-1;
    let count =1;
    let ans = 0;
    let i=1;
    while(i<n){
        
        let count=1;
        
        //if it starts to go down we dont want it
        if(arr[i]<arr[i-1]) {
            i++;
            continue;}
        // go up
        while(i<n && arr[i]>arr[i-1]){
            i++;count++;}
        
        
        // if there are equal values we dont have a peak
        if(i>=n || arr[i] === arr[i-1]) {continue; i++;}
        // go down
        
        while(i<n && arr[i]<arr[i-1]){
            count++; i++;
        }
        
        ans= Math.max(ans,count);
    }
    return ans;
        
    };