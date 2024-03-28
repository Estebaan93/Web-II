//Filter
const palabras = ['casa', 'perro', 'electrodoméstico', 'universidad', 
'mueblería', 'gato'];
const resultado = palabras.filter(p => p.length > 6);
console.log(resultado);


//Map
var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) {
 return x * 2;
});
console.log(doubles);


//Reduce
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue; // 
1 + 2 + 3 + 4
console.log(array1.reduce(reducer)); // expected output: 10 (1 + 2 + 3 + 4)
console.log(array1.reduce(reducer, 5)); // expected output: 15


//Find
const numeros = [5, 12, 8, 130, 44];
const nroMayorADiez = numeros.find(n => n > 10);
console.log(nroMayorADiez);
// expected output: 12


//Some
const numeros1 = [1, 2, 3, 4, 5];
// comprobamos si algún element es par
console.log(numeros1.some(n => n % 2 === 0 ));
// expected output: true


//Every
const numeros2 = [1, 2, 3, 4, 5];
console.log(numeros2.every(n => n >=3));
// expected output: false


//////Funciones anonimas/////////
var saludo = function(){
    //codigo;
};
var saludo = function (persona) {
    alert("Hola "+ persona);
}
saludo("Esteban");

//Funcion auto-invocadas
//Anonima
(function (){
    let alumno = "Juan1";
    console.log(alumno);
})();
//Juan;

let alumno="Juan2";
console.log(alumno);


///////setTimeout()//////////
function miFuncion(){
    setTimeout(otraFuncion,2000)
    };
    function otraFuncion(){
        alert("Somos necesarios, un fragmento de la fatalidad; formamos parte del todo,somos en el todo; no hay nada que pueda juzgar, medir, comparar y condenar nuestra existencia, pues ello equivaldría a juzgar, medir, comparar y condenar el todo. Friedrich Nietzsche");
        };
        miFuncion(); //llamamos a la función    

setTimeout(function(){alert("Hello")}, 4000);

//////SetInterval()//////
var myVar = setInterval(consoleLogFunc, 3000);
function consoleLogFunc() {
console.log("Hola!");
};
//Detener función
function detenerIntervalo(){
clearInterval(myVar);
};


///////setInterval(a,b);///////////
//setInterval(function(){ alert("Esteban") }, 3000);