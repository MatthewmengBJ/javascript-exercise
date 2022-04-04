
function computerPlay(){
    let index_number = Math.floor(Math.random()*3);
    const option_array = ["rock","paper","scissors"];
    return option_array[index_number];
}
function game_round(playerSelection, computerSelection){
    let playerwin = "Player won! " + playerSelection + " beats " + computerSelection;
    let computerwin = "Player lost! " + computerSelection+ " beats "+ playerSelection;
    let tiegame;
     
    if (playerSelection == computerSelection){
        tiegame = "It's a tie. Player and computer select the same option!"
        return tiegame ;
    }else if (playerSelection == "rock"){
        if (computerSelection == "paper"){
            return computerwin;
        }else if (computerSelection == "scissors"){
            return playerwin;
        }
    }else if (playerSelection == "paper"){
        if(computerSelection == "rock"){
            return playerwin;
        }else if (computerSelection == "scissors"){
            return computerwin;
        }
    }else if (playerSelection == "scissors"){
        if (computerSelection == "rock"){
            return computerwin;
        }else if (computerSelection == "paper"){
            return playerwin;
        }
    }


}
let tie = 0;
let player_score = 0;
let computer_score = 0;
for(let i = 1; i <=5; i++){
    const playerSelection = window.prompt("input rock, paper or scissors","rock");
    //I should verify whether the input is valid or not. But I will leave that for the future. :)
    const computerSelection = computerPlay();
    if (i <=5){
        if (game_round(playerSelection,computerSelection).includes("tie")){
            tie = tie + 1;    
        }
        if (game_round(playerSelection,computerSelection).includes("won")){
            player_score =player_score+1;
        }
        if (game_round(playerSelection,computerSelection).includes("lost")){
            computer_score = computer_score+ 1;
        }

    }
    console.log(computerSelection);
    console.log(game_round(playerSelection,computerSelection));
    

}
if (computer_score == player_score){
    console.log("It's a tie game!" + "Computer score is:"+ computer_score + "Player Score is: "+ player_score);
}
if (computer_score > player_score){
    console.log("Computer won! "+ "Computer beats player by "+computer_score + ": "+ player_score);
}else{
    console.log("Player won!" + "Player beats computer by " + player_score+": "+computer_score);
}

