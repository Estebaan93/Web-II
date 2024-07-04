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
      console.log(data)
    }
  })
};
console.log('Imprimimos la personas 3');
per3(personas);
console.log("");
/*
console.log(personas);*/

console.log('Un array con todos los datos (solo el detalle, no el id):');
// const persona=(personas)=>{
//   personas.forEach(data=>{
//     Object.values(data).forEach(datos=>{
//       console.log(datos);
//     })
//     //console.log(data.datos);
//   })
// };
const persona=(personas)=>{
  return personas.map(data=>{
    const {datos: {nombre,edad,empleado,hobbies =[]}}=data;
    return `Nombre: ${nombre}, Edad: ${edad}, Empleado: ${empleado}, Hobbies: ${hobbies.join(', ')}`;
  });
};

//Llamar a la funcion y almacenar el resultado
const p1=persona(personas);

//Imprimir
p1.forEach(data=>console.log(data));


