function redirectTo(url) {
    window.location.href = url;
}


function showForgotPasswordForm() {
    document.querySelector(".login-box").style.display = "none"; // Ẩn form đăng nhập
    document.getElementById("forgot-password-box").style.display = "block"; // Hiện form quên mật khẩu
}

function showLoginForm() {
    document.getElementById("forgot-password-box").style.display = "none"; // Ẩn form quên mật khẩu
    document.querySelector(".login-box").style.display = "block"; // Hiện lại form đăng nhập
}


function showResetPasswordForm(event) {
    event.preventDefault(); // Ngăn chặn form gửi đi
    document.getElementById("forgot-password-box").style.display = "none"; // Ẩn form quên mật khẩu
    document.getElementById("reset-password-box").style.display = "block"; // Hiện form đổi mật khẩu
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
