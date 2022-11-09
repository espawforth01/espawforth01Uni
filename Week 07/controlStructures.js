// // 1) Create a JavaScript application that asks the user what their name is. If they answer 'Fred' feedback to the user telling tell them you like their name.

// const userName = prompt("What is your name?");
// if(userName === "Fred") {
//     console.log(`That's a nice name`);
// } else {
//     console.log(`Thank you`);
// }

// // 2) Create a JavaScript application that asks the user for 2 numbers and feeds back to the user with the highest of the two numbers.

// const q2Num1 = parseFloat(prompt("Give me a number"));
// const q2Num2 = parseFloat(prompt("Give me another number"));
// if(q2Num1 > q2Num2) {
//     console.log(q2Num1);
// } else if(q2Num1 === q2Num2){
//     console.log(`These numbers are equal`);
// } else {
//     console.log(q2Num2);
// }

// // 3) Create a JavaScript application that asks the user for their age. If the user is older than 4 and younger than 16 feedback to the user telling them they should be at school.

// const userAge = parseInt(prompt("How old are you?"));
// if(userAge > 4 && userAge < 16) {
//     console.log(`You should be at school`);
// } else {
//     console.log(`Thank you`);
// }

// // 4) Create a JavaScript program that asks the user for the name of the Prime Minister. If the user responds with 'Rishi', 'Rishi Sunak' or 'Sunak' the program should feedback telling them they are correct.

// const primeMinister1 = prompt("Who is the Prime Minister?");
// if(primeMinister1 === "Rishi" || primeMinister1 === "Rishi Sunak" || primeMinister1 === "Sunak") {
//     console.log(`You are correct.`);
// } else {
//     console.log(`Please try again.`);
// }

// // 5) Create a JavaScript program that asks the user for three numbers and feeds back to the user with the lowest of the three numbers.

// const q5Num1 = parseFloat(prompt("Give me a number"));
// const q5Num2 = parseFloat(prompt("Give me another number"));
// const q5Num3 = parseFloat(prompt("Give me a third number"));
// if(q5Num1 < q5Num2 && q5Num1 < q5Num3) {
//     console.log(q5Num1);
// } else if(q5Num2 < q5Num1 && q5Num2 < q5Num3) {
//     console.log(q5Num2);
// } else if(q5Num3 < q5Num1 && q5Num3 < q5Num2) {
//     console.log(q5Num3);
// } else if(q5Num1 === q5Num2 && q5Num1 === q5Num3) {
//     console.log(`All numbers are equal`);
// }

// // Most students find the following questions a bit more difficult, so don't worry too much if you can't get the programs to work / aren't sure about how to answer the question. Even if you are attempting the questions and thinking about how to provide a solution you are learning. You can use the solutions branch to see example answers.

// // 6) Question 4 asked the user for the name of the Prime Minister. It is possible that the user will enter the answer in lower case e.g. 'boris'. Do some research do find out how the case of string data can be converted from upper to lower case - https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase. Modify your answer to question 4 to make the program more robust i.e it doesn't matter what case the user uses to answer the question and the program still works.
 
// const primeMinister2 = prompt("Who is the Prime Minister? Please answer using one word.");
// const primeMinister02 = primeMinister2.charAt(0).toUpperCase() + primeMinister2.substring(1).toLowerCase();
// if(primeMinister02 === "Rishi" || primeMinister02 === "Sunak") {
//     console.log(`You are correct.`);
// } else {
//     console.log(`Please try again.`);
// }

// // 7) This program has been started for you. It is a simple JavaScript quiz. Add some more JavaScript that will test the user's answers, calculate a score for the user, and feedback to the user. (Hint: you might want to use the increment operator ++ e.g. score++;)

// let score = 0;
// const capitalEngland = prompt("What is the capital of England");
// const capitalFrance = prompt("What is the capital of France");
// const capitalGermany = prompt("What is the capital of Germany");

// const capitalEngland2 = capitalEngland.charAt(0).toUpperCase() + capitalEngland.substr(1).toLowerCase();
// const capitalFrance2 = capitalFrance.charAt(0).toUpperCase() + capitalFrance.substr(1).toLowerCase();
// const capitalGermany2 = capitalGermany.charAt(0).toUpperCase() + capitalGermany.substr(1).toLowerCase();

// if(capitalEngland2 === "London") {
//     score++;
//     console.log(`Correct. London is the capital of England`)
// }
// if(capitalFrance2 === "Paris") {
//     score++;
//     console.log(`Correct. Paris is the capital of France`)
// }
// if(capitalGermany2 === "Berlin") {
//     score++;
//     console.log(`Correct. Berlin is the capital of Germany`)
// }
// console.log(`Your score is: ${score}`);
// if(score === 3) {
//     console.log(`Congratulations. You achieved 100%.`);
// } else if(score === 2) {
//     console.log(`You achieved 66.6% on this quiz.`);
// } else if(score === 2) {
//     console.log(`You achieved 33.3% on this quiz.`);
// } else {
//     console.log(`You achieved 0% on this quiz. Please try again.`);
// }

// 8) Factory owners SlaveDrivers Inc. pay their workers a basic wage of £2.40 an hour. If an employee works over 40 hours a week they receive £3.60 an hour for every hour of overtime they work. Workers can work a maximum of 80 hours a week. Write a JavaScript application that allows workers to enter the number of hours they have worked. The program should then feedback to the user telling them their wages for the week.

// const hoursWorked = parseInt(prompt("How many hours have you worked this week?"));

// if(hoursWorked > 0 && hoursWorked <= 40) {
//     const wage = parseFloat(hoursWorked * 2.40);
//     console.log(`Your weekly pay is equal to: £${wage}0.`);
// } else if(hoursWorked > 40 && hoursWorked <= 80) {
//     const wage1 = parseFloat(40 * 2.4);
//     const wage2 = parseFloat((hoursWorked - 40) * 3.60);
//     const wage3 = wage1 + wage2;
//     console.log(`Your weekly pay is equal to: £${wage3}0.`);
// } else if(hoursWorked === 0) {
//     console.log(`You did not work this week, therefore you don't get paid.`);
// } else if(hoursWorked > 80) {
//     console.log(`Do not lie. The rules clearly state that you can work a maximum of 80 hours per week`);
// }

// 9) The lecture slides consider the use of the isNaN() function. Think about how you could use isNaN() to test if the user has entered a number e.g. for the previous question.

// const hoursWorked = parseInt(prompt("How many hours have you worked this week?"));

// if(isNaN(hoursWorked)) {
//     console.log(`Please enter a number.`)
// }else if(hoursWorked > 0 && hoursWorked <= 40) {
//     const wage = parseFloat(hoursWorked * 2.40);
//     console.log(`Your weekly pay is equal to: £${wage}0.`);
// } else if(hoursWorked > 40 && hoursWorked <= 80) {
//     const wage1 = parseFloat(40 * 2.4);
//     const wage2 = parseFloat((hoursWorked - 40) * 3.60);
//     const wage3 = wage1 + wage2;
//     console.log(`Your weekly pay is equal to: £${wage3}0.`);
// } else if(hoursWorked === 0) {
//     console.log(`You did not work this week, therefore you don't get paid.`);
// } else if(hoursWorked > 80) {
//     console.log(`Do not lie. The rules clearly state that you can work a maximum of 80 hours per week`);
// }

//  Loops

// 10) Look at the following for loop. Uncomment the code. Check it works, it should output the numbers 1 to 10. Modify the loop so that it does the following:
// a) Output the numbers 0 to 50
// b) Outputs the numbers 50 to 100
// c) Re-write the loop as a while loop

// for(let i=1;i<=10;i++){
//     console.log(i);
// }

// for(let i=1;i<=50;i++){
//     console.log(i);
// }

// for(let i=50;i<=100;i++){
//     console.log(i);
// }

// let a = parseInt(1);
// while (a <= 100) {
//     console.log(a);
//     a++;
// }

// 11) Write a JavaScript program that asks the user for their name and then for a number. The program should output the user's name repeatedly. e.g. If the user enters 4 for the number their name should be printed 4 times. If they enter 6, the name should be printed 6 times

// const userName = prompt("What is your name?");
// const number = parseInt(prompt("Please provide a number"));
// let a = parseInt(1);

// while (a <= number) {
//     console.log(userName);
//     a++;
// }

// 12) Write a JavaScript program that asks the user for a number and then uses a for loop to output the times table for that number. Here is some code to get you started:

// const userNum=parseInt(prompt("Tell me a number"));
// for(let i=1;i<=12;i++)
// {
//     const times = userNum * i;
//     console.log(`${i}) ${times}`);
// }

// 13) Uncomment the following program. It is a simple quiz where the user gets three guesses. Run the code in a browser to see what it does.
// a) Can you re-write this program using a for loop so that the code is more efficient and easier to maintain?
// b) One problem is that if the user answers correctly on the first attempt they are still asked two more times. Do some research into the 'break' statement e.g. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break

let userGuess;
let userGuessNum = parseInt(1);
alert("You get three guesses for the following question");

// while(userGuessNum >= 3) {
//     userGuess=parseInt(prompt("How many times have Huddersfield Town won the FA Cup?"));
//     if(userGuess===1){
//         alert("You are correct");
//     }else if(userGuess<1){
//         alert("Too low");
//     }else if(userGuess>1){
//         alert("Too high");
//     }
//     userGuessNum++;
// }

for (let i = 1; i <= 3; i++) {
    userGuess=parseInt(prompt("How many times have Huddersfield Town won the FA Cup?"));
    if(userGuess===1){
        alert("You are correct");
    }else if(userGuess<1){
        alert("Too low");
    }else if(userGuess>1){
        alert("Too high");
    }
}

// 14) Uncomment the following program. It is an example from the lecture slides.
// a) Modify the program so that every time the user guesses, the program tells the user if their guess is too high or too low.
// b) If you can get this to work it makes the game too easy. Modify the program so that a random number between 1 and 100 is generated (instead of 1 to 10).

// const ranNum = Math.floor(Math.random()*10+1);
// let correct = false;
// let count = 0;
// let msg;
// while(correct === false)
// {
//     count++;
//     let userGuess = parseInt(prompt("Guess the random number"));
//     if(userGuess === ranNum)
//     {
//         correct = true;
//     }
// }
// msg = `You guessed the random number is ${ranNum} it took you ${count}`;
// if(count === 1){
//     msg = msg+" guess"
// }else{
//     msg = msg+" guesses"
// }
// console.log(msg)


// 15) Write a program that asks the user for a colour and then changes the background colour of the page to the colour the user enters. The program should repeat this process until the user doesn't enter a colour i.e. the input will be equal to an empty string "". You will need to use a while loop.
