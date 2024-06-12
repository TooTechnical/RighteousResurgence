const questions = [
    // Donald Trump Quiz Questions
    {
        question: "What color did Donald Trump famously call 'covfefe'?",
        options: ["Green", "Blue", "Red", "Covfefe"],
        answer: 3
    },
    {
        question: "Which country did Trump propose to build a 'big, beautiful wall'?",
        options: ["Canada", "Mexico", "Russia", "Australia"],
        answer: 1
    },
    {
        question: "What phrase did Trump use to describe his approach to negotiation?",
        options: ["Art of the Deal", "Art of the Steal", "Art of the Real", "Art of the Meal"],
        answer: 0
    },
    {
        question: "What is Trump's favorite social media platform?",
        options: ["Facebook", "Twitter", "Instagram", "TikTok"],
        answer: 1
    },
    {
        question: "Which of these animals did Trump compare himself to?",
        options: ["Lion", "Bear", "Elephant", "Stable Genius Horse"],
        answer: 3
    },
    {
        question: "Which fast food chain did Trump famously serve at the White House?",
        options: ["McDonald's", "Burger King", "Wendy's", "All of the above"],
        answer: 3
    },
    {
        question: "What did Trump suggest injecting to cure COVID-19?",
        options: ["Bleach", "Vitamins", "Water", "Sunshine"],
        answer: 0
    },
    {
        question: "Where did Trump say he had the 'biggest crowd ever'?",
        options: ["His inauguration", "A rally in Florida", "A campaign event in Ohio", "His birthday party"],
        answer: 0
    },
    {
        question: "What name did Trump give to the media?",
        options: ["Fake News", "True News", "Real News", "Honest News"],
        answer: 0
    },
    {
        question: "Which one of these does Trump claim to know the most about?",
        options: ["Economy", "Climate change", "Healthcare", "Windmills"],
        answer: 3
    },
    {
        question: "Who did Trump refer to as 'Sleepy'?",
        options: ["Joe Biden", "Hillary Clinton", "Bernie Sanders", "Barack Obama"],
        answer: 0
    },
    {
        question: "What did Trump say he could do without losing voters?",
        options: ["Shoot someone on Fifth Avenue", "Quit Twitter", "Declare martial law", "Eat a salad"],
        answer: 0
    },
    {
        question: "What nickname did Trump give to Kim Jong Un?",
        options: ["Little Rocket Man", "Big Rocket Man", "Tiny Dancer", "King Jong Un"],
        answer: 0
    },
    {
        question: "Which event did Trump controversially say had 'fine people on both sides'?",
        options: ["Charlottesville rally", "Women's March", "Climate strike", "Oscar's red carpet"],
        answer: 0
    },
    {
        question: "What did Trump suggest to 'Make America Great Again'?",
        options: ["Building a wall", "Cutting taxes", "All of the above", "Asking libtards to stop whining"],
        answer: 2
    },
    // Joe Biden Quiz Questions
    {
        question: "What did Joe Biden famously call 'a big f*ing deal'?",
        options: ["His presidency", "Obamacare", "His vice presidency", "His ice cream cone"],
        answer: 1
    },
    {
        question: "Which phrase did Biden confuse with 'truth over facts'?",
        options: ["Facts over truth", "Facts over feelings", "Truth over feelings", "Lies over facts"],
        answer: 0
    },
    {
        question: "What did Biden claim to be from Scranton?",
        options: ["George Washington", "Joe Biden", "Barack Obama", "Abraham Lincoln"],
        answer: 1
    },
    {
        question: "What did Biden say about poor kids?",
        options: ["They can achieve anything", "They are just as bright as white kids", "They need better schools", "They are the future"],
        answer: 1
    },
    {
        question: "What creature did Biden mention having hairy legs?",
        options: ["A spider", "A dog", "Himself", "A bear"],
        answer: 2
    },
    {
        question: "Who did Biden call 'a lying, dog-faced pony soldier'?",
        options: ["Donald Trump", "A voter", "Hillary Clinton", "Bernie Sanders"],
        answer: 1
    },
    {
        question: "What did Biden confuse the state he was in during a speech?",
        options: ["Iowa and Ohio", "New Hampshire and Vermont", "Florida and Georgia", "California and Nevada"],
        answer: 0
    },
    {
        question: "What did Biden call the presidency of Trump?",
        options: ["A disaster", "A joke", "A clown show", "All of the above"],
        answer: 3
    },
    {
        question: "What did Biden mistake his wife for?",
        options: ["His sister", "His mother", "His cousin", "A teacher"],
        answer: 0
    },
    {
        question: "What did Biden call the African American community?",
        options: ["Monolithic", "Diverse", "Talented", "Brilliant"],
        answer: 0
    },
    {
        question: "What did Biden say about being able to stay in his basement?",
        options: ["Because of a teleprompter", "Because of Trump", "Because of science", "Because of Zoom"],
        answer: 3
    },
    {
        question: "What food did Biden claim was his favorite?",
        options: ["Ice cream", "Pizza", "Tacos", "Burgers"],
        answer: 0
    },
    {
        question: "What did Biden refer to as 'the thing'?",
        options: ["The Constitution", "The Declaration of Independence", "The Bill of Rights", "The Federalist Papers"],
        answer: 1
    },
    {
        question: "What did Biden say about being for Trump or him?",
        options: ["'You ain't black'", "'You ain't right'", "'You ain't smart'", "'You ain't American'"],
        answer: 0
    },
    {
        question: "What did Biden say about working with segregationists?",
        options: ["They were decent people", "They had good manners", "They were necessary", "They were his mentors"],
        answer: 0
    }
];

