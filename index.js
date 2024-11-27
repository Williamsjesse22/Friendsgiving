// Sample questions and answers
const questions = [
	{
		question: '',
		answers: {
			A: 'A',
			B: 'B',
			C: 'C',
			D: 'D',
		},
		correct: 'C',
	},
	{
		question: "",
		answers: {
			A: 'A',
			B: 'B',
			C: 'C',
			D: 'D',
		},
		correct: 'A',
	},
	{
		answers: {
			A: 'A',
			B: 'B',
			C: 'C',
			D: 'D',
		},
		correct: 'B',
	},
    {
		question: '',
		answers: {
			A: 'A',
			B: 'B',
			C: 'C',
			D: 'D',
		},
		correct: 'D',
	},
    {
		question: '',
		answers: {
			A: 'A',
			B: 'B',
			C: 'C',
			D: 'D',
		},
		correct: 'B',
	},
    {
		question: '',
		answers: {
			A: 'A',
			B: 'B',
			C: 'C',
			D: 'D',
		},
		correct: 'A',
	},
    {
		question: '',
		answers: {
			A: 'A',
			B: 'B',
			C: 'C',
			D: 'D',
		},
		correct: 'C',
	},
    {
		question: '',
		answers: {
			A: 'A',
			B: 'B',
			C: 'C',
			D: 'D',
		},
		correct: 'C',
	},
    {
		question: '',
		answers: {
			A: 'A',
			B: 'B',
			C: 'C',
			D: 'D',
		},
		correct: 'C',
	},
    {
		question: '',
		answers: {
			A: 'A',
			B: 'B',
			C: 'C',
			D: 'D',
		},
		correct: 'A',
	},
    {
		question: '',
		answers: {
			A: 'A',
			B: 'B',
			C: 'C',
			D: 'D',
		},
		correct: 'B',
	},
    {
		question: '',
		answers: {
			A: 'A',
			B: 'B',
			C: 'C',
			D: 'D',
		},
		correct: 'D',
	},
    {
		question: '',
		answers: {
			A: 'A',
			B: 'B',
			C: 'C',
			D: 'D',
		},
		correct: 'A',
	},
    {
		question: '',
		answers: {
			A: 'A',
			B: 'B',
			C: 'C',
			D: 'D',
		},
		correct: 'D',
	},
    {
		question: '',
		answers: {
			A: 'A',
			B: 'B',
			C: 'C',
			D: 'D',
		},
		correct: 'C',
	},
];

// Function to randomize the gradient background
function getRandomGradient() {
	const colors = [
		['#ff7e5f', '#feb47b'],
		['#6a11cb', '#2575fc'],
		['#00b4db', '#0083b0'],
		['#ff9a8b', '#ff6a88'],
		['#ff6a00', '#ee0979'],
	];
	const randomIndex = Math.floor(Math.random() * colors.length);
	return colors[randomIndex];
}

// Function to apply the randomized background gradient
function setBackground() {
	const [color1, color2] = getRandomGradient();
	document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
}

// Function to load the next question
let currentQuestionIndex = 0;

function loadNextQuestion() {
	const question = questions[currentQuestionIndex];

	// Set the question text in h1 element
	document.getElementById('question').innerText = question.question;

	// Set the answer options
	document.getElementById('answer-A').innerText = question.answers.A;
	document.getElementById('answer-B').innerText = question.answers.B;
	document.getElementById('answer-C').innerText = question.answers.C;
	document.getElementById('answer-D').innerText = question.answers.D;

	// Randomize the background colors after each question
	setBackground();

	// Reset previous selection styles before showing the new question
	resetAnswerButtons();

	// Enable all buttons for the next question
	enableAnswerButtons();

	// Hide the "Next Question" button initially (until an answer is selected)
	document.getElementById('next-question-btn').style.display = 'none';

	// Read the question aloud using SpeechSynthesis
	readQuestionAloud(question.question);
}

// Function to reset the answer buttons' styles (remove selected, disabled, hide classes)
function resetAnswerButtons() {
	const answerButtons = document.querySelectorAll('.answer');
	answerButtons.forEach((button) => {
		button.classList.remove('selected', 'disabled', 'hide');
	});
}

// Function to read the question aloud
function readQuestionAloud(questionText) {
	const utterance = new SpeechSynthesisUtterance(questionText);
	window.speechSynthesis.speak(utterance);
}

// Function to handle when an answer is selected
function handleAnswerSelection(selectedAnswer) {
	// Disable all answer buttons after selection
	disableAnswerButtons();

	// Move the selected answer to the center and resize it
	const selectedButton = document.getElementById(`answer-${selectedAnswer}`);
	selectedButton.classList.add('selected');

	// Show the "Next Question" button after answer selection
	document.getElementById('next-question-btn').style.display = 'inline-block';
}

// Function to disable all answer buttons
function disableAnswerButtons() {
	const answerButtons = document.querySelectorAll('.answer');
	answerButtons.forEach((button) => {
		button.classList.add('disabled');
		button.removeEventListener('click', buttonClickHandler);
	});
}

// Function to enable all answer buttons
function enableAnswerButtons() {
	const answerButtons = document.querySelectorAll('.answer');
	answerButtons.forEach((button) => {
		button.classList.remove('disabled');
		button.addEventListener('click', buttonClickHandler);
	});
}

// Function that handles the click event for an answer button
function buttonClickHandler(event) {
	const selectedAnswer = event.target.id.split('-')[1]; // Extract the answer letter (A, B, C, D)
	handleAnswerSelection(selectedAnswer);
}

// Initialize the first question
loadNextQuestion();

// Add event listeners to the answer buttons
document
	.getElementById('answer-A')
	.addEventListener('click', buttonClickHandler);
document
	.getElementById('answer-B')
	.addEventListener('click', buttonClickHandler);
document
	.getElementById('answer-C')
	.addEventListener('click', buttonClickHandler);
document
	.getElementById('answer-D')
	.addEventListener('click', buttonClickHandler);

// Handle the next question button
document.getElementById('next-question-btn').addEventListener('click', () => {
	// Move to the next question
	currentQuestionIndex++;

	if (currentQuestionIndex < questions.length) {
		loadNextQuestion();
	} else {
		alert('Quiz completed!');
		// Optionally restart the quiz or stop here
	}
});
