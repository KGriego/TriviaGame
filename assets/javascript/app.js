//stores how many correct and wrong answered question
var correct = 0;
var wrong = 0;

//Variable nextQuestion will hold the setInterval when we start the quiz
var nextQuestionTimer;

//This is to know what question and choice we are on
var numQuestion = 0;
var optionsNumber = 0;

//assigns variables to elements from the html page for easier access
var $start = $("#startQuiz");
var $next = $("#next");

var questionsArray = [
  {
    question : "In which game did Mario first appear?",
    choices: ["Mario Kart", "Super Mario Brothers", "The Legend Of Zelda", "Donkey Kong"],
    answer: 3,
    fact: "Mario first appeared was Donkey Kong, released in 1981. Back then, though, Donkey Kong was the bad guy, but Mario was still there saving the day."
  },
  {
    question : "True or False? The Princess that Mario ever first saved was Princess Peach.",
    choices: ["true, false"],
    answer: "false",
    fact: "The damsel in distress that Mario first rescued was Pauline."
  },
  {
    question : "Mario games have sold over 193 million units world-wide, and is the most successful video game series of all time.",
    choices: ["true, false"],
    answer: "true",
    fact: "Being one of the NES's first games, and by far the most popular, it is the most successful video game series of all time."
  },
  {
    question : "Mario's original, and most recurring enemy in the Mario Brothers series is?",
    choices: ["Bowser", "Bullet Bill", "Blooper", "Dr. Robotnik"],
    answer: 0,
    fact: "Bowser, the king of the koopas, first appeared in Super Mario Brothers, and has been in most games since then."
  },
  {
    question : "Mario has made many friends on his journeys. In Super Mario World, he made friends with a certain dinosaur. His name is?",
    choices: ["Sonic", "Yoshi", "Little Foot", "Charmander"],
    answer: 1,
    fact: "Super Mario World does, in fact, take place on Yoshi's Island. In this game, Yoshi's friends were kidnapped, and your quest is to help Yoshi find them."
  },
  {
    question : "Mario's first 3D platformer game is?",
    choices: ["Super Mario World", "Super Mario Odyssey", "Super Mario Galaxy", "Super Mario 64"],
    answer: 3,
    fact: "The first 3D game is Super Mario 64, for the Nintendo 64. Its new features included not only 3D gameplay, but a whole bunch of new mo ves as well!"
  },
]; 

// assings the length of the questionsArray to a var
var questLength = questionsArray.length;
console.log("questLength = questionsArray.length: " + questLength);

//assings the length of the choices to optionsLength
var optionsLength = questionsArray[numQuestion].choices.length;
console.log("optionsLength = questionsArray[numQuestion].choices.length: " + optionsLength);

//assigns the answer value to the correctAnswer variable
var correctAnswer = questionsArray[numQuestion].answer;
console.log("correctAnswer = questionsArray[numQuestion].answer: " + correctAnswer);

//prints one question until the right choice is clicked or the timer runs out
function nextQuestion () {

    //assings the question to the variable quest
    var quest = questionsArray[numQuestion].question;

    //prints the questions to the inquiry id
    $("#inquiry").append("<p>" + quest + "</p>");

 }
  
function answerOptions() {
      for (optionsNumber = 0; optionsNumber < optionsLength; optionsNumber++) {
    
        //assings the choices from the array to the variable options
        var options = questionsArray[numQuestion].choices[optionsNumber];
      
        //writes the options to the optionsContainer
        $("#optionsContainer").append("<input type='radio' class='choices' id=" + optionsNumber + ">" + options +  "<br>");
      }
      numQuestion++;
};

//get the correct answer from the html written

//if correctOption is equal to userInput correct goes up, otherwise wrong goes up
// if ($correctOption === UserChoice) {
//   correct++;
//   console.log(correct);
// }
// next.click(function() {
//     .checked;
// });

//This starts and stops the quiz
$(document).ready(function() {

  //this makes the quiz start and the isntructions disappear
  $start.on("click", function() {
    $("#gameInstructions").fadeOut(200, function() {
      $(this).hide();
      $("body").css("background-color", "#fff");
      $("#gameContainer").fadeIn(200);
      nextQuestion();
      answerOptions();
      console.log("You clicked the start button!");
    });
  });

  $next.on("click", function() {

    var $correctOption = $("#" + correctAnswer);
    console.log("Correct Option: " + $correctOption);

    for (i = 0; i < optionsLength; i++) {
      var $selectedChoice = $('input:radio[id=' + i + ']:checked');

      
      //if answer is the same as the button index, the question is answered correctly, otherwise it is answered wrong
      if ($correctOption === $selectedChoice) {
        correct++;
        console.log("Correct Choices: " + correct);
        console.log("You clicked the right answer");
      } else ($correctOption !== $selectedChoice); {
        wrong++;
        console.log("Wrong Answer: " + wrong);
        console.log("You clicked the wrong answer!");
      }
    };
  });
})