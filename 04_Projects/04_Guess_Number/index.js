let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses'); // Update the selector
const remaining = document.querySelector('#lastresult');
const lowOrHi = document.querySelector('.lowOrHi'); // Update the selector
const startOver = document.querySelector('#startOver'); // Add this line

let prevGuesss = []
let numGuess = 1
let playGame = true

if (playGame) {
    submit.addEventListener('click', function (events) {
        events.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Please Enter a valid number ranging between 1 to 100 only")
    }
    else {
        prevGuesss.push(guess);
        if (numGuess > 10) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You Guessed it right`)
        endGame()
    }
    else if (guess < randomNumber) {
        displayMessage(`Number is too low, try something bigger`)
    }
    else if (guess > randomNumber) {
        displayMessage(`Number is too high, try something smaller`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    const p = document.createElement('p'); // Move this line inside endGame
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    let newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuesss = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${10 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}
