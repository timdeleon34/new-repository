
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

let result = countA( "TechGlobal is a QA bootcamp");
console.log("Number of A's :", result);

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
