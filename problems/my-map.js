function myMap(inputArray, callback) {
  // Your code here
  let answerArr = [];
  for(let i = 0; i < inputArray.length;i++){
    let theCurrentSol = callback(inputArray[i]);
    answerArr.push(theCurrentSol);
  }
  return answerArr;
}

module.exports = myMap;

