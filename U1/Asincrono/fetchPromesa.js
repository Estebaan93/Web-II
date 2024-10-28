fetch('https://jsonplaceholder.typicode.com/users')  // URL de la API
  .then(response => {
    if (!response.ok) {  // Verifica si la respuesta fue exitosa
      throw new Error('Error en la solicitud: ' + response.status);
    }
    return response.json();  // Convertir la respuesta a JSON
  })
  .then(data => {
    console.log('Datos recibidos:', data);  // Manejar los datos
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);  // Manejar errores
  });

