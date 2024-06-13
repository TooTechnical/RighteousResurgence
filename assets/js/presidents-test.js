// assets/js/presidents-test.js
const questions = [
    {
        question: "What is the capital of the United States?",
        options: ["New York", "Los Angeles", "Washington D.C.", "Chicago"],
        answer: 2
    },
    {
        question: "Who was the first President of the United States?",
        options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
        answer: 1
    },
    {
        question: "What year did the United States declare independence?",
        options: ["1776", "1783", "1804", "1812"],
        answer: 0
    },
    {
        question: "How many branches are there in the United States government?",
        options: ["2", "3", "4", "5"],
        answer: 1
    },
    {
        question: "Who is known as the Father of the Constitution?",
        options: ["George Washington", "James Madison", "Alexander Hamilton", "Benjamin Franklin"],
        answer: 1
    },
    {
        question: "What is the supreme law of the land?",
        options: ["The Declaration of Independence", "The Articles of Confederation", "The Constitution", "The Federalist Papers"],
        answer: 2
    },
    {
        question: "How many amendments does the Constitution have?",
        options: ["10", "17", "23", "27"],
        answer: 3
    },
    {
        question: "Who was the main author of the Declaration of Independence?",
        options: ["George Washington", "Thomas Jefferson", "John Adams", "Benjamin Franklin"],
        answer: 1
    },
    {
        question: "Who is the Commander-in-Chief of the military?",
        options: ["The Vice President", "The Secretary of Defense", "The President", "The Chief Justice"],
        answer: 2
    },
    {
        question: "Which U.S. state was the last to be admitted to the Union?",
        options: ["Alaska", "Hawaii", "Arizona", "New Mexico"],
        answer: 1
    },
    {
        question: "What is the economic system in the United States?",
        options: ["Communism", "Socialism", "Capitalism", "Feudalism"],
        answer: 2
    },
    {
        question: "How many U.S. Senators are there?",
        options: ["50", "100", "435", "535"],
        answer: 1
    },
    {
        question: "What are the two major political parties in the United States?",
        options: ["Democratic and Republican", "Liberal and Conservative", "Libertarian and Green", "Federalist and Anti-Federalist"],
        answer: 0
    },
    {
        question: "Who is the current Chief Justice of the United States?",
        options: ["John Roberts", "Ruth Bader Ginsburg", "Clarence Thomas", "Sonia Sotomayor"],
        answer: 0
    },
    {
        question: "What movement tried to end racial discrimination?",
        options: ["Labor Movement", "Civil Rights Movement", "Women's Suffrage Movement", "Abolitionist Movement"],
        answer: 1
    }
];

const insults = [
    "Wrong! Sleepy Joe can't get it right!",
    "Come on man! Even my kids know this.",
    "You are a disaster just like Joe.",
    "You're a mess, just like Biden.",
    "Even Sleepy Joe knows this one!"
];

let lastUsedInsultIndex = null;

document.addEventListener('DOMContentLoaded', () => {
    loadQuiz();
});

function loadQuiz() {
    const quizContainer = document.getElementById('quiz');
    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `
            <h3>${question.question}</h3>
            ${question.options.map((option, i) => `
                <label>
                    <input type="radio" name="question${index}" value="${i}">
                    ${option}
                </label>
            `).join('')}
        `;
        quizContainer.appendChild(questionDiv);
    });
}

function getUniqueInsult() {
    let insultIndex;
    do {
        insultIndex = Math.floor(Math.random() * insults.length);
    } while (insultIndex === lastUsedInsultIndex);
    lastUsedInsultIndex = insultIndex;
    return insults[insultIndex];
}

function submitQuiz() {
    let score = 0;
    questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) === question.answer) {
            score++;
        }
    });

    let resultText = "";
    if (score === questions.length) {
        resultText = `<p>Congratulations! Donald Trump says: "I nominate you as my Vice President!"</p>`;
    } else {
        const insult = getUniqueInsult();
        resultText = `<p>${insult}</p>`;
    }
    resultText += `<p>Your final score is ${score} out of ${questions.length}</p>`;
    document.getElementById('result').innerHTML = resultText;
}
