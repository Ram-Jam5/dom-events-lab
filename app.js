/*
// As a user, I want to be able to select numbers so that I can perform operations with them.
// As a user, I want to be able to add two numbers together.
// As a user, I want to be able to subtract one number from another.
// As a user, I want to be able to multiply two numbers together.
// As a user, I want to be able to divide one number by another.
// As a user, I want to be able to see the output of the mathematical operation.
// As a user, I want to be able to clear all operations and start from 0.
*/






/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/



/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const numberButton = document.querySelector('.button number');
const display = document.querySelector('.display');
const row = document.querySelector('.row')
const bodyElement = document.querySelector('body');


/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
    // console.log(event.target.innerText);
  
    // Example
    if (event.target.classList.contains('number')) {
        display.textContent += event.target.innerText
      // Do something with a number
    }
    if (event.target.innerText === '+') {
      display.textContent += event.target.innerText
    }
    if (event.target.innerText === '-'){
      display.textContent += event.target.innerText
    }
    // Example
    if (event.target.innerText === '*') {
      // Do something with this operator
      display.textContent += event.target.innerText
    }
    if (event.target.innerText === '/'){
      display.textContent += event.target.innerText
    }
    if(event.target.innerText === '='){
      display.textContent = eval(display.textContent)
    }
    if (event.target.innerText === 'C'){
      display.textContent = 0
    };
})
/*-------------------------------- Functions --------------------------------*/
/* 



buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      This log is for testing purposes to verify we're getting the correct value
      console.log(event.target.innerText);
      Future logic to capture the button's value would go here...
    });
  })
}); */
