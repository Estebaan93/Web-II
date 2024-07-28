/*const M = 2701

funcion compute(n)
string s = ""
para i desde 1 hasta n
s = s + n
fin para
return convertir_a_numero(s) % M
fin funcion

para cada n en 1, 2, 5, 10, 20, 371844285230994047
imprimir(n + ": " + compute(n))
fin para
fin funcion

Resultado parcial de la ejecución
1: 1
2: 22
5: 1535
10: 1083
20: 1095
371844285230994047: ???*/
const M = 2701;

function compute(n) {
  // Convert n to a string
  const nStr = n.toString();
  
  // Find the remainder of n % M to reduce the size of the problem
  const reducedN = n % M;

  // Create the repeated pattern (string)
  let repeatedPattern = '';
  for (let i = 0; i < reducedN; i++) {
    repeatedPattern += nStr;
  }

  // Use BigInt to handle large numbers
  const bigNumber = BigInt(repeatedPattern);
  
  // Calculate the result modulo M
  return Number(bigNumber % BigInt(M));
}

const numbers = [1, 2, 5, 10, 20, 371844285230994047];
numbers.forEach(n => {
  console.log(`${n}: ${compute(n)}`);
});
