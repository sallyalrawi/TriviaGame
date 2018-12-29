// Trivia Game
// =============================

// // This code will run as soon as the page loads
window.onload = function() {
  $("#start-button").on("click", start);
  $("#done-button").on("click", stop);
};

//   //  Variable that will hold our setTimeout that runs the time
var intervalId;

//   // prevents the clock from being sped up unnecessarily
var clockRunning = false;
var time = 30;
var lap = 1;

// Game counters
var correctAnswer=0;
var incorrectAnswer=0;
var unanswered=0;

// define what happend in start function 
function start() {
 
  // Reset the time 
  time = 30;
  if (!clockRunning) {
    for (var i=30;i<=30;i--){
    intervalId = setInterval(count,1000);
    clockRunning = true;
    console.log(intervalId);
    $("#display").append("Time Remaining:",clockRunning);
  }
}
}

// define what happend in stop function  
function stop() {
  clearInterval(intervalId);
  clockRunning = false;
}
start();
stop();
// function recordLap() {
//       and save the result in a variable.
// var correctAnswer

//     // DONE: Add the current lap and time to the "laps" div.
// $("#laps").append("<p>Lap " + lap + " : " + converted + "</p>");

//     // DONE: Increment lap by 1. Remember, we can't use "this" here.
//     lap++;
//   }
function count() {
  //     // DONE: increment time by 1
  time++;

  //     // DONE: Get the current time, pass that into the timeConverter function,
  //     //       and save the result in a variable.
  var converted = timeConverter(time);
  console.log(converted);

  //     // DONE: Use the variable we just created to show the converted time in the "display" div.
  $("#display").text(converted);
}
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
function check(){
  var ques1 =document.container.ques1.value;
  var ques2 =document.container.ques2.value;
  var ques3 =document.container.ques3.value;
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
  document.getElementById("after-done").style.visibility ="visible";
  document.getElementById("number-correct").innerHTML ="correctAnswer:" + correctAnswer;
  document.getElementById("number-incorrect").innerHTML ="incorrectAnswer:" + incorrectAnswer;
  document.getElementById("number-unanswered").innerHTML ="unanswered:" + unanswered;
}