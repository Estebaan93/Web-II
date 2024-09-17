//console.log("Activo");

let user = new Object(); //Sintaxis de "constructor de objetos"
let users = {}; //Sintaxis de "objeto literal"

users = {
  nombre: "Esteban",
  edad: 31
};
console.log(users.nombre, users.edad);

//Podemos agregar cualquier tipo de dato
users.isAdmin = true;
for (valor in users) {
  console.log(users[valor]);
}
//console.log(users);

//Eliminar
delete users.isAdmin;
console.log(users);

//Propiedades con mas de una palabra
let persona = {
  nombre: "Esteban",
  edad: 31,
  "color favorito": "azul"
};

console.log(persona["color favorito"]);


//Acceso me medio de unavariable
//let key= prompt("Te gustaria saber acerca del usuario?", "name");

//alert(persona[key]);


//Propiedades calculadas
let fruta = prompt("Fruta favorita?");
console.log(fruta);
persona.fruta = fruta;

let listaFrutas = {
  [fruta]: fruta,
};

console.log(persona);
console.log(listaFrutas);

//Crear usuarios funcion
function crearUsuarios(nombre, edad) {
  return {
    nombre: nombre,
    edad: edad,
    mostrarInfo: function () {
      console.log(`Nombre: ${nombre}, edad: ${edad}`)
    }
  };
}

let p1 = crearUsuarios("John", 30);
p1.mostrarInfo();

//Una forma mas corta
function crearPersonas(nombre, edad) {
  return {
    nombre,
    edad
  };
}
let p2=crearPersonas('Yesica',31);
console.log(p2);

