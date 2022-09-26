const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const submitBtn = document.querySelector('button');
const spanPassword = document.querySelector('.dont-match');

password.addEventListener('change', () => {
    if (confirmPassword.value === '') {
        if (password.classList.value === 'error') {
            password.classList.remove('error');
            password.setCustomValidity('');
            confirmPassword.classList.remove('error');
            return;
        } else return;
    }
    if (password.value !== confirmPassword.value) {
        password.classList.add('error');
        password.setCustomValidity('Passwords do not match');
        confirmPassword.classList.add('error');
    } else {
        password.classList.remove('error');
        password.setCustomValidity('');
        confirmPassword.classList.remove('error');
    }
});

confirmPassword.addEventListener('change', () => {
    if (password.value !== confirmPassword.value) {
        password.classList.add('error');
        password.setCustomValidity('Passwords do not match');
        confirmPassword.classList.add('error');
    } else {
        password.classList.remove('error');
        password.setCustomValidity('');
        confirmPassword.classList.remove('error');
    }
});

firstName.addEventListener('focusout', () => {
    if (firstName.value === '') {
        firstName.classList.add('error');
        firstName.setCustomValidity('What\'s your name')
    } else {
        firstName.classList.remove('error');
        firstName.setCustomValidity('')
    }
});

lastName.addEventListener('focusout', () => {
    if (lastName.value === '') {
        lastName.classList.add('error');
        lastName.setCustomValidity('What\'s your name')
    } else {
        lastName.classList.remove('error');
        lastName.setCustomValidity('')
    }
});

email.addEventListener('focusout', () => {
    if (email.value === '') {
        email.classList.add('error');
        email.setCustomValidity('You\'ll use this to log in')
    } else {
        email.classList.remove('error');
        email.setCustomValidity('')
    }
});