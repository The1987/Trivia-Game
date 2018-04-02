// Javascript.js for Trivia Game //

///// THE TIMER /////    
//  Interval Demonstration
//  Set our number counter to 60 for 60 seconds.
var number = 60;

//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;

$("#enter-button").on("click", run);


//function enter() {
$(document).ready(run);

//  When the stop button gets clicked, run the stop function.
$("#stop").on("click", stop);

//  When the resume button gets clicked, execute the run function.
//$("#resume").on("click", run);

//  The run function sets an interval
//  that runs the decrement function once a second.
//  *****BUG FIX******** 
//  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

//  The decrement function.
function decrement() {
  //  Decrease number by one.
  number--;
  //  Show the number in the #show-number tag.
  $("#time-remaining").html("<h2 style='font-size: 20px; padding:0px;margin-bottom: 0px;'>Time Remaining: " + number + " seconds</h2>");
  //  Once number hits zero...
  if (number === 0) {

    //  ...run the stop function.
    stop();

    //  Alert the user that time is up.
    alert("Times Up! You Lose!");
  }
}

//  The stop function
function stop() {

  //  Clears our intervalId
  //  We just pass the name of the interval
  //  to the clearInterval function.
  clearInterval(intervalId);
}
/*
var correct = 0;
var wrong = 0;

// When input is click/selected function will run
$('input').on("click", function () {

// if input is 0
if ($('input').val(0));{

// Add +1 to wrong
wrong = wrong + 1
}

// Else add +1 to correct
else {
correct = correct + 1
}

/*
$('#submitButton').on("click", function () {
  // var a = $('.Q1').val('input[value=""]');
  
  //console.log(a);
  //document.write(a);

  if (a === "0") {
    //losses++;
    $("#losses").html("Losses: " + 1);
    console.log(losses);
  }
  else {
    wins = wins + 1;
    $("#wins").html("Wins: " + wins);
    console.log(wins);
  }
});

//|| (b === 0) || (c === 0)) */