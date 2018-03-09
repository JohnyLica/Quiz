var questions = [];

$.getJSON('https://api.myjson.com/bins/no2ah', function (data) {
    questions = data;


    function createQuiz(loadedQuestions, quiz) {
        const output = [];
        loadedQuestions.forEach((currentQuestion, questionNumber) => {
            var answers = [];
            for (var item in currentQuestion.answers) {
                answers.push(
                    `<li class="list-group-item list-group-item-info">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input align="center" type="radio" name="question${questionNumber}" value="${item}">
                                    ${item} : ${currentQuestion.answers[item]}
                                </label>
                            </div>
                        </li> <br>`
                );
            }
            output.push(
                `<div class="slide">
                        <div class="card-block">
                            <h4 class="card-title">${currentQuestion.question}</h4>
                        </div>
                        <ul class="list-group list-group-flush answers">${answers.join("")}</ul>
                    </div>`
            );
        });

        quiz.innerHTML = output.join("");
    }

    function showResults() {

        const answerContainers = quiz.querySelectorAll(".answers");
        let numCorrect = 0;

        questions.forEach((currentQuestion, questionNumber) => {

            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
                answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                answerContainers[questionNumber].style.color = "red";
            }
        });

        resultsContainer.innerHTML = `${numCorrect} out of ${questions.length}`;
    }

    function showSlide(n) {
        slides[currentSlide].classList.remove("active-slide");
        slides[n].classList.add("active-slide");
        currentSlide = n;

        if (currentSlide === 0) {
            previousBtn.style.display = "none";
        } else {
            previousBtn.style.display = "inline-block";
        }

        if (currentSlide === slides.length - 1) {
            nextBtn.style.display = "none";
            submitBtn.style.display = "inline-block";
        } else {
            nextBtn.style.display = "inline-block";
            submitBtn.style.display = "none";
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }


    var currentSlide = 0;
    const previousBtn = document.getElementById("previous");
    const nextBtn = document.getElementById("next");
    const submitBtn = document.getElementById("submit");
    const quiz = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");

    createQuiz(questions, quiz);

    const slides = document.querySelectorAll(".slide");

    showSlide(0);

    submitBtn.addEventListener("click", showResults);
    previousBtn.addEventListener("click", showPreviousSlide);
    nextBtn.addEventListener("click", showNextSlide);
});