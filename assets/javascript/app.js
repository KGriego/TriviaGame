//Defines the variables used throughout
var correct = 0;
var wrong = 0;

//Variable nextQuestion will hold the setInterval when we start the quiz
var nextQuestionTimer;

//This is too know what question we are on
var numQuestion = 0;

var start = $("#startQuiz");
var next = $("#next");

var questionsArray = [
  {
    question : "In which game did Mario first appear?",
    choices: ["Mario Kart", "Super Mario Brothers", "The Legend Of Zelda", "Donkey Kong"],
    answer: 3,
    fact: "Mario first appeared was Donkey Kong, released in 1981. Back then, though, Donkey Kong was the bad guy, but Mario was still there saving the day.",
  },
  {
    question : "True or False? The Princess that Mario ever first saved was Princess Peach.",
    choices: ["true, false"],
    answer: "false",
    fact: "The damsel in distress that Mario first rescued was Pauline.",
  },
  {
    question : "Mario games have sold over 193 million units world-wide, and is the most successful video game series of all time.",
    choices: ["true, false"],
    answer: "true",
    fact: "Being one of the NES's first games, and by far the most popular, it is the most successful video game series of all time.",
  },
  {
    question : "Mario's original, and most recurring enemy in the Mario Brothers series is?",
    choices: ["Bowser", "Bullet Bill", "Blooper", "Dr. Robotnik"],
    answer: 0,
    fact: "Bowser, the king of the koopas, first appeared in Super Mario Brothers, and has been in most games since then.",
  },
  {
    question : "Mario has made many friends on his journeys. In Super Mario World, he made friends with a certain dinosaur. His name is?",
    choices: ["Sonic", "Yoshi", "Little Foot", "Charmander"],
    answer: 1,
    fact: "Super Mario World does, in fact, take place on Yoshi's Island. In this game, Yoshi's friends were kidnapped, and your quest is to help Yoshi find them.",
  },
  {
    question : "Mario's first 3D platformer game is?",
    choices: ["Super Mario World", "Super Mario Odyssey", "Super Mario Galaxy", "Super Mario 64"],
    answer: 3,
    fact: "The first 3D game is Super Mario 64, for the Nintendo 64. Its new features included not only 3D gameplay, but a whole bunch of new moves as well!",
  },
];

// assings the length of the questionsArray to a var
var questLength = questionsArray.length;


//prints one question until the right choice is clicked or the timer runs out
function nextQuestion () {

    //assings the question to the variable quest
    var quest = questionsArray[numQuestion].question;

    //prints the questions to the inquiry id
    $("#inquiry").append("<p>" + quest + "</p>");

    //adds to the numquestion variable to print the next question when ran again
    numQuestion++;
}

//This starts and stops the quiz
$(document).ready(function() {

    //this makes the quiz start and the isntructions disappear
    start.on("click", function() {
        $("#gameInstructions").fadeOut(200, function() {
            $(this).hide();
            $("body").css("background-color", "#fff");
            $("#gameContainer").fadeIn(200);
            console.log("I've been clicked");
        });
    });

    //Prints a question to the the paragraph inquiry
    if (next.on("click", nextQuestion()) || (start.on("click", nextQuestion()))) {

      }
});
