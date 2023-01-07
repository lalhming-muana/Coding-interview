
var s= [1,2,3.4,5]

// First method of looping - Display the value
// This method works for both string and array
for(var j of s){
    console.log(j);
}


//Second method - get the index of the array
// IMPORTANT this does not work for strings

for(const index of s.keys()){
    console.log(index)
}


// The third method - get the index and the value
// This deos not work on strings

for (const [index, value] of s.entries()) {
    console.log(index, value);
  }
