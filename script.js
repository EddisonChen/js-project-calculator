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

// input numbers
one.addEventListener("click", () => {
    if (mathSign === "") {
        firstInputArray.push(1);
        firstInputField.innerHTML = 1;
    }
    else {
        secondInputArray.push(1);
        secondInputField.innerHTML = 1;
    }
});
two.addEventListener("click", () => {
    if (mathSign === "") {
        firstInputArray.push(2);
    }
    else {
        secondInputArray.push(2);
    }
});
three.addEventListener("click", () => {
    if (mathSign === "") {
        firstInputArray.push(3);
    }
    else {
        secondInputArray.push(3);
    }
});
four.addEventListener("click", () => {
    if (mathSign === "") {
        firstInputArray.push(4);
    }
    else {
        secondInputArray.push(4);
    }
});
five.addEventListener("click", () => {
    if (mathSign === "") {
        firstInputArray.push(5);
    }
    else {
        secondInputArray.push(5);
    }
});
six.addEventListener("click", () => {
    if (mathSign === "") {
        firstInputArray.push(6);
    }
    else {
        secondInputArray.push(6);
    }
});
seven.addEventListener("click", () => {
    if (mathSign === "") {
        firstInputArray.push(7);
    }
    else {
        secondInputArray.push(7);
    }
});
eight.addEventListener("click", () => {
    if (mathSign === "") { 
        firstInputArray.push(8);
    }
    else {
        secondInputArray.push(8);
    }
});
nine.addEventListener("click", () => {
    if (mathSign === "") {
        firstInputArray.push(9);
    }
    else {
        secondInputArray.push(9);
    }
});
zero.addEventListener("click", () => {
    if (mathSign === "") {
        firstInputArray.push(0);
    }
    else {
        secondInputArray.push(0);
    }
});

// math functions
addition.addEventListener("click",() => {
    const firstInputNumber = firstInputArray.join();
    mathSign = "+";
    return firstInputNumber;
});

subtraction.addEventListener("click",() => {
    const firstInputNumber = firstInputArray.join();
    mathSign = "-";
    return firstInputNumber;
});

multiplication.addEventListener("click",() => {
    const firstInputNumber = firstInputArray.join();
    mathSign = "x";
    return firstInputNumber;
});

division.addEventListener("click",() => {
    const firstInputNumber = firstInputArray.join();
    mathSign = "/";
    return firstInputNumber;
});

exponent.addEventListener("click",() => {
    const firstInputNumber = firstInputArray.join();
    mathSign = "^";
    return firstInputNumber;
})
// second input number, how to get the presses after a function button is clicked?


// what happens when you press =
equal.addEventListener("click",() =>{
    const secondInputNumber = secondInputArray.join();
    let finalResult = 0
        if (mathSign = "+") {
            finalResult = firstInputNumber + secondInputNumber;
        }
        else if (mathSign = "-") {
            finalResult = firstInputNumber - secondInputNumber;
        }
        else if (mathSign = "x") {
            finalResult = firstInputNumber * secondInputNumber;
        }
        else if (mathSign = "/") {
            finalResult = firstInputNumber/secondInputNumber;
        }
        else if (mathSign = "^"); {
            finalResult = Math.pow(firstInputNumber, secondInputNumber);
        }
    answerField.innerHTML = finalResult;
    firstInputArray = [];
    mathSign = "";
    secondInputArray = [];
})
// have button clicks go into first input as a string
// turn string into a number
// when a function button is clicked (if the string contains a specific operator, do that function, if statement)
// have button clicks go into second input
// when = is pressed, submits, prints answer, resets to first input
// add parenthesis if feeling ambitious