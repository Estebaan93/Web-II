function obtenerUsuariosConCallback(callback) {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => callback(null, data))  // Llamar al callback con los datos
      .catch(error => callback(error, null));  // Llamar al callback con el error
  }
  
  function manejarDatos(error, data) {
    if (error) {
      console.error('Error:', error);
    } else {
      console.log('Datos recibidos con Callback:', data);
    }
  }
  
  obtenerUsuariosConCallback(manejarDatos);
  