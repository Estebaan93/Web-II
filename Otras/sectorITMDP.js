/*
Secuencia inicial: 2023,2024,2025

El siguiente numero es:
2023+2024+2025= 6072 -> ultimas cuatro cifras 6072

La secuencia continua:
2024+2025+6072= 10121 -> 0121

2025+6072+10121= 18218 -> 8218

Deteccion periodica: La suma de los numeros se vuelven periodicos despues de cierto intevalo, al tener cuatro cifras el numero maximo de combinaciones es 10000 por lo tanto %10000 como lo trabajaremos

Map: Rastrea las combinaciones de las ultimas 4 cifras y sus posiciones en la secuencia


*/



//Funcion para encontrar las ultimas cifras de las secuencias

function buscarUltimoN(posicion){
  const ultimosDigitos=[2023,2024,2025]; //Ultimas cuatro cifras de los numeros iniciales

  //Convertir la posicion a una BigInt
  const bigPosicion= BigInt(posicion);

  //Utilizamos un map para almacenar las ultimas cuatro cifras y su posicion en la secuencia
  const map=new Map();

//Empezamos desde la posicion 3 ya que las posiciones 0, 1 y 2 estan ocupadas por los numeros iniciales

  let posicionInicial=3n; //Indica que es un BigInt

  //Mientras no se encuentre el ciclo
  while(!map.has(ultimosDigitos.join(''))){
  //Almacena la posicion actual de la secuencia y las ultimas cuatro cifras concatenadas
    map.set(ultimosDigitos.join(''),posicionInicial); //Me une la clave en un unico numero

    //Calcular el siguiente numero de la secuencia y tomar sus cuatros cifras
    const siguienteNumero=(ultimosDigitos[0]+ultimosDigitos[1]+ultimosDigitos[2]) %10000;

    // console.log(siguienteNumero);

    //Desplazar los numeros en el arreglo
    ultimosDigitos.shift();
    ultimosDigitos.push(siguienteNumero);

    //Incrementar la posicion actual
    posicionInicial++;
  }
  //Obtener tamaño del ciclo
  const cicloInicial=map.get(ultimosDigitos.join(''));
  const cicloLength=posicionInicial-cicloInicial;
  
  // console.log(cicloLength);

  //Calcular la posicion dentro del ciclo
  const posicionCiclo=(bigPosicion-cicloInicial)%cicloLength+cicloInicial;

  console.log(map);
  
  //Reiniciamos la secuencia para encontrar el resultado de la pos correcta
  ultimosDigitos.length=0;
  ultimosDigitos.push(2023,2024,2025);
  posicionInicial=3n;

  //Encontrar las ultimas cuatro cifras en la posicion dentro del ciclo
  while(posicionInicial<posicionCiclo){
    const siguienteNumero=(ultimosDigitos[0]+ultimosDigitos[1]+ultimosDigitos[2])%10000;
    ultimosDigitos.shift();
    ultimosDigitos.push(siguienteNumero);
    posicionInicial++;
  }

  //retornar el resultado
  return ultimosDigitos.join('');
  
}

//Llamar a la funcion de la posicion dada y mostrar el resultado
const posicion='2023202320232023';
console.log(buscarUltimoN(posicion));
