import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

//(a) Home Team name for 2014 world cup final

const fifaDataHomeName = fifaData.filter(function(element) {
    if (element["Year"] === 2014) {
    return element["Home Team Initials"];
    }
}).map(function(item) {
    return item["Home Team Initials"];
});
console.log(fifaDataHomeName)

//(b) Away Team name for 2014 world cup final

const fifaDataAwayName = fifaData.filter(function(element) {
    if (element["Year"] === 2014) {
    return element["Away Team Initials"];
    }
}).map(function(item) {
    return item["Away Team Initials"];
});
console.log(fifaDataAwayName)

//(c) Home Team goals for 2014 world cup final

const fifaDataHomeTeamgoals = fifaData.filter(function(element) {
    if (element["Year"] === 2014) {
    return element["Home Team Goals"];
    }
}).map(function(item) {
    return item["Home Team Goals"];
});
console.log(fifaDataHomeTeamgoals)

//(d) Away Team goals for 2014 world cup final

const fifaDataAwayTeamgoals = fifaData.filter(function(element) {
    if (element["Year"] === 2014) {
    return element["Away Team Goals"];
    }
}).map(function(item) {
    return item["Away Team Goals"];
});
console.log(fifaDataAwayTeamgoals)

//(e) Winner of 2014 world cup final */

// const fifaDataWinner14 = fifaData.filter(function(element) {
//     if (element["Year"] === 2014 && element["Home Team Goals"] > element["Away Team Goals"]) {
//         return element["Home Team Initials"];
//     }
//     else if (element["Year"] === 2014 && element["Home Team Goals"] < element["Away Team Goals"]) {
//         return element["Away Team Initials"];
//     }
// });
// console.log(fifaDataWinner14)


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

function getFinals(data) {
   const varGF = data.filter(function(element) {
       if (element["Stage"] === "Final" ) {
        return element;
       }
   })
   return varGF;
}
//console.log(getFinals(fifaData))


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(array, callbacktask2) {

    const years = callbacktask2(array).map(function(item) {
        return item.Year;
    })
    return years;
}


console.log(getYears(fifaData, getFinals));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(array, callbacktask2) {
    
    const winners = callbacktask2(array).map(function(item) {
        if (item["Home Team Goals"] > item["Away Team Goals"]) {
            return item["Home Team Name"];
        }
        else if (item["Home Team Goals"] < item["Away Team Goals"]) {
            return item["Away Team Name"];
        }
        else if (item["Home Team Goals"] === item["Away Team Goals"] ) {
            return item["Home Team Name"];
        }
    })
    return winners;
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(array, callbackyears, callbackgetwinner, callbackgetfinal) {
    const winners = callbackgetwinner(array, callbackgetfinal);
    const years = callbackyears(array, callbackgetfinal);
    let strArray = [];

    years.forEach((item, index) => {
        const item2 = winners[index];
        strArray.push(`In ${years[index]}, ${winners[index]} won the world cup!`);
    });
    return strArray;    
}




/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals (data) {
//all home team goals plus away team goals divided by data.length
    let totalGoals = 0;
    for (let i = 0; i < data.length; i++) {
        totalGoals = totalGoals + data[i]["Home Team Goals"] + data[i]["Away Team Goals"]
    }
    return (totalGoals / data.length).toFixed(2);
}






/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
export default{
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
