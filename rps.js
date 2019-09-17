var config = {
       
    apiKey: "AIzaSyBtVDqdZY0xq0kabYw0ZgUkS1EB-kvLqtQ",
    authDomain: "rock-paper-scissors-ba8c4.firebaseapp.com",
    databaseURL: "https://rock-paper-scissors-ba8c4.firebaseio.com",
    projectId: "rock-paper-scissors-ba8c4",
    storageBucket: "",
    messagingSenderId: "255387682191",
    appId: "1:255387682191:web:c60c6ae66c35febc"

};

firebase.initializeApp(config);

// variable to reference the Firebase database
var database = firebase.database();

var playerOneWinArray = [ "r,s", "p,r", "s,p" ];
var playerTwoWinArray = [ "s,r", "r,p", "p,s" ];
var playerOnePoints = 0;
var playerTwoPoints = 0;
var tiePoints = 0;
var round = [];
var playerOne = false;
var playerTwo = false;

// ---------------------------------------------------------------------------------------------------

// Check and update app for Firebase data
database.ref().on("value", function(snapshot) {

    if (snapshot.child("playerOnePoints").exists() && snapshot.child("playerTwoPoints").exists() && snapshot.child("tiePoints").exists()) {
      // Set the variables equal to the stored values.
        playerOnePoints = parseInt(snapshot.val().playerOnePoints);
        playerTwoPoints = parseInt(snapshot.val().playerTwoPoints);
        tiePoints = parseInt(snapshot.val().tiePoints);
        // round = snapshot.val().round;
    };
  
    $("#playerOnePoints").text(playerOnePoints);
    $("#playerTwoPoints").text(playerTwoPoints);
    $("#tiePoints").text(tiePoints);
    // $("#playerBoard").text(round.toString());
    console.log(playerOnePoints);
    console.log(playerTwoPoints);
    console.log(round);
  
    // If any errors are experienced, log them to console.
  }, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
  
// ---------------------------------------------------------------------------------------------------



//inputs value to round array from the user's click.  Also checks for player one or player two inout.  Then updated Firebase DB.
function playerInput(event){

    if(playerOne===true) {
        round[0]=$(event.target).attr("value");
    } else if (playerTwo===true) {
        round[1]=$(event.target).attr("value");
    };

    //update Firebase with player choices and points.
    // database.ref().update({
    //     round: round,
    //     playerOnePoints: playerOnePoints,
    //     playerTwoPoints: playerTwoPoints,
    //     tiePoints: tiePoints,

    // });
     
};

//Checks if the results are in the playerOneWinArray or playerTwoWinArray.
function checkPlayerWin(array, elementCheck){

    if(array.includes(elementCheck.toString())){
        return true;
    } else {
        return false;
    };

};


//Checks the choices to see if both players made choices and determines winner, point counters and ties. Then empties array.
function checkArray() {

    if(round[0]===undefined || round.length===1){
        console.log("Awaiting other player...");
        $("#results").text("Awaiting other player...");
    
    } else if (round[0]===round[1]) {
        console.log("You tied!!!!");
        $("#results").text("You tied!!!!");
        tiePoints++;
        $("#tiePoints").text(tiePoints);
        round = [];
    };

    if(checkPlayerWin(playerOneWinArray,round)) {
        console.log("PlayerOneWins!!!!!!");
        $("#results").text("PlayerOneWins!!!!!!");
        playerOnePoints++;
        $("#playerOnePoints").text(playerOnePoints);
        round = [];
    }else if(checkPlayerWin(playerTwoWinArray,round)) {
        console.log("PlayerTwoWins!!!!!!");
        $("#results").text("PlayerTwoWins!!!!!!");
        playerTwoPoints++;
        $("#playerTwoPoints").text(playerTwoPoints);
        round = [];
    };

    database.ref().update({
        
        // round: round,
        playerOnePoints: playerOnePoints,
        playerTwoPoints: playerTwoPoints,
        tiePoints: tiePoints,

    });

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
    
    playerInput(event);
    checkArray();
    $("#playerChoice").text("Rock");
    $("#playerBoard").text(round.toString());
    console.log(round);
    
});

$("#paper").click( function(event) {
    
    playerInput(event);
    checkArray();
    $("#playerChoice").text("Paper");
    $("#playerBoard").text(round.toString());
    console.log(round);
    
});

$("#scissors").click( function(event) {
    
    playerInput(event);
    checkArray();
    $("#playerChoice").text("Scissors");
    $("#playerBoard").text(round.toString());
    console.log(round);
  
});