// <button onclick="updateContadorClick()">click me</button>

// //scope global


function updateContadorClick() {
	let  _contador=0;
	function conteo(){
		return _contador++;
	}
	function valor(){
		return _contador;
	}
	return {conteo, valor};
	
};
const closure= updateContadorClick();
console.log(closure.valor());
closure.conteo();
console.log(closure.valor());