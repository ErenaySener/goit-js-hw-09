const STORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const { email, message } = formEl.elements;

const saved = localStorage.getItem(STORAGE_KEY);
if (saved) {
  try {
    const data = JSON.parse(saved);
    email.value = data.email ?? '';
    message.value = data.message ?? '';
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}


formEl.addEventListener('input', event => {
  const name = event.target.name;
  if (name !== 'email' && name !== 'message') return;

  const state = {
    email: email.value.trim(),
    message: message.value.trim(),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
});


formEl.addEventListener('submit', event => {
  event.preventDefault();

  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  if (!emailValue || !messageValue) {
    alert('Lütfen email ve message alanlarını doldurun.');
    return;
  }

  console.log({ email: emailValue, message: messageValue });

  localStorage.removeItem(STORAGE_KEY);
  formEl.reset();
});