let currentQuestionIndex = 0;
let triviaQuestions = [];

async function fetchTriviaQuestions() {
    const category = document.getElementById("categoryDropdown").value;
    const apiUrl = `https://opentdb.com/api.php?amount=5&category=${category}&type=boolean`;

    try {
        const response = await fetch(apiUrl, {
            headers: {
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        triviaQuestions = data.results;
        currentQuestionIndex = 0;

        showNextQuestion();
    } catch (error) {
        console.error('Error fetching trivia questions:', error);
    }
}

function showNextQuestion() {
    if (currentQuestionIndex >= triviaQuestions.length) {
        document.getElementById("triviaDisplay").textContent = "No more questions!";
        return;
    }

    const question = triviaQuestions[currentQuestionIndex];
    document.getElementById("triviaQuestion").innerHTML = question.question; // Keep original HTML
}

function checkAnswer(answer) {
    const correctAnswer = triviaQuestions[currentQuestionIndex].correct_answer;
    const isCorrect = (correctAnswer === answer);

    const feedbackElement = document.getElementById("triviaFeedback");
    feedbackElement.textContent = isCorrect ? "Correct!" : "Incorrect!";
    feedbackElement.style.color = isCorrect ? "green" : "red";

    // Move to the next question
    currentQuestionIndex++;
    showNextQuestion();
}