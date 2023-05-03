// Obtener referencias a los elementos del formulario
const form = document.querySelector('form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const error = document.querySelector('.error');

// Agregar un evento de escucha para el envío del formulario
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevenir que el formulario se envíe por defecto

  // Verificar si los campos del formulario están completos
  if (email.value.trim() === '' || password.value.trim() === '') {
    error.textContent = 'Por favor, complete todos los campos.';
    return;
  }

  // Simular el proceso de inicio de sesión
  // Comprobar si las credenciales son válidas
  if (email.value === 'usuario@ejemplo.com' && password.value === 'contraseña') {
    // Si son válidas, redirigir al usuario a la página de inicio
    window.location.href = 'inicio.html';
  } else {
    // Si no son válidas, mostrar un mensaje de error
    error.textContent = 'Credenciales inválidas. Por favor, inténtelo de nuevo.';
  }
});
