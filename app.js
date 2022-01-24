/**
 * Create the class Calculator
 * this class has 3 methods:
 * - history: once the = key is pressed, it keeps the last value in
 *            memory in an array
 * - equals: returns the value (thanks to an 'eval' function)
 * - clear: clears the history
 */

class Calculator {
  constructor() {
    this._prevCalc = []; // stores the history of calculated results
  }
  get prevCalc() {
    return this._prevCalc;
  }
  history(value) {
    // once the = key is pressed, it keeps the last value in memory in an array
    this._prevCalc.push(value);
    console.log(this._prevCalc);
  }

  equals(calc) {
    // * - equals: returns the value (thanks to an 'eval' function)
    const result = eval(calc); // eval() performs the calculation
    // this._prevCalc.push(result);
    // console.log(this._prevCalc);
    this.history(result);
    return result; // returns value back to where it was invoked
  }

  clear() {
    // clears the history
    this._prevCalc = []; // clear the history
    console.log("history cleared");
    console.log(this._prevCalc);
  }
}

const calculatorScreen = document.querySelector("#calculator .screen");
const equals = document.querySelector("#calculator .eval");
const newCalculator = new Calculator();
// newCalculator.history(2);

/**
 * This function below write the value of the pressed key on the screen
 * The += is the equivalent of:
 * document.querySelector('.screen').innerHTML = document.querySelector('.screen').innerHTML + val;
 *
 **/
function print(val) {
  calculatorScreen.innerHTML += val; // displays the key that was pressed on the screen.
  operators = ["+", "-", "*", "/", "."];
  // prevent more than one operand being used
  let lastKey =
    calculatorScreen.innerHTML[calculatorScreen.innerHTML.length - 1];
  console.log(lastKey);
}

//this code listens to every key on the calculator and adds the value on the screen

document.querySelectorAll("#calculator span").forEach((key) => {
  if (key.innerText !== "=") {
    key.addEventListener("click", (e) => print(e.target.innerText)); //uses the function print() above
  }
});

document.querySelector("#calculator .clear").addEventListener("click", () => {
  calculatorScreen.innerHTML = ""; // clears the screen display
  // clear history
  newCalculator.clear();
});

// Implement here the event when the = key is pressed
// for every span in the the #calculator, check if = was clicked
document.querySelectorAll("#calculator span").forEach((btn) => {
  if (btn.innerText === "=") {
    btn.addEventListener("click", () => {
      // display result of calculation on the screen, after calling the equals method to perform the calculation
      calculatorScreen.innerText = newCalculator.equals(
        calculatorScreen.innerText
      );
    });
  }
});

// prevent ability to have more than one decimal point
// prevent ability to have more than one operator on the screen
