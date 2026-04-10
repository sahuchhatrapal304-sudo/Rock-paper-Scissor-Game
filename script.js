let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");

const genCompChoice= ()=>{
    const options =["rock", "paper", "scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
};

const  drawGame=()=>{
    console.log("Game was draw");
    msg.innerText="Game was Draw. Play Again!";
    msg.style.backgroundColor ="#081b31";
};

const showWinner= (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You Win !");
        msg.innerText="You Win! ";
        msg.style.backgroundColor ="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You Lose !"); 
        msg.innerText="You Lose!";
        msg.style.backgroundColor ="red";
    }
};

const WinGame=(userChoice, compChoice)=>{
    let userWin=true;
    if(userChoice==="rock"){
        //compChoice=paper/scissors
        userWin = compChoice ==="paper"? false: true;
    }
    else if(userChoice==="paper"){
        //compChoice=rock/scissors
        userWin = compChoice ==="scissors"? false: true;
    }
    else{
        //compChoice=rock/paper
        userWin = compChoice ==="rock"? false: true;
    }
    showWinner(userWin,userChoice, compChoice);
};

const playGame=(userChoice) => {
    console.log("User Choice=", userChoice);
    //generatecomputer choice
    const compChoice =genCompChoice();
    console.log ("Comp choice=", compChoice);

    if(userChoice== compChoice){
        drawGame();
    }
    else{
        WinGame(userChoice, compChoice);
    }
}



choices.forEach((choice) =>{
  
    choice.addEventListener("click",() =>{
        const userChoice=choice.getAttribute("id");
        //console.log("choice was clicked", userChoice);
        playGame(userChoice);
    })
})
