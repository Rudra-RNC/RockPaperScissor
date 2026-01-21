let humanScore = 0, computerScore = 0;

const hscore = document.createElement("div");
const cscore = document.createElement("div");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const refresh = document.querySelector("#refresh");

const mdiv = document.querySelector("#scores");

function update() {
    hscore.textContent = "Human score is " + humanScore;
    cscore.textContent = "Computer score is " + computerScore;

    hscore.style["color"] = "black";
    cscore.style["color"] = "black";
}

function stopper() {
    rock.disabled = true;
    paper.disabled = true;
    scissor.disabled = true;
    
    const ender = document.createElement("div");
    
    let winner = "Computer"; 
    if (humanScore > computerScore) {
        winner = "You"; 
    }
    
    ender.textContent = winner + " won!!!";
    ender.style["text-align"] = "center";
    ender.style["font-weight"] = "bold";
    ender.style["font-size"] = "1.5em";
    ender.style["margin-top"] = "20px";
    ender.style["color"] = "#2c1810";
    
    mdiv.appendChild(ender);
    
    refresh.style.display = "block";
    refresh.textContent = "Play Again";
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    
    mdiv.innerHTML = "";
    
    rock.disabled = false;
    paper.disabled = false;
    scissor.disabled = false;
    
    refresh.style.display = "none";
    
    mdiv.appendChild(hscore);
    mdiv.appendChild(cscore);

    update();
}

function getComputerChoice() {
    let num = Math.random(); 
    
    if (num < 1/3) {
        return "rock"; 
    }
    else if (num < 2/3) {
        return "paper";
    }
    else {
        return "scissor";
    }
}

function playRound(computerChoice, humanChoice) {

    if (computerChoice == humanChoice) {
        alert("Computer choice was also " + computerChoice + ", its a draw");
    }

    else if (computerChoice == "paper") {
        if (humanChoice == "rock") {
            alert("You lose! Paper beats rock");
            computerScore++; 
        }
        else {
            alert("You win! Scissor beats paper");
            humanScore++;
        }
    }

    else if (computerChoice == "rock") {
        if (humanChoice == "scissor") {
            alert("You lose! Rock beats scissor");
            computerScore++;
        }
        else {
            alert("You win! Paper beats rock");
            humanScore++;
        }
    }

    else {
        if (humanChoice == "paper") {
            alert("You lose! Scissor beats paper");
            computerScore++;
        }
        else {
            alert("You win! Rock beats scissor");
            humanScore++;
        }
    }
    
    if (humanScore >= 5 || computerScore >= 5) {
        stopper();
    }
    
    update();
}

function playGame() {

    if (humanScore < 5 && computerScore < 5) {

        rock.addEventListener("click", () => playRound(getComputerChoice(), "rock"));

        paper.addEventListener("click", () => playRound(getComputerChoice(), "paper"));

        scissor.addEventListener("click", () => playRound(getComputerChoice(), "scissor"));
    }
    
    hscore.style["text-align"] = "center";
    cscore.style["text-align"] = "center";
    
    mdiv.appendChild(hscore);
    mdiv.appendChild(cscore);
    
    update();
    
    if (humanScore >= 5 || computerScore >= 5) {
        stopper();
    }
}

refresh.addEventListener("click", () => {
    resetGame();
    playGame();
});

playGame();