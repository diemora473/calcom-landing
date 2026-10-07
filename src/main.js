// Form handler lead capture
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('[data-lead-capture]');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('¡Gracias! Nos pondremos en contacto para enviar tu Tótem Oficial.');
      form.reset();
    });
  }
});
