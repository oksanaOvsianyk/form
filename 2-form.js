// Ініціалізація об'єкта formData
const formData = {
  email: '',
  message: '',
};

// Ключ для локального сховища
const STORAGE_KEY = 'feedback-form-state';

// Посилання на елементи форми
const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

// Завантаження даних з локального сховища під час завантаження сторінки
window.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';

    // Відображення даних у полях форми
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
});

// Обробка події input для збереження даних у локальне сховище
form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim(); // Оновлення об'єкта formData
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData)); // Збереження в локальне сховище
});

// Обробка події submit
form.addEventListener('submit', event => {
  event.preventDefault();

  // Перевірка, чи заповнені всі поля
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  // Виведення даних у консоль
  console.log('Submitted Data:', formData);

  // Очищення форми, об'єкта formData та локального сховища
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
});
