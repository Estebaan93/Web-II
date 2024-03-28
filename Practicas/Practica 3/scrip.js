//Color manual
$(document).ready(function() {
    // Selecciona el elemento de la lista y el div donde se mostrará el color
    var colorLista = $("#colorListjQ");
    var seleccionarColor = $("#selectedColorjQ");
    
    // Agrega un manejador de eventos al cambio de selección en la lista
    colorLista.change(function() {
        // Obtiene el color seleccionado
        var colorSeleccionado = colorLista.val();

        // Muestra el color seleccionado en el div
        seleccionarColor.css("background-color", colorSeleccionado);
    });
});

//jQuery color al azar
$(document).ready(function(){
    setInterval(function(){
        function obtenerColorAuto(){
            return Math.floor(Math.random()*256);
        }
        var red = obtenerColorAuto();
        var green = obtenerColorAuto();
        var blue = obtenerColorAuto();
        var escribir="rgb("+red+","+green+","+blue+")";
        $("#azarJq").css("backgroundColor",escribir);
        console.log("rojo "+red);
        console.log("verde "+green);
        console.log("azul "+blue);
    }, 2000);
});

//JavaScript color al azr
setInterval(function(){
    function obtenerColorAutoJs(){
        return Math.floor(Math.random()*256);
    }
    let red1=obtenerColorAutoJs();
    let green1=obtenerColorAutoJs();
    let blue1=obtenerColorAutoJs();
    let escribir1="rgb("+red1+","+green1+","+blue1+")";
    document.getElementById("azarJs").style.backgroundColor=escribir1;
}, 2000);

    // Selecciona el elemento de la lista y el div donde se mostrará el color
    let colorListaJs=document.getElementById('colorListjS');
    let seleccionarColorJs=document.getElementById('selectedColorjS');

    // Agrega un manejador de eventos al cambio de selección en la lista
      // Manejar el evento de cambio en el select
      colorListaJs.addEventListener('change', function(){
        // Obtener el valor seleccionado
        var selectedColor = colorListaJs.value;
        
        // Actualizar el color del div de visualización
        seleccionarColorJs.style.backgroundColor = selectedColor;
    });



