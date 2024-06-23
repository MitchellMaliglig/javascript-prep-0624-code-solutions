// create your loops here.
function whileLoop1() {
  let myArray = [];
  let index = 0;
  while (index < 10) {
    myArray.push(index);
    index++;
  }
  return myArray;
}
let whileLoop1Result = whileLoop1();
console.log(whileLoop1Result);

function whileLoop2() {
  let myArray = [];
  let num = 0;
  let count = 10;
  while (count > 0) {
    myArray.push(num);
    num += 2;
    count--;
  }
  return myArray;
}
let whileLoop2Result = whileLoop2();
console.log(whileLoop2Result);

function forLoop1() {
  let myArray = [];
  for (let i = 0; i < 10; i++) {
    myArray.push(i);
  }
  return myArray;
}
let forLoop1Result = forLoop1();
console.log(forLoop1Result);

function forLoop2() {
  for (let i = 100; i > 0; i--) {
    console.log('Time to explosion: ' + i + '!');
  }
  console.log('Boom!');
}
forLoop2();

const person = {
  name: 'Ada Lovelace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop1(object) {
  let myArray = [];
  for (const key in object) {
    myArray.push(key);
  }
  return myArray;
}
let forInLoop1Result = forInLoop1(person);
console.log(forInLoop1Result);

function forInLoop2(object) {
  let myArray = [];
  for (const key in object) {
    myArray.push(object[key]);
  }
  return myArray;
}
let forInLoop2Result = forInLoop2(person);
console.log(forInLoop2Result);
