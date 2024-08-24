let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const messages = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const drawGame = () => {
    console.log("Game was Draw");
    messages.innerText = "Game was Draw.Play Again!";
    messages.style.backgroundColor = "#081b31"
};

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        
        console.log("You Win");
        userScore++;
        userScorePara.innerText = userScore;
        messages.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        messages.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Lose");
        messages.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`;
        messages.style.backgroundColor = "red";
    }
}
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
  };

const playGame =(userChoice)=>{
    console.log("User choice =",userChoice);

    const compChoice = genCompChoice();
    console.log("comp choice =",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});