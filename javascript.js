let numOne = 0;
let numTwo = 0;
let operatorSymbol = 0;

const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const clear = document.querySelector("#clearButton")
const decimal = document.querySelector("#decimal")

display.textContent = numOne

clear.addEventListener("click", () => {
  decimal.disabled = false;
  return numTwo = 0, numOne = 0, operatorSymbol = 0, display.textContent = numOne;
})

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    let target = event.target.textContent
    display.append(target);
    if (target === ".") {
      decimal.disabled = true
    } else if (numOne === 0) {
      display.textContent = target
    }
    return operatorSymbol === 0 ? numOne +=target : numTwo += target
  })
})

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    let target = event.target.textContent;

    if (target === "=") {
      let result = operate(+numOne, operatorSymbol, +numTwo)
      display.textContent = result
      if (result === "Nuh-uh") {
        return numOne = 0, numTwo = 0;
      }
      return numOne = Math.round(result), numTwo = 0;
    } else if (operatorSymbol !== 0 && numTwo !== 0) {
      let result = operate(+numOne, operatorSymbol, +numTwo)

      display.textContent = result
      display.append(target);

      return numOne = result, numTwo = 0;
    }
     else {
      display.append(target);
      decimal.disabled = false;
      
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
  return numTwo === 0 ? "Nuh-uh" : numOne / numTwo;
}

function toDecimal(numOne) {
  return numOne / 100;
}

function operate(numOne, operatorSymbol, numTwo) {
  if (operatorSymbol === "+") {
    return add(numOne, numTwo);
  } else if (operatorSymbol === "-") {
    return subtract(numOne, numTwo);
  } else if (operatorSymbol === "*") {
    return multiply(numOne, numTwo);
  } else if (operatorSymbol === "/") {
    return divide(numOne, numTwo);
  } else if (operatorSymbol === "%") {
    return toDecimal(numOne, numTwo);
  } else if (operatorSymbol === "+/-") {
    r
  }
}