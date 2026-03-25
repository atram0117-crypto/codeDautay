document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form');
    const loginBtn = document.querySelector('.login-btn');
    const usernameInput = document.querySelector('input[type="text"]');
    const passwordInput = document.querySelector('input[type="password"]');

    loginBtn.addEventListener('click', (e) => {
        
        e.preventDefault();

        const userValue = usernameInput.value.trim();
        const passValue = passwordInput.value.trim();

       
        if (userValue === "" || passValue === "") {
            alert("Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu!");
            
            // Thêm hiệu ứng rung cho form 
            loginForm.style.animation = "shake 0.5s";
            setTimeout(() => loginForm.style.animation = "", 500);
            return;
        }

        
        loginBtn.innerText = "Đang đăng nhập...";
        loginBtn.style.opacity = "0.5";
        loginBtn.disabled = true;

        setTimeout(() => {
            if (userValue === "admin" && passValue === "123456") {
                alert("Đăng nhập thành công!");
               
            } else {
                alert("Sai tài khoản hoặc mật khẩu!");
                loginBtn.innerText = "login";
                loginBtn.style.opacity = "1";
                loginBtn.disabled = false;
            }
        }, 1500); 
    });             //(Thử admin/123456)
});