// METODO GET, SI QUEREMOS MANDAR DATOS A LA API
fetch("https://dog.ceo/api/breeds/image/random") // Hacemos la solicitud
    .then(response => response.json()) // Convertimos la respuesta en JSON
    .then(data => {
        console.log(" Imagen del perro:", data.message); // Mostramos la URL en consola

        // Mostrar la imagen en la pagina
        let img = document.createElement("img"); // Creamos una etiqueta <img>
        img.src = data.message; // Le asignamos la URL de la imagen
        img.style.width = "300px"; // Ajustamos el tamaño
        document.body.appendChild(img); // Agregamos la imagen al cuerpo del documento
    })
    .catch(error => console.error(" Error:", error)); // Manejamos errores

// METODO POST, SI QUEREMOS MANDAR DATOS A LA API

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST", //Metodo de la solicitud
            headers: { "Content-Type": "application/json" }, //Encabezados
            body: JSON.stringify({ titulo: "Mi sitio", body: "Contenido del post", userId: 1 }) // Datos a enviar
        })
        .then(response => response.json()) // Convertimos la respuesta a JSON
        .then(data => console.log(" Respuesta del servidor:", data)) // Mostramos la respuesta
        .catch(error => console.error(" Error:", error)); // Manejamos errores
        