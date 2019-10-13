var squares = [
  {name: 'a1'},
  {name: 'a2'},
  {name: 'a3'},
  {name: 'a4'},
  {name: 'a5'},
  {name: 'a6'},
  {name: 'a7'},
  {name: 'a8'},
  {name: 'b1'},
  {name: 'b2'},
  {name: 'b3'},
  {name: 'b4'},
  {name: 'b5'},
  {name: 'b6'},
  {name: 'b7'},
  {name: 'b8'},
  {name: 'c1'},
  {name: 'c2'},
  {name: 'c3'},
  {name: 'c4'},
  {name: 'c5'},
  {name: 'c6'},
  {name: 'c7'},
  {name: 'c8'},
  {name: 'd1'},
  {name: 'd2'},
  {name: 'd3'},
  {name: 'd4'},
  {name: 'd5'},
  {name: 'd6'},
  {name: 'd7'},
  {name: 'd8'},
  {name: 'e1'},
  {name: 'e2'},
  {name: 'e3'},
  {name: 'e4'},
  {name: 'e5'},
  {name: 'e6'},
  {name: 'e7'},
  {name: 'e8'},
  {name: 'f1'},
  {name: 'f2'},
  {name: 'f3'},
  {name: 'f4'},
  {name: 'f5'},
  {name: 'f6'},
  {name: 'f7'},
  {name: 'f8'},
  {name: 'g1'},
  {name: 'g2'},
  {name: 'g3'},
  {name: 'g4'},
  {name: 'g5'},
  {name: 'g6'},
  {name: 'g7'},
  {name: 'g8'},
  {name: 'h1'},
  {name: 'h2'},
  {name: 'h3'},
  {name: 'h4'},
  {name: 'h5'},
  {name: 'h6'},
  {name: 'h7'},
  {name: 'h8'}
]

function randomSquarePrompt(){
  var i = Math.floor(Math.random() * 65);
  return squares[i].name;
};

function promptNewSquare(){
  squarePrompt.text(randomSquarePrompt());
  squarePrompt.fadeIn(600, function(){
    squarePrompt.fadeOut(700); // prompt Fade In
  }); // prompt button Fade In
  squareReminder.text(squarePrompt.text());
}

function wrongChoice (){
  squarePrompt.addClass('squarePromptWrong');
    squarePrompt.fadeIn(600, function(){
      squarePrompt.fadeOut(600, function (){
        squarePrompt.removeClass('squarePromptWrong');
      });
    }); 
}