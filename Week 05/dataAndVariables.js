// 1. The following JavaScript program prompts the user for their name and then displays the user's name using a console.log().
// a) Add another line of code that will prompt the user for their favourite colour. Change the console.log statement so that it also displays the user's choice of colour e.g. 'Your name is Matthew. Your favourite colour is red'.
// b) Add another line of code changes the background colour of the page to the colour the user has chosen.

const userName=prompt("What is your name?");
const favColour=prompt("What is your favourite colour");
console.log(`Your name is ${userName} and your favourite colour is ${favColour}`);
document.body.style.backgroundColor=favColour;

// 2. The following JavaScript program asks the user for two numbers and outputs them using a console.log
// a) Modify this program so that it calculates the total of the two numbers, and displays the total for the user using a console.log().
// b) Add some additional code so that will calculate the average of these two numbers and display this for the user.

const num1=parseInt(prompt("Tell me a number?"));
const num2=parseInt(prompt("Tell me another number"));
console.log(`You entered ${num1} and ${num2}.`)
const total=num1+num2;
const average=total/2;
console.log(`The total of ${num1} + ${num2} is ${total}, the average is ${average}`);

// 3. Write a program that will convert a measurement in inches to centimetres (1 inch is 2.54 centimetres).

const inches=parseInt(prompt("Tell me a number?"));
const cms=inches*2.54;
console.log(`${inches} inches is ${cms}cms.`);

// 4. Create a 'design a page' application. A three prompt boxes should ask the user for two colours, and their favourite font .  The content of the page should then be displayed in the user's choice of colour and font. The background colour of the page should be change to the user's second choice of colour.

const col1=prompt("Tell me a colour?");
const col2=prompt("Tell me another colour?");
const font=prompt("Tell me a font?");
document.body.style.color=col1;
document.body.style.backgroundColor=col2;
document.body.style.fontFamily=font;

// 5.The module CFT2111 has two pieces of assessment. HTML quizzes weighted at 40% and a JavaScript coursework weighted at 60%. Write a JavaScript application that will ask the user for their two scores. The program should then feedback to the user with an overall percentage for the module, here's some example input and output for the program.
// What is your HTML assessment score? 56
// What is your JavaScript assessment score? 42
// Your overall mark for the module is 47

const html=parseInt(prompt("Tell me your HTML mark?"));
const js=parseInt(prompt("Tell me your JavaScript mark"));
const overall=Math.round(html*0.4+js*0.6);
console.log(`Your overall score is ${overall}`);

// Have a look on https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/round for information on how to round numbers.