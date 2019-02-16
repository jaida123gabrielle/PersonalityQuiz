let submitButton = document.getElementById("submit-buttom")
submitButton.addEventListener("click", processResults)
function processResults(){
  console.log ("submitButtonPushed")
}

let resetButton = document.getElementById("reset-button")
resetButton.addEventListener("click", resetQuiz)
