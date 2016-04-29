window.onload = function() {

  //array for the number of choices available for computerChoice
  var computerLetter = ['r', 'p', 's'];

  //declaring variable for the computer choice
  var computerChoice;

//function for picking computer answer (random)
  function computerAnswer() {
    var randLetter = Math.floor (Math.random() * computerLetter.length);
     computerChoice = (computerLetter[randLetter]);
        if(computerChoice == 'r' ) {
          computerChoice = "rock";
        } else if(computerChoice == 'p' ) {
          computerChoice = "paper";
        } else if(computerChoice == 's') {
          computerChoice = "scissors";
        }
        console.log("computerChoice: " + computerChoice);
     document.getElementById("displayCompC").innerHTML = "<img src='images/"+computerChoice+ ".png' />";
  }


var compareAnswers = function(computerChoice, playerChoice) {
//If both answers are the same
    if(computerChoice === playerChoice) {
        return "It's a tie!"
    }
//If computer chooses ROCK
    else if(computerChoice === "rock") {
        if(playerChoice === "scissors") {
          return "Computer wins"
        }
        else if(playerChoice === "paper") {
          return "You win!"
        }
    }
//If computer chooses PAPER
    else if (computerChoice === "paper") {
        if(playerChoice === "rock") {
          return "Computer wins"
        }
        else if(playerChoice === "scissors") {
          return "You win!"
        }
    }
//If computer chooses SCISSORS
    else if (computerChoice === "scissors") {
        if(playerChoice === "paper") {
          return "Computer wins"
        }
        else if(playerChoice === "rock") {
          return "You win!"
        }
    }
}

//get players Choice of RPS on click of ID
 var playerChoice = '';
  document.getElementById("rock").onclick = rockSelected;
  document.getElementById("paper").onclick = paperSelected;
  document.getElementById("scissors").onclick = scissorsSelected;

function checkSelection(userWeapon){
    playerChoice = userWeapon;
    console.log("player choice: " + playerChoice)
}

//if rock was selected run this
function rockSelected() {
      checkSelection("rock");
      computerAnswer();
      document.getElementById("displayPlayerC").innerHTML = "<img src='images/rock.png' />";
      document.getElementById('whoWon').innerHTML= compareAnswers(computerChoice, playerChoice);

}
// setTimeout(function() {
// computerAnswer();
// console.log("something")
// }, 2000
// );
//if paper was selected run this
function paperSelected() {
      checkSelection("paper");
      computerAnswer();
      document.getElementById("displayPlayerC").innerHTML = "<img src='images/paper.png' />";
      document.getElementById('whoWon').innerHTML= compareAnswers(computerChoice, playerChoice);

}

//if paper was selected run this
function scissorsSelected() {
      checkSelection("scissors");
      computerAnswer();
      document.getElementById("displayPlayerC").innerHTML = "<img src='images/scissors.png' />";
      document.getElementById('whoWon').innerHTML= compareAnswers(computerChoice, playerChoice);
}


//JQuery below

$("body").css("display", "none");

$("body").fadeIn(2000);

$("a.transition").click(function(event){
    event.preventDefault();
    linkLocation = this.href;
    $("body").fadeOut(1000, redirectPage);
});

function redirectPage() {
    window.location = linkLocation;
}

}
