async function obtenerUsuarios() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');  // Solicitud a la API
      if (!response.ok) {  // Verificar si la solicitud fue exitosa
        throw new Error('Error en la solicitud: ' + response.status);
      }
      const data = await response.json();  // Convertir la respuesta a JSON
      console.log('Datos recibidos:', data);  // Manejar los datos
    } catch (error) {
      console.error('Error al obtener los datos:', error);  // Manejar errores
    }
  }
  
  obtenerUsuarios();  // Llamar a la función
  