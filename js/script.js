document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector('.name-task');
  const label = document.querySelector('.text-input');

  input.addEventListener("focus", () => {
    label.style.opacity = '0';
  });

  input.addEventListener('blur', () => {
    if (!input.value) {
      label.style.opacity = 1;
    };
  });
});