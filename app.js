const computerChoice = document.getElementById("computer-choice");
const playerChoice = document.getElementById("player-choice");
const resultOutput = document.getElementById("result");

//ophalen van gegevens is goed gedaan

const possibleChoices = document.querySelectorAll('button');

let computer;
let player;
let result;

possibleChoices.forEach(button => button,addEventListener('click', (e) => {
    player = e.target.id;
    playerChoice.innerHTML = player;
    generateComputerChoice();
    getResult();
}));

//wel graag comments gebruiken zodat ik weet wat de code doet

const generateComputerChoice = () =>{
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber == 1) {
        computer= "Rock";
    }

    if (randomNumber == 2) {
        computer= "Paper";
    }

    if (randomNumber == 3) {
       computer= "Scissors";
    }
    computerChoice.innerHTML = computer;
}
const getResult = () => {
    if (computer == player){
        result = "Gelijkspel"
    };
    
    if (computer == "Rock" && player == "Paper"){
        result = "Je hebt gewonnen!"
    };
        
    if (computer == "Rock" && player == "Scissors"){
        result = "Je hebt verloren"
    };
        
    if (computer == "Paper" && player == "Scissors"){
        result = "Je hebt gewonnen!"
    };
        
    if (computer == "Paper" && player == "Rock"){
        result = "Je hebt verloren"
    };
    
    if (computer == "Scissors" && player == "Rock"){
        result = "Je hebt gewonnen!"
    };
        
    if (computer == "Scissors" && player == "Paper"){
        result = "Je hebt verloren"
    };
    resultOutput.innerHTML = result;
}
//code ziet er netjes eruit

