// 1. The following code declares a new array. Using this array attempt the following:
// a) Output the text 'Tuesday' in the console
// b) Output the text 'Monday is the first day of the week' in the console
// c) Output the text 'Friday and Saturday are my favourite days' in the console
// d) Output the entire contents of the array using a forEach loop

// const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// console.log(days[1]);

// console.log(`${days[0]} is the first day of the week.`);

// console.log(`${days[4]} and ${days[5]} are my favourite days.`);

// days.forEach(element => {
//     console.log(element)
// });

// 2. The following code declares an array. Using this array attempt the following:
// a) Output the text 'Brazil has won the World Cup. USA hasn't.' in the console
// b) Output the entire contents of the array using a forEach loop
// c) Use a filter to generate an array of countries that contain the letter 'n'. Use a forEach loop to output the matching countries. Have a look at using indexOf() (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf). Save the resulting array and output its contents using a forEach loop (slide 15, slide 18) 
// d) Modify your program from (2c) so that you ask the user for a search term (use a prompt box) and then display the countries that match the search term e.g. if the user enters 'in', China, India and Indonesia should be displayed.
// e) Modify your program from (2d) so that it doesn't matter if the user enters the search term in upper or lower case.

// const countries=["China","India","USA","Indonesia","Brazil","Pakistan"];

// console.log(`${countries[4]} has won the World Cup. ${countries[2]} hasn't.`);

// countries.forEach(element => {
//     console.log(element);
// });

// const countriesWithLetterN=countries.filter(function(country){
//     if(country.indexOf("n")===-1){
//         return false;
//     }
//     return true;
// })
// countriesWithLetterN.forEach(function(country){
//     console.log(country);
// })

// const searchTerm=prompt("Enter a search term");
// const lowerCountries = countries.map(function(country) {
//     return country.toLowerCase();
// })
// const matchingCountries=lowerCountries.filter(function(country){
//     if(country.indexOf(searchTerm)===-1){
//         return false;
//     }
//     return true;
// })
// matchingCountries.forEach(function(country){
//     console.log(country[0].toUpperCase() + country.substring(1).toLowerCase());
// })

// 3. The following code declares a String variable
// a) Output the second character i.e. 'r' in the console. 
// b) Output the position of the dot i.e '7' in the console (use the indexOf() method)
// c) Output the file extension i.e. png (use the substring() method)

// const fileName = "profile.png";

// console.log(fileName[1]);

// console.log(fileName.indexOf("."));

// console.log(fileName.substring(8))

// 4. Write a program that asks the user for a filename.
// a) Using the substring() method, the program should test the file extension of the entered filename and feedback telling the user if it is a PNG or not.
// b) Modify your answer so that the program tells the user if the file is an image or not (test for .PNG, .JPG and .GIF)
// c) JPG images can be saved with a .jpg extension or a .jpeg extension. Modify your program so that it tests for both. 

