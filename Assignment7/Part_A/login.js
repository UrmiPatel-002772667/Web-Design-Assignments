$(document).ready(function () {
    const validEmail = /^[a-zA-Z0-9._]+@(northeastern.edu)$/; // Northeastern email pattern
    var validPwdDetail = false;
    var validUserNameDetail = false;
    var validEmailDetail = false;
    var validConfirmPwdDetail = false;

    $("#email").change(function () {
        var email = $('#email').val();
        if (email.toLowerCase().match(validEmail)) {
            $("#error").hide();
            validEmailDetail = true;
        } else {
            $("#error").text("Please enter a valid email address. Domain should be northeastern.edu").css("color", "red").show();
            validEmailDetail = false;
        }
        enableSubmitButton();
    });

    $("#user_name").change(function () {
        var validUserName = /(?=^.{4,15}$)[a-zA-Z0-9._].*$/;
        var userName = $('#user_name').val();
        if (userName.match(validUserName)) {
            if (userName.length >= 4 && userName.length <= 15) {
                $("#errorUserName").hide();
                validUserNameDetail = true;
            }
        } else {
            $("#errorUserName").text("User name must contain 4 to 15 characters and may contain letters, numbers, and underscores.").css("color", "red").show();
            validUserNameDetail = false;
        }
        enableSubmitButton();
    });

    $("#password").change(function () {
        var validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@$%&_?|]).{6,11}$/;
        var password = $('#password').val();
        if (password.match(validPassword)) {
            $("#errorPassword").hide();
            validPwdDetail = true;
        } else {
            $("#errorPassword").text("Password must be 6 to 11 characters and contain at least one number, one uppercase letter, and one lowercase letter, and one special character including (!@$%&_?|).").css("color", "red").show();
            validPwdDetail = false;
        }
        enableSubmitButton();
    });

    $("#confirm_password").change(function () {
        var confirmPassword = $('#confirm_password').val();
        var password = $('#password').val();
        if (confirmPassword === password) {
            $("#errorConfirmPassword").hide();
            validConfirmPwdDetail = true;
        } else {
            $("#errorConfirmPassword").text("Passwords do not match.").css("color", "red").show();
            validConfirmPwdDetail = false;
        }
        enableSubmitButton();
    });

    function enableSubmitButton() {
        if (validEmailDetail && validPwdDetail && validUserNameDetail && validConfirmPwdDetail) {
            $("#submit").prop('disabled', false);
        } else {
            $("#submit").prop('disabled', true);
        }
    }

    $("#submit").click(function (e) {
        e.preventDefault(); // prevent default form submission
        var onSubmituserName = $('#user_name').val(); // assuming this is where you get the username
        localStorage.setItem("user_name", onSubmituserName);
        window.location.href = 'calculator.html';
    });
});
