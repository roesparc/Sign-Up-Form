const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const submitBtn = document.querySelector('button');
const spanPassword = document.querySelector('.invalid-password');
const spanEmail = document.querySelector('.email-required');
const letter = document.querySelector('#letter');
const upper = document.querySelector('#upper');
const number = document.querySelector('#number');
const length = document.querySelector('#length');

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
        spanPassword.setAttribute('invalid-password', 'Passwords do not match');
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
        spanPassword.setAttribute('invalid-password', 'Passwords do not match');
        confirmPassword.classList.add('error');
    } else if (password.value === '') {
        password.classList.add('error');
        password.setCustomValidity('Create a password');
        spanPassword.setAttribute('invalid-password', 'Create a password');
    } else {
        password.classList.remove('error');
        password.setCustomValidity('');
        confirmPassword.classList.remove('error');
        confirmPassword.setCustomValidity('');
    }
});

firstName.addEventListener('focusout', () => {
    if (firstName.value === '') {
        firstName.classList.add('error');
        firstName.setCustomValidity('What\'s your name');
    } else {
        firstName.classList.remove('error');
        firstName.setCustomValidity('');
    }
});

lastName.addEventListener('focusout', () => {
    if (lastName.value === '') {
        lastName.classList.add('error');
        lastName.setCustomValidity('What\'s your name');
    } else {
        lastName.classList.remove('error');
        lastName.setCustomValidity('');
    }
});

email.addEventListener('focusout', () => {
    if (email.value === '') {
        email.classList.add('error');
        email.setCustomValidity('You\'ll use this to log in');
        spanEmail.setAttribute('invalid-email', 'You\'ll use this to log in');
    } else if (!email.value.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+/)) {
        email.classList.add('error');
        spanEmail.setAttribute('invalid-email', 'Please enter a valid email');
    } else {
        email.classList.remove('error');
        email.setCustomValidity('');
    }
});

password.addEventListener('focusout', () => {
    if (password.value === '') {
        password.classList.add('error');
        password.setCustomValidity('Create a password');
        spanPassword.setAttribute('invalid-password', 'Create a password');
    } else if (!password.value.match(/[a-z]/g)
    || !password.value.match(/[A-Z]/g)
    || !password.value.match(/[0-9]/g)
    || password.value.length < 8) {
        password.classList.add('error');
        spanPassword.setAttribute('invalid-password', 'Invalid password format');
    }
});

confirmPassword.addEventListener('focusout', () => {
    if (confirmPassword.value === '') {
        confirmPassword.classList.add('error');
        confirmPassword.setCustomValidity('Confirm your password');
    }
});

submitBtn.addEventListener('click', () => {
    if (firstName.value === '') {
        firstName.classList.add('error');
        firstName.setCustomValidity('What\'s your name');
    }
    if (lastName.value === '') {
        lastName.classList.add('error');
        lastName.setCustomValidity('What\'s your name');
    }
    if (email.value === '') {
        email.classList.add('error');
        email.setCustomValidity('You\'ll use this to log in');
    }
    if (password.value === '') {
        password.classList.add('error');
        password.setCustomValidity('Create a password');
        spanPassword.setAttribute('invalid-password', 'Create a password');
    }
    if (confirmPassword.value === '') {
            confirmPassword.classList.add('error');
            confirmPassword.setCustomValidity('Confirm your password');
    }
});

password.addEventListener('input', () => {
    if(password.value.match(/[a-z]/g)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    if(password.value.match(/[A-Z]/g)) {
        upper.classList.remove("invalid");
        upper.classList.add("valid");
    } else {
        upper.classList.remove("valid");
        upper.classList.add("invalid");
    }

    if(password.value.match(/[0-9]/g)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    if(password.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
      } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
      }
});