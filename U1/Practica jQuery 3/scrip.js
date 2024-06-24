 // Esperar a que el DOM esté listo
 $(document).ready(function(){
    // Seleccionar el elemento select por su id
    var colorSelector = $('#colorSelector');
    
    // Manejar el evento de cambio en el select
    colorSelector.change(function(){
        // Obtener el valor seleccionado
        var selectedColor = colorSelector.val();
        
        // Actualizar el color del div de visualización
        $('#colorDisplay').css('background-color', selectedColor);
    });
});


//////
// Obtener referencia al elemento select por su id
var colorSelector = document.getElementById('colorSelector1');
        
// Obtener referencia al div de visualización por su id
var colorDisplay = document.getElementById('colorDisplay1');

// Manejar el evento de cambio en el select
colorSelector.addEventListener('change', function(){
    // Obtener el valor seleccionado
    var selectedColor = colorSelector.value;
    
    // Actualizar el color del div de visualización
    colorDisplay.style.backgroundColor = selectedColor;
});