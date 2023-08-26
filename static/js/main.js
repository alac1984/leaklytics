// Functions that run on index.html page

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("passwordInput");
    var eyeIcon = document.getElementById("eyeIcon");

    console.log(eyeIcon)
    if(passwordInput.type === "text") {
        passwordInput.type = "password";
        eyeIcon.name = "eye-off-outline"
    } else {
        passwordInput.type = "text";
        eyeIcon.name = "eye-outline"
    }
}
