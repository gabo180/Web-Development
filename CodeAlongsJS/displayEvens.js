// let numberFun = document.forms["numberFun"];
let startingNumber = document.getElementById("startingNumber");
let endingNumber = document.getElementById("endingNumber");
let steps = document.getElementById("step");
let submitButton = document.getElementById("submitButton");
let result = document.getElementById("results")

function validate() {

    numberFun.className = "needs-validation";
    result = "";

    if (!numberFun.checkValidity()) {
        numberFun.className = "was-validated";
        return false;
    }

    let startNumber = parseInt(startingNumber.value);
    console.log(typeof(startNumber));
    console.log(startNumber);
    let endNumber = parseInt(endingNumber.value);
    let step = parseInt(steps.value);

    if (startNumber && endNumber && step) {

        if (step < 0) {
            alert("The step can't be a negative number.")
        }

        if (endNumber <= startNumber) {
            alert("Ending number can't be less than or equal to the starting number.")
        }

        result += "<p> The values between " + startNumber + " and " + endNumber + " in increments of " + step + ":</p><ul>"

        for (i = startNumber; i <= endNumber; i += step) {
            result += "<li>" + i + "</li>";
        }

        result += "</ul>"

        submitButton.innerHTML = result;

        return false;
    }
}