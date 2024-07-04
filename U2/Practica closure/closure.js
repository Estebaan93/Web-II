/*Closure, funcion autoejecutable. Cierta manera a una clase (POO)*/

const miContador= (function(){
	let _contador=0;	//Privador por convencion para el dev

	function incrementar () {
		return _contador++;
	}

	function decrementar () {
		return _contador--;
	}

	function valor(){
		return _contador;
	}

	return {
		incrementar,
		decrementar,
		valor
	}
})();

console.log(miContador);
console.log('Valor inicial:',miContador.valor());	//Imprimimos el valor
miContador.incrementar();	//Incrementamos en 1
miContador.incrementar();	//Incrementar en 1
miContador.decrementar();	//Decrementar en 1
console.log('Valor:',miContador.valor());	//Imprimimos el valor
miContador.incrementar();
console.log('Valor:',miContador.valor());	//Imprimimos el valor


