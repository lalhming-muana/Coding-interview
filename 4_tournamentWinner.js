
/*
A tournament where the two competitors and results are stored in a separate array return the winniner

eg
let competitions=[
    ["HTML","C#"],
    ["C#","Python"],
    ["Python","HTML"],
    ];
let results=[0,0,1];

winner is Python


*/

function tournamentWinner(competitions, results) {
  
    let newMap = new Map();
    for(let i =0; i<results.length; i++){
      newMap.set(competitions[i][0],0); //initialize it to zero to make calculation easier
      newMap.set(competitions[i][1],
      0);
  } 
  
  
  for(let i =0; i<results.length; i++){
      if(results[i] === 0){
         newMap.set(competitions[i][0],newMap.get(competitions[i][0])+0);
         
         newMap.set(competitions[i][1],newMap.get(competitions[i][1])+1);
      }
      else{
          newMap.set(competitions[i][0],newMap.get(competitions[i][0])+1);
          
          newMap.set(competitions[i][1],newMap.get(competitions[i][1])+0);
      }
  }
  let maxValue =  Math.max(...newMap.values());
  
  let resultstring='';
  
  for (let [key, value] of newMap.entries()) {  // get key from a value;
      if (value === maxValue)
        resultstring = key;
    }
    return resultstring;
  }