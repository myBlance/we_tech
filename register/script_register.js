function redirectTo(url) {
    window.location.href = url;
}

function togglePassword() {
    const passwordInput = document.getElementById("password");
    const eyeIcon = document.getElementById("eye-icon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.src = "/assets/images/eye.png"; // Icon mắt nhắm
    } else {
        passwordInput.type = "password";
       
        eyeIcon.src = "/assets/images/eyeclose.png"; // Icon mắt mở
    }
}
