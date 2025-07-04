console.log(`<--Task 1-->`);
"\n"

let str1 = 5;
let str2 = 2;

 console.log(`The sum of ${str1} and ${str2} is = ${str1 + str2}`);
 console.log(`The product of ${str1} and ${str2} is = ${str1 * str2}`);
 console.log(`The division of ${str1} and ${str2} is = ${str1 / str2}`);
 console.log(`The subtraction of ${str1} and ${str2} is = ${str1 - str2}`);
 console.log(`The remainder of ${str1} and ${str2} = ${str1 % str2}`);
 console.log(`The exponentiation of ${str1} and ${str2} is = ${str1 ** str2}`);

console.log(`\n <--Task 2-->`);
let s1 = 200;
let s2 = -50;

console.log (`\nThe greatest values is = ${Math.max(s1, s2)}`);
console.log (`The lowest values is = ${Math.min(s1, s2)}`);
console.log(`The average is = ${(s1 + s2)/2}`);
console.log(`The absolute difference is = ${Math.abs(s1 - s2)}`);

/*Task 3 */

console.log(`\n <--Task 3-->`);
let start = 0;
let end = 50;

let num1 = Math.floor(Math.random() *(end + start -1)) + start;
let num2 = Math.floor(Math.random() *(end + start -1)) + start;

console.log(`The absolute difference between numbers is = ${Math.abs(num1 - num2)}`);

/*Task 4*/
console.log(`\n <--Task 4-->`);
let startNum = 0;
let endNum = 50;

let rand1 = Math.floor(Math.random() *(endNum + startNum -1)) + startNum;
let rand2 = Math.floor(Math.random() *(endNum + startNum-1)) + startNum;
let rand3 = Math.floor(Math.random() *(endNum + startNum-1)) + startNum;
let rand4 = Math.floor(Math.random() *(endNum + startNum-1)) + startNum;
let rand5 = Math.floor(Math.random() *(endNum + startNum-1)) + startNum;


console.log(`The max value = ${Math.max(rand1, rand2, rand3, rand4,rand5)}`);
console.log(`The min value = ${Math.min(rand1, rand2, rand3, rand4,rand5)}`);

/*task 5*/

console.log(`\n <--Task 5-->`);
let startNum3 = 50;
let endNum3 = 100;

let number1 = Math.floor(Math.random() * (endNum3 + startNum3 - 1)) + startNum3;
let number2 = Math.floor(Math.random() * (endNum3 + startNum3 - 1)) + startNum3;
let number3 = Math.floor(Math.random() * (endNum3 + startNum3 - 1)) + startNum3;

console.log(`The number 1 is ${number1}`);
console.log(`The number 2 is ${number2}`);
console.log(`The number 3 is ${number3}`);
console.log(`The sum of numbers is = ${number1 + number2 + number3}`);


/*task 6*/
console.log(`\n <--Task 6-->`);
let startNum2 = 1;
let endNum2 =  100;

let ranNum1 =  Math.floor(Math.random() * (endNum2 + startNum2 - 1)) + startNum2;
let ranNum2 = Math.floor(Math.random() * (endNum2 + startNum2 - 1)) + startNum2;
let ranNum3 = Math.floor(Math.random() * (endNum2 + startNum2 - 1)) + startNum2;
let sum1 = (ranNum1 + ranNum2 + ranNum3);

if (sum1 > 25) {
    console.log(true);
} else if(sum1 <= 25){
    console.log(false);
}

/*Task 7*/
console.log(`\n <->-Task 7-->`);
let firstname = "David";

console.log(`The length of the name is = ${firstname.length}`);
console.log(`The first character in the name is = ${firstname[0]}`);
console.log(`The last character in the name is = ${firstname[4]}`);
console.log(`The first 3 chracters in the name are = ${firstname.slice(0,3)}`);
console.log(`The last 3 characters in the name are = ${firstname.slice(2,6)}`);
