let btns = document.querySelectorAll(".num-button");
let allBtns = document.querySelectorAll(".button");
let resultBox = document.querySelector("#result-box");
let clearBtn = document.querySelector('#clear');
let backspacebtn = document.querySelector('#backspace');
let symbols = document.querySelectorAll(".calc-action-btn");
let flag = 0;

let total = document.querySelector("#total");

let btnSpread = [...btns];
let allBtnSpread = [...allBtns];
// For Number Inputs
btnSpread.forEach((button, i) => {
  console.log('button:', button);
  button.addEventListener("click", () => {
    // Inner Values for calculator
    let resultInnerHTML = resultBox.innerHTML
    if (resultInnerHTML == "0") {
      resultBox.innerHTML = "";
    };
    if(flag == 1 && !button.classList.contains('actions')){
      resultBox.innerHTML = '';
    }
    flag = 0;  
    let lastChar = resultInnerHTML.charAt(resultInnerHTML.length - 1);

    let symbolArr = ['%', '+', '-', '/', '.', '*'];
    let dontAllowChar = '';
    for (let i = 0; i < symbolArr.length; i++) {
      if (lastChar == symbolArr[i]) {
        dontAllowChar = symbolArr[i];
      }
    }

    let value = btns[i].innerHTML;
    if (value != dontAllowChar) {
      if (symbolArr.includes(value) && symbolArr.includes(lastChar)) {
        resultBox.innerHTML = resultBox.innerHTML.slice(0, -1);
        console.log(resultBox.innerHTML);
      }

      resultBox.innerHTML += value;
    }


  });
});
// Function to evalute Strings
function evaluate(fn) {
  return new Function('return ' + fn)();
}

// To calculate All Input
total.addEventListener('click', () => {
  let allInputs = resultBox.innerHTML;

  resultBox.innerHTML = evaluate(allInputs);
  flag = 1;

  console.log(evaluate(allInputs));
})
// Clear all Inputs
clearBtn.addEventListener('click', () => {
  resultBox.innerHTML = "0";
  flag = 0;
})
//backspace Click
backspacebtn.addEventListener('click', () => {
  let resultInnerHTML = resultBox.innerHTML
  if (resultInnerHTML.length > 1) {
    resultBox.innerHTML = resultBox.innerHTML.slice(0, -1);
  } else {
    resultBox.innerHTML = "0";
  }

})