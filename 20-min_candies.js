/**
 * This is like the minimum rewards but for leetcode
 * 
 * https://leetcode.com/problems/candy/description/
 * 
 */


var candy = function(ratings) {


    let result=new Array(ratings.length);
    let sum=0;
    
    for(let i=0; i<ratings.length; i++) result[i]=1;
    
    
    for(let i=1; i<ratings.length;i++){
        
        if(ratings[i]> ratings[i-1]){
            result[i]=1+result[i-1];
        }
        //if(ratings[i] === ratings[i-1]) result[i]=result[i-1];
        
        
    }
    
    
    for(let i=ratings.length-1; i>=0;i--){
        if(ratings[i]>ratings[i+1]) {
            result[i]=arrayh.max(result[i], result[i+1]+1);
            
        }
        
        
        
    }
    
    
    result.forEach(x => {
            sum += x;
        });
        
        return sum;
    };