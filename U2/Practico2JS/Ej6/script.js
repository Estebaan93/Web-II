const personas= [
{
  id:1,
  datos:{
    nombre:"Jose",
    edad:39,
    empleado:true,
    hobbies:["tenis"],
  },
},
{
  id:2,
  datos:{
    nombre:"Manuel",
    edad:23,
    empleado:true,
  },
},
{
  id:3,
  datos:{
    nombre:"Abigail",
    edad:25,
    empleado:false,
    hobbies:["basquet","tenis","futbol"],
  },
},
{
  id:4,
  datos:{
    nombre:"Fabiana",
    edad:12,
    empleado:true,
    hobbies:["tenis","golf"],
  },
},
];

const per3=(personas)=>{
  personas.forEach(data=>{
    if(data.id===3){
      console.log(`Nombre: ${data.datos.nombre} \nEdad: ${data.datos.edad} \nEmpleado: ${data.datos.empleado ? 'Si': 'No'} \nHobbies: ${data.datos.hobbies}`);
    }
  })
};
console.log('Imprimimos la personas 3');
per3(personas);
console.log("");

console.log('Un array con todos los datos (solo el detalle, no el id):');
const persona=(personas)=>{
  return personas.map(data=>{
    //Formateamos a un texto legible
    const {datos: {nombre,edad,empleado,hobbies =[]}}=data;
    return `Nombre: ${nombre} \nEdad: ${edad} \nEmpleado: ${empleado ? 'Si': 'No'} \nHobbies: ${hobbies.join(', ')}\n`;
  });
};

//Llamar a la funcion y almacenar el resultado
const p1=persona(personas);

//Imprimir
p1.forEach(data=>console.log(data));
console.log("");

//Un array de las personas mayores a 24
console.log('Array con personas mayores a 24:');

const formateador=(personas)=>{  
// Ordenamos a las personas con plantillas literales
  const {datos: {nombre,edad,empleado,hobbies =[]}}=personas;
  return `Nombre: ${nombre} \nEdad: ${edad} \nEmpleado: ${empleado ? 'Si' : 'No'} \nHobbies: ${hobbies.join(', ')}\n`;
};

//Iterar sobre el array de personas y acceder a mayores de 24
personas.forEach(data=>{
  if(data.datos.edad>24){
    const mayores=formateador(data);
    console.log(mayores);
  }
});

console.log("Un array de personas ordenado por el nombre de la persona:");
//Ordenamos por nombre
personas.sort((a,b)=>{
  const nombreA= a.datos.nombre.toLowerCase();
  const nombreB= b.datos.nombre.toLowerCase();
  if(nombreA< nombreB) return -1;
  if(nombreA> nombreB) return 1;
  return 0;
});

//Imprimir los datos formateados y ordenado por nombre
personas.forEach(data=>{
  const ordenarNombre= formateador(data);
  console.log(ordenarNombre);
});


console.log("");

console.log("Personas con al menos 2 hobbies:");
//Un array con las que tengas al menos 2 hobbies
const personasConDosHobbies= personas.filter(persona =>{ //filter filtra a los que tengan mas de 2 hobbies
  return persona.datos.hobbies && persona.datos.hobbies.length >=2;
});

personasConDosHobbies.forEach(data=>{
  const perHobbies= formateador(data);
  console.log(perHobbies);
});

console.log("");


console.log("Un array con todos los diferentes hobbies que existen en personas:");
//Obtener todos los hobbies unicos

const todosHobbies= personas.reduce((acumulador, persona)=>{ //reduce me devuelve un unico valor de todos los elementos
  if(persona.datos.hobbies){
    acumulador.push(...persona.datos.hobbies);
  };
  return acumulador;  
},[]);
console.log('Devolvemos todos los hobbies que se repiten tambien: ',todosHobbies);
console.log("");

console.log('Filtramos los repetidos y agregamos a un nuevo array: ');
const hobbiesUnicos= [...new Set(todosHobbies)];

//Imprimimos
console.log(`Todos los hobbies: ${hobbiesUnicos}`);

console.log("");


// Un array de los nombres de personas que sean empleados. 
//Usamos filter y map
// const nombresEmpleados= personas
//   .filter(data=> data.datos.empleado)
//   .map(data=> data.datos.nombre);

const nombresEmpleados=[]; //Inicializar array para los empleados

//Filtramos personas empleados
personas.forEach(data=>{
  if(data.datos.empleado){
    nombresEmpleados.push(data.datos.nombre);
  }
});

//Imprimimos solo los empleados
console.log("Nombre de los empleados: ",nombresEmpleados);
console.log("");


