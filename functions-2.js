/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

maxOfTwoNumbers = (x, y) => {
  if (x > y) {
    return x;
  } else if (y > x) {
    return y;
  } else { return 'There is no maximum' }
};

console.log(maxOfTwoNumbers(8, 9));

// maxOfThree();

/*
2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/
let maxOfThree = (x, y, z) => {
  if (x > y && x > z) {
    return x;
  } else if (y > x && y > z) {
    return y;
  } else if (z > x && z > y) {
    return z;
  } else {
    return 'There is no a maximum, all equal'
  }
};

//   console.log(maxOfThree(3, 3, 3));

/* 3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
   */
isCharacterAVowel = () => {
  // ADD YOUR CODE HERE
  if (x.toLowerCase() === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') {
    return `${x} is a vowel`;
  } else {
    return `${x} is a consonant`;
  }
};

/*
4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/

sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum;
};

/*
5.Write a function that returns the number of arguments passed to the function when called.
*/

//rest parameters
numOfArgs = (...args) => {
  return args.length
}

/*
6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

reverseString = (str) => {
  let newString = ''
  for (i = str.length - 1; i >= 0; i--)
    newString += str[i]
  return newString
};

/*
7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
*/
findLongestWord = (arr) => {
  let longestWord = '';
  for (let i = 0; i < arr.length; i++) {
    if (longestWord.length < arr[i].length) {
      longestWord = arr[i];
    }
  }
  console.log(longestWord.length);
};


// findLongestWord(['yo', 'cheese', 'dragonborne'])

/*
8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
*/
filterLongWords = (arr, num) => {
  let longWords = []
  for (let x = 0; x < arr.length; x++) {
    if (arr[x].length > num) {
      longWords.push(arr[x])
    }
  }
  return longWords
};