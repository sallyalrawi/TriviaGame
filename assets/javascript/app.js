// Trivia Game
// =============================

//   //  Variable that will the time
var timeRemaining = 30;
var intervalId;
//   // prevents the clock from being sped up unnecessarily
var clockRunning = false;
var time = 0;
var lap = [];

// Game counters
var correctAnswer = 0;
var incorrectAnswer = 0;
var unanswered = 0;

// define what happend when clicking the start button

$("#start-button").on("click", function() {
  // Reset the time
  time = 0;
  if (!clockRunning) {
    intervalId = setInterval(decrement, 1000);
    clockRunning = true;
    console.log("intervalid:" + intervalId);
  }
});

function decrement() {
  // decrement time by 1

  timeRemaining--;

  $("#display").html("<p>" + "Time Remaining:" + timeRemaining + "</p>");

  if (timeRemaining === 0) {
    stop();

    recordLap();
  }
}

function stop() {
  clearInterval(intervalId);
}

// define what happend when click the done button
$("#done-button").on("click", function() {
  clearInterval(intervalId);
  clockRunning = false;
  recordLap();
  $("#after-done").text(recordLap);
  // console.log(recordLap);
});

$("input[name=ques1]").on("click", function() {
  var answer = $(this).attr("value");
  var numberAnswer = parseInt(answer);
  if (numberAnswer === 4) {
    correctAnswer++;
    console.log("question 1 correct answer:" + true);
  } else if (unanswered) {
    unanswered++;
    console.log("question 1 unanswered:" + unanswered);
  } else {
    incorrectAnswer++;
    console.log("question 1 incorrect answer:" + false);
  }
});
$("input[name=ques2]").on("click", function() {
  var answer = $(this).attr("value");
  var numberAnswer = parseInt(answer);
  if (numberAnswer === 1) {
    correctAnswer++;
    console.log("question 2 correct answer:" + true);
  } else if (unanswered) {
    unanswered++;
    console.log("question 2 unanswer:" + unanswered);
  } else {
    incorrectAnswer++;
    console.log("question 2 incorrect answer:" + false);
  }
});
$("input[name=ques3]").on("click", function() {
  var answer = $(this).attr("value");
  var numberAnswer = parseInt(answer);
  if (numberAnswer === 2) {
    correctAnswer++;
    console.log("question 3 correct answer:" + true);
  } else if (unanswered) {
    unanswered++;
    console.log("question 3 unanswered:" + unanswered);
  } else {
    incorrectAnswer++;
    console.log("question 3 incorrect answer:" + false);
  }
  $("#number-unaswered").text(unanswered);
});

function recordLap() {
  //  Add the current lap
  $("#All-Done").html("<h2>All Done!</h2>");
  $("#number-correct").html("<p>" + "correctAnswer:" + correctAnswer + "</p>");
  $("#number-incorrect").html(
    "<p>" + "incorrectAnswer:" + incorrectAnswer + "</p>"
  );
  unanswered = 3 - correctAnswer - incorrectAnswer;
  $("#number-unaswered").html("<p>" + "unanswered:" + unanswered + "</p>");
  // Increment lap by 1.
  lap++;
  console.log('record lap:' + recordLap);
}
if (time === timeRemaining) {
  recordLap();
  $("#after-done").text(recordLap);
  unanswered = 3 - correctAnswer - incorrectAnswer;
  $("#number-unaswered").text(unanswered);
}
