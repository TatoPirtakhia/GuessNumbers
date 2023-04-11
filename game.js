

const humanGuessInput = document.getElementById('human-guess');

const roundNumberDisplay = document.getElementById('round-number');

const computerGuessDisplay = document.getElementById('computer-guess');
const humanScoreDisplay = document.getElementById('human-score');
const computerScoreDisplay = document.getElementById('computer-score');
const targetNumberDisplay = document.getElementById('target-number');
const computerWinsDisplay = document.getElementById('computer-wins');

const guessButton = document.getElementById('guess');
const nextRoundButton = document.getElementById('next-round');

let target;
guessButton.addEventListener('click',() =>{
     // randomnumber
    target = generateRandomNumber();
    // hyman number
    const humanNumber = humanGuessInput.value;
    // computers number
    const computerNumber = Math.floor(Math.random()*10);

    
    targetNumberDisplay.innerText = target;
    computerGuessDisplay.innerText = computerNumber;
    
    const humanWin = whoIsWiner(target,humanNumber,computerNumber);
    const winer = humanWin ? 'human': 'computer';
    
    updateScore(winer);

    if(humanWin) {
        guessButton.innerText = 'You Win!!!!!';
        guessButton.classList.toggle('winning-text');
    }else {
        computerWinsDisplay.innerText = 'Computer Wins!!!!';
    }

    humanScoreDisplay.innerText = humanScore;
    computerScoreDisplay.innerText = computerScore;

    guessButton.setAttribute('disabled', true)
    nextRoundButton.removeAttribute('disabled');

});

nextRoundButton.addEventListener('click',() =>{
    // update round    
    incrise();
    roundNumberDisplay.innerText = roundnumber;

    nextRoundButton.setAttribute('disabled',true);
    guessButton.removeAttribute('disabled');

       
    targetNumberDisplay.innerText = '?';
    guessButton.innerText = 'Make a Guess';
    computerGuessDisplay.innerText = '?';
    computerWinsDisplay.innerText = '';
    humanGuessInput.value = '';
    guessButton.classList.remove('winning-text');
});
    
    const addButton = document.getElementById('add');
    const subButton = document.getElementById('subtract')

addButton.addEventListener('click',() =>{
    humanGuessInput.value =+humanGuessInput.value+1;
    invisible(humanGuessInput.value)
})

subButton.addEventListener('click',()=>{
    humanGuessInput.value =+humanGuessInput.value-1;
    invisible(humanGuessInput.value)
})

const invisible = (value) =>{
    if (value>0 && value <=9){
        subButton.removeAttribute('disabled');
        addButton.removeAttribute('disabled');
    }else if(value >9) {
        addButton.setAttribute('disabled',true);
    }else if (value <= 0 ){
        subButton.setAttribute('disabled',true);
    }
}


humanGuessInput.addEventListener('input', function(e) {
    invisible(e.target.value);
  });
