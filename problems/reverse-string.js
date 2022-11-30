module.exports = function reverseString(string) {
  // Your code here
  let stringArr = string.split('');
  let answerArr = [];
  for(let i = stringArr.length; i >= 0; i--){
    answerArr.push(stringArr[i]);
  }
  return answerArr.join('');
};