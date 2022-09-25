const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');

password.addEventListener('change', () => {
    if (confirmPassword.value === '') {
        if (password.classList.value === 'error error:focus'
        || password.classList.value === 'error:focus error') {
            password.classList.remove('error');
            password.classList.remove('error:focus');
            password.setCustomValidity('');
            confirmPassword.classList.remove('error');
            confirmPassword.classList.remove('error:focus');
            return;
        } else return;
    }
    if (password.value !== confirmPassword.value) {
        password.classList.add('error');
        password.classList.add('error:focus');
        password.setCustomValidity('Passwords do not match');
        confirmPassword.classList.add('error');
        confirmPassword.classList.add('error:focus');
    } else {
        password.classList.remove('error');
        password.classList.remove('error:focus');
        password.setCustomValidity('');
        confirmPassword.classList.remove('error');
        confirmPassword.classList.remove('error:focus');
    }
});

confirmPassword.addEventListener('change', () => {
    if (password.value !== confirmPassword.value) {
        password.classList.add('error');
        password.classList.add('error:focus');
        password.setCustomValidity('Passwords do not match');
        confirmPassword.classList.add('error');
        confirmPassword.classList.add('error:focus');
    } else {
        password.classList.remove('error');
        password.classList.remove('error:focus');
        password.setCustomValidity('');
        confirmPassword.classList.remove('error');
        confirmPassword.classList.remove('error:focus');
    }
});