let currentQuestionIndex = 0; // Keeps track of the current question index
let score = 0; // Keeps track of the user's score
let incorrectAnswers = 0; // Keeps track of the number of incorrect answers
let timeLeft = 300; // Sets the total quiz time in seconds (5 minutes)
let timerInterval; // Stores the interval ID for the timer

// Event listener for when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    loadQuestion(); // Load the first question
    startTimer(); // Start the timer
});

// Function to load a question
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex]; // Get the current question
    document.getElementById('question').textContent = currentQuestion.question; // Display the question text
    const options = document.querySelectorAll('.option'); // Get all option buttons
    options.forEach((option, index) => {
        option.textContent = currentQuestion.options[index]; // Set the text for each option
        option.disabled = false; // Enable the option buttons
        option.style.backgroundColor = ''; // Reset the background color
    });
    document.getElementById('result').textContent = ''; // Clear the result text
}

// Function to check the selected answer
function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex]; // Get the current question
    const result = document.getElementById('result'); // Get the result element
    const options = document.querySelectorAll('.option'); // Get all option buttons
    options.forEach(option => option.disabled = true); // Disable all option buttons after selection
    if (selectedOption === currentQuestion.answer) {
        result.textContent = 'Correct!'; // Display correct message
        result.style.color = 'green'; // Set the result color to green
        score++; // Increment the score
    } else {
        result.textContent = `Wrong! The correct answer is ${currentQuestion.options[currentQuestion.answer]}.`; // Display wrong message
        result.style.color = 'red'; // Set the result color to red
        incorrectAnswers++; // Increment the number of incorrect answers
    }
    setTimeout(nextQuestion, 2000); // Wait 2 seconds before moving to the next question
}

// Function to load the next question or end the quiz
function nextQuestion() {
    currentQuestionIndex++; // Increment the question index
    if (currentQuestionIndex < questions.length) {
        loadQuestion(); // Load the next question if available
    } else {
        clearInterval(timerInterval); // Stop the timer
        displayFinalMessage(); // Display the final message
    }
}

// Function to display the final message based on the number of incorrect answers
function displayFinalMessage() {
    let finalMessage = '';
    if (incorrectAnswers === 0) {
        finalMessage = "We will make America strong again. We will make America proud again. We will make America safe again. And we will make America great again!";
    } else if (incorrectAnswers === 1) {
        finalMessage = "Joe Biden is a puppet for the radical left";
    } else if (incorrectAnswers === 2) {
        finalMessage = "Joe Biden doesn’t know he’s alive";
    } else if (incorrectAnswers === 3) {
        finalMessage = "Joe's got a lot of problems";
    } else if (incorrectAnswers === 4) {
        finalMessage = "Wake Up Sleepy Joe";
    } else {
        finalMessage = "Biden has a record of failure. He’s been in politics for 47 years and accomplished nothing";
    }
    document.getElementById('quiz-container').innerHTML = `<h3>${finalMessage}</h3>`;
}

// Function to start the timer
function startTimer() {
    const timerDisplay = document.getElementById('timer'); // Get the timer display element
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval); // Stop the timer if time runs out
            displayFinalMessage(); // Display the final message
        } else {
            timeLeft--; // Decrement the time left
            const minutes = Math.floor(timeLeft / 60); // Calculate minutes
            const seconds = timeLeft % 60; // Calculate seconds
            timerDisplay.textContent = `Time left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`; // Display the remaining time
        }
    }, 1000); // Update the timer every second
}
