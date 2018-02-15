var HangmanWords = [
    "Browns","Benglas","Steelers","Ravens","Indians","Cubs","Dodgers","Astros", "Yankees"
  ];
  
  var anyNumber = Math.floor(Math.random() * 100);
  var anyWord = HangmanWords[anyNumber];
  var scorecount = anyWord.length;
  var scoretotal = [];
  var counter = anyWord.length +3;
  var TestNumber = 0;
  var GuessedLetters = [];
  
  
  var GuessedLettersClass = document.querySelector('.guessed-letters');
  var li = document.getElementsByClassName('.guess-box');
  var textValue = document.querySelector('.text-value');
  var attemptTitle = document.querySelector('.attempt-title');
  var hangmanWordClass = document.querySelector('.hangman-words');
  var hangmanLettersClass = document.querySelector('.hangman-letters');

  
  attemptTitle = "Remaining attemps: " + counter;
  console.log(anyWord);

  
  for (i=0;i<scorecount;i+=1) {
    scoretotal.push("_ ");
    scoretotal.join(" ");
    var underscoreArrString = scoretotal.toString();
    var underscoreArrEdited = underscoreArrString.replace(/,/g," ");
    hangmanLettersClass.innerHTML = underscoreArrEdited;
  }
  }
  
  function checkGuess() {
    for (var i=0;i<anyWord.length;i+=1) {
      if (personGuess === anyWord[i]) {
          console.log(personGuess);
          TestNumber
     = i;
          li[i].textContent = anyWord[i];
          i += 20;
          textValue.value= "";
      } else if ((anyWord.length - 1) > i ) {
          console.log("valid");
      } else {
          pushGuess();
          counter -= 1;
          attemptTitle.innerHTML = "Remaining attempts: " + counter;
          textValue.value= "";
      }
    }
  };