//Aca se usa closure para que la variable contador no sea global

function init () {
	let contador=0;

	function conteo () {
		contador++;
		console.log(contador); //Esto esta de mas creo
		document.querySelector(".contador").textContent=contador; //Esto esta de mas
	}
	document.querySelector("button").addEventListener("click", conteo);

}

init();