@ts-check
console.log("\n Task 1")
function countPos(arr){
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 ) {
            count++;
        }
    }
    return count; 
}

let arr = [-45,0,0,34,5,67];
let result = countPos(arr);

console.log( `$[arr} => ${result}`);

    console.log("\n Task 2")
function countA(strA) {

let count = 0;

for (let i = 0; i < strA.length; i++){
    if(strA[i].toLowerCase() === 'a') {
        count++;
    } 
    }       
    return count;
}

let resultCountA = countA( "TechGlobal is a QA bootcamp");
console.log("Number of A's :", resultCountA);

console.log("\n Task 3")
function countVowels(strVows) {

let count = 0;
let vowels = ['A','E','O','U','I','a','e','o','u','i'];
for (let i = 0; i < strVows.length; i++){
    if(vowels.includes(strVows[i].toLowerCase())) {
        count++;
    } 
    }       
    return count;
}

let resultVows = countVowels( "Hello World");
console.log("Number of Vowel's :", resultVows);

console.log("\n Task 4")

function countConsonants(strConst) {
  let count = 0;
  const vowels = ['A','E','O','U','I','a','e','o','u','i'];

  for (let i = 0; i < strConst.length; i++) {
    let charConst = strConst[i].toLowerCase();
    if (/[a-z]/.test(charConst) && !vowels.includes(charConst)) {
      count++;
    }
  }

  return count;
}


let resultConst = countConsonants("Hello");
console.log("Number of consonants:", resultConst);

console.log("\n Task 5")
function countWords(strCountWords) {
  return strCountWords.trim().split(/\s+/).length;
}

let sentence = "   Hello   world,   this is   JavaScript!   ";
let wordCount = countWords(sentence);

console.log("Number of words:", wordCount);

console.log('\nTask 6');
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5)); 

console.log('\nTask 7')
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

console.log(isPalindrome("Racecar"));

console.log('\nTask 8')
function countMultipleWords(str) {
 
  const words = str.trim().split(/\s+/);
  return str.trim() === "" ? 0 : words.length;
}


console.log(countMultipleWords("Hello world"));         


console.log('\nTask 10')
function isPrime(n){
 if(n <= 1) {
  return false;
 } else if (n === 2) {
  return true;
 } else if (n % 2 === 0) {
  return false;
 }

 const sqrt = Math.sqrt(n);
  for (let i = 3; i <= sqrt; i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}

console.log(isPrime(1)); 

console.log('\nTask 12')
function removeExtraSpaces(str) {
  return str.trim().replace(/\s+/g, ' ');
}
const strExWord = ("   JavaScript is      fun")
console.log(removeExtraSpaces(strExWord));

console.log('\nTask 13')
function closestTo10(numbers) {
  return numbers.reduce((closest, current) => {
    if (current === 10) {
      return closest;
    } 
    if (closest === 10) {
      return current;
    } 
    return Math.abs(current - 10) < Math.abs(closest - 10) ? current : closest;
  });
}
const arr10 = [10, -13,5,70,15,57];
console.log(closestTo10(arr10)); 

console.log('\nTask 14')
function isEmailValid(email) {
  const regex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  return regex.test(email);
}
console.log(isEmailValid(" @gmail.com "));

console.log('\nTask 15')
function isPasswordValid(password) {
  const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  return regexPass.test(password);
}

console.log(isPasswordValid("Passw0rd!")); 