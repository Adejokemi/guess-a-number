'use strict';

let secretNumber = Math.trunc(Math.random() * 20) +1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}
const displayNumber = function (number) {
    document.querySelector('.number').textContent = number;
}
const displayScore = function (score) {
    document.querySelector('.score').textContent = score;
}


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number (document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    
//when there's no input
    if(!guess) {
       displayMessage('⛔ No number!');
        
        //when player wins
    }else if(guess === secretNumber) {
        displayMessage('🎉 Correct Number')
        displayNumber(secretNumber)
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        
        //when guess is wrong
    }else if(guess !== secretNumber) {
        if (score > 1) {
          displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!')
            score--;
            displayScore(score)
        }else {
            displayMessage('💥 you lost the game!')
            displayScore(0)
        }
    }


    //     //when guess is too low
    // }else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📉 Too low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }else {
    //         document.querySelector('.message').textContent = '💥 you lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }

    //     //when guess is too high
    // }else if(guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📈 Too high!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }else {
    //         document.querySelector('.message').textContent = '💥 you lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
        
});


document.querySelector('.again').addEventListener ('click' , function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) +1;
    displayMessage('Start guessing...')
    displayScore(score)
    displayNumber('?')
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#231f46';
    document.querySelector('.number').style.width = '15rem';
})