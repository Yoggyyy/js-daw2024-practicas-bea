const form = document.getElementById('formulario');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorEmail = document.getElementById('errorEmail');
const errorPassword = document.getElementById('errorPassword');
const submitButton = document.getElementById('submit');

function validate() {
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
    const passwordValid = passwordInput.value.length >= 8 && passwordInput.value.length <= 10;

    errorEmail.style.display = emailValid ? 'none' : 'inline';
    errorPassword.style.display = passwordValid ? 'none' : 'inline';

    submitButton.disabled = !(emailValid && passwordValid);
}

emailInput.addEventListener('blur', validate);
passwordInput.addEventListener('blur', validate);

emailInput.addEventListener('input', () => errorEmail.style.display = 'none');
passwordInput.addEventListener('input', () => errorPassword.style.display = 'none');