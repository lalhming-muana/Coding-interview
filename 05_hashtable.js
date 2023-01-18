var s="abcdefsdfgfas"

let hashTable = {};

// TO enter the characters of the string into the hashtable

for(const value of s){
    if(!(value in hashTable))  hashTable[value] = 0;
    hashTable[value]++;
}

console.log(hashTable);

// Get the value of key= a  from the  hastable 
console.log(hashTable['a']);


// How to get the frist element from the hashTable
console.log('First element from hastable: '+Object.keys(hashTable)[0]+"\n\n");


// Iterate through the hashTable
for(let i=0; i <Object.keys(hashTable).length; i++){
    
    // the key 
console.log("Element of an array " +Object.keys(hashTable)[i]);
// the value;
console.log(hashTable[Object.keys(hashTable)[i]])
}


// store an array of three elements as the key

let nums = [-1,0,1,2,-1,-4,-2,-3,3,0,4]

let hash ={}

// notice in the hash below, there are two [[ signs. this makes sure it is stored as an array
// if you use only one it will all the elements.

  hash[[nums[3], nums[6],nums[1]]] =[nums[3], nums[6],nums[1]];
// Here nums element 3,6,1 are 2,-2,0 

hash[[nums[3], nums[6],nums[10]]] =[nums[3], nums[6],nums[10]];

hash[[nums[3], nums[6],nums[9]]] =[nums[3], nums[6],nums[9]];
// Here nums element 3,6,9 are 2,-2,0  it is same as the line 38 so it is not stored.
// we can use this to remove duplicates

/**
 * the  code will give an output
 * { '2,-2,0': [ 2, -2, 0 ], '2,-2,4': [ 2, -2, 4 ] }
 */



console.log(hash)