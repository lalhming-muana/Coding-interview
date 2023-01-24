/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
*/


/*
A solve dan;

1. Subsequence (source) let target ah pointer pakhat ve ve kan initialize ang
2. Pointer hmangin a element kan compare ang
3. Hit a awm chuan a pointer 2 te kan increment anga 
4. Hit a awmloh chuan a target pointer kan increment ang.
5. Target pointer hi a case 2 ah hian kan increment ve ve dawn avangin
conditional statement ah dah kher a ngai lo.
6. A return dawn ah chuan  a source pointer hi a length aia a len leh len
loh i check ang. 
7. A length aia a tawi chuan a character zawng zawng kha a target
ah a awmlo tihna
8. A character zawng2 a target ah a awm chuan a pointer kha a tawp
thleng a kal anga, chuan a tawpah vawikhat a increment dawn a, chuvang chuan
a length aia a tam ang. 
*/


var isSubsequence = function(s, t) {
  let i =0; // a source pointer
  let j =0; // target pointer
  
  while(i<s.length && j<t.length){
      if(s[i] === t[j]) // source ami element target ah a hmu
          i+=1; // a source a next element check kan kan increment
   j+=1;// hei chu a hmuh pawn hmuh loh pawn increment tho tho a ngai
      
  }
  if(i === s.length) return true;
  else return false;
};
