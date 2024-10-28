//supon un formulario html con el siguiente botón

<button onclick="updateContadorClick()">click me</button>

//En un script global disponemos de este código

//scope global
var contador = 0;

 function updateContadorClick() {
     ++contador;
     console.log(contador);//hacer algo con contador
}