function add() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  //get num
  //   let result = num1 + num2;
  document.getElementById("result").innerHTML = result;
}

function substraction() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  //get num
  let result = num1 - num2;
  document.getElementById("result").innerHTML = result;
}
function divide() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  //get num
  let result = num1 * num2;
  document.getElementById("result").innerHTML = result;
}
function multiply() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  //get num
  let result = num1 / num2;
  document.getElementById("result").innerHTML = result;
}
