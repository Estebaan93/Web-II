const images = document.querySelectorAll('.div1 img');
    let indiceInicial = 0;

    setInterval(function() {
        // Ocultar la imagen actual
        images[indiceInicial].style.opacity = 0;

        // Calcular el índice de la próxima imagen
        indiceInicial = (indiceInicial + 1) % images.length;
        

        // Mostrar la próxima imagen
        images[indiceInicial].style.opacity = 1;
    }, 2000); // Cambia la imagen cada 2000 milisegundos (2 segundos)

