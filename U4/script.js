const suma=(a,b)=>a+b;

console.log(suma(1,2));

let persona={
	nombre:"Esteban",
	apellido:"Moreira"
};

console.log('');
for (let data in persona) {
	console.log(`${data}: ${persona[data]}`);
}
console.log('');

console.log('Object.keys');
Object.keys(persona).forEach(data=>{
	console.log(`${data}:`,persona[data]);
})

console.log('');
console.log('Object.values');
Object.values(persona).forEach(data=>{
	console.log(data);
});

console.log('');
console.log('Object.entries');
Object.entries(persona).forEach(([clave,data])=>{
	console.log(`${clave}: ${data}`)
});
