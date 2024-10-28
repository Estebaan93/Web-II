fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json()) // Convierte la respuesta a JSON
  .then(data => console.log(data))   // Maneja los datos
  .catch(error => console.error('Error:', error));  // Maneja errores
