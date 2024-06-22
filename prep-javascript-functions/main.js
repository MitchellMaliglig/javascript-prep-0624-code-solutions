function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
const num1 = 1;
const num2 = 2;
const sum = addTwoNumbers(num1, num2);
console.log(sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
const minutes = convertHoursToMinutes(3);
console.log(minutes);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}
const greeting = getGreeting('Pizza Girl');
console.log(greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
const sumTimesFive = addAndMultiplyBy5(5, 5);
console.log(sumTimesFive);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
const productDividedByFive = multiplyAndDivideBy5(5, 5);
console.log(productDividedByFive);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
const difference = subtractTwoNumbers(5, 5);
console.log(difference);

function getCircleCircumference(radius) {
  return 2 * 3.14159 * radius;
}
const circumference = getCircleCircumference(5);
console.log(circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
const fullName = getFullName('Bob', 'Ross');
console.log(fullName);

function cube(number) {
  return number * number * number;
}
const cubed = cube(5);
console.log(cubed);
