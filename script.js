const form = document.querySelector("form");
form.addEventListener("submit", formSubmit);

const firstName = document.querySelector("#first-name");
firstName.addEventListener("focusout", validateFirstName);

const lastName = document.querySelector("#last-name");
lastName.addEventListener("focusout", validateLastName);

const email = document.querySelector("#email");
email.addEventListener("focusout", validateEmail);

const password = document.querySelector("#password");
password.addEventListener("focusout", validatePassword);
password.addEventListener("input", livePatternMatch);

const confirmPassword = document.querySelector("#confirm-password");
confirmPassword.addEventListener("focusout", validatePasswordConfirmation);

function formSubmit(e) {
  validateFormFields();
  displayValidationErrors(e);
}

function validateFirstName() {
  if (!firstName.value) {
    firstName.classList.add("error");
    firstName.setCustomValidity("What's your name?");
  } else {
    firstName.classList.remove("error");
    firstName.setCustomValidity("");
  }
}

function validateLastName() {
  if (!lastName.value) {
    lastName.classList.add("error");
    lastName.setCustomValidity("What's your name?");
  } else {
    lastName.classList.remove("error");
    lastName.setCustomValidity("");
  }
}

function validateEmail() {
  const spanEmail = document.querySelector(".email-required");

  if (!email.value) {
    email.classList.add("error");
    email.setCustomValidity("You'll use this to log in");
    spanEmail.setAttribute("invalid-email", "You'll use this to log in");
  } else if (!email.value.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+/)) {
    email.classList.add("error");
    email.setCustomValidity("Please enter a valid email");
    spanEmail.setAttribute("invalid-email", "Please enter a valid email");
  } else {
    email.classList.remove("error");
    email.setCustomValidity("");
  }
}

function validatePassword() {
  const spanPassword = document.querySelector(".invalid-password");

  if (!password.value) {
    password.classList.add("error");
    password.setCustomValidity("Create a password");
    spanPassword.setAttribute("invalid-password", "Create a password");
  } else if (password.validity.patternMismatch) {
    password.classList.add("error");
    password.setCustomValidity("Invalid password format");
    spanPassword.setAttribute("invalid-password", "Invalid password format");
  } else {
    password.classList.remove("error");
    password.setCustomValidity("");
  }

  checkIfPasswordsMatch();
}

function livePatternMatch() {
  const letter = document.querySelector("#letter");
  const upper = document.querySelector("#upper");
  const number = document.querySelector("#number");
  const length = document.querySelector("#length");

  if (password.value.match(/[a-z]/g)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  if (password.value.match(/[A-Z]/g)) {
    upper.classList.remove("invalid");
    upper.classList.add("valid");
  } else {
    upper.classList.remove("valid");
    upper.classList.add("invalid");
  }

  if (password.value.match(/[0-9]/g)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  if (password.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

function validatePasswordConfirmation() {
  if (!confirmPassword.value) {
    confirmPassword.classList.add("error");
    confirmPassword.setCustomValidity("Confirm your password");

    if (password.validationMessage === "Passwords do not match") {
      password.classList.remove("error");
      password.setCustomValidity("");
    }
  } else {
    confirmPassword.classList.remove("error");
    confirmPassword.setCustomValidity("");
  }

  checkIfPasswordsMatch();
}

function checkIfPasswordsMatch() {
  const spanPassword = document.querySelector(".invalid-password");

  if (
    !password.value ||
    !confirmPassword.value ||
    password.validity.patternMismatch
  ) {
    return;
  }

  if (password.value !== confirmPassword.value) {
    password.classList.add("error");
    password.setCustomValidity("Passwords do not match");
    spanPassword.setAttribute("invalid-password", "Passwords do not match");
    confirmPassword.classList.add("error");
  } else {
    password.classList.remove("error");
    password.setCustomValidity("");
    confirmPassword.classList.remove("error");
    confirmPassword.setCustomValidity("");
  }
}

function validateFormFields() {
  if (!firstName.value) {
    firstName.classList.add("error");
    firstName.setCustomValidity("What's your name?");
  }

  if (!lastName.value) {
    lastName.classList.add("error");
    lastName.setCustomValidity("What's your name?");
  }

  if (!email.value) {
    email.classList.add("error");
    email.setCustomValidity("You'll use this to log in");
  }

  if (!password.value) {
    password.classList.add("error");
    password.setCustomValidity("Create a password");
  }

  if (!confirmPassword.value) {
    confirmPassword.classList.add("error");
    confirmPassword.setCustomValidity("Confirm your password");
  }
}

function displayValidationErrors(e) {
  if (firstName.validationMessage) {
    firstName.reportValidity();
    e.preventDefault();
  } else if (lastName.validationMessage) {
    lastName.reportValidity();
    e.preventDefault();
  } else if (email.validationMessage) {
    email.reportValidity();
    e.preventDefault();
  } else if (password.validationMessage) {
    password.reportValidity();
    e.preventDefault();
  } else if (confirmPassword.validationMessage) {
    confirmPassword.reportValidity();
    e.preventDefault();
  }
}
