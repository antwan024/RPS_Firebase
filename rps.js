var playerOneWinArray = [ ['r','s'], ['p','r'], ['s','p'] ];
var playerTwoWinArray = [ ['s','r'], ['r','p'], ['p','s'] ];
var playerOnePoints = 0;
var playerTwoPoints = 0;
var round = [];
var playerOne = false;
var playerTwo = false;


function playerCheck(event){

    if(playerOne===true) {
        round[0]=$(event.target).attr("value");
    } else if (playerTwo=true) {
        round[1]=$(event.target).attr("value");
    };
};

$("#playerOneButton").click(function(event){    
    $("#player").text("You are player 1");
    console.log("You are player 1");
    playerOne=true;
    playerTwo=false;
});

$("#playerTwoButton").click(function(event){    
    $("#player").text("You are player 2");
    console.log("You are player 2");
    playerOne=false;
    playerTwo=true;
});

$("#rock").click( function(event) {
    playerCheck(event);
    console.log(round);
});


$("#paper").click( function(event) {
    playerCheck(event);
    console.log(round);
});

$("#scissors").click( function(event) {
    playerCheck(event);
    console.log(round);
});









// var choiceOne = $("#playerOneChoice").val().trim();
// var choiceTwo = $("#playerTwoChoice").val().trim();


// round.push(choiceOne);
// round.push(choiceTwo);


// if(playerOneWinArray.includes(round) ) {
    
//     playerOnePoints++;

// }else if(playerTwoWinArray.includes(round)){

//     playerTwoPoints++

// }else if(round[0]===round[1]) {

//     console.log("It's a tie!");

// }