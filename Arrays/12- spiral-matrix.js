
/**
 * https://leetcode.com/problems/spiral-array/description/
 * 
 * Given an m x n array, return all elements of the array in spiral order.
 * 
 *  Input: array = [[1,2,3],[4,5,6],[7,8,9]]
    Output: [1,2,3,6,9,8,7,4,5]



    Input: array = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
    Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 * 
 * 
 */

    function spiralTraverse(array) {


        let result = [];
        if (!array.length) return result;
        let rowBegin = 0;
        let rowEnd = array.length - 1;
        let colBegin = 0;
        let colEnd = array[0].length - 1;
        
        while (rowBegin <= rowEnd && colBegin <= colEnd) {
          // Traverse Right
          for (let i = colBegin; i <= colEnd; i++) {
            result.push(array[rowBegin][i]);
          }
          rowBegin++;
          // Traverse Down
          for (let i = rowBegin; i <= rowEnd; i++) {
            result.push(array[i][colEnd]);
          }
          colEnd--;
          // Traverse Left
          if (rowBegin <= rowEnd) {
            for (let i = colEnd; i >= colBegin; i--) {
              result.push(array[rowEnd][i]);
            }
          }
          rowEnd--;
          // Traverse Up
          if (colBegin <= colEnd) {
            for (let i = rowEnd; i >= rowBegin; i--) {
              result.push(array[i][colBegin]);
            }
          }
          colBegin++;
        }
        return result;
      }
      