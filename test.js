import {
    form
} from './script.js'

const email = document.getElementById('email');
const error = document.getElementById('error');

form.addEventListener('submit', (event) => {
  if (email.value === email.value.toLowerCase()) {
    form.submit();
  } else {
    event.preventDefault();
    error.style.display = 'block';
  }
});