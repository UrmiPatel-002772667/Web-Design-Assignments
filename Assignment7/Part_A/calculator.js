var number1;
var number2;

$(document).ready(function () {
    $('#result').attr('readonly', true);
    var name = localStorage.getItem("user_name");
    $("#username1").text(name);
    var resetValue = '';
    localStorage.setItem("user_name", resetValue);
    var validNumber = /^[+-]?([0-9]*[.])?[0-9]+$/;

    $("#number1").change(function () {
        if ($("#number1").val().match(validNumber)) {
            $("#errorNumber1").hide();
            number1 = $("#number1").val();
            return true;
        } else {
            errorNumber1.textContent = "Please enter a valid Number."
            errorNumber1.style.color = "red"
            $("#errorNumber1").show();
            return false;
        }
    })

    $("#number2").change(function () {
        if ($("#number2").val().match(validNumber)) {
            $("#errorNumber2").hide();
            number2 = $("#number2").val();
            return true;
        } else {
            errorNumber2.textContent = "Please enter a valid Number."
            errorNumber2.style.color = "red"
            $("#errorNumber2").show();
            return false;
        }
    });


});

const action = (operand) => {
    var check1 = $("#number1").val();
    var check2 = $("#number2").val();

    if (check1 === '' || check1 === null || check2 === '' || check2 === null) {
        if (check1 === '' || check1 === null) {
            errorNumber1.textContent = "Please enter a valid Number."
            errorNumber1.style.color = "red"
        }
        if (check2 === '' || check2 === null) {
            errorNumber2.textContent = "Please enter a valid Number."
            errorNumber2.style.color = "red"
        }
        return false;
    }

    var firstValue = parseFloat(number1);
    var secondValue = parseFloat(number2);
    var result = 0;

    switch (operand) {
        case 1: result = ((x, y) => x + y)(firstValue, secondValue); break;
        case 2: result = ((x, y) => x - y)(firstValue, secondValue); break;
        case 3: result = ((x, y) => x * y)(firstValue, secondValue); break;
        case 4:
            if (secondValue === 0) {
                $("#errorNumber2").text("Cannot divide by zero.");
                $("#errorNumber2").css("color", "red").show();
                return false;
            }
            result = ((x, y) => x / y)(firstValue, secondValue);
            break;
    }

    $('#result').val(result);
}
