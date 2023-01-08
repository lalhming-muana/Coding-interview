/*
https://leetcode.com/problems/first-unique-character-in-a-string/

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1

*/

function firstNonRepeatingCharacter(string) {
    const hashtable ={}
    
    for(const value of string ){
        if(!(value in hashtable)) hashtable[value]=0;
        hashtable[value]++;
    }
    
    for(let index=0; index< string.length; index++){
        const character = string[index];
        if(hashtable[character]===1) return index;
    }
      return -1;
    }

