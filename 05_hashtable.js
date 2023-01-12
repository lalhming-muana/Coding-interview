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