const reverseString = str => [...str].reverse().join('');

const frase= "Hola mundo cruel";
const fraseReves= reverseString(frase);

/*console.log("Frase original: "+frase);
console.log("Frase al reves: "+fraseReves);*/

document.getElementById('parr').innerHTML=`Frase original: ${frase} <br> Frase al reves: ${fraseReves}`;
