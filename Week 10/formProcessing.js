const countries=[
    {name : "England", capital : "London", continent : "Europe", population: 53000000},
    {name : "France", capital : "Paris", continent : "Europe", population: 67000000},
    {name : "USA", capital : "Washington", continent : "N. America", population: 325000000},
    {name : "Japan", capital : "Tokyo", continent : "Asia", population: 127000000}
]

// /*
// 1)
// a) Write some JavaScript code that uses document.querySelector() to grab hold of the button in the HTML page. Use a console.log() message to check this has worked.
// b) Add a 'click' event listener to the button. Again use a simple console.log() message to check this has worked.
// */

// const btn  = document.querySelector("#formBtn");
// console.log(btn);
// btn.addEventListener("click",function(){
//   console.log("The event handling works");
// })

// /*
// 2) Next, try and do some form processing. Start with the text box.
// a) Can you get whatever the user has typed into the text box to appear in the console.
// b) Can you also display the user's choice of continent in the console.
// */

// function processTheForm(){
//     const userName = document.querySelector("#username").value;
//     console.log(userName);
//     const continent = document.querySelector("#continent").value;
//     console.log(continent);
// }
// const btn  = document.querySelector("#formBtn");
// btn.addEventListener("click",function(){
//     processTheForm();
// })

// /*
// 3) At the top of this file is some code that creates an array of Country objects. Can you use the user's choice of continent to display matching countries from this array e.g. if the user selects 'Europe' the details for England and France should be displayed in the console.
// */

// function processTheForm(){
//     const userName = document.querySelector("#username").value;
//     const continent = document.querySelector("#continent").value;
//     const matchingCountries = countries.filter(function(country){
//         if(country.continent == continent){
//             return true;
//         }
//         return false;
//     })
//     console.log(`${userName}, here is a list of countries:`)
//     matchingCountries.forEach(function(country){
//         console.log(country.name);
//     })
// }
// const btn = document.querySelector("#formBtn");
// btn.addEventListener("click",function(){
//     processTheForm()
// })

// /*
// 4. Can you add code that listens for a 'change' event on the select menu. Whenever the user selects a different continent the list of matching countries in the console should change.
// */

// function processTheForm(){
//     const userName = document.querySelector("#username").value;
//     const continent = document.querySelector("#continent").value;
//     const matchingCountries = countries.filter(function(country){
//         if(country.continent == continent){
//             return true;
//         }
//         return false;
//     })
//     console.log(`${userName}, here is a list of countries:`)
//     matchingCountries.forEach(function(country){
//         console.log(country.name);
//     })
// }
// const btn  = document.querySelector("#formBtn");
// btn.addEventListener("click",function(){
//     processTheForm()
// })
// const selectMenu  = document.querySelector("#continent");
// selectMenu.addEventListener("change",function(){
//     processTheForm()
// })

// /*
// 5. If you have got the above to work, think how you have organised and structured your code. It would probably be a good idea to have something like the following (main would be called from an event listener function). Re-factor your code to use a number of different functions.
// */

// function getUserName(){
//     const userName = document.querySelector("#username").value;
//     return userName;
// }
// function getContinent(){
//         const continent = document.querySelector("#continent").value;
//     return continent;
// }
// function filterCountries(continent){
//     const matchingCountries = countries.filter(function(country){
//         if(country.continent == continent){
//             return true;
//         }
//         return false;
//     })
//     return matchingCountries
// }
// function displayResults(userName, matchingCountries){
//     if(matchingCountries.length>0){
//         console.log(`${userName}, here is a list of countries:`)
//         matchingCountries.forEach(function(country){
//             console.log(country.name);
//         })
//     }else{
//         console.log(`${userName}, no countries match`)
//     }
// }
// function main(){
//     const userName = getUserName();
//     const continent = getContinent();
//     const matchingCountries = filterCountries(continent);
//     displayResults(userName, matchingCountries);
// }
// const btn  = document.querySelector("#formBtn");
// btn.addEventListener("click",function(){
//     main()
// })
// const selectMenu  = document.querySelector("#continent");
// selectMenu.addEventListener("change",function(){
//     main()
// })

/*
6. Now think about how you can use a window.load event to trigger the set-up tasks for your application. Typically the 'load' event would execute code that uses the DOM to select elements from the page and attach events to these elements.
*/

function getUserName(){
    const userName = document.querySelector("#username").value;
    return userName;
}
function getContinent(){
    const continent = document.querySelector("#continent").value;
    return continent;
}
function filterCountries(continent){
    const matchingCountries = countries.filter(function(country){
        if(country.continent == continent){
            return true;
        }
        return false;
    })
    return matchingCountries
}
function displayResults(userName, matchingCountries){
    if(matchingCountries.length>0){
        console.log(`${userName}, here is a list of countries:`)
        matchingCountries.forEach(function(country){
            console.log(country.name);
        })
    }else{
        console.log(`${userName}, no countries match`)
    }
}
function main(){
    const userName = getUserName();
    const continent = getContinent();
    const matchingCountries = filterCountries(continent);
    displayResults(userName, matchingCountries);
}
function init(){
    const btn  = document.querySelector("#formBtn");
    btn.addEventListener("click",function(){
        main()
    })
    const selectMenu  = document.querySelector("#continent");
    selectMenu.addEventListener("change",function(){
        main()
    })
}
window.addEventListener("load",function(){
    init();
})