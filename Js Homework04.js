console.log('Task 1');

for (let x = 1; x <= 100; x++){
    if(x % 7 ===0) {
    console.log(x);
    }
}

console.log('\nTask 2');
for (let x = 1; x <= 50; x++){
    if(x % 2 ===0 && x % 3 === 0) {
    console.log(x);
    }
}

console.log('\nTask 3');
for (let x = 100; x >= 50; x--){
    if(x % 5 === 0) {
    console.log(x);
    }
}

console.log('\nTask 4');
for (let i = 0; i <= 7; i++) {
  let sqrt = i * i
  console.log(`Square of ${i} is ${sqrt}`);
}

console.log('\nTask 5');
let sum = 0;
for (let x = 1 ; x <= 10; x++) {
    sum += x;
   
}

console.log("Sum from 1 to 10 is", sum);