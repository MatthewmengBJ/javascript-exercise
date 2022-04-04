This document will record all the changes.
1. Create a blank html file with link to the js file in the script section.
2. Create a function for computer play output:
    a. Math.floor(Math.random()*3) to generate random number from 0 to 2.
    b. Use the random number to get data from string array ["rock","paper","scissors"];
3. Create a function game_round to check result for each round;
    a. return the result as a string;
4. In the main loop, use game_round(playerSelection,computerSelection).includes("tie") to check the result.
    a. record score based on different return value;
    b. this could be another function. But it's not too complicated, so keep it as it is for now.
5. use console.log to print output to console. 
    a. the result will be printed to the console every round;
    b. the final score will be printed to the console after the game is over. 