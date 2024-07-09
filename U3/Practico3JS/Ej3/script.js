// console.log("Activo");

function obtenerDatos(){
  let api="https://hp-api.onrender.com/api/characters";
  // console.log("Dentro de la func");
  fetch(api)
    .then(response=>{
      if(!response.ok){
        throw new Error(`Error al obtener los datos de ${api}`);
      }
      return response.json();
    })
    .then(data=>{
      console.log(data);
      manejarDatos(data);  //Llamar a la funcion
    })
    .catch(error=>{
      console.log('Error: ',error);
    });
  
}

//Funcion para manejar datos
function manejarDatos(data){
  let i=0;
  const divCards=document.getElementById('divCards');
  data.forEach(elemento=>{
    const cards=document.createElement('div');
    cards.classList.add('cards'); //Añadimos a clase cards
    
    i++;
  
    if(i>32){
      return; //Cortamos al forEach devolviendo nada
    }

    if(!elemento.alive){
      cards.classList.add('muerto');
    }
    
    const img=document.createElement('img');
    const name=document.createElement('h5');
    const estado=document.createElement('h5');
    const species=document.createElement('p');
    const casa=document.createElement('p');

       
    img.src=elemento.image || '../src/HarryPotter.jfif';
    img.alt=elemento.name;
    name.innerHTML=`Nombre: ${elemento.name}`;
    estado.innerHTML=`Estado: ${elemento.alive ? 'Vive':'Muerto'}`;
    species.innerHTML=`Especie: ${elemento.species}`;  
    casa.innerHTML=`Casa: ${elemento.house}`;  
    
    cards.appendChild(img);
    cards.appendChild(name);
    cards.appendChild(estado);
    cards.appendChild(species);
    cards.appendChild(casa);
    
    divCards.appendChild(cards);  
     
    // console.log(i);       
  });
  
}
