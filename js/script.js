const guessedLettersElement = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const inputMessage = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
       console.log(letter);
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    // Empty message paragraph
    inputMessage.innerText = "";
    const guess = letterInput.value;
    // console.log(guess);
    const correctGuess = validateInput(guess);
    console.log(correctGuess);

    if (correctGuess) {
        makeGuess(guess);
    }
    letterInput.value = "";
});

const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    // empty input
    if (input.length === 0) {
        inputMessage.innerText = "Please enter a letter.";
    //Too many letters    
    } else if (input.length > 1) {
        inputMessage.innerText = "Please enter only one letter.";
    //Used a number or special character    
    } else if (!input.match(acceptedLetter)){
        inputMessage.innerText = "Make sure you enter a letter from A-Z.";
    } else {
        return input;
    }
}

const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        inputMessage.innerText = "You already guessed that letter. Please try again.";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
    }
};