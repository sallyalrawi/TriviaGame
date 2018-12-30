// Trivia Game
// =============================

//   //  Variable that will hold our setTimeout that runs the time
var timeRemaining =30;
var intervalId;
//   // prevents the clock from being sped up unnecessarily
var clockRunning = false;
var time = 0;
var lap = 1;

// Game counters
var correctAnswer=0;
var incorrectAnswer=0;
var unanswered=0;

// define what happend when clicking the start button

  $("#start-button").on("click", function() {
  // Reset the time 
  time = 0;
  if (!clockRunning) {
    
    intervalId = setInterval(count,1000);
    clockRunning = true;
    console.log(intervalId);
    $("#display").html("<p>" + "Time Remaining:" + clockRunning +"</p>");
  }

});

function count() {
  //     // DONE: increment time by 1
  time++;

  // Get the current time, pass that into the timeConverter function

  var converted = timeConverter(time);
  console.log(converted);

  //     // DONE: Use the variable we just created to show the converted time in the "display" div.
  $("#display").text("Time Remaining :" + converted);

function timeConverter(t) {
  var minutes = Math.floor(t / 60);
  var seconds = t - minutes * 60;

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  } else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}
}

// define what happend when click the done button 
$("#done-button").on("click", function(){

  clearInterval(intervalId);
  clockRunning = false;
 
    var ques1 =ques1.value;
    var ques2 =ques2.value;
    var ques3 =ques3.value;

     if (ques1=="The lion king"){
       correctAnswer++;
     }
     else{
       incorrectAnswer++;
     }
     if (ques2=="sporty spice"){
      correctAnswer++;
    }
    else{
      incorrectAnswer++;
    }
    if (ques3=="Portland Trailbazers"){
      correctAnswer++;
    } 
    else{
      incorrectAnswer++;
    }
    if (unanswered){
      unanswered++;
    }
  recordLap();
});

function recordLap() {
     
    // DONE: Add the current lap 
$("#after-done").append("<h1> " +  "Totally Trivial Trivia !" + "</h1>");
$("#after-done").append("<h2> " +  "All Done !" + "</h2>");
  document.getElementById("after-done").style.visibility ="visible";
  document.getElementById("number-correct").innerHTML ="correctAnswer:" + correctAnswer;
  document.getElementById("number-incorrect").innerHTML ="incorrectAnswer:" + incorrectAnswer;
  document.getElementById("number-unanswered").innerHTML ="unanswered:" + unanswered;

    // DONE: Increment lap by 1. 
    lap++;
  }

