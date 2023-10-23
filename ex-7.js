function isPalindrome(string) {
  // Start coding here
  const char = string.split('');
  const reverseChar=char.reverse();
  const reverseString=reverseChar.join('');
  if(reverseString===string){
    return true
  }else{
    return false
  }
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false