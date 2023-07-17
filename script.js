
// Get the DOM elements and initialize the game
const input = document.querySelector("input"),
  guess = document.querySelector(".guess"),
  checkButton = document.querySelector("button"),
  remainChances = document.querySelector(".chances");

// Set the focus on input field
input.focus();

let randomNum = Math.floor(Math.random() * 100);
let chance = 10;

// Listen for the click event on the check button
checkButton.addEventListener("click", checkGuess);

// Listen for the keyup event on the input field
input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    checkGuess();
  }
});

function checkGuess() {
  // Get the value from the input field
  let inputValue = input.value;
  // Clear the input field
  input.value = "";
  // Decrement the chance variable on every guess
  chance--;
  // Check if the input value is equal to the random number
  if (inputValue == randomNum) {
    // Update guessed number, disable input, check button text and color.
    [guess.textContent, input.disabled] = ["Congratulations", true];
    [checkButton.textContent, guess.style.color] = ["Replay", "green"];
    //Check if input value is > random number and within 1-99 range.
  } else if (inputValue > randomNum && inputValue < 100) {
    // Update the guess text and remaining chances
    [guess.textContent, remainChances.textContent] = ["Your guess is high", chance];
    guess.style.color = "red";
    //Check if input value is < random number and within 1-99 range.
  } else if (inputValue < randomNum && inputValue > 0) {
    // Update the guessed number text and remaining chances
    [guess.textContent, remainChances.textContent] = ["Your guess is low", chance];
    guess.style.color = "red";
    // If the input value is not within the range of 1 to 99
  } else {
    // Update the guessed number text, color and remaining chances
    [guess.textContent, remainChances.textContent] = ["Your number is invalid", chance];
    guess.style.color = "#DE0611";
  }
  // Check if the chance is zero
  if (chance == 0) {
    //Update check button, disable input, and clear input value.
    // Update guessed number text and color to indicate user loss.
    [checkButton.textContent, input.disabled] = ["Replay", true];
    [guess.textContent, guess.style.color] = ["You lost the game", "#DE0611"];
  }
  if (chance < 0) {
    window.location.reload();
  }
}
