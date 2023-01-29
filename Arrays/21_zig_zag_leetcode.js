var findDiagonalOrder = function(mat) {
    let result =[];
  
  let row=1;
  let col=0;
  let total = mat[0].length*mat.length;
  let lastToplement = mat[0].length -1;
  let lastBottomElement = mat.length -1;
  let count =2;
  if(mat.length === 1 || mat[0].length ===1) {
    for (let i = 0; i < mat.length; i++) {
   
          // Printing all elements in ith 1-D array
          for (let j = 0; j < mat[0].length; j++) {
   
              // Printing jth element of ith row
             result.push(mat[i][j])
          }
          
      }
    return result;
  }
  
  
  result.push(mat[0][0]);
  result.push(mat[0][1]);
  
  
  
  while(count<= total){
       while(col>=0){
      
      
      //  you hit the last element of first column - move right
      if(col ===0 && row === lastBottomElement){
          result.push(mat[row][col]);count++;
          col=col+1;
          result.push(mat[row][col]);count++;
          break;
      }
      
      // you hit the first column - go down
      if(col === 0){
          
          result.push(mat[row][col]);count++;
          row++;
          result.push(mat[row][col]);count++;
          break;
      }
      
      
      // you hit last row - move right
      if( row ===lastBottomElement ){
          result.push(mat[row][col]);count++;
          col++;
          result.push(mat[row][col]);count++;
          break;
      }
      
      
      result.push(mat[row][col]);count++;
      row++;
      col--;
      }
      
      
      //reset the variable;
      row--;col++;
    if(count === total) break;
      
      // go up
      
      
      // did you hit the top row - move right
      while(row >= 0){
      
      
      if(row === 0 && col === lastToplement){
          // move down
          result.push(mat[row][col]);count++;
          col = lastToplement;
          row = row+1;
          result.push(mat[row][col]);count++;
          break;
      }
      
      
      if(row === 0){
          
          result.push(mat[row][col]);count++;
          col++;
          result.push(mat[row][col]);count++;
          break;
      }
      
      // did you hit the last element from the top row - move down
      if( col === lastToplement){
          // move down
          result.push(mat[row][col]);count++;
          row = row+1;
          result.push(mat[row][col]);count++;
          break;
      }
      
    
      result.push(mat[row][col]);count++;
      row --; col++
      
      }
      //go down
      
      
      row++; col--;
      
      
      if(count === total) break;
      
     
      
      
  }
    return result;
    
};