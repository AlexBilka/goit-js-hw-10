const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const inputEmail = form.elements.email;
const inputMessage = form.elements.message;

form.addEventListener('input', formHandleInput);
form.addEventListener('submit', formHandleSubmit);

const storedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
inputEmail.value = storedData.email || '';
inputMessage.value = storedData.message || '';

function formHandleInput() {
  const email = inputEmail.value;
  const message = inputMessage.value;

  const inputData = JSON.stringify({ email, message });
  localStorage.setItem(STORAGE_KEY, inputData);
}

function formHandleSubmit(event) {
  event.preventDefault();

  const email = inputEmail.value;
  const message = inputMessage.value;

  if (email && message) {
    const formData = {
      email,
      message,
    };

    console.log(formData);

    localStorage.removeItem(STORAGE_KEY);
    inputEmail.value = '';
    inputMessage.value = '';
  }
}
