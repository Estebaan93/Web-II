const round = (numero, digitos) => {
      const factor = Math.pow(10, digitos);
      return Math.round(numero * factor) / factor;
};

    // Imprimir resultados usando template literals
const resultado1 = round(1.005, 2);
const resultado2 = round(1.05, 2);
const resultado3 = round(1.0005, 2);
/*
document.getElementById("n1").innerHTML = `(1.005, 2) Redondeo: ${resultado1}`;
document.getElementById("n2").innerHTML = `(1.05, 2) Redondeo: ${resultado2}`;
document.getElementById("n3").innerHTML = `(1.0005, 2) Redondeo: ${resultado3}`;*/

console.log(`round(1.005, 2) Redondeo: ${round(1.005, 2)}`);	// 1.01
console.log(`round(1.05, 2) Redondeo: ${round(1.05, 2)}`);	//1.05
console.log(`round(1.0005, 2) Redondeo: ${round(1.0005, 2)}`);	//1 


