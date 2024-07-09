// console.log("Activo");

function obtenerDatos(){
  let url="https://rickandmortyapi.com/api/character";
  // console.log("Dentro de la funcion");
  //Con fetch API
  fetch(url)
    .then(response=>{
      if(!response.ok){
        throw new Error('Error al obtener los datos');
      }
      return response.json();
    })
    .then(data=>{
      console.log(data);
      manejarDatos(data); //Llamamos a la funcion
    })
    .catch(error=>{
      console.error('Error', error);
    });
    
 }

//Funcion manejar datos
function manejarDatos(data){
  const contenido= document.getElementById('divCards');
  data.results.forEach(elemento=>{
    const card= document.createElement('div');
    card.classList.add('card');
    
    const img= document.createElement('img');
    const name= document.createElement('h5');
    const status= document.createElement('h5');
    const species= document.createElement('p');

    img.src=elemento.image;
    img.alt=elemento.name;
    name.innerHTML=`Nombre: ${elemento.name}`;
    status.innerHTML=`Estado: ${elemento.status}`;
    species.innerHTML=`Especie: ${elemento.species}`;    
    
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(status);
    card.appendChild(species);
    
    contenido.appendChild(card);
  });  
}

//Llamar a la funcion
// obtenerDatos();
