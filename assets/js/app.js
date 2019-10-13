const square = $('.square');
const startButton = $('.startButton');
const squarePrompt = $('.squarePrompt');
const scoreDisplay = $('.score');
const scoreContainer = $('.scoreDisplay');
const squareReminder = $('.squareReminder');
const timesUp = $('.timesUp');
const progressBar = $('#progressbar');
const description = $('.description');
const correctSound = new Howl({src: ['/assets/sounds/correct2.mp3']});
const errorSound = new Howl({src: ['/assets/sounds/mistake.mp3']});

var score = 0;
var timeLeft = 30;
var percentageLeft = 100;
progressBar.progressbar({value : percentageLeft});

//Initializes Game
startButton.click(function (){
  timesUp.fadeOut();
  startButton.fadeOut();
  description.fadeOut();
  scoreContainer.fadeIn();
  squareReminder.fadeIn();
  promptNewSquare();
  timeLeft = 30;
  percentageLeft = 100;
  score = 0;
  scoreDisplay.text(score);
  var countdownTimer = setInterval(() => {
    timeLeft -= 1;
    percentageLeft -= 3.333;
    progressBar.progressbar({value : percentageLeft});
    if (timeLeft <= 0){
      clearInterval(countdownTimer);
      timesUp.fadeIn();
      startButton.text('Play Again?')
      startButton.fadeIn();
    }
  }, 1000);
});

// Generates Squares to Be Clicked.
square.click(function (){ 
  if ($(this).attr('id') === squarePrompt.text()){ // compares clicked square to textcontent
    correctSound.play();
    $(this).addClass('correct');
    $(this).fadeTo(500, 1, function(){$('.square').removeClass('correct');});
    score++;
    scoreDisplay.text(score);
    promptNewSquare();
  }else{
    errorSound.play();
    $(this).addClass('wrong');
    $(this).fadeTo(500, 1, function(){$('.square').removeClass('wrong');} );
    wrongChoice();
  }
});
