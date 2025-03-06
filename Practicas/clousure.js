function crearContador() {
    let contador = 0; // crearcontador define variable en el entorno lexico( su entorno)

    return function() {
        contador++; // La función "recuerda" la variable contador
        console.log(`Contador: ${contador}`);
    };
}

const miContador = crearContador(); // Se crea una instancia del closure, 
//PERO SE SIGUE RECORDANDO LA VARIABLE CONTADOR

miContador(); // Contador: 1
miContador(); // Contador: 2
miContador(); // Contador: 3


// contador independiente
function crearContadores() {
    let cont = 0; // Variable privada dentro del closure
    return function() {
        cont++;  // incrementa
        return cont; // devueve
    };
}

const cont1 =crearContadores();  /// cont1 y 2 sosn instancias separdas al creacrcontadores
const cont2 = crearContadores();
console.log(cont1()); // 1
console.log(cont1()); // 2
console.log(cont2()); // 1  // instancia nueva comienza de 0


// suma con clousures

function crearConta(x) {
    return function(y) { //funcion interna toma otro argumento y y devuelve x + y.
        return x + y;
    };
}

const conta1 = crearConta(5);  // devuelve una ueva funcion, recordando valor de x
console.log(conta1(2)); // 7   // se suma el valor de x + Y en este caso 2
console.log(conta1(10)); // 15

const conta10 = crearConta(10);  /// recuerda que x ahora vale 10 y se suma a y
console.log(conta10(2)); // 12
console.log(conta10(10)); // 20


// funciones filtro clousure

function crearFiltro(dato) {  // define el minimo de limite (dato)
    return function(element) {  // retorna funcion, compara elemet con dato,
    //  devuelve true si element es mayor o igual a dato, la función interna "recuerda" el valor de dato,
    //  aunque crearFiltro() ya haya terminado su ejecución.
        return element >= dato;
    };
}

const filtroNuevo = crearFiltro(5); //  devuelve una nueva funcion que recuerda dato = 5
const num = [1, 4, 6, 8, 3, 7];  /// array que se va a filtrar

const filtrar = num.filter(filtroNuevo); // filter es un metodo de array hace q sea mas facil trabajar
console.log(filtrar); 



/// funciones privadas 

function crearContador(valorInicial) {  // recibe argumento 
    let contador = valorInicial;  // Variable privada, esta encapsulada
    
    function incrementar() {   // incrementa
        contador++;
    }
    function decrementar() { //decrementa AMBAS SON DE CONTADOR PERO SON PRIVADAS NO PUEDEN LLAMARSE DE AFUERA
        contador--;  
    }
    

    return {  // DVUELVE OBJETO CON METODOS PUBLICOS
        aumentar: function() {
            incrementar();
        },

        reducir: function() {
            decrementar();
        },

        obtenerValor: function() {
            return contador;
        }
    };
}


let miConta = crearContador(10); // se crea un nuevo contador cvalor inicial 10

miConta .aumentar(); 
miConta .aumentar(); 
console.log(miConta .obtenerValor()); 

miConta.reducir(); 
console.log(miConta.obtenerValor()); 

console.log(miConta .contador); // Undefined, contador es privado
console.log(miConta.incrementar); // Undefined, incrementar es privado
console.log(miConta.decrementar); // Undefined, decrementar es privado



// usamos get and set
function crearContador(valorInicial) {
    let contador = valorInicial;

    return {
        get valor() {  // Getter para leer el valor
            return contador;
        },
        set valor(nuevoValor) {  // Setter para modificarlo con validaciones
            if (typeof nuevoValor === "number") {
                contador = nuevoValor;
            } else {
                console.error("Debe ser un número");
            }
        },
        aumentar: function() {
            contador++;
        },
        reducir: function() {
            contador--;
        }
    };
}

let myContador = crearContador(10);
console.log(myContador.valor); //  Se obtiene con el getter
myContador.aumentar();
console.log(myContador.valor); // 11

myContador.valor = 50;  // ✅ Se puede modificar con el setter
console.log(myContador.valor); // 50

myContador.valor = "hola"; // ❌ Muestra error, evita valores invalidos



// modulo de almacenamiento

function crearAlmacenamiento() {
    let elementos = [];  // Array privado
    

    function agregarElemento(elemento) {
        elementos.push(elemento);
    }

    function limpiarElementos() {  // ambas funciones privadas, NO SE PUEDEN LLMAS DESDE AFUERA
        elementos = [];
    }
    

    return {

        agregar: function(elemento) { // lama a la funcion privada
            agregarElemento(elemento);
        },

        obtenerElementos: function() { // metodo publico
            return elementos.slice(); // Devuelve una copia del array
        },

        limpiar: function() {  // metod publico
            limpiarElementos();
        }
    };
}

let miAlmacenamiento = crearAlmacenamiento(); 
// Crear un nuevo almacenamiento

miAlmacenamiento.agregar('elemento1'); 
miAlmacenamiento.agregar('elemento2'); 
console.log(miAlmacenamiento.obtenerElementos()); // ['elemento1', 'elemento2']

miAlmacenamiento.limpiar(); // Limpia el almacenamiento
console.log(miAlmacenamiento.obtenerElementos()); // []

console.log(miAlmacenamiento.elementos); // Undefined, elementos es privado
console.log(miAlmacenamiento.agregarElemento); // Undefined, agregarElemento es privado
console.log(miAlmacenamiento.limpiarElementos); // Undefined, limpiarElementos es privado