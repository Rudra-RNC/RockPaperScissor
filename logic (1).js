let humanScore=0,computerScore=0;
const hscore=document.createElement("div");
const cscore=document.createElement("div");
const rock=document.querySelector("#rock");
const paper=document.querySelector("#paper");
const scissor=document.querySelector("#scissor");
const mdiv=document.querySelector("#scores");
function update(){
    hscore.textContent="Human score is "+humanScore;
    cscore.textContent="Computer score is "+computerScore;
    hscore.style["color"]="black";
    cscore.style["color"]="black";
}
function stopper(){
    rock.disabled=true;
    paper.disabled=true;
    scissor.disabled=true;
    const ender=document.createElement("div");
    let winner="Computer";
    if(humanScore>computerScore){
        winner="You";
    }
    ender.textContent=winner+" won!!!";
    ender.style["text-align"]="center";
    ender.style["font-weight"]="bold";
    mdiv.appendChild(ender);
}
function getComputerChoice(){
    let num=Math.random();
    if(num<1/3){
        return "rock";
    }
    else if(num<2/3) { 
        return "paper";
    }
    else return "scissor";
}
function playRound(computerChoice,humanChoice){
    if(computerChoice==humanChoice){
        alert("Computer choice was also "+ computerChoice+", its a draw");
    }
    else if(computerChoice=="paper"){
        if(humanChoice=="rock"){
            alert("You lose! Paper beats rock");
            computerScore++;
        }
        else{
            alert("You win! scissor beats paper");
            humanScore++;
        }
    }
     else if(computerChoice=="rock"){
        if(humanChoice=="scissor"){
            alert("You lose! rock beats scissor");
            computerScore++;
        }
        else{
            alert("You win! paper beats rock");
            humanScore++;
        }
    }
    else{
        if(humanChoice=="paper"){
            alert("You lose! scissor beats paper");
            computerScore++;
        }
        else{
            alert("You win! scissor beats paper");
            humanScore++;
        }
    }
    if(humanScore>=5 || computerScore>=5) stopper();
    update();
}

function playGame(){
    if(humanScore<5 && computerScore<5){
    rock.addEventListener("click",()=>playRound(getComputerChoice(),"rock"));
    paper.addEventListener("click",()=>playRound(getComputerChoice(),"paper"));
    scissor.addEventListener("click",()=>playRound(getComputerChoice(),"scissor"));
}
    hscore.style["text-align"]="center";
    cscore.style["text-align"]="center";
    mdiv.appendChild(hscore);
    mdiv.appendChild(cscore);
    update();
    if(humanScore>=5 || computerScore>=5) stopper();
}
playGame();