// how to get button press to show up in a box?

const firstInputField = document.querySelector("#firstInputBox");
const functionField = document.querySelector("#functionBox");
const secondInputField = document.querySelector("#secondInputBox")
const answerField = document.querySelector("#answerBox")
const ac = document.querySelector("#ac");
const decimal = document.querySelector("#decimal");
const backspace = document.querySelector("#backspace");
const addition = document.querySelector("#addition");
const subtraction = document.querySelector("#subtraction");
const multiplication = document.querySelector("#multiplication");
const division = document.querySelector("#division");
const equal = document.querySelector("#equal");
const exponent = document.querySelector("#exponent");
const squareRoot = document.querySelector("#squareRoot");
// const numbers = document.querySelectorAll(".numbers")
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");

let firstInputArray = [];
let mathSign = "";
let secondInputArray = [];
let firstInputNumber = 0;
let secondInputNumber = 0;

// input numbers
one.addEventListener("click", () => {
    if (mathSign === "") {
        firstInputArray.push(1);
        firstInputField.innerHTML = Number(firstInputArray.join(""));
    }
    else if (mathSign !== "") {
        secondInputArray.push(1);
        secondInputField.innerHTML = Number(secondInputArray.join(""));
    }
});
two.addEventListener("click", () => {
    if (mathSign === "") {
        firstInputArray.push(2);
        firstInputField.innerHTML = Number(firstInputArray.join(""));
    }
    else if (mathSign !== "") {
        secondInputArray.push(2);
        secondInputField.innerHTML = Number(secondInputArray.join(""));
    }
});
three.addEventListener("click", () => {
    if (mathSign === "") {
        firstInputArray.push(3);
        firstInputField.innerHTML = Number(firstInputArray.join(""));
    }
    else if (mathSign !== "") {
        secondInputArray.push(3);
        secondInputField.innerHTML = Number(secondInputArray.join(""));
    }
});
four.addEventListener("click", () => {
    if (mathSign === "") {
        firstInputArray.push(4);
        firstInputField.innerHTML = Number(firstInputArray.join(""));
    }
    else if (mathSign !== "") {
        secondInputArray.push(4);
        secondInputField.innerHTML = Number(secondInputArray.join(""));
    }
});
five.addEventListener("click", () => {
    if (mathSign === "") {
        firstInputArray.push(5);
        firstInputField.innerHTML = Number(firstInputArray.join(""));
    }
    else if (mathSign !== "") {
        secondInputArray.push(5);
        secondInputField.innerHTML = Number(secondInputArray.join(""));
    }
});
six.addEventListener("click", () => {
    if (mathSign === "") {
        firstInputArray.push(6);
        firstInputField.innerHTML = Number(firstInputArray.join(""));
    }
    else if (mathSign !== "") {
        secondInputArray.push(6);
        secondInputField.innerHTML = Number(secondInputArray.join(""));
    }
});
seven.addEventListener("click", () => {
    if (mathSign === "") {
        firstInputArray.push(7);
        firstInputField.innerHTML = Number(firstInputArray.join(""));
    }
    else if (mathSign !== "") {
        secondInputArray.push(7);
        secondInputField.innerHTML = Number(secondInputArray.join(""));
    }
});
eight.addEventListener("click", () => {
    if (mathSign === "") { 
        firstInputArray.push(8);
        firstInputField.innerHTML = Number(firstInputArray.join(""));
    }
    else if (mathSign !== "") {
        secondInputArray.push(8);
        secondInputField.innerHTML = Number(secondInputArray.join(""));
    }
});
nine.addEventListener("click", () => {
    if (mathSign === "") {
        firstInputArray.push(9);
        firstInputField.innerHTML = Number(firstInputArray.join(""));
    }
    else if (mathSign !== "") {
        secondInputArray.push(9);
        secondInputField.innerHTML = Number(secondInputArray.join(""));
    }
});
zero.addEventListener("click", () => {
    if (mathSign === "") {
        firstInputArray.push(0);
        firstInputField.innerHTML = Number(firstInputArray.join(""));
    }
    else if (mathSign !== "") {
        secondInputArray.push(0);
        secondInputField.innerHTML = Number(secondInputArray.join(""));
    }
});

// math functions
addition.addEventListener("click",() => {
    //const firstInputNumber = Number(firstInputArray.join());
    mathSign = "+", functionBox.innerHTML = "+";
    //return firstInputNumber;
});

subtraction.addEventListener("click",() => {
    //const firstInputNumber = Number(firstInputArray.join());
    mathSign = "-", functionBox.innerHTML = "-";
    //return firstInputNumber;
});

multiplication.addEventListener("click",() => {
    //const firstInputNumber = Number(firstInputArray.join());
    mathSign = "x", functionBox.innerHTML = "x";
    //return firstInputNumber;
});

division.addEventListener("click",() => {
    //const firstInputNumber = Number(firstInputArray.join());
    mathSign = "/", functionBox.innerHTML = "/";
    //return firstInputNumber;
});

exponent.addEventListener("click",() => {
    //const firstInputNumber = Number(firstInputArray.join());
    mathSign = "^", functionBox.innerHTML = "^";
    //return firstInputNumber;
})
// second input number, how to get the presses after a function button is clicked?

// what happens when you press =
equal.addEventListener("click",() =>{
    firstInputNumber = Number(firstInputArray.join(""))
    secondInputNumber = Number(secondInputArray.join(""))
    let finalResult = 0
        if (mathSign == "+") {
            finalResult = firstInputNumber + secondInputNumber;
        }
        else if (mathSign == "-") {
            finalResult = firstInputNumber - secondInputNumber;
        }
        else if (mathSign == "x") {
            finalResult = firstInputNumber * secondInputNumber;
        }
        else if (mathSign == "/") {
            finalResult = firstInputNumber/secondInputNumber;
        }
        else if (mathSign == "^"); {
            finalResult = Math.pow(firstInputNumber, secondInputNumber);
        }
    answerField.innerHTML = finalResult;
})
// have button clicks go into first input as a string
// turn string into a number
// when a function button is clicked (if the string contains a specific operator, do that function, if statement)
// have button clicks go into second input
// when = is pressed, submits, prints answer, resets to first input
// add parenthesis if feeling ambitious