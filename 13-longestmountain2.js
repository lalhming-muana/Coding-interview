function longestPeak(array) {
    let up=0;
    let down=0;
    let result=0;
    
    for(let i=1;i<array.length;i++){
    //If the current element's height is the same as the previous element's height or if the current element is part of a downward slope, it resets the "up" and "down" variables to 0.
    if(array[i-1] === array[i] || down && array[i] > array[i-1]){
        up=0 ; down =0; 
    }
    
    //If the current element's height is greater than the previous element's height, it increments the "up" variable. //
    
    if(array[i]>array[i-1]){up+=1;}
    
    //If the current element's height is less than the previous element's height, it increments the "down" variable.
    
    if(array[i]<array[i-1]){down+=1}
    
    //Finally, if both "up" and "down" variables are greater than 0, it updates the "result" variable with the maximum value of the current mountain's length, which is the sum of "up" and "down" plus 1.
    if(up && down){
        result = Math.max(result, up+down+1)
    }
    }
      return result;
    }