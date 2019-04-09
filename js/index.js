function validateEmail() {
    var emailBox = document.getElementById("email");
    var email = emailBox.value;

    var exists = email.indexOf("@");

    if (exists === -1) {
        emailBox.style.borderColor = "red";
    }

    else {
        emailBox.style.borderColor = "green";
    }
}

function validatePassword() {
    var passwordBox = document.getElementById("password");
    var password = passwordBox.value;

    if (password.length >= 8) {
        passwordBox.style.borderColor = "green";
    }

    else {
        passwordBox.style.borderColor = "red";
    }
}

function validateConfirmPassword() {
    var password = document.getElementById("password").value;
    var confirmPasswordBox = document.getElementById("confirm-password");
    var confirmPassword = confirmPasswordBox.value;

    if (password !== confirmPassword) {
        confirmPasswordBox.style.borderColor = "red";
    }

    else {
        confirmPasswordBox.style.borderColor = "green";
    }
}

function performValidation() {
    validateEmail();
    validatePassword();
    validateConfirmPassword();
}