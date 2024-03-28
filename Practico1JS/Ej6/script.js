const parr=document.createElement('p');
const buscarMinimoClaseMath= (...num)=> {
	if(num.length=== 0){
		return null;
	} else {
		return Math.min(... num);
	}
}
//console.log(buscarMinimoClaseMath(5,1,3,5,6,7,8));

const buscarMinimo= (...min)=> {
	if(min=== 0){
		return null;
	}else {
		let minimo= min[0];
		for (let i=1; i<min.length; i++){
			if(min[i]<minimo){
				minimo=min[i];
			}
		}
		return minimo;
	}	
}
//console.log(buscarMinimo(5,1,3,5,6,7,8));

//Amacenar en un array de 10 elementos hasta 100
const ejecutar =()=> {
	const almacenar=[];
	for(let j=0; j<11; j++){
		almacenar.push(Math.floor(Math.random()*100)+1);
	}
	parr.innerHTML=`Numeros al azar: ${almacenar}.<br> Minimo numero: ${buscarMinimo(...almacenar)}`;
	parr.style.backgroundColor= ' rgb(0, 0, 0, .4)';
	parr.style.borderRadius='5px';
	parr.style.marginRight= '70%';
	document.body.appendChild(parr);
	/*console.log("Numeros generados:",almacenar);
	console.log("Minimo numero: ",buscarMinimo(...almacenar));
	console.log("");*/
}

setInterval(ejecutar,7000);
ejecutar();



