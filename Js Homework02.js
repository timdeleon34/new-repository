/*Task 1 */

let str1 = 5;
let str2 = 2;

 sum = (str1 + str2);
 product = (str1 * str2);
 division = (str1 / str2);
 subtraction = (str1 - str2);
 remainder = (str1 % str2);
 exponent = (str1 ** str2);

 console.log(`The sum of ${str1} and ${str2} is = ${sum}`);
 console.log(`The product of ${str1} and ${str2} is = ${product}`);
 console.log(`The division of ${str1} and ${str2} is = ${division}`);
 console.log(`The subtraction of ${str1} and ${str2} is = ${subtraction}`);
 console.log(`The remainder of ${str1} of ${str2} = ${remainder}`);
console.log(`The exponentiation of ${str1} and ${str2} is = ${exponent}`);

/*Task 2 */
let s1 = 200;
let s2 = -50;

let average = (s1 + s2)/2;
let abs = Math.abs(s1 - s2);
let gv = (Math.max(s1, s2));
let lv = (Math.min(s1, s2));

console.log (`The greatest values is = ${gv}`);
console.log (`The lowest values is = ${lv}`);
console.log(`The average is = ${average}`);
console.log(`The absolute difference is = ${abs}`);

/*Task 3 */

let num1 = Math.floor(Math.random() * 50) +1;
let num2 = Math.floor(Math.random() * 50) +1;
let absoulute = Math.abs(num1 - num2);

console.log(`${num1} ${num2}`);
console.log(`The absolute difference between numbers is = ${absoulute}`);

/*Task 4*/
let rand1 = Math.floor(Math.random() * 50) +1;
let rand2 = Math.floor(Math.random() * 50) +1;
let rand3 = Math.floor(Math.random() * 50) +1;
let rand4 = Math.floor(Math.random() * 50) +1;
let rand5 = Math.floor(Math.random() * 50) +1;

let maxrand = Math.max(rand1, rand2, rand3, rand4,rand5);
let minrand = Math.min(rand1, rand2, rand3, rand4,rand5);

console.log(`The max value = ${maxrand}`);
console.log(`The min value = ${minrand}`);

/*task 5*/

let number1 = Math.floor(Math.random() * 100) + 50;
let number2 = Math.floor(Math.random() * 100) + 50;
let number3 = Math.floor(Math.random() * 100) + 50;
let add = (number1 + number2 + number3);

console.log(`The number 1 is ${number1}`);
console.log(`The number 2 is ${number2}`);
console.log(`The number 3 is ${number3}`);
console.log(`The sum of numbers is = ${add}`);


/*task 6*/
let rannum1 = Math.floor(Math.random() * 100) + 1;
let rannum2 = Math.floor(Math.random() * 100) + 1;
let rannum3 = Math.floor(Math.random() * 100) + 1;
let sum1 = (rannum1 + rannum2 + rannum3);

if (sum1 > 25) {
    console.log("TRUE");
} else if(sum1 <= 25){
    console.log("FALSE");
}

/*Task 7*/
let firstname = "David";

console.log(`The length of the name is = ${firstname.length}`);
console.log(`The first character in the name is = ${firstname[0]}`);
console.log(`The last character in the name is = ${firstname[4]}`);
console.log(`The first 3 chracters in the name are = ${firstname.slice(0,3)}`);
console.log(`The last 3 characters in the name are = ${firstname.slice(2,6)}`);
