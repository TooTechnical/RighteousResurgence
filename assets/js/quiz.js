const questions = [
    {
        question: "What year did Donald Trump first become President of the United States?",
        options: ["2008", "2012", "2016", "2020"],
        answer: 2
    },
    {
        question: "What is Joe Biden's middle name?",
        options: ["Joseph", "Robinette", "Robert", "James"],
        answer: 1
    },
    // Add more questions as needed
];

let currentQuestionIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
});

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.textContent = currentQuestion.options[index];
    });
    document.getElementById('result').textContent = '';
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    const result = document.getElementById('result');
    if (selectedOption === currentQuestion.answer) {
        result.textContent = 'Correct!';
        result.style.color = 'green';
    } else {
        result.textContent = `Wrong! The correct answer is ${currentQuestion.options[currentQuestion.answer]}.`;
        result.style.color = 'red';
    }
}

function nextQuestion() {
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    loadQuestion();
}
