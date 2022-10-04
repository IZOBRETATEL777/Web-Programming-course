const userRegEx = new RegExp('.{3,20}');
const passRegEx = new RegExp('^[a-zA-Z0-9]{8,16}');

function handle() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    repPassword = document.getElementById("confirmPassword").value;

    let correct = true;

    if (!userRegEx.test(username)) {
        correct = false;
        document.getElementById("usernameError").innerText = "Bad username!";
    }
    else {
        document.getElementById("usernameError").innerText = "";
    }

    if (!passRegEx.test(password)) {
        correct = false;
        document.getElementById("passwordError").innerText = "Bad password!";
    }
    else {
        document.getElementById("passwordError").innerText = "";
    }

    if (password != repPassword) {
        correct = false;
        document.getElementById("confirmPasswordError").innerText = "Password does not match!";
    }
    else {
        document.getElementById("confirmPasswordError").innerText = "";
    }

    if (correct) {
        document.getElementById("success").innerText = "Done!";
    }
    else {
        document.getElementById("success").innerText = "Bad operation!";
    }
}