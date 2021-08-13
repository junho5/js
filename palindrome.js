function isPalindrome(word) {
  result =null;
  for (let i = 0 ; i<word.length-1;i++){
    if(word[i]===word[word.length-1-i]){
      result = true;
    }else{
      result = false;
      break;
    }
  }
  return result;
}

// 테스트 코드
console.log(isPalindrome("racecar"));
console.log(isPalindrome("stars"));
console.log(isPalindrome("기러기"));
console.log(isPalindrome("123321"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("kayak"));