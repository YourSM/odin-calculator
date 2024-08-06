let numOne = 0;
let numTwo = 0;
let operatorSymbol = 0;

const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const clear = document.querySelector("#clearButton")

clear.addEventListener("click", () => {
  display.textContent = "";
  return numTwo = 0, numOne = 0, operatorSymbol = 0;
})

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    let target = event.target.textContent
    display.append(target);
    return operatorSymbol === 0 ? numOne +=target : numTwo += target
  })
})

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    let target = event.target.textContent;
    if (target === "=") {
      let result = (operate(+numOne, operatorSymbol, +numTwo))
      display.textContent = result
      if (result === "Nuh-uh") {
        return numOne = 0, numTwo = 0;
      }
      return numOne = result, numTwo = 0;
    } else {
      display.append(target);
      return operatorSymbol = target;
    }
    })
  })

function add(numOne, numTwo) {
  return numOne + numTwo;
}

function subtract(numOne, numTwo) {
  return numOne - numTwo;
}

function multiply(numOne, numTwo) {
  return numOne * numTwo;
}

function divide(numOne, numTwo) {
  if (numTwo === 0) {
    return "Nuh-uh"
  }
  return numOne / numTwo;
}

function operate(numOne, operatorSymbol, numTwo) {
  if (operatorSymbol === "+") {
    return add(numOne, numTwo)
  } else if (operatorSymbol === "-") {
    return subtract(numOne, numTwo)
  } else if (operatorSymbol === "*") {
    return multiply(numOne, numTwo);
  } else if (operatorSymbol === "/") {
    return divide(numOne, numTwo)
  }
}