let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');

let usermove = document.querySelector('#usermove');
let compmove = document.querySelector('#compmove');

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        usermove.textContent = `Your choice: ${userChoice}`;
        playGame(userChoice);
    })
});

function genCompChoice() {
    let allchoice = ['rock', 'paper', 'scissor'];
    let randomIdx = Math.floor(Math.random(allchoice) * 3);
    return allchoice[randomIdx];
}


const playGame = ((userChoice) => {
    let compChoice = genCompChoice();  
    compmove.textContent = `Computer choice: ${compChoice}`;

    if (userChoice === compChoice) {
        message.textContent = "Its a Draw.Play again."
        document.querySelector(".msg-box").style.backgroundColor = "#222121";
    } else {
        let userWin = true;
        if (userChoice === 'rock') {
            userWin = (compChoice === "scissor") ? true : false;
        } else if (userChoice === "paper") {
            userWin = (compChoice === "rock") ? true : false;
        } else {
            userWin = (compChoice === "paper") ? true : false;
        }
        
        showWinnner(userWin, userChoice, compChoice);
    }
    
    
})



let message = document.querySelector('#msg');

let uScore = document.querySelector('#user-score');
let cScore = document.querySelector('#comp-score');

const showWinnner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        uScore.textContent = userScore;
        message.innerHTML = `You Win! Your ${userChoice} beats ${compChoice}`;
        document.querySelector(".msg-box").style.backgroundColor = "green";
    } else {
        compScore++;
        cScore.textContent = compScore;
        message.innerHTML = `You Lose! ${compChoice} beats your ${userChoice}`;
        document.querySelector(".msg-box").style.backgroundColor = "red";
    } 
}

