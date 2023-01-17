
/**
 * this solution has an error.
 * 
 * https://leetcode.com/problems/merge-intervals/description/
 * 
 */




let intervals =[[1,4],[0,1]]

let result =[intervals[0]];


for(let i=1;i<intervals.length;i++){
    
    //there is an interval
    if(result[result.length-1][1] >= intervals[i][0]){
        
        // if second interval first element is less than result first element 
        if(result[result.length-1][0]>intervals[i][0]){
            result[result.length-1][0] =intervals[i][0];
        }
        
        if(result[result.length-1][1]<intervals[i][1]){
        result[result.length-1][1] = intervals[i][1];
        }
        continue;
    }
    else{
        result.push(intervals[i])
    }
} 



console.log(result)