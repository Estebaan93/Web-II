let p1=document.createElement('p');
let p2=document.createElement('p');
let p3=document.createElement('p');
let p4=document.createElement('p');

const listaOriginal =['jose','juan','ana','jose','carlos','rosa','ana'];


//Con set
const filtrarPorSer= new Set(listaOriginal);

//Convertimos al set en array
const arrayFiltrarPorSet= [...filtrarPorSer];
p1.innerHTML=`Usando los set: <br>[${arrayFiltrarPorSet}]`;
document.body.appendChild(p1);


//Con filter
const aux={};
const filtrarPorfilter= listaOriginal.filter((valor,indice)=>{
	//Si el valor no esta en el objeto agregarlo
	if (!aux.hasOwnProperty(valor)){
		aux[valor]=true;
		return true;
	}
	return false;
});
p2.innerHTML=`Usando filter: <br> [${filtrarPorfilter}]`;
document.body.appendChild(p2);


//Con reduce
const filtrarPorReduce= listaOriginal.reduce((i, valor)=>{
	//Si el valor no esta se agrega
	if(!i.includes(valor)){
		i.push(valor);
	}
	return i;
}, []);
p3.innerHTML=`Usando reduce: <br> [${filtrarPorReduce}]`;
document.body.appendChild(p3);


//Con bucle for usando un aux
const auxBucleFor={};
const listaVacia=[];

for (let i of listaOriginal) {
	if(!auxBucleFor.hasOwnProperty(i)){
		auxBucleFor[i]=true;
		listaVacia.push(i);
	}
}
p4.innerHTML=`Usando un bucle for: <br> [${listaVacia}]`;
document.body.appendChild(p4);
