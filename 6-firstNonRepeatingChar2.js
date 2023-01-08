/*

Here we use a different approach By using the lastIndexOf() method
of string.

This is a good way to check for duplicates in a string.


*/



function firstNonRepeatingCharacter(string) {
    for (let i = 0; i < string.length; i++) {
      let char = string[i];
      if (string.indexOf(char) === string.lastIndexOf(char)) {
        return i;
      }
    }
     return -1;
  }