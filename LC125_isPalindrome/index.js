//DESCRIPTION:
/*Given a string, determine if it is a palindrome, condidering only alphanumeric characters and ignoring cases.
 
EXAMPLE 
Input : "A man, a plan, a canal: Panama"   --> True

Input: "race a car" --> False
*/

//Solution 1
//The problem with this solution is that it would get an 0(n) space complexity. 
//This is due to the .split(""), the longer the string the mores space it will take up when it is split into an array.

const s = 'abc'
s.split("");
s.split("").reverse();
s.split("").reverse().join(""); 
 
/*For a better solution instead of thinking of palindromes as words that read the same backwords, think of 
them as words where each half mirrors each other.This concept works with both even and odd letters.
To have the code checking for this mirroring, create a left and right pointer: The left pointer starts at the first 
index of the input string, and the right pointer starts at the last index of the input string.
Here the string remains intact and the charachters are just iterated over.

1. First sanitize the input string by removing non alphanumeric characters and lowercasing it.
2. Create a left and right pointer, initially at thestart and end of the input string.
3- While Left is less than Right, if characters at Left and Right are note equal, return false else true*/

function isPalindrome(s) {
    //Sanitize the input string, using regular exprssion(the square brackets indicate a capture group of non-alphanumeric characters, including underscores), replace with an empty string
    s = s.toLowerCase().replace(/[\W_]/g, "")
    let left = 0;
    let right = s.length -1;

    while(left < right){
        if(s[left] !== s[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}



module.exports = isPalindrome;

/* COMPLEXITY ANALYSIS for the longest palindrome

Time complexity: 0(n^2) since expanding a palindrome around its center could take up to 0(n), and we do this for each character
Space complexity: 0(1) */