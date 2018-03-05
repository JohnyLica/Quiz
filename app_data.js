var questions = [
    new Question("What is the body temperature of a normal man?", ["81.1&#176;C", "36.9&#176;C", "98.6&#176;C", "21.7&#176;C"], "36.9&#176;C"),
    new Question("Which of the following helps in clotting of blood?", ["Vitamin B1", "Vitamin B2", "Vitamin D", "Vitamin K"], "Vitamin K"),
    new Question("Total volume of the blood in a normal adult human being is", ["5-6 liters", "3-4 liters", "8-10 liters", "10-12 liters"], "5-6 liters"),
    new Question("Red blood corpuscles are formed in the", ["Liver", "Bone marrow", "Kidneys", "Heart"], "Bone marrow"),
    new Question("How many bones are there in an adult human being", ["210", "260", "206", "300"], "206")
];

var quiz = new Quiz(questions);

populate();

function populate() {
    if (quiz.isEnded()) {
        showScores();
    }
    else {

        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        var choices = quiz.getQuestionIndex().choices;
        for (var index = 0; index < choices.length; index++) {
            var element = document.getElementById("choice" + index);
            element.innerHTML = choices[index];
            guess("btn" + index, choices[index]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
};

function showProgress(){
    var currentQuestionNumber = quiz.questionsIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question" + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores(){
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
}