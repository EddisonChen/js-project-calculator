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
const root = document.querySelector("#root");
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
decimal.addEventListener("click", () => {
    if (mathSign === "") {
        firstInputArray.push(".");
        firstInputField.innerHTML = Number(firstInputArray.join(""));
    }
    else if (mathSign !== "") {
        secondInputArray.push(".");
        secondInputField.innerHTML = Number(secondInputArray.join(""));
    }
});

// math functions
addition.addEventListener("click",() => {
    mathSign = "+", functionBox.innerHTML = "+";
});

subtraction.addEventListener("click",() => {
    mathSign = "-", functionBox.innerHTML = "-";
});

multiplication.addEventListener("click",() => {
    mathSign = "x", functionBox.innerHTML = "x";
});

division.addEventListener("click",() => {
    mathSign = "/", functionBox.innerHTML = "/";
});

exponent.addEventListener("click",() => {
    mathSign = "^", functionBox.innerHTML = "^";
});

root.addEventListener("click", () => {
    mathSign ="√", functionBox.innerHTML = "√";
})

// second input number, how to get the presses after a function button is clicked?

// what happens when you press =
equal.addEventListener("click",() =>{
    let firstInputNumber = Number(firstInputArray.join(""));
    let secondInputNumber = Number(secondInputArray.join(""));
    let finalResult = 0;
        switch (mathSign) {
            case mathSign = "+":
                finalResult = firstInputNumber + secondInputNumber;
            break;
            case mathSign = "-":
                finalResult = firstInputNumber - secondInputNumber;
            break;
            case mathSign = "x":
                finalResult = firstInputNumber * secondInputNumber;
            break;
            case mathSign = "/":
                finalResult = firstInputNumber/secondInputNumber;
            break;
            case mathSign = "^":
                finalResult = Math.pow(firstInputNumber, secondInputNumber);
            break;
            case mathSign = "√":
                finalResult = Math.pow(firstInputNumber, (1/secondInputNumber));
            break;
            default:
                finalResult = "error";
        }
    answerField.innerHTML = finalResult;
})

ac.addEventListener("click", () => {
    firstInputArray = [], firstInputField.innerHTML = "";
    mathSign = "", functionBox.innerHTML ="";
    secondInputArray = [], secondInputField.innerHTML = "";
    answerField.innerHTML = "";
})

backspace.addEventListener("click", () => {
    if (secondInputField.innerHTML != "") {
        secondInputField.innerHTML = "", secondInputArray = [];
    }
    else if (functionBox.innerHTML != "") {
        functionBox.innerHTML = ""; 
        mathSign = "";
    }
    else if (firstInputField.innerHTML != "") {
        firstInputField.innerHTML = "", firstInputArray = [];
    }
})
// have button clicks go into first input as a string
// turn string into a number
// when a function button is clicked (if the string contains a specific operator, do that function, if statement)
// have button clicks go into second input
// when = is pressed, submits, prints answer, resets to first input

//to add
// add parenthesis if feeling ambitious
// design
// multiple calculations? ehh
// better backspace
