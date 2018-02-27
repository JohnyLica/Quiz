var questions = [
    new Question("What is the body temperature of a normal man?", ["81.°1", "36.9°C", "98.6C", "21.7C"], "36.9°C"),
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
        for (let index = 0; index < choices.length; index++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
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