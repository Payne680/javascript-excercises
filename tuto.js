//To sort words in alphabetic order
 //const string = 'Am enjoying coding';
 //const words = string.split(' ');

 //words.sort();

 //console.log('The sorted words are:');

 //for (const element of words) {
  // console.log(element);
//}



// program to replace a character of a string

// const string = 'Mr Green has a green boat and a red Toyota pickup';

// const word = string.replace('green', 'blue');

// console.log(word);



// program to reverse a string

function reverseString(str) {

  const arrayStrings = str.split("");

  const reverseArray = arrayStrings.reverse();

  const joinArray = reverseArray.join("");
  
  return joinArray;
}

const string = 'Malone';

const result = reverseString(string);
console.log(result);