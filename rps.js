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

var playerOneWinArray = [ ['r','s'], ['p','r'], ['s','p'] ];
var playerTwoWinArray = [ ['s','r'], ['r','p'], ['p','s'] ];
var playerOnePoints = 0;
var playerTwoPoints = 0;
var round = [];
var playerOne = false;
var playerTwo = false;


// --------------------------------------------------------------

// Check and update app for Firebase data
database.ref().on("value", function(snapshot) {

    if (snapshot.child("playerOnePoints").exists() && snapshot.child("playerTwoPoints").exists() && snapshot.child("round").exists()) {
      // Set the variables equal to the stored values.
        playerOnePoints = parseInt(snapshot.val().playerOnePoints);
        playerTwoPoints = parseInt(snapshot.val().playerTwoPoints);
        round = snapshot.val().round;
    };
  
    console.log(playerOnePoints);
    console.log(playerTwoPoints);
    console.log(round);
  
    // If any errors are experienced, log them to console.
  }, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
  
// --------------------------------------------------------------


// database.ref().update({
//     highBidder: bidderName,
//     highPrice: bidderPrice
// });






function playerCheck(event){

    if(playerOne===true) {
        round[0]=$(event.target).attr("value");
    } else if (playerTwo=true) {
        round[1]=$(event.target).attr("value");
    };

    //update Firebase with player choice.
    database.ref().update({
        round: round
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