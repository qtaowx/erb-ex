// Form validation
const form = document.getElementById('signupform');
const usernameInput = document.getElementById('name');
const genderInput = document.getElementById("gender");
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submitButton');

function validateForm() {
    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const gender = genderInput.options[genderInput.selectedIndex].value.trim();

    if (username && email && gender && password && password.length >= 6 && username.length <= 12) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email.match(emailPattern)) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    } else {
        submitButton.disabled = true;
    }
}

usernameInput.addEventListener('input', validateForm);
genderInput.addEventListener('input', validateForm);
emailInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);

form.addEventListener('submit', function(event) {
    if (submitButton.disabled) {
        event.preventDefault();
        alert('Please fill out the form');
    }
});

// Sign up
async function signup(event) {
    event.preventDefault();  // 阻止表单的默认提交行为
    const name = usernameInput.value.trim();
    const gender = genderInput.options[genderInput.selectedIndex].value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const phoneNumber = document.getElementById('phone').value.trim();
    const imageFile = document.getElementById('image').files[0]; // Get the file

    const formData = new FormData();
    formData.append('name', name);
    formData.append('gender', gender);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('phoneNumber', phoneNumber);
    formData.append('image', imageFile);

    const response = await fetch('/users', {
        method: 'POST', // Use PUT for update, POST for create
        body: formData // Send the form data
    });
    const result = await response.json();

    if (response.ok) {
        // 注册成功，跳转到登录页面
        window.location.href = 'login.html';  // 注册成功后跳转到登录页面
    } else {
        // 注册失败，显示错误消息
        alert(result.message || '注册失败');
    }
}


