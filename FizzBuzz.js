// TODO: Define constants for the form and the result display area
const myNum = document.getElementById("num")
const mySubmit = document.getElementById("submission")

// TODO: Add the first line of the event listener to handle form submission
button.addEventListener("click", function() {
    let num = Number(input.value);
    let output;

    if ((input.value === "" || isNaN(num))) {
        result.textContent = "invalid input. Please enter a valid number";
    }

    if (num % 3 === 0 && num % 5 === 0) {
        output = "FizzBuzz";
    } else if (num % 3 === 0) {
        output = "Fizz";
    } else if (num % 5 === 0) {
        output = "Fizz";
    } else {
        output = num;
    }


result.textContent = output;
});