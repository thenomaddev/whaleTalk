//JS Beginner Project- Whale Talk
//converts your words into whale language

let input = 'turtles love lettuce leaves';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === 'e' || input[i] === 'u'){
    resultArray.push(input[i]);
  }
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(vowels[j]);
    }
  }
}

let resultString = resultArray.join('').toUpperCase();
console.log(resultString);