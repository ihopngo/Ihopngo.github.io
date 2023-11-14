const resultElement = document.getElementById('output');
const textElement = document.getElementById('borzoi');

function yes() {
    resultElement.innerText = "correct";
    return question2()
}

function no() {
    resultElement.innerText = "wrong";
    return question2()
}
function question2() {
    textElement.innerText = "Are Borzoi's fast?";
    return;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generateRandomNumber() {
    var min = parseInt(prompt("Enter the minimum value:"));
    var max = parseInt(prompt("Enter the maximum value:"));

    if (isNaN(min) || isNaN(max)) {
      alert("Please enter valid numbers for the range.");
      return;
    }

    var randomNumber = getRandomNumber(min, max);
    document.getElementById('result').innerText = 'Random Number: ' + randomNumber;
  }