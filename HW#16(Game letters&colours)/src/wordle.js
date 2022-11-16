const letterElements = document.querySelectorAll(".letter-guess");
const gameStatusField = document.querySelector('.game-status');
const currentTrialField = document.querySelector('.current-trial');

const words = ['table', 'cacao', 'apple', 'adobe', 'earth', 'label'];
const N_LETTERS = 5;
const N_TRIALS = 6;
const COLOR_RED = 'red';
const COLOR_GREEN = 'green';
const COLOR_YELLOW = 'yellow';
let currentTrial = 0;

let word = '';
initialize();

function onChange(event) {
    clearFields();
    const wordGuess = event.target.value.toLowerCase();
    currentTrialField.innerHTML = 'Remaining trials: ' + (N_TRIALS-currentTrial++);
    event.target.value='';
    if (wordGuess.length != N_LETTERS) {
        alert(`A word should contain ${N_LETTERS} letters`);
        updateStatus(wordGuess, word);
    } else {
        const wordAr = Array.from(wordGuess);
        wordAr.forEach((l, i) => letterElements[i].innerHTML = l)
        const colors = wordAr.map((l, i) => {
            let index = word.indexOf(l);
            let res = COLOR_RED;
            if (index  > -1) {
                res = l == word.charAt(i) ? COLOR_GREEN : COLOR_YELLOW;

            }
            return res;
        })
        colors.forEach((c, i) => letterElements[i].style.color=c);
        updateStatus(wordGuess, word);
    }
 }

function updateStatus(wordGuess, word) {
    currentTrialField.innerHTML = 'Remaining trials: ' + (N_TRIALS-currentTrial);
    if(wordGuess === word) {
        // Congr
        gameStatusField.innerHTML = "Congratulations - you have guessed word \'" + 
        word + "\'" + ", spent trials="+currentTrial;
        gameStatusField.style.color = COLOR_GREEN;
        initialize();
    } else if(currentTrial == N_TRIALS) {
        // finish
        gameStatusField.innerHTML = "Sorry - your guess trials have ended up";
        gameStatusField.style.color = COLOR_RED;
        initialize();
    }
}

function initialize() {
    currentTrial = 0;
    word = getWord();
    console.log('word=', word);
    currentTrialField.innerHTML = 'Remaining trials: ' + (N_TRIALS-currentTrial);
}
function clearFields() {
    letterElements.forEach(e=>e.innerHTML='');
    gameStatusField.innerHTML = '';
}
function getWord() {
    return words[getRandomIntegerValue(0, words.length)];

}
function getRandomIntegerValue(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    // The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min) + min); 
}
