function addTwoNumbers(x, y) {
  return x + y;
}
var addTwoNumbersResult = addTwoNumbers(4, 4);
console.log('sum', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var minutes = convertHoursToMinutes(2);
console.log('HoursToMinutes', minutes);

function getGreeting(name) {
  return name;
}
var greeting = getGreeting('Carl');
console.log('Hello ' + greeting + '!');

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var addedAndMultipliedby5 = addAndMultiplyBy5(5, 5);
console.log('addAndMultiplyBy5Result', addedAndMultipliedby5);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var multiplyAndDivideSum = multiplyAndDivideBy5(5, 5);
console.log('multiplyAndDividedResult', multiplyAndDivideSum);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtractedNumbers = subtractTwoNumbers(10, 2);
console.log('subtractedNumbers', subtractedNumbers);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
var circleCircumference = getCircleCircumference(10);
console.log('circleCircumference', circleCircumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var fullName = getFullName('Albert', 'Einstein');
console.log('fullName', fullName);

function cube(number) {
  return number * number * number;
}
var cubed = cube(5);
console.log('cubedNumber', cubed);
