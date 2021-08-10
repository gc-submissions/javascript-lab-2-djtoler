"use strict";

// TODO - write your code here.

// Declare an arrow function named randomDamage that has no parameters and returns a random integer between 1 and 10.

const randomDamage = () => {
    return Math.floor( Math.random() * 10 + 1 );
}

// Declare an arrow function named chooseOption that has two parameters named opt1 and opt2. chooseOption does two things: 
// ----Declares and initializes a variable named randNum to either a 0 or 1, randomly.
// ----Returns opt1 if randNum is equal to 0 otherwise return opt2 . (Use a ternary operator)


const chooseOption = (opt1, opt2) => {
    let randNumb = Math.random();

    return (randNumb <= 0.5) ? opt1: opt2;
  
    }

    // Declare a function expression named attackPlayer that has one parameter named health which 
    // returns a number equal to health minus the result of the randomDamage function.

    const attackPlayer = function(health) {
        return health - randomDamage();
    }

    // Declare an arrow function named logHealth that has two parameters named player and health which 
    // has a console.log method to state the following message: “player health: health”.
    // syntax for arrow function ```() => { }```


    const logHealth = (player, health) => { 
        console.log(`${player} health: ${health}`)
       
    }



    // Declare an arrow function named logDeath that has two parameters named winner and loser which
    //  has a console.log method to state the following message: “winner defeated loser”

const logDeath = (winner, loser) => { 
    console.log(`${winner} defeated ${loser}`);
}



    // Declare an arrow function named isDead that has one parameter named health which returns a 
    // boolean value of true or false based on the following condition: health <= 0;

    const isDead = (health) => health <= 0 ? true : false;



// Declare a function declaration named fight that has four parameters.
// --Parameters:
// ----player1 - this will hold the name of the first player
// ----player2 - this will hold the name of the second player
// ----player1Health - this will hold the health of the first player
// ----player2Health - this will hold the health of the second player
// Within the fight function, write a while loop that loops while true
// ----Declare and initialize a variable named attacker equal to the chooseOption function with player1 and player2 as arguments.
// ----If attacker is equal to player1. 
// --------Set player2Health equal to the result of attackPlayer with player2Health as its argument.
// --------Calls the logHealth function with player2 and player2Health as its arguments.
// --------If the result of isDead with player2Health as an argument is true:
// -------------Call the logDeath function with player1 and player2 as arguments.
// -------------Break
// ----Has an else statement that:
// --------Sets player1Health equal to the attackPlayer function with player1Health as its argument.
// --------Call the logHealth function with player1 and player1Health as its arguments.
// --------If the result of isDead with player1Health as an argument is true:
// ------------Call the logDeath function with player2 and player1 as arguments.
// ------------Break

function fight(player1, player2, player1Health, player2Health) {
    
    while (true) {
        
        let attacker = chooseOption(player1, player2);
        
            if(attacker === player1) {
                player2Health = attackPlayer(player2Health);
                logHealth(player2, player2Health);

                if (isDead(player2Health)){
                    logDeath(player1,player2)
                    break;
                }
            }else {
                player1Health === attackPlayer(player1Health);
                logHealth(player1,player1Health)
                if (isDead(player1Health)) {
                    
                    
                    logDeath(player2,player1)
                    break;
                }
            }
      }
         
}


// Lastly, call the fight function with the required four parameters. You pick the names and starting health. For example: player1: 
// “Mitch”, player2: “Adam”, player1Health: 100, player2Health: 100.Lastly, call the fight function with the required four
// parameters. You pick the names and starting health. For example: player1: “Mitch”, player2: “Adam”, 
// player1Health: 100, player2Health: 100.

fight(   "Bubba",  "Gleesh",  100,  100)