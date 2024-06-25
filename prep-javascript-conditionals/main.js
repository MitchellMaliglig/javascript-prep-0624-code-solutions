/* Your JS goes in this file */
function isAdult(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
let isAdultResult1 = isAdult(20);
let isAdultResult2 = isAdult(18);
let isAdultResult3 = isAdult(17);
console.log(isAdultResult1);
console.log(isAdultResult2);
console.log(isAdultResult3);

function didStudentPass(score) {
  if (score >= 70) {
    return true;
  } else {
    return false;
  }
}
let didStudentPassResult1 = didStudentPass(71);
let didStudentPassResult2 = didStudentPass(70);
let didStudentPassResult3 = didStudentPass(69);
console.log(didStudentPassResult1);
console.log(didStudentPassResult2);
console.log(didStudentPassResult3);

function gradeCalculator(score) {
  if (score >= 100) {
    return 'A+';
  } else if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}
let gradeCalculatorResult1 = gradeCalculator(100);
let gradeCalculatorResult2 = gradeCalculator(99);
let gradeCalculatorResult3 = gradeCalculator(89);
let gradeCalculatorResult4 = gradeCalculator(79);
let gradeCalculatorResult5 = gradeCalculator(69);
let gradeCalculatorResult6 = gradeCalculator(59);
console.log(gradeCalculatorResult1);
console.log(gradeCalculatorResult2);
console.log(gradeCalculatorResult3);
console.log(gradeCalculatorResult4);
console.log(gradeCalculatorResult5);
console.log(gradeCalculatorResult6);

function seasonMessenger(season) {
  if (season === 'summer') {
    return 'it is hot today';
  } else if (season === 'spring') {
    return 'the flowers are blooming';
  } else if (season === 'autumn') {
    return 'the leaves are changing colors';
  } else if (season === 'winter') {
    return 'it is cold today';
  } else {
    return 'please enter a valid season';
  }
}
let seasonMessengerResult1 = seasonMessenger('summer');
let seasonMessengerResult2 = seasonMessenger('spring');
let seasonMessengerResult3 = seasonMessenger('autumn');
let seasonMessengerResult4 = seasonMessenger('winter');
let seasonMessengerResult5 = seasonMessenger('invalid');
console.log(seasonMessengerResult1);
console.log(seasonMessengerResult2);
console.log(seasonMessengerResult3);
console.log(seasonMessengerResult4);
console.log(seasonMessengerResult5);

function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday') {
    return 'have a good weekend';
  } else {
    return 'it is a weekday';
  }
}
let dayDetectorResult1 = dayDetector('saturday');
let dayDetectorResult2 = dayDetector('sunday');
let dayDetectorResult3 = dayDetector('monday');
console.log(dayDetectorResult1);
console.log(dayDetectorResult2);
console.log(dayDetectorResult3);
