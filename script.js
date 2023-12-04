const puzzle1Answer = 1; // Answer for Puzzle 1
const puzzle2Answer = 8; // Answer for Puzzle 2
let code = '';

function checkPuzzle1() {
  const userInput = parseInt(document.getElementById('input1').value);
  if (userInput === puzzle1Answer) {
    document.getElementById('result1').innerText = 'Correct!';
    code += userInput;
  } else {
    document.getElementById('result1').innerText = 'Incorrect!';
  }
}

function checkPuzzle2() {
  const userInput = parseInt(document.getElementById('input2').value);
  if (userInput === puzzle2Answer) {
    document.getElementById('result2').innerText = 'Correct!';
    code += userInput;
  } else {
    document.getElementById('result2').innerText = 'Incorrect!';
  }
}

function checkCode() {
  const userInput = document.getElementById('codeInput').value;
  
  if (userInput === code) {
    showMessage('Congratulations! You escaped!🎉🎊');
  } else {
    showMessage('Wrong code. Try again.');
  }
}

function showMessage(message) {
  document.getElementById('message').innerText = message;
}
