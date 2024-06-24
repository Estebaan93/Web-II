// Defino obj libreria

const Autocompletar = {
  
    baseDeDatos: ['javascript', 'jquery', 'html', 'css', 'react', 'angular', 'nodejs', 'typescript', 'ajax', 'json', 'DOM'],
   
    // Inicializo
    inicializar: function () {
        const inputsAutocomplete = document.querySelectorAll('.autocomplete');
        inputsAutocomplete.forEach(input => {
            input.addEventListener('input', function () {
                const valorInput = this.value.trim().toLowerCase(); // Convertir a minúsculas
                if (valorInput === '') {
                    Autocompletar.ocultarSugerencias();
                } else {
                    const sugerencias = Autocompletar.buscarCoincidencias(valorInput);
                    Autocompletar.mostrarSugerencias(this, sugerencias);
                }
            });
        });
    },

    // Busco coincidencia
    buscarCoincidencias: function (entrada) {
        return Autocompletar.baseDeDatos.filter(palabra => palabra.toLowerCase().startsWith(entrada));
    },

    mostrarSugerencias: function (input, sugerencias) {
        const sugerenciasContainer = document.createElement('div');
        sugerenciasContainer.classList.add('sugerencias-container');

        sugerencias.forEach(sugerencia => {
            const sugerenciaElemento = document.createElement('div');
            sugerenciaElemento.textContent = sugerencia;
            sugerenciaElemento.addEventListener('click', function () {
                // clic en la sugerencia 
                input.value = sugerencia;
                Autocompletar.ocultarSugerencias();
            });
            sugerenciasContainer.appendChild(sugerenciaElemento);
        });

        Autocompletar.ocultarSugerencias();

        // imprimo sugerencia
        input.parentNode.appendChild(sugerenciasContainer);
    },

    ocultarSugerencias: function () {
        const contenedorAnterior = document.querySelector('.sugerencias-container');
        if (contenedorAnterior) {
            contenedorAnterior.remove();
        }
    }

};


// Inicializar el autocompletado cuando se cargue el DOM
document.addEventListener('DOMContentLoaded', Autocompletar.inicializar);