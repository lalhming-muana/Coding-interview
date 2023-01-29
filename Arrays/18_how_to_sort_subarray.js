
// this will leave the first 3 elements intact
// ie 2, 1, 5

// take the 3 -5 elements and sort it

let arr = [2, 1, 5, 4, 3];
arr = [...arr.slice(0, 2), ...arr.slice(2).sort((a, b) => a - b)];

console.log(arr);

// output : [ 2, 1, 3, 4, 5 ]


// examples

let nums =[2,6,4,8,10,9,15]

let a= nums.slice(0,4).sort((a,b)=>a-b);
// slice off 4 elements (0,1,2,3)  starting from start =0 and end= 4 (not including 4 itself)

console.log(a)

let b = nums.slice(4).sort((a,b)=>a-b);
// slice from index starting at 4 till the end.

console.log(b)


// slice off first 4 elements and leave them as they are
// slice the next 2 elements and sort
//leave the last element

let d =[...nums.slice(0,4), ...nums.slice(4,6).sort((a,b)=>a-b), nums[6]];

console.log(d)
