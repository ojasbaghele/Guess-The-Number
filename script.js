'use strict';
let secretNumber = Math.trunc(Math.random()*20+1);
let score = 20;
let highscore =0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function (){
    const guess = Number(document.querySelector('.guess').value);
    if(!guess){
       //! document.querySelector('.message').textContent = '👾 No Number!';
       displayMessage('👾 No Number!');
    }
    //* Player Win
    else if(guess === secretNumber){
        document.querySelector('.number').textContent = secretNumber;
        //! document.querySelector('.message').textContent = '🤘 Correct Number';
        displayMessage('🤘 Correct Number');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if (guess !== secretNumber) {
        if(score > 1){
            // ! document.querySelector('.message').textContent = guess > secretNumber ? 
            // ! '📈 Too High': '📉Too Low';
            displayMessage(guess > secretNumber ? '📈 Too High' : '📉Too Low');
            score--;
            document.querySelector('.score').textContent = score; 
        }else {
            document.querySelector('.message').textContent = '😕 You Lost The Game';
            score = 0;
            document.querySelector('.score').textContent = score;
        }
    }
    //! DRY Principle !
    // else if (guess > secretNumber){  
    //     if(score > 1){
    //         document.querySelector('.message').textContent = '📈 Too High';
    //         score--;
    //         document.querySelector('.score').textContent = score;               
    //     }else {
    //         document.querySelector('.message').textContent = '😕 You Lost The Game';
    //         score = 0;
    //         document.querySelector('.score').textContent = score;
    //     }
    // }
    // else if (guess < secretNumber){
    //     if(score > 0){
    //     document.querySelector('.message').textContent = '📉Too Low';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    // }else {
    //     document.querySelector('.message').textContent = '😕 You Lost The Game';
    //     score = 0;
    //     document.querySelector('.score').textContent = score;
    // }
    // }

});
document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random()*20+1);
    // ! document.querySelector('.message').textContent = 'Start Guessing...';
    displayMessage('Start Guessing...')
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value ='';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})