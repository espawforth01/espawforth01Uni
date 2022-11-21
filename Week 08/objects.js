// 1. The following code declares an object literal.
// a) Write a line of code that will display the name property of this object in a console message. e.g. it should output 'England'.
// b) Write a line of code that will display additional properties of this object in a console message. e.g. it should output 'England is a country in Europe. The capital city of England is London.'
// c) Add another property to store the population of England (53000000). Test this works.

// const country={
//     name : "England",
//     capital : "London",
//     continent : "Europe",
//     population : 53000000,
// }

// console.log(country.name);

// console.log(`${country.name} is a country in ${country.continent}. The capital city of ${country.name} is ${country.capital}. The population is ${country.population}.`);

// 2. The following code creates an array of objects.
// a) Using this array and a console.log output the capital of USA.
// b) Using this array and a console.log output 'England has a population of 53000000'.
// c) Add two more country objects to the array
// d) Use a forEach loop to output the name and capital city of each country in the array
// e) Use the filter() method to generate a new array that only contains countries from Europe. Test this works.

// const countries=[
//     {name : "England", capital : "London", continent : "Europe", population: 53000000},
//     {name : "France", capital : "Paris", continent : "Europe", population: 67000000},
//     {name : "USA", capital : "Washington", continent : "N. America", population: 325000000},
//     {name : "Canada", capital : "Ottawa", continent : "N. Anerica", population: 36990000},
//     {name : "Spain", capital : "Madrid", continent : "Europe", population: 47800000},
// ]

// console.log(countries[2].capital);

// console.log(`${countries[0].name} has a population of ${countries[0].population}.`);

// countries.forEach(element => {
//     console.log(`${element.capital} is the capital of ${element.name}.`);
// });

// const europeanCountries = countries.filter(
//     function(country){
//         if(country.continent === "Europe")
//         {
//             return true;
//         }
//         return false;
//     }
// );

// europeanCountries.forEach(element => {
//     console.log(element.name);
// });

// 3. Write a program that will prompt the user for the name of a continent. 
//    The program should then output the countries from that continent.

// 4. Modify question 3 so that the program also prompts for a minimum population. 
//    The program should then output the countries that match both the specified continent and minimum population
//    e.g. if the user enters 'Europe' and 60000000 France (but not England) should be displayed.

// const contChoice = prompt("Enter the name of a continent");
// const popChoice = prompt("Enter a minimum value for population");

// const matchingCountries = countries.filter(
//     function(country){
//         if(country.continent === contChoice && country.population >= popChoice)
//         {
//             return true;
//         }
//         return false;
//     }
// );

// matchingCountries.forEach(element => {
//     console.log(element.name)
// });

// 5. Using Q4 as a basis have a go at creating a basic solution to the assignment i.e. store the phone data using objects and arrays.
//    Use prompt boxes to gather user preferences and feedback to the user with the names of the phones that match these preferences.